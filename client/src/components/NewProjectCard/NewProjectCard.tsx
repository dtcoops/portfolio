import style from './NewProjectCard.module.css';

interface NewProjectCardProps {
  onClick: () => void;
}

function NewProjectCard({ onClick }: NewProjectCardProps) {
  return (
    <article className={style.col} onClick={onClick}>
      <div className={style.card}>
        <span className={style.plus}>+</span>
        <span className={style.label}>New Project</span>
      </div>
    </article>
  );
}

export { NewProjectCard };