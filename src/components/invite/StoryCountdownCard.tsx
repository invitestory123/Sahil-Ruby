import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

interface StoryCountdownProps {
  countdownTarget: string;
  dateLabel: string;
}

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function StoryCountdownCard({ countdownTarget, dateLabel }: StoryCountdownProps) {
  const ts = new Date(countdownTarget).getTime();
  const [time, setTime] = useState(() => diff(ts));
  const [showCardModal, setShowCardModal] = useState(false);

  useEffect(() => {
    const tick = () => setTime(diff(ts));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [ts]);

  const units = [
    [time.days, "days"],
    [time.hours, "hours"],
    [time.minutes, "minutes"],
    [time.seconds, "seconds"],
  ] as const;

  return (
    <section className="story-editorial" aria-labelledby="story-and-countdown-title">
      <div className="story-editorial__copy">
        {/* Sacred Invocation */}
        <Reveal>
          <div className="text-center mb-8">
            <span className="font-serif text-sm tracking-[0.25em] text-hall-glow block mb-2">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <p className="font-body text-[0.62rem] uppercase tracking-[0.38em] text-hall-light/75">
              With the blessings of the Almighty and our elders
            </p>
          </div>
        </Reveal>

        {/* Both Families & Couple Details */}
        <Reveal delay={100}>
          <div className="my-8 rounded-2xl border border-hall-glow/25 bg-hall-deep/40 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="border-b md:border-b-0 md:border-r border-hall-glow/20 pb-5 md:pb-0 md:pr-6">
                <span className="text-[0.62rem] uppercase tracking-[0.3em] text-hall-glow block mb-1">
                  Groom&apos;s Family
                </span>
                <h4 className="font-display text-xl font-light text-ivory">
                  {wedding.parents.groom}
                </h4>
                <p className="text-[0.78rem] text-ivory/60 mt-1">
                  R/o {wedding.parents.groomResidence}
                </p>
                <p className="mt-3 text-xs italic text-hall-light/80">
                  cordially invite you to the wedding celebrations of their beloved son{" "}
                  <strong className="text-hall-glow font-medium">Sahil</strong>
                </p>
              </div>

              <div className="pt-2 md:pt-0 md:pl-2">
                <span className="text-[0.62rem] uppercase tracking-[0.3em] text-hall-glow block mb-1">
                  Bride&apos;s Family
                </span>
                <h4 className="font-display text-xl font-light text-ivory">
                  {wedding.parents.bride}
                </h4>
                <p className="text-[0.78rem] text-ivory/60 mt-1">
                  R/o {wedding.parents.brideResidence}
                </p>
                <p className="mt-3 text-xs italic text-hall-light/80">
                  proud parents of their beloved daughter{" "}
                  <strong className="text-hall-glow font-medium">Ruby</strong>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={150}>
          <p className="section-kicker">A Sacred Union</p>
          <h2 id="story-and-countdown-title">
            Two souls, seven sacred vows, and a journey into forever.
          </h2>
        </Reveal>

        {/* Saptapadi Artwork & Prose */}
        <Reveal delay={200}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="story-editorial__prose !mt-0 !grid-cols-1">
              <p>{wedding.story[0]}</p>
              <p>{wedding.story[1]}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowCardModal(true)}
                  className="press inline-flex items-center gap-2 rounded-full border border-hall-glow/70 bg-hall-glow/10 px-5 py-2.5 text-[0.66rem] uppercase tracking-[0.24em] text-hall-light hover:bg-hall-glow/20 transition-all cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>View Traditional Patrika</span>
                </button>
              </div>
            </div>

            <div className="relative mx-auto max-w-[260px] md:max-w-[280px] overflow-hidden rounded-xl border border-hall-glow/40 shadow-[0_12px_36px_rgba(0,0,0,0.6)] group">
              <img
                src={wedding.saptapadiImg}
                alt="Sacred steps of Vivah - Saptapadi"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-3 inset-x-3 text-center font-display text-xs italic text-hall-light/90">
                Saptapadi · Sacred Steps Together
              </p>
            </div>
          </div>
        </Reveal>

        {/* Live Countdown */}
        <Reveal delay={250}>
          <p className="countdown-label">Countdown to Baraat & Vivah</p>
          <div className="editorial-countdown" aria-label="Countdown to the wedding">
            {units.map(([value, label]) => (
              <div key={label}>
                <span>{String(value).padStart(2, "0")}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <p className="story-date">{dateLabel} · 8:00 PM · Shaurya Resorts, R.S. Pura</p>
        </Reveal>
      </div>

      {/* Traditional Invitation Modal */}
      {showCardModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setShowCardModal(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-lg overflow-y-auto rounded-2xl border border-hall-glow/50 bg-[#160f06] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-hall-glow/20 mb-3">
              <h3 className="font-title text-sm tracking-[0.2em] text-hall-light">
                Traditional Wedding Patrika
              </h3>
              <button
                type="button"
                onClick={() => setShowCardModal(false)}
                className="h-8 w-8 rounded-full border border-hall-glow/40 flex items-center justify-center text-hall-light hover:bg-hall-glow/20 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <img
              src={wedding.invitationCardImg}
              alt="Official Wedding Invitation Card of Sahil and Ruby"
              className="w-full h-auto rounded-lg shadow-inner"
            />
            <div className="mt-4 flex justify-center">
              <a
                href={wedding.invitationCardImg}
                download="Sahil-Ruby-Wedding-Card.png"
                className="press inline-flex items-center gap-2 rounded-full border border-hall-glow/70 bg-hall-glow px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-black font-semibold hover:bg-hall-light"
              >
                Download Invitation Card
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
