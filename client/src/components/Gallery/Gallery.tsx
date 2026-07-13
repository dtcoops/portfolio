import type { Project, Topic } from '../../types';

import style from './Gallery.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';

interface GalleryProps {
  projects: Project[];
  activeTopic: Topic;
  onSelectProject: (project: Project) => void;
}

function Gallery({ projects, activeTopic, onSelectProject }: GalleryProps) {
  const filtered = (activeTopic === 'all') ? projects : projects.filter((project) => project.topic === activeTopic);

  return (
    <main className={`${style.section} ${style.container}`}>
      <div className={style.gallery}>
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </main>
  )
}

export { Gallery }
