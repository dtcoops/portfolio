import type { Topic } from '../../types';

import style from './Header.module.css';

interface HeaderProps {
    activeTopic: Topic
    onTopicChange: (topic: Topic) => void
    showFilters?: boolean
    onBack: () => void
}

const topics: { label: string; value: Topic }[] = [
  { label: 'All', value: 'all' },
  { label: 'Personal', value: 'personal' },
  { label: 'School', value: 'school' },
]

function Header({ activeTopic, onTopicChange, showFilters = true, onBack }: HeaderProps) {
  return (
    <header className={style.topbar}>
        <div className={`${style.container} ${style.topbarInner}`}>
            <span className={style.brand}>Daniel Cooper</span>
            {!showFilters && (<button className={style.backButton} onClick={onBack}>
            Back
            </button>
            )}
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