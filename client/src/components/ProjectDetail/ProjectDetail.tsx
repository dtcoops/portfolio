import { useState } from 'react';
import type { Project, DetailsSection } from '../../types';

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

       {project.links && project.links.length > 0 && (
          <div className={style.metaItem}>
            <span className={style.metaLabel}>Links</span>
            {project.links.map((link) => (
              <a
                key={link.label}
                className={style.metaLink}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
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
          {project.overview.map((para, i) => (
            <p key={i} className={style.cardDescription}>{para}</p>
          ))}
        </div>

        {project.goals.length > 0 && (
          <>
            <h2 className={style.sectiontitle}>Goals</h2>
            <ul>
              {project.goals.map((goal, i) => (
                <li key={i} className={style.cardGoals}>{goal}</li>
              ))}
            </ul>
          </>
        )}

        <hr className={style.divider} />
        
        {project.details && (
          <h2 className={`${style.sectiontitle} ${style.moreDetail}`}>More Details</h2>
        )}

        {project.details && project.details.map((section: DetailsSection) => (
          <div key={section.heading}>
            <h2 className={style.sectiontitle}>{section.heading}</h2>
            
            {section.points.map((point, i) => (
              <p key={i} className={style.cardDescription}>{point}</p>
            ))}
            <br></br>
          </div>
        ))}
      </section>
    </main>
  )
  
}

export { ProjectDetail }