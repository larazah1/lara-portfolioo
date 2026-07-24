import { useState } from 'react';
import { quizQuestions } from '../../data/content.js';

export default function GameContent() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const item = quizQuestions[current];

  function selectAnswer(i) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === item.correct;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (current < quizQuestions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 700);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <div className="game-shell">
      <div className="game-progress">
        {quizQuestions.map((_, i) => (
          <span key={i} className={`dot${i <= current ? ' active' : ''}`} />
        ))}
      </div>
      <div className="game-card">
        {finished ? (
          <>
            <div className="game-eyebrow">RESULT</div>
            <h1>{score} / {quizQuestions.length} — {score >= 4 ? "You know Alex's work well!" : 'Nice try — explore the apps to learn more!'}</h1>
            <div className="game-cta" onClick={restart}>Play again</div>
          </>
        ) : (
          <>
            <div className="game-eyebrow">QUESTION {current + 1} / {quizQuestions.length}</div>
            <h1>{item.q}</h1>
            <div className="game-options">
              {item.options.map((opt, i) => {
                let cls = 'game-option';
                if (selected !== null) {
                  if (i === item.correct) cls += ' correct';
                  else if (i === selected) cls += ' incorrect';
                }
                return (
                  <button className={cls} key={opt} onClick={() => selectAnswer(i)}>{opt}</button>
                );
              })}
            </div>
          </>
        )}
      </div>
      {!finished && <div className="game-score">Score: <span>{score}</span> / {quizQuestions.length}</div>}
    </div>
  );
}
