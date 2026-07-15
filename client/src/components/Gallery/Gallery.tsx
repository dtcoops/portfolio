import type { Project, Topic } from '../../types';

import style from './Gallery.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { NewProjectCard } from '../NewProjectCard/NewProjectCard';

interface GalleryProps {
  projects: Project[];
  activeTopic: Topic;
  onSelectProject: (project: Project) => void;
  isAdmin?: boolean;
  onDeleteProject?: (id: string) => void;
  onCreateNew?: () => void;
}

function Gallery({ 
  projects, 
  activeTopic, 
  onSelectProject, 
  isAdmin = false, 
  onDeleteProject, 
  onCreateNew 
}: GalleryProps) {
  const filtered = (activeTopic === 'all') ? projects : projects.filter((project) => project.topic === activeTopic);

  return (
    <main className={`${style.section} ${style.container}`}>
      <div className={style.gallery}>
        {isAdmin && onCreateNew && (
           <NewProjectCard onClick={onCreateNew} />
        )}
        
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
            isAdmin={isAdmin}
            onDelete={onDeleteProject}
          />
        ))}
      </div>
    </main>
  )
}

export { Gallery }
