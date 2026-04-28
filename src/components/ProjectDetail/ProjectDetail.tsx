import { useState } from 'react';
import type { Project } from '../../types';

import style from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: Project
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <main className={`${style.section} ${style.container} ${style.projectLayout}`}>
      <aside className={style.projectMeta}>

        {project.meta.map((item) => (
          <div key={item.label} className={style.metaItem}>
            <span className={style.metaLabel}>{item.label}</span>
            <span className={style.metaValue}>{item.value}</span>
          </div>
        ))}

        <div className={style.metaItem}>
          <span className={style.metaLabel}>Tags</span>
          <div className="tags" style={{ marginTop: '4px' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {project.liveUrl && (
          <div className={style.metaItem}>
            <span className={style.metaLabel}>Links</span>
            <a
              className={style.metaLink}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        )}
      </aside>

      <section className={style.projectContent}>
        <h1 className={style.cardTitle}>{project.title}</h1>

        {project.images.length > 0 && (
          <figure className={style.figure}>
            <div className={style.figureStage} onClick={() => setLightboxOpen(true)}>
              <img
                src={project.images[activeImg].src}
                alt={project.images[activeImg].caption}
                style={{ cursor: 'zoom-in' }
                }
              />
            </div>
            <figcaption>
              <div className={style.captionText}>{project.images[activeImg].caption}</div>
              {project.images.length > 1 && (
                <div className={style.thumbs}>
                  {project.images.map((img, i) => (
                    <button
                      key={img.src}
                      className={`${style.thumb} ${i === activeImg ? style.active : ''}`}
                      onClick={() => setActiveImg(i)}
                    >
                      <img src={img.src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </figcaption>
          </figure>
          
        )}
        {lightboxOpen && (
          <div className={style.lightbox} onClick={() => setLightboxOpen(false)}>
            <img src={project.images[activeImg].src} alt={project.images[activeImg].caption} />
          </div>
        )}

        <div style={{ marginTop: '18px' }}>
          <h2 className={style.sectiontitle}>Overview</h2>
          <p className={style.cardDescription}>{project.overview}</p>
        </div>

        {project.goals.length > 0 && (
          <>
            <h2 className={style.sectiontitle}>Goals</h2>
            <ul>
              {project.goals.map((goal, i) => (
                <li key={i} className={style.cardDescription}>{goal}</li>
              ))}
            </ul>
          </>
        )}

        <hr className={style.divider} />
      </section>
    </main>
  )
  
}

export { ProjectDetail }