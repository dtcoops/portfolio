import type { Topic } from '../../types';

import style from './Header.module.css';

interface HeaderProps {
    activeTopic: Topic
    onTopicChange: (topic: Topic) => void
    showFilters?: boolean
}

const topics: { label: string; value: Topic }[] = [
  { label: 'All', value: 'all' },
  { label: 'Personal', value: 'personal' },
  { label: 'School', value: 'school' },
]

function Header({ activeTopic, onTopicChange, showFilters = true }: HeaderProps) {
  return (
    <header className={style.topbar}>
        <div className={`${style.container} ${style.topbarInner}`}>
            <span className={style.brand}>Daniel Cooper</span>
            {showFilters && (
                <nav className={style.tabs}>
                {topics.map((t) => (
                    <button
                    key={t.value}
                    className="tab"
                    aria-selected={activeTopic === t.value}
                    onClick={() => onTopicChange(t.value)}
                    >
                    {t.label}
                    </button>
                ))}
            </nav>
            )}
        </div>
    </header>
  );
}

export { Header }