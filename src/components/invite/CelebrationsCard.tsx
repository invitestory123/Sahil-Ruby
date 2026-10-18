import { useState } from "react";
import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function CelebrationsCard() {
  const [active, setActive] = useState(0);
  const event = wedding.events[active];
  return (
    <section className="celebrations-editorial" aria-labelledby="celebrations-title">
      <Reveal className="celebrations-editorial__heading">
        <p className="section-kicker">Eight sacred ceremonies · one grand celebration</p>
        <h2 id="celebrations-title">Wedding Celebrations</h2>
        <p>Follow our auspicious wedding journey from divine Satsang to the grand Reception.</p>
      </Reveal>
      <div className="celebration-stage">
        <div className="celebration-stage__wash" aria-hidden />
        <div className="celebration-stage__content" key={event.name}>
          <span className="event-number">{String(active + 1).padStart(2, "0")}</span>
          <p>
            {event.date} · {event.time}
          </p>
          <h3>{event.name}</h3>
          <p className="event-note">{event.note}</p>
          <p className="event-venue">{event.venue}</p>
        </div>
      </div>
      <div className="celebration-selector" role="tablist" aria-label="Wedding celebrations">
        {wedding.events.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
