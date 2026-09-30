const { useState } = React;

const WORDS = [
  "Read", "Gratitude", "Shower", "Brush teeth", "Go outside",
  "Move my body", "Draw", "Journal", "Craft", "Cute outfit",
  "Skincare", "Meds", "2 bottles of water", "Tidy one thing", "Talk to someone",
  "Meditate", "Eat a real meal", "Future you task", "Cook", "Game with Dan",
  "Make bed", "Series or movie", "Paint nails", "Before it gets worse task", "8ish hours of sleep"
];

// Swap this out with any image URL (PNG, SVG, etc.) to change the marker.
const MARK_IMAGE_URL = "img/gold-star.png"

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeGrid() {
  const shuffled = shuffle(WORDS).slice(0, 25);
  shuffled[12] = "FREE";
  return shuffled;
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

function checkBingo(marked) {
  const lines = [];
  for (let r = 0; r < 5; r++) lines.push([0,1,2,3,4].map(c => r * 5 + c));
  for (let c = 0; c < 5; c++) lines.push([0,1,2,3,4].map(r => r * 5 + c));
  lines.push([0,6,12,18,24]);
  lines.push([4,8,12,16,20]);
  return lines.some(line => line.every(i => marked.has(i)));
}

function BingoCard() {
  const [grid, setGrid] = useState(makeGrid);
  const [marked, setMarked] = useState(new Set([12]));
  const [markRotations, setMarkRotations] = useState(new Map([[12, randomAngle()]]));

  const hasBingo = checkBingo(marked);

  function toggle(i) {
    if (i === 12) return;
    setMarked(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    setMarkRotations(prev => {
      const next = new Map(prev);
      if (next.has(i)) next.delete(i);
      else next.set(i, randomAngle());
      return next;
    });
  }

  function reset() {
    setGrid(makeGrid());
    setMarked(new Set([12]));
    setMarkRotations(new Map([[12, randomAngle()]]));
  }

  return (
    <div className="bingo-page">
      <div className="bingo-wrapper">
        <div className="bingo-header">
          <h1 className={`bingo-title${hasBingo ? " is-bingo" : ""}`}>Bingo</h1>
        </div>

        <div className="bingo-grid">
          {"BINGO".split("").map((letter) => (
            <div
              key={letter}
              className="bingo-letter"
            >
              {letter}
            </div>
          ))}

          {grid.map((word, i) => {
            const isMarked = marked.has(i);
            const isFree = i === 12;
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`bingo-cell${isFree ? " is-free" : ""}`}
              >
                <span>{word}</span>
                {isMarked && (
                  <img
                    src={MARK_IMAGE_URL}
                    alt="marked"
                    className="bingo-cell-mark"
                    style={{ transform: `rotate(${markRotations.get(i) ?? 0}deg)` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="bingo-reset-row">
          {/*<label>
            <span className="visually-hidden">Choose theme</span>
            <select
              className="bingo-theme-select"
              value={theme}
              onChange={event => setTheme(event.target.value)}
            >
              <option value="default">Violet Lime</option>
              <option value="ocean">Ocean</option>
              <option value="sunset">Sunset</option>
              <option value="medieval">Medieval</option>
            </select>
          </label>*/}
          <button
            onClick={reset}
            className="bingo-reset-btn"
          >
            New Card
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BingoCard />);
