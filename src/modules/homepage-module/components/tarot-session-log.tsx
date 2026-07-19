const sessionLines = [
  "shuffling deck ................. done",
  "card: THE FOOL · arcana 0",
  "loading ~/portfolio ............. ok",
  "type `help` for a list of spells",
];

export function TarotSessionLog() {
  return (
    <div className="tarot-session-log" aria-label="Tarot session log">
      <p className="tarot-session-label">{"//session.log"}</p>
      <p className="tarot-session-command"><span aria-hidden="true">$</span> tarot --draw 0</p>
      <div className="tarot-session-output">
        {sessionLines.map((line) => <p key={line}><span aria-hidden="true">&gt;</span> {line}</p>)}
      </div>
      <p className="tarot-session-prompt"><span aria-hidden="true">$</span> _</p>
    </div>
  );
}
