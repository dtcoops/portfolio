import { useState } from 'react';
import type { Project, DetailsSection } from '../../types';
import style from './ProjectForm.module.css';

interface ProjectFormProps {
  project: Project | null;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

// --- parsing helpers ---

function parseLines(text: string): string[] {
  return text.split('\n').map((l) => l.trim()).filter(Boolean);
}

function parseMeta(text: string) {
  return parseLines(text).map((line) => {
    const [label, ...rest] = line.split(':');
    return { label: label.trim(), value: rest.join(':').trim() };
  });
}

function parseImages(text: string) {
  return parseLines(text).map((line) => {
    const [src, caption] = line.split('|');
    return { src: src.trim(), caption: (caption ?? '').trim() };
  });
}

function parseLinks(text: string) {
  return parseLines(text).map((line) => {
    const [label, url] = line.split('|');
    return { label: label.trim(), url: (url ?? '').trim() };
  });
}

function parseDetails(text: string): DetailsSection[] {
  const blocks = text.split(/^##\s*/m).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block) => {
    const [heading, ...rest] = block.split('\n');
    return {
      heading: heading.trim(),
      points: rest.map((l) => l.trim()).filter(Boolean),
    };
  });
}

// --- serializing helpers (populate textareas when editing) ---

function metaToText(meta: Project['meta']) {
  return meta.map((m) => `${m.label}: ${m.value}`).join('\n');
}

function imagesToText(images: Project['images']) {
  return images.map((i) => `${i.src} | ${i.caption}`).join('\n');
}

function linksToText(links: Project['links']) {
  return (links ?? []).map((l) => `${l.label} | ${l.url}`).join('\n');
}

function detailsToText(details: Project['details']) {
  return (details ?? [])
    .map((d) => `## ${d.heading}\n${d.points.join('\n')}`)
    .join('\n\n');
}

function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [id, setId] = useState(project?.id ?? '');
  const [title, setTitle] = useState(project?.title ?? '');
  const [topic, setTopic] = useState<'personal' | 'school'>(project?.topic ?? 'personal');
  const [desc, setDesc] = useState(project?.desc ?? '');
  const [thumb, setThumb] = useState(project?.thumb ?? '');
  const [tagsText, setTagsText] = useState(project?.tags.join(', ') ?? '');

  const [overviewText, setOverviewText] = useState(project?.overview.join('\n') ?? '');
  const [goalsText, setGoalsText] = useState(project?.goals.join('\n') ?? '');
  const [metaText, setMetaText] = useState(metaToText(project?.meta ?? []));
  const [imagesText, setImagesText] = useState(imagesToText(project?.images ?? []));
  const [linksText, setLinksText] = useState(linksToText(project?.links));
  const [detailsText, setDetailsText] = useState(detailsToText(project?.details));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProject: Project = {
      id,
      title,
      topic,
      desc,
      thumb,
      tags: tagsText.split(',').map((t) => t.trim()).filter(Boolean),
      overview: parseLines(overviewText),
      goals: parseLines(goalsText),
      meta: parseMeta(metaText),
      images: parseImages(imagesText),
      links: parseLinks(linksText),
      details: parseDetails(detailsText),
    };

    onSave(updatedProject);
  };

  return (
    <main className={`${style.section} ${style.container}`}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.formTitle}>{project ? 'Edit Project' : 'New Project'}</h1>

        <label className={style.field}>
          <span className={style.label}>ID (unique, no spaces)</span>
          <input className={style.input} value={id} onChange={(e) => setId(e.target.value)} required disabled={!!project} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Title</span>
          <input className={style.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label className={style.field}>
          <span className={style.label}>Topic</span>
          <select className={style.input} value={topic} onChange={(e) => setTopic(e.target.value as 'personal' | 'school')}>
            <option value="personal">Personal</option>
            <option value="school">School</option>
          </select>
        </label>

        <label className={style.field}>
          <span className={style.label}>Description</span>
          <textarea className={style.textarea} value={desc} onChange={(e) => setDesc(e.target.value)} required />
        </label>

        <label className={style.field}>
          <span className={style.label}>Thumbnail URL</span>
          <input className={style.input} value={thumb} onChange={(e) => setThumb(e.target.value)} required />
        </label>

        <label className={style.field}>
          <span className={style.label}>Tags (comma-separated)</span>
          <input className={style.input} value={tagsText} onChange={(e) => setTagsText(e.target.value)} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Overview (one paragraph per line)</span>
          <textarea className={style.textarea} value={overviewText} onChange={(e) => setOverviewText(e.target.value)} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Goals (one per line)</span>
          <textarea className={style.textarea} value={goalsText} onChange={(e) => setGoalsText(e.target.value)} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Meta (one per line: Label: Value)</span>
          <textarea className={style.textarea} value={metaText} onChange={(e) => setMetaText(e.target.value)} placeholder={'Platform: Android\nLanguage: Kotlin'} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Images (one per line: url | caption)</span>
          <textarea className={style.textarea} value={imagesText} onChange={(e) => setImagesText(e.target.value)} placeholder={'https://... | My caption'} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Links (one per line: label | url) — optional</span>
          <textarea className={style.textarea} value={linksText} onChange={(e) => setLinksText(e.target.value)} placeholder={'GitHub | https://github.com/...'} />
        </label>

        <label className={style.field}>
          <span className={style.label}>Details (## Heading, then points on following lines) — optional</span>
          <textarea
            className={style.textareaLarge}
            value={detailsText}
            onChange={(e) => setDetailsText(e.target.value)}
            placeholder={'## The Design\nFirst point.\nSecond point.\n\n## The Build\nAnother point.'}
          />
        </label>

        <div className={style.actions}>
          <button type="submit" className={style.saveButton}>Save</button>
          <button type="button" className={style.cancelButton} onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </main>
  );
}

export { ProjectForm };