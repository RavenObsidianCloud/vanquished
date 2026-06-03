const vqCSS = `
:root {
  --bg: #0d0d0d; --bg2: #141414; --bg3: #1a1a1a;
  --text: #e8e4dc; --muted: #7a7670; --dim: #6a6865;
  --accent: #c9a96e; --accent-dim: rgba(201,169,110,0.15);
  --wine: #993556;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg); color: var(--text);
  font-family: 'Outfit', sans-serif; font-weight: 300;
  line-height: 1.6; -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
body.vq-lock { overflow: hidden; }

.vq-noise {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.vq-toprule {
  position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 50;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
.vq-wrap { position: relative; z-index: 1; max-width: 880px; margin: 0 auto; padding: 0 24px; }

.vq-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent);
}

/* hero */
.vq-hero { padding: 120px 0 64px; text-align: center; }
.vq-hero h1 {
  font-family: 'Cormorant Garamond', serif; font-weight: 500;
  font-size: clamp(48px, 9vw, 92px); line-height: 1; margin: 22px 0 18px;
  letter-spacing: 0.01em;
}
.vq-hero .vq-sub {
  font-family: 'Cormorant Garamond', serif; font-style: italic;
  font-size: clamp(18px, 3vw, 24px); color: var(--muted); max-width: 540px; margin: 0 auto;
}

/* stat row */
.vq-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--bg3); border-radius: 4px; overflow: hidden;
  margin: 8px 0 64px; background: var(--bg2);
}
.vq-stat { padding: 28px 16px; text-align: center; border-right: 1px solid var(--bg3); }
.vq-stat:last-child { border-right: none; }
.vq-stat .vq-num {
  font-family: 'Cormorant Garamond', serif; font-size: 44px; line-height: 1; color: var(--accent);
}
.vq-stat .vq-lbl {
  font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase;
  letter-spacing: 0.18em; color: var(--muted); margin-top: 10px;
}

/* section header */
.vq-sechead { display: flex; align-items: baseline; gap: 16px; padding-bottom: 14px;
  border-bottom: 1px solid var(--bg3); margin-bottom: 36px; }
.vq-sechead .vq-secnum { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--accent); }
.vq-sechead .vq-sectitle { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 500; }

/* cards */
.vq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding-bottom: 96px; }
.vq-card {
  position: relative; background: var(--bg2); border: 1px solid var(--bg3);
  border-radius: 4px; padding: 26px 26px 26px 30px; cursor: pointer; overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.vq-card::before {
  content: ''; position: absolute; left: 0; top: 0; width: 3px; height: 0;
  background: var(--accent); transition: height 0.35s ease;
}
.vq-card.vq-abandoned::before { background: var(--wine); }
.vq-card:hover { border-color: var(--accent-dim); transform: translateY(-2px); }
.vq-card.vq-abandoned:hover { border-color: rgba(153,53,86,0.3); }
.vq-card:hover::before { height: 100%; }
.vq-card h3 {
  font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 26px; line-height: 1.15;
}
.vq-card.vq-abandoned h3 { text-decoration: line-through; color: var(--muted); text-decoration-color: var(--wine); }
.vq-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.12em; color: var(--dim); margin: 8px 0 14px; }
.vq-stars { font-size: 16px; letter-spacing: 3px; margin-bottom: 14px; }
.vq-star-on { color: var(--accent); }
.vq-star-off { color: var(--dim); }
.vq-verdict { color: var(--muted); font-size: 15px; }

/* drawer */
.vq-scrim {
  position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.7);
  opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
}
.vq-scrim.vq-open { opacity: 1; pointer-events: auto; }
.vq-drawer {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: 101; width: min(480px, 90vw);
  background: var(--bg2); border-left: 1px solid var(--bg3);
  transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  overflow-y: auto; padding: 80px 40px 48px;
}
.vq-drawer.vq-open { transform: translateX(0); }
.vq-drawer .vq-dclose {
  position: absolute; top: 28px; right: 32px; background: none; border: none; cursor: pointer;
  font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--muted);
}
.vq-drawer .vq-dclose:hover { color: var(--accent); }
.vq-drawer h2 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 40px; line-height: 1.1; }
.vq-drawer.vq-abandoned h2 { text-decoration: line-through; color: var(--muted); text-decoration-color: var(--wine); }
.vq-drawer .vq-dmeta { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.14em; color: var(--dim); margin: 14px 0; }
.vq-drawer .vq-dstars { font-size: 20px; letter-spacing: 4px; margin-bottom: 28px; }
.vq-drawer .vq-dreview p { margin-bottom: 16px; color: var(--text); font-size: 16px; }
.vq-drawer .vq-dreview p:first-child {
  font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px;
  line-height: 1.4; color: var(--muted);
}

/* footer */
.vq-foot { text-align: center; padding: 48px 0 64px; border-top: 1px solid var(--bg3); }
.vq-foot a { color: var(--muted); text-decoration: none; font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; }
.vq-foot a:hover { color: var(--accent); }
.vq-loading, .vq-error { text-align: center; padding: 160px 24px; color: var(--muted);
  font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px; }

@media (max-width: 640px) {
  .vq-grid { grid-template-columns: 1fr; }
  .vq-hero { padding: 96px 0 48px; }
}
`;

