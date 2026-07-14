import style from './LoadingScreen.module.css';

function LoadingScreen() {
  const placeholderCount = 12;

  return (
    <main className={style.container}>
      <p className={style.message}>Waking up the server — this can take up to 30 seconds on first load.</p>   
      <div className={style.gallery}>
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div key={i} className={style.col}>
            <div className={style.card}>
              <div className={`${style.shimmer} ${style.thumb}`} />
              <div className={style.cardBody}>
                <div className={`${style.shimmer} ${style.titleLine}`} />
                <div className={`${style.shimmer} ${style.textLine}`} />
                <div className={`${style.shimmer} ${style.textLineShort}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export { LoadingScreen };