import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import Marquee from '@/components/ui/marquee';
import FadeIn from '@/components/ui/fade-in';

/* ─── Design tokens ───────────────────────────────────────────────────────── */

const COLORS = {
  orange:  { bg: '#fd5200', fg: '#fff' },
  black:   { bg: '#0d0d0d', fg: '#fff' },
  blue:    { bg: '#1A3DE8', fg: '#fff' },
  cream:   { bg: '#F5F0E8', fg: '#0d0d0d' },
} as const;

const marqueeItems = [
  'Claude', 'AI Workflow', 'MCP', 'Automation', 'Scheduled Tasks',
  'Content Factory', 'Affiliate', 'Personal Brand', 'Auto Posting',
  'AI Agent', 'Digital Products', 'Prompt Systems', 'YouTube Shorts Factory',
  'AI Job Hunter', 'Photostock Generation', 'AI Coworker',
];

/* ─── Primitive components ────────────────────────────────────────────────── */

function Label({ n, children }: { n?: string; children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">
      {n ? `${n} — ${children}` : children}
    </p>
  );
}

const Div = () => <hr className="border-t border-current/[0.12]" />;

/** Big ghost decoration — large but very faint, English only */
function Ghost({ text }: { text: string }) {
  return (
    <p
      aria-hidden
      className="text-[clamp(5rem,18vw,16rem)] font-bold leading-none text-current opacity-[0.06] select-none break-all"
    >
      {text}
    </p>
  );
}

/** Thai-optimised heading — max 2.5 rem so glyphs stay readable */
function ThaiH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold leading-[1.3] tracking-tight">
      {children}
    </h2>
  );
}

/** Body prose: comfortable size + Thai-optimised line-height */
function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-2 text-[clamp(0.95rem,1.55vw,1.15rem)] font-light leading-[1.95] ${className}`}>
      {children}
    </div>
  );
}

/** Two-column: ghost decoration left + content right */
function TwoCol({ ghost, children }: { ghost: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-[5vw] sm:items-start">
      <div className="shrink-0 sm:w-[28%]">
        <Ghost text={ghost} />
      </div>
      <div className="flex-1 space-y-5">{children}</div>
    </div>
  );
}

/** Arrow list item with hover slide */
function Arrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex items-start gap-3 border-b border-current/10 py-2.5 transition-colors hover:border-current/30 cursor-default">
      <span className="shrink-0 opacity-30 transition-transform group-hover:translate-x-1 group-hover:opacity-60">→</span>
      <span className="text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-[1.8]">{children}</span>
    </div>
  );
}

/** Bordered quote */
function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-current/20 p-5 transition-colors hover:border-current/50 cursor-default">
      <p className="text-[clamp(0.95rem,1.6vw,1.2rem)] font-light italic leading-[1.9] opacity-90">
        &ldquo;{children}&rdquo;
      </p>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <FlowArt aria-label="Tomorrow's Claude Cowork Camp">

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Hero" style={{ backgroundColor: COLORS.orange.bg, color: COLORS.orange.fg }}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.25em]">Tomorrow School</span>
          <span className="flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
            รับจำกัด 45 คน
          </span>
        </div>
        <Div />
        <FadeIn>
          <h1 className="text-[clamp(3.5rem,12vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Claude
            <br />
            Cowork
            <br />
            Camp.
          </h1>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <p className="max-w-[52ch] text-[clamp(1rem,2vw,1.5rem)] font-light leading-[1.7]">
            4 วัน สร้าง AI Workflows ที่ช่วยให้คุณทำงาน สร้างคอนเทนต์
            และต่อยอดรายได้ออนไลน์ได้จริง
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-3">
            {[
              { v: '4 วัน',     s: 'Live Cowork' },
              { v: '45 คน',     s: 'จำกัด' },
              { v: '1,290 บาท', s: 'ราคา Camp' },
            ].map(({ v, s }) => (
              <div key={v} className="flex-1 min-w-[110px] border border-white/30 p-4 transition-colors hover:border-white/60 cursor-default">
                <p className="text-[clamp(1.2rem,3vw,2rem)] font-bold leading-none">{v}</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-widest opacity-55">{s}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <Div />
        <Marquee items={marqueeItems} />
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          2. AI มาเร็วเกินไป
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="AI มาเร็ว" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label n="01">คุณเคยรู้สึกไหมว่า…</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="01">
            <ThaiH>AI มันมาเร็วเกินไป</ThaiH>
            <Prose>
              <p>เมื่อวานเพิ่งมีคนพูดถึง ChatGPT</p>
              <p>วันนี้มี Claude</p>
              <p>พรุ่งนี้มี AI Agent</p>
              <p>อีกวันมี Automation</p>
            </Prose>
            <Prose>
              <p className="opacity-60">แล้วอยู่ดีๆ ทุกคนก็เริ่มพูดเรื่อง…</p>
            </Prose>
            <div className="flex flex-wrap gap-2">
              {['ChatGPT', 'Claude', 'AI Agent', 'Automation', 'MCP', 'Scheduled Tasks',
                'Content Factory', 'AI Workflow', 'Digital Products', 'Affiliate', 'Personal Brand', 'Auto Posting'].map((w) => (
                <span key={w} className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium cursor-default transition-all hover:border-white/50 hover:bg-white/8">
                  {w}
                </span>
              ))}
            </div>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold leading-tight">
            ทุกอย่างดูน่าตื่นเต้นมาก
            <span className="opacity-50"> แต่ในขณะเดียวกัน มันก็</span>
            <span> โคตร overwhelming</span>
          </p>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          3. วงจรที่คุ้นเคย
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="วงจรที่คุ้นเคย" style={{ backgroundColor: COLORS.blue.bg, color: COLORS.blue.fg }}>
        <Label n="02">วงจรที่คุ้นเคย</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="WHY">
            <ThaiH>หลายคนเริ่มจากความรู้สึกว่า</ThaiH>
            <div className="border border-white/25 p-4">
              <Prose>
                <p className="font-semibold">&ldquo;โอเค เราต้องเรียน AI แล้วแหละ&rdquo;</p>
              </Prose>
            </div>
            <Prose>
              <p className="opacity-60">เลยเริ่มดูคลิป</p>
              <p className="opacity-60">เริ่มเซฟโพสต์</p>
              <p className="opacity-60">เริ่มตามเพจ</p>
              <p className="opacity-60">เริ่มซื้อคอร์ส</p>
              <p className="opacity-60">เริ่มลอง prompt</p>
              <p className="opacity-60">เริ่มสมัคร tool หลายตัว</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>แต่สุดท้ายผ่านไปหลายเดือน สิ่งที่เกิดขึ้นคือ…</p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          4. ยังไม่ได้สร้างระบบ
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="ยังไม่ได้สร้างระบบ" style={{ backgroundColor: COLORS.cream.bg, color: COLORS.cream.fg }}>
        <Label n="03">ผ่านไปหลายเดือน</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="03">
            <ThaiH><strong>ยังไม่ได้สร้างระบบ<br />อะไรของตัวเองจริงๆ</strong></ThaiH>
            <Prose>
              <p>ยังใช้ AI แบบถามตอบอยู่</p>
              <p>ยังให้ AI ช่วยเขียน caption เป็นครั้งๆ</p>
              <p>ยังให้ AI ช่วยสรุปงานบ้าง</p>
              <p>ยังลอง tool ใหม่ไปเรื่อยๆ</p>
            </Prose>
            <Prose>
              <p>แต่ยังไม่รู้ว่าจะเอาทั้งหมดนี้มาทำให้เป็น &ldquo;ระบบ&rdquo; ได้ยังไง</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p className="opacity-60">นี่คือปัญหาจริงของคนส่วนใหญ่ในตอนนี้</p>
            <p>ไม่ใช่ว่าเราไม่รู้จัก AI</p>
            <p className="text-[clamp(1.1rem,2.2vw,1.8rem)] font-bold leading-tight">
              แต่เราไม่รู้ว่า จะเอา AI มาทำงานแทนเราอย่างเป็นระบบได้ยังไง
            </p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          5. AI ควรเป็นเพื่อนร่วมงาน
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="AI เพื่อนร่วมงาน" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label n="04">ทางออก</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="AI">
            <ThaiH>AI ไม่ควรเป็นแค่เครื่องมือที่เราถามเวลาต้องการคำตอบ</ThaiH>
            <Prose>
              <p>แต่ AI ควรกลายเป็น <strong>&ldquo;เพื่อนร่วมงาน&rdquo;</strong></p>
              <p className="opacity-60">ที่ช่วยคิด</p>
              <p className="opacity-60">ช่วยอ่าน</p>
              <p className="opacity-60">ช่วยเขียน</p>
              <p className="opacity-60">ช่วยวางแผน</p>
              <p className="opacity-60">ช่วยสร้างคอนเทนต์</p>
              <p className="opacity-60">ช่วยทำงานซ้ำ</p>
              <p className="opacity-60">ช่วยสร้าง workflow</p>
            </Prose>
            <Prose>
              <p>และช่วยให้เราทำงานได้ <strong>มากขึ้น เร็วขึ้น และมี leverage มากขึ้น</strong></p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p className="opacity-60">นี่คือเหตุผลที่เราเรียกมันว่า —</p>
            <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold">Claude Cowork</p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          6. Claude Cowork คืออะไร
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Claude Cowork" style={{ backgroundColor: COLORS.orange.bg, color: COLORS.orange.fg }}>
        <Label n="05">Claude Cowork</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Claude
            <br />
            Cowork.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 space-y-3">
              <Prose>
                <p>เพราะ camp นี้ไม่ได้เน้นการนั่งฟัง lecture ยาวๆ</p>
                <p>แต่เราจะมา <strong>&ldquo;ทำงานไปด้วยกัน&rdquo;</strong></p>
              </Prose>
            </div>
            <div className="flex-1 space-y-2">
              <Prose>
                <p>เปิดจอ</p>
                <p>เปิด Claude</p>
                <p>เปิด workflow</p>
                <p>แล้วค่อยๆ สร้างระบบที่ใช้ได้จริง</p>
              </Prose>
            </div>
          </div>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          7. ทำไมต้อง Claude
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="ทำไมต้อง Claude" style={{ backgroundColor: COLORS.blue.bg, color: COLORS.blue.fg }}>
        <Label n="06">ทำไมต้อง Claude?</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Not Just
            <br />
            A Chatbot.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 space-y-3">
              <Prose>
                <p>Claude คือ AI ที่เหมาะมากกับการทำงานจริง</p>
                <p className="opacity-60">โดยเฉพาะงานที่ต้องใช้การคิด การอ่าน การจัดระบบ และการเขียน</p>
              </Prose>
            </div>
            <div className="flex-1 space-y-0">
              {['อ่านเอกสารยาวๆ แล้วสรุปให้', 'ช่วยคิด strategy', 'ช่วยเขียน content',
                'ช่วยวิเคราะห์ข้อมูล', 'ช่วยจัด workflow', 'ช่วยทำงานซ้ำ',
                'ช่วยสร้าง prompt ที่ใช้ซ้ำได้', 'ช่วยเป็นผู้ช่วยประจำงานหรือโปรเจกต์'].map((item) => (
                <Arrow key={item}>{item}</Arrow>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>ถ้าใช้แบบถามทีละคำถาม → ช่วยได้แค่ทีละงาน</p>
            <p><strong>ถ้าใช้แบบ workflow → กลายเป็นระบบทำงาน</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          8. เหมาะกับใคร — quotes
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="เหมาะกับใคร" style={{ backgroundColor: COLORS.cream.bg, color: COLORS.cream.fg }}>
        <Label n="07">Camp นี้เหมาะกับใคร?</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            For
            <br />
            You.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="space-y-3">
            <Quote>ฉันรู้ว่า AI สำคัญ แต่ไม่รู้จะเริ่มยังไงให้มันใช้ได้จริง</Quote>
            <Quote>ฉันใช้ AI อยู่แล้ว แต่ยังใช้แบบกระจัดกระจาย ไม่เป็นระบบ</Quote>
            <Quote>ฉันอยากใช้ AI เพื่อช่วยทำงาน สร้างคอนเทนต์ หรือหารายได้เสริม แต่ไม่อยากเรียนแบบทฤษฎีเยอะๆ</Quote>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p className="opacity-60">ถ้าคุณเป็นหนึ่งในกลุ่มนี้ — camp นี้น่าจะเหมาะกับคุณ</p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          9. กลุ่มเป้าหมาย
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="กลุ่มเป้าหมาย" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label n="08">ถ้าคุณเป็นแบบนี้</Label>
        <Div />
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 space-y-0">
              {['คนทำงานประจำที่อยากทำงานเร็วขึ้น',
                'นักศึกษา / คนหางานที่อยากใช้ AI ช่วยสมัครงาน',
                'ฟรีแลนซ์ที่อยากใช้ AI ช่วยส่งงานเร็วขึ้น',
                'Creator ที่อยากสร้าง content อย่างต่อเนื่อง',
                'คนทำเพจ / personal brand'].map((a) => <Arrow key={a}>{a}</Arrow>)}
            </div>
            <div className="flex-1 space-y-0">
              {['คนอยากเริ่ม affiliate content',
                'คนอยากลองทำ digital product',
                'คนอยากสร้าง content ลง YouTube Shorts / TikTok / Reels',
                'คนที่สนใจ automation แต่ยังไม่รู้จะเริ่มจากอะไร',
                'คนที่อยากเข้าใจว่า AI coworker ในชีวิตจริงหน้าตาเป็นยังไง'].map((a) => <Arrow key={a}>{a}</Arrow>)}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p className="opacity-50">ไม่จำเป็นต้องเขียนโค้ดเป็น · ไม่ต้องเป็นสาย tech · ไม่ต้องมีพื้นฐาน automation มาก่อน</p>
            <p>แต่ควรมีสิ่งหนึ่ง — <strong>ความพร้อมที่จะลงมือทำจริง</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          10. สิ่งที่เราจะสร้าง
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="สิ่งที่จะสร้าง" style={{ backgroundColor: COLORS.blue.bg, color: COLORS.blue.fg }}>
        <Label n="09">สิ่งที่เราจะสร้างใน Camp นี้</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            8 Workflows.
            <br />
            4 Days.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 space-y-2">
              {['อยากสร้าง content ทุกวัน แต่คิดไม่ออก',
                'อยากทำ affiliate แต่ไม่มีระบบผลิต content',
                'อยากทำ personal brand แต่ไม่รู้จะโพสต์อะไร',
                'อยากหางาน แต่ resume ยังไม่ดี'].map((item) => (
                <Prose key={item}><p className="opacity-70">· {item}</p></Prose>
              ))}
            </div>
            <div className="flex-1 space-y-2">
              {['อยากทำ YouTube Shorts แต่ไม่มี workflow',
                'อยากสร้างภาพขาย stock แต่ไม่รู้ process',
                'อยากใช้ AI ช่วยทำงานซ้ำๆ',
                'อยากให้ AI ช่วยคิด ช่วยเขียน ช่วยจัดตาราง ช่วยสรุปงาน'].map((item) => (
                <Prose key={item}><p className="opacity-70">· {item}</p></Prose>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>AI ไม่ได้เป็นแค่ของเล่น — <strong>มันสามารถกลายเป็นระบบช่วยทำงานจริงได้</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          11. WF 1 — Affiliate
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 1" style={{ backgroundColor: COLORS.cream.bg, color: COLORS.cream.fg }}>
        <Label>Workflow 01</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="01">
            <ThaiH>Affiliate Content Factory</ThaiH>
            <Prose>
              <p>หลายคนอยากเริ่ม affiliate — Shopee, Lazada, TikTok Shop</p>
              <p className="opacity-60">แต่ปัญหาคือ:</p>
              <p>จะทำ content อะไรทุกวัน? จะเขียน caption ยังไง?</p>
              <p>จะหา angle ยังไง? จะโพสต์ยังไงให้ต่อเนื่อง?</p>
              <p>จะทำยังไงไม่ให้หมดไฟตั้งแต่วันที่สาม?</p>
            </Prose>
            <Prose>
              <p className="opacity-60">เราจะออกแบบ process ตั้งแต่:</p>
              <p>หาไอเดีย content · วิเคราะห์สินค้าว่าขายมุมไหนได้</p>
              <p>สร้าง hook · เขียน caption · แตก content หลาย format</p>
              <p>วาง content calendar · เตรียม workflow โพสต์ซ้ำอย่างต่อเนื่อง</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>ถ้าคุณอยากทำ affiliate จริงๆ คุณไม่ควรเริ่มจากการโพสต์มั่วๆ</p>
            <p><strong>คุณควรมีระบบ — และ AI ช่วยให้ระบบนั้นเกิดขึ้นเร็วขึ้นมาก</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          12. WF 2 — Photostock
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 2" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label>Workflow 02</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="02">
            <ThaiH>Photostock Generation & Upload</ThaiH>
            <Prose>
              <p>ตลาด stock content เข้าใจง่าย: สร้าง asset → ใส่ keyword → อัปโหลด → รอให้คนซื้อ</p>
              <p className="opacity-60">แต่ถ้าทำแบบไม่มีระบบ มันจะเหนื่อยมาก</p>
            </Prose>
            <Prose>
              <p className="opacity-60">เราจะสร้างระบบ AI ที่ช่วย:</p>
              <p>หา niche · generate idea · สร้าง prompt + ภาพ</p>
              <p>title + keyword + description</p>
              <p>ระบบ upload + จัดการ asset library</p>
            </Prose>
            <Prose>
              <p className="opacity-50">Adobe Stock · Shutterstock · Freepik Contributor</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>เราจะไม่ขายฝันว่าอัปโหลด 10 รูปแล้วรวย</p>
            <p><strong>แต่จะทำให้คุณเห็น process จริงว่า ถ้าจะลองสายนี้ ควรคิดเป็นระบบยังไง</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          13. WF 3 — Resume
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 3" style={{ backgroundColor: COLORS.orange.bg, color: COLORS.orange.fg }}>
        <Label>Workflow 03</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="03">
            <ThaiH>AI Resume & Job Hunter</ThaiH>
            <Prose>
              <p>สำหรับนักศึกษา คนหางาน หรือคนที่อยากเปลี่ยนสายงาน</p>
              <p className="opacity-70">ปัญหาส่วนใหญ่: resume ไม่ตรง JD · cover letter generic · LinkedIn ไม่ชัด · ไม่รู้จะ research บริษัทยังไง</p>
            </Prose>
            <Prose>
              <p className="opacity-70">ระบบ AI Job Hunter ช่วย:</p>
              <p>อ่าน JD + วิเคราะห์ว่าเหมาะไหม</p>
              <p>ปรับ resume + เขียน cover letter</p>
              <p>เตรียมคำตอบสัมภาษณ์ + research บริษัท</p>
              <p>ปรับ LinkedIn + ระบบติดตามงานที่สมัคร</p>
            </Prose>
            <Prose>
              <p className="opacity-60">เหมาะสำหรับ: ย้ายสาย · งานต่างประเทศ · งาน remote</p>
            </Prose>
          </TwoCol>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          14. WF 4 — YouTube Shorts
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 4" style={{ backgroundColor: COLORS.blue.bg, color: COLORS.blue.fg }}>
        <Label>Workflow 04</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="04">
            <ThaiH>YouTube Shorts Factory</ThaiH>
            <Prose>
              <p>Short-form video คือหนึ่งในช่องทางที่ทรงพลังที่สุดตอนนี้</p>
              <p className="opacity-70">แต่หลายคนทำได้ 3 คลิปแล้วหยุด — เพราะไม่มีระบบ</p>
            </Prose>
            <Prose>
              <p className="opacity-70">เราจะสร้าง pipeline ตั้งแต่:</p>
              <p>หา niche · คิด content angle · สร้าง script + hook</p>
              <p>AI generate visual + voice + caption</p>
              <p>ทำ content pipeline + ระบบโพสต์ต่อเนื่อง</p>
            </Prose>
            <Prose>
              <p className="opacity-60">YouTube Shorts · TikTok · Reels · creator มือใหม่ · เจ้าของธุรกิจ</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>การทำ content ไม่ควรพึ่งแค่อารมณ์หรือ inspiration</p>
            <p><strong>มันสามารถกลายเป็น workflow ได้</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          15. WF 5 — Personal Brand
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 5" style={{ backgroundColor: COLORS.cream.bg, color: COLORS.cream.fg }}>
        <Label>Workflow 05</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="05">
            <ThaiH>Creator Personal Brand System</ThaiH>
            <Prose>
              <p>คำถามที่หลายคนเจอเมื่อจะเริ่ม personal brand:</p>
              <p className="opacity-70">เราควรพูดเรื่องอะไร? ใครคือ audience? โพสต์แบบไหนถึงจะเป็นเรา?</p>
              <p className="opacity-70">ทำไมคนต้องติดตามเรา? จะโพสต์ต่อเนื่องยังไง? จะไม่ดู cringe ยังไง?</p>
            </Prose>
            <Prose>
              <p className="opacity-70">เราจะสร้างระบบตั้งแต่:</p>
              <p>หาจุดยืน · content pillars · content angles</p>
              <p>voice & tone guide · repurpose content · idea bank</p>
              <p>content calendar ที่ต่อเนื่อง</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>ในยุคนี้ personal brand ไม่ใช่เรื่องของคนอยากดัง</p>
            <p><strong>แต่มันคือ career leverage — คนที่สื่อสารตัวเองเป็น มีโอกาสมากกว่า</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          16. WF 6 — Content Generation
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 6" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label>Workflow 06</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="06">
            <ThaiH>Content Generation Workflow</ThaiH>
            <Prose>
              <p>นี่คือ workflow หลักที่หลายคนสามารถเอาไปใช้ได้ทันที</p>
            </Prose>
            <div className="flex flex-wrap gap-2 items-center">
              {['Feed', 'Idea', 'Write', 'Generate', 'Post', 'Report'].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-2 text-sm font-bold">
                  <span className="border border-current/30 px-3 py-1.5 hover:border-current/70 hover:bg-white/10 transition-all cursor-default">{s}</span>
                  {i < arr.length - 1 && <span className="opacity-30 text-xs">→</span>}
                </span>
              ))}
            </div>
            <Prose>
              <p className="opacity-70">เห็นข้อมูล → แปลงเป็นไอเดีย → เขียน content → สร้าง visual → โพสต์ → สรุปผล</p>
              <p className="opacity-50">เหมาะกับ: เพจ · TikTok · Facebook · LinkedIn · YouTube · ธุรกิจเล็ก · affiliate · freelance</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>เป้าหมายคือให้คุณเลิกคิด content แบบวันต่อวัน</p>
            <p><strong>แล้วเริ่มมีระบบผลิต content ที่ต่อเนื่องขึ้น</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          17. WF 7 — Scheduled Tasks
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 7" style={{ backgroundColor: COLORS.orange.bg, color: COLORS.orange.fg }}>
        <Label>Workflow 07 — หัวใจของ Camp</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="07">
            <ThaiH>Claude Scheduled Tasks</ThaiH>
            <Prose>
              <p>แทนที่เราจะเข้าไปถาม AI ทุกครั้ง —</p>
              <p>เราจะเริ่มคิดว่า: <strong>มีงานอะไรบ้างที่ AI ควรช่วยเราทำเป็นประจำ?</strong></p>
            </Prose>
            <Prose>
              <p className="opacity-70">เช่น:</p>
              <p>สรุปข่าวทุกเช้า · เตรียมไอเดีย content ทุกวัน</p>
              <p>เตือน task สำคัญ · review งานประจำสัปดาห์</p>
              <p>สร้าง content calendar · สรุป insight จากข้อมูล</p>
              <p>เตรียมโพสต์ล่วงหน้า</p>
            </Prose>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p className="opacity-70">เพราะอนาคตของ AI ไม่ใช่แค่ &ldquo;เราถาม แล้ว AI ตอบ&rdquo;</p>
            <p><strong>&ldquo;AI ช่วยทำงานบางอย่างให้เราก่อนที่เราจะต้องถาม&rdquo;</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          18. WF 8 — Automation Mindset
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="Workflow 8" style={{ backgroundColor: COLORS.blue.bg, color: COLORS.blue.fg }}>
        <Label>Workflow 08</Label>
        <Div />
        <FadeIn>
          <TwoCol ghost="08">
            <ThaiH>Automation Mindset</ThaiH>
            <Prose>
              <p>ก่อนจะใช้ automation เป็น เราต้องคิดเป็นก่อน</p>
              <p className="opacity-70">งานซ้ำคือโอกาส · งานที่มี pattern = workflow</p>
              <p className="opacity-70">AI เหมาะกับงานคิด เขียน อ่าน จัดระบบ</p>
              <p className="opacity-70">automation ไม่ใช่การแทนคน — แต่คือการลด friction</p>
            </Prose>
            <div className="space-y-3">
              {[
                { from: 'งานที่เคยใช้เวลา 3 ชั่วโมง', to: 'อาจลดเหลือ 45 นาที' },
                { from: 'งานที่เคยต้องเริ่มจากศูนย์', to: 'อาจมี template ช่วย' },
                { from: 'งานที่เคยลืมทำ', to: 'อาจกลายเป็น scheduled task' },
              ].map(({ from, to }) => (
                <div key={from} className="flex items-center gap-3">
                  <p className="text-[clamp(0.75rem,1.2vw,0.9rem)] opacity-50">{from}</p>
                  <span className="opacity-30 shrink-0">→</span>
                  <p className="text-[clamp(0.75rem,1.2vw,0.9rem)] font-semibold">{to}</p>
                </div>
              ))}
            </div>
          </TwoCol>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold">นี่คือ leverage</p>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          19. รูปแบบการเรียน
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="รูปแบบ" style={{ backgroundColor: COLORS.cream.bg, color: COLORS.cream.fg }}>
        <Label n="10">รูปแบบการเรียน</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Live.
            <br />
            Real.
            <br />
            Together.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 space-y-4">
              <Prose>
                <p>Camp นี้จะเป็น <strong>Live Online Cowork</strong></p>
                <p className="opacity-60">ไม่ได้เป็นคอร์สวิดีโอที่อัดไว้แล้วให้คุณดูคนเดียว</p>
                <p>เพราะเราอยากให้คุณได้เห็น process จริง</p>
              </Prose>
            </div>
            <div className="flex-1 space-y-3">
              <Prose>
                <p className="opacity-60">เวลาสร้าง workflow จริง มันไม่ได้สวยตั้งแต่แรก:</p>
                <p>บาง prompt ต้องแก้</p>
                <p>บาง output ใช้ไม่ได้</p>
                <p>บาง automation ต้องปรับ</p>
                <p>บาง idea ต้องตัดทิ้ง</p>
                <p>บาง workflow ต้องเริ่มใหม่</p>
                <p className="opacity-60 pt-1">และนั่นแหละคือการเรียนรู้จริง</p>
              </Prose>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p>การใช้ AI ให้เก่ง ไม่ใช่การจำ prompt</p>
            <p><strong>แต่คือการรู้ว่าจะคุยกับ AI ยังไง จะปรับยังไง จะคิดเป็นระบบยังไง</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          20. สิ่งที่ได้รับ + ไม่เหมาะ
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="สิ่งที่ได้รับ" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <Label n="11">สิ่งที่คุณจะได้รับ</Label>
        <Div />
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-40">คุณจะได้</p>
              {['Live Cowork Sessions ตลอด 4 วัน', 'Slides สำหรับแต่ละ workflow',
                'ตัวอย่าง workflow ที่ใช้ได้จริง', 'Prompt systems',
                'Claude workflow templates', 'LINE Community',
                'Certificate จาก Tomorrow School', 'Recordings', 'แนวทางต่อยอดหลังจบ camp'].map((item) => (
                <div key={item} className="group flex items-center gap-3 border-b border-white/10 py-2.5 hover:border-white/30 cursor-default transition-colors">
                  <span className="text-white/40 shrink-0 group-hover:text-white/70 transition-colors text-sm font-bold">✓</span>
                  <span className="text-[clamp(0.8rem,1.3vw,1rem)] font-light">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-40">ไม่เหมาะกับใคร?</p>
              {['อยากได้สูตรรวยเร็ว', 'อยากได้ passive income แบบไม่ต้องทำอะไร',
                'ไม่อยากลองผิดลองถูก', 'ไม่อยากเปิดเครื่องมือทำตาม',
                'คิดว่า AI จะทำทุกอย่างแทนโดยไม่ต้องคิด', 'ต้องการผลลัพธ์การเงินแบบการันตี'].map((item) => (
                <div key={item} className="group flex items-center gap-3 border-b border-white/10 py-2.5 hover:border-white/30 cursor-default transition-colors">
                  <span className="text-white/30 shrink-0 text-sm font-bold">×</span>
                  <span className="text-[clamp(0.8rem,1.3vw,1rem)] font-light opacity-60">{item}</span>
                </div>
              ))}
              <Prose className="mt-5">
                <p className="opacity-50">สิ่งที่เราสอนคือ workflow · system · process · และวิธีคิด</p>
              </Prose>
            </div>
          </div>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          21. ทำไมต้องตอนนี้
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="ทำไมตอนนี้" style={{ backgroundColor: COLORS.orange.bg, color: COLORS.orange.fg }}>
        <Label n="12">ทำไมต้องเรียนตอนนี้?</Label>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            The
            <br />
            Workflow
            <br />
            Race.
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-[4vw]">
            <div className="flex-1 border border-white/20 p-5">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-50">ช่วงแรก</p>
              <Prose>
                <p>แข่งกันที่ว่าใครรู้จัก <strong>tool</strong> เยอะกว่า</p>
              </Prose>
            </div>
            <div className="flex-1 border border-white/50 bg-white/10 p-5">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-50">ช่วงต่อไป →</p>
              <Prose>
                <p>ใครมี <strong>workflow</strong> ดีกว่า</p>
                <p>ใครทำงานเร็วกว่า</p>
                <p>ใครสร้าง content ได้ต่อเนื่องกว่า</p>
                <p>ใครใช้ AI เป็น coworker ได้จริงกว่า</p>
                <p>ใครเปลี่ยนไอเดียเป็น output ได้เร็วกว่า</p>
              </Prose>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <Prose>
            <p><strong>คนที่ใช้ AI เป็นระบบ จะมี advantage มากกว่าคนที่ใช้ AI แบบถามตอบไปเรื่อยๆ</strong></p>
          </Prose>
        </FadeIn>
      </FlowSection>

      {/* ══════════════════════════════════════════════════
          22. CTA
      ══════════════════════════════════════════════════ */}
      <FlowSection aria-label="CTA" style={{ backgroundColor: COLORS.black.bg, color: COLORS.black.fg }}>
        <div className="flex items-center justify-between">
          <Label n="13">พร้อมแล้ว เริ่มได้เลย</Label>
          <span className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
            รับจำกัด 45 คน
          </span>
        </div>
        <Div />
        <FadeIn>
          <h2 className="text-[clamp(3rem,10vw,11rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Ready
            <br />
            To
            <br />
            Build?
          </h2>
        </FadeIn>
        <Div />
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-3">
            {[
              { v: '4 วัน', s: 'ระยะเวลา' },
              { v: 'Live Online Cowork', s: 'รูปแบบ' },
              { v: 'จำกัด 45 คน', s: 'จำนวนรับ' },
              { v: 'Certificate', s: 'Tomorrow School' },
            ].map(({ v, s }) => (
              <div key={v} className="flex-1 min-w-[130px] border border-white/15 p-4 hover:border-white/40 transition-colors cursor-default">
                <p className="text-[clamp(0.9rem,1.7vw,1.2rem)] font-bold leading-snug">{v}</p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{s}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-[clamp(2.5rem,10vw,9rem)] font-bold leading-none">1,290 บาท</p>
        </FadeIn>
        <FadeIn delay={300}>
          <Prose>
            <p>ไม่ต้องรอให้พร้อม 100%</p>
            <p className="opacity-60">เพราะการเรียน AI ที่ดีที่สุด คือการเริ่ม build อะไรบางอย่างจริงๆ</p>
            <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-bold pt-2">แล้วเราจะ build ไปด้วยกัน</p>
          </Prose>
        </FadeIn>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] opacity-30">Tomorrow School</p>
      </FlowSection>

    </FlowArt>
  );
}