function Stars({ rating, big }) {
  const r = Math.round(rating);
  return (
    <div className={big ? 'vq-dstars' : 'vq-stars'}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= r ? 'vq-star-on' : 'vq-star-off'}>
          {n <= r ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

function metaLine(e) {
  return [e.platform, e.date].filter(Boolean).join('  ·  ');
}

function Vanquished() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [active, setActive] = React.useState(null);

  React.useEffect(() => {
    fetch('vanquished.json')
      .then((r) => { if (!r.ok) throw new Error('fetch'); return r.json(); })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('vq-lock', active != null);
  }, [active]);

  const conquered = data ? data.filter((e) => e.status === 'conquered').length : 0;
  const abandoned = data ? data.filter((e) => e.status === 'abandoned').length : 0;
  const rated = data ? data.filter((e) => typeof e.rating === 'number') : [];
  const avg = rated.length
    ? (rated.reduce((s, e) => s + e.rating, 0) / rated.length).toFixed(1)
    : '0.0';

  return (
    <React.Fragment>
      <style>{vqCSS}</style>
      <div className="vq-toprule" />
      <div className="vq-noise" />

      <div className="vq-wrap">
        <header className="vq-hero">
          <div className="vq-eyebrow">GUCKIE · GUARDIAN OF THE CROSSROADS</div>
          <h1>The Vanquished</h1>
          <p className="vq-sub">Games met at the crossroads. Some conquered. Some left to the dark.</p>
        </header>

        {error && <div className="vq-error">The torches have gone dark. The ledger could not be read.</div>}
        {!data && !error && <div className="vq-loading">Tending the torches…</div>}

        {data && (
          <React.Fragment>
            <div className="vq-stats">
              <div className="vq-stat"><div className="vq-num">{conquered}</div><div className="vq-lbl">Conquered</div></div>
              <div className="vq-stat"><div className="vq-num">{abandoned}</div><div className="vq-lbl">Abandoned</div></div>
              <div className="vq-stat"><div className="vq-num">{avg}</div><div className="vq-lbl">Avg Rating</div></div>
            </div>

            <div className="vq-sechead">
              <span className="vq-secnum">01</span>
              <span className="vq-sectitle">The Ledger</span>
            </div>

            <div className="vq-grid">
              {data.map((e, i) => {
                const ab = e.status === 'abandoned';
                return (
                  <article
                    key={i}
                    className={'vq-card' + (ab ? ' vq-abandoned' : '')}
                    onClick={() => setActive(e)}
                  >
                    <h3>{e.title}</h3>
                    {metaLine(e) && <div className="vq-meta">{metaLine(e)}</div>}
                    <Stars rating={e.rating || 0} />
                    {e.verdict && <p className="vq-verdict">{e.verdict}</p>}
                  </article>
                );
              })}
            </div>
          </React.Fragment>
        )}

      </div>

      <div className={'vq-scrim' + (active ? ' vq-open' : '')} onClick={() => setActive(null)} />
      <aside className={'vq-drawer' + (active ? ' vq-open' : '') + (active && active.status === 'abandoned' ? ' vq-abandoned' : '')}>
        <button className="vq-dclose" onClick={() => setActive(null)}>Close ✕</button>
        {active && (
          <React.Fragment>
            <h2>{active.title}</h2>
            <Stars rating={active.rating || 0} big />
            {metaLine(active) && <div className="vq-dmeta">{metaLine(active)} · {active.status}</div>}
            <div className="vq-dreview">
              {(active.review || active.verdict || '')
                .split('\n')
                .filter((p) => p.trim())
                .map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </React.Fragment>
        )}
      </aside>
    </React.Fragment>
  );
}

window.Vanquished = Vanquished;
