import { summary } from '../../data/content.js';
import CardStack from '../home/CardStack.jsx';

export default function SummaryContent() {
  return (
    <>
      <div className="section-label" style={{ marginTop: 6 }}>{summary.aboutLabel}</div>
      <CardStack cards={summary.stack} mode="peek" compact />
      {summary.info.map((row) => (
        <div className="info-row" key={row.label}>
          <div className="i-label">{row.label}</div>
          <div className="i-value">{row.value}</div>
        </div>
      ))}
    </>
  );
}
