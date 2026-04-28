import type { Project } from '../../types'

import style from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
    return (
        <article className={style.col} onClick={() => onSelect(project)}>
            <div className={style.card} data-topic={project.topic}>
                <div className={style.gthumb}>
                    <img className={style.gthumbImg} src={project.thumb} alt={project.title} />
                </div>
                <div className={style.cardBody}>
                    <header>
                        <h3 className={style.cardTitle}>{project.title}</h3>
                    </header>
                    <section>
                        <p className={style.cardDescription}>{project.desc}</p>
                        <div className={style.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={style.tag}>{tag}</span>
                        ))}
                        </div>
                    </section>
                </div>
            </div>
        </article>
    )
}

export { ProjectCard }