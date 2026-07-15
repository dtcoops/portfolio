import type { Project } from '../../types'

import style from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  isAdmin?: boolean
  onDelete?: (id: string) => void;
}

function ProjectCard({ 
    project, 
    onSelect,
    isAdmin = false,
    onDelete 
}: ProjectCardProps) {
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (window.confirm(`Delete "${project.title}"?`)) {
            onDelete?.(project.id);
        }
    };

    return (
        <article className={style.col} onClick={() => onSelect(project)}>
            <div className={style.card} data-topic={project.topic}>
                {isAdmin && onDelete && (
                    <button className={style.deleteButton} onClick={handleDeleteClick}>
                        ✕
                    </button>
                )}
                <div className={style.gthumb}>
                    <img className={style.gthumbImg} src={project.thumb} alt={project.title} />
                </div>
                <div className={style.cardBody}>
                    <header>
                        <h3 className={style.cardTitle}>{project.title}</h3>
                    </header>
                    <section>
                        <p className={style.cardDescription}>{project.desc}</p>
                        <div className="tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                        </div>
                    </section>
                </div>
            </div>
        </article>
    )
}

export { ProjectCard }