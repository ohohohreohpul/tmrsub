'use client';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = '' }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-4 text-sm font-medium uppercase tracking-widest opacity-70"
          >
            {item}
            <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
