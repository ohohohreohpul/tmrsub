import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import Marquee from '@/components/ui/marquee';
import FadeIn from '@/components/ui/fade-in';

const marqueeItems = [
  'Claude', 'AI Workflow', 'MCP', 'Automation', 'Scheduled Tasks',
  'Content Factory', 'Affiliate', 'Personal Brand', 'Auto Posting',
  'AI Agent', 'Digital Products', 'Prompt Systems', 'YouTube Shorts Factory',
  'AI Job Hunter', 'Photostock',
];

const buzzwords = [
  'ChatGPT', 'Claude', 'AI Agent', 'Automation', 'MCP',
  'Scheduled Tasks', 'Content Factory', 'AI Workflow', 'Digital Products',
  'Affiliate', 'Personal Brand', 'Auto Posting',
];

const claudeCapabilities = [
  { name: 'อ่านเอกสาร', desc: 'อ่านเอกสารยาวๆ แล้วสรุปให้' },
  { name: 'คิด Strategy', desc: 'ช่วยคิดแผนงานและกลยุทธ์' },
  { name: 'เขียน Content', desc: 'ช่วยเขียน content ทุกรูปแบบ' },
  { name: 'วิเคราะห์ข้อมูล', desc: 'ช่วยวิเคราะห์และตีความข้อมูล' },
  { name: 'จัด Workflow', desc: 'ช่วยออกแบบและจัดระบบการทำงาน' },
  { name: 'ทำงานซ้ำ', desc: 'ช่วยทำงานซ้ำๆ ที่ใช้เวลานาน' },
  { name: 'เตรียมระบบ', desc: 'ช่วยเตรียมระบบ content' },
  { name: 'สร้าง Prompt', desc: 'ช่วยสร้าง prompt ที่ใช้ซ้ำได้' },
  { name: 'ผู้ช่วยประจำ', desc: 'เป็นผู้ช่วยประจำงานหรือโปรเจกต์' },
];

const audiences = [
  'คนทำงานประจำที่อยากทำงานเร็วขึ้น',
  'นักศึกษา',
  'คนหางานที่อยากใช้ AI ช่วยสมัครงาน',
  'ฟรีแลนซ์ที่อยากใช้ AI ช่วยส่งงานเร็วขึ้น',
  'Creator ที่อยากสร้าง content อย่างต่อเนื่อง',
  'คนทำเพจ / personal brand',
  'คนอยากเริ่ม affiliate content',
  'คนอยากลองทำ digital product',
  'คนอยากสร้าง content ลง YouTube Shorts / TikTok / Reels',
  'คนที่สนใจ automation',
];

const benefits = [
  'Live Cowork Sessions ตลอด 4 วัน',
  'Slides สำหรับแต่ละ workflow',
  'ตัวอย่าง workflow ที่ใช้ได้จริง',
  'Prompt systems',
  'Claude workflow templates',
  'Content workflow examples',
  'LINE Community',
  'Certificate จาก Tomorrow School',
  'Recordings',
  'แนวทางต่อยอดหลังจบ camp',
];

const notFor = [
  'อยากได้สูตรรวยเร็ว',
  'อยากได้ passive income แบบไม่ต้องทำอะไร',
  'ไม่อยากลองผิดลองถูก',
  'ไม่อยากเปิดเครื่องมือทำตาม',
  'คิดว่า AI จะทำทุกอย่างแทนโดยไม่ต้องคิด',
  'ต้องการผลลัพธ์การเงินแบบการันตี',
];

export default function Home() {
  return (
    <FlowArt aria-label="Tomorrow's Claude Cowork Camp">

      {/* Section 1 - HERO */}
      <FlowSection aria-label="Hero" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.25em]">Tomorrow School</span>
          <span className="flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
            รับจำกัด 45 คน
          </span>
        </div>
        <hr className="border-t border-white/30" />
        <FadeIn delay={0}>
          <h1 className="text-[clamp(4rem,14vw,14rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Claude
            <br />
            Cowork
            <br />
            Camp.
          </h1>
        </FadeIn>
        <hr className="border-t border-white/30" />
        <FadeIn delay={100}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            4 วัน สร้าง AI Workflows ที่ช่วยให้คุณทำงาน สร้างคอนเทนต์ และต่อยอดรายได้ออนไลน์ได้จริง
          </p>
        </FadeIn>
        <hr className="border-t border-white/30" />
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-4">
            {[
              { label: '4 วัน', sub: 'Live Cowork' },
              { label: '45 คน', sub: 'จำกัด' },
              { label: '1,290 บาท', sub: 'ราคา Camp' },
            ].map(({ label, sub }) => (
              <div key={label} className="flex-1 min-w-[120px] border border-white/30 p-4">
                <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold leading-none">{label}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest opacity-60">{sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-white/30" />
        <Marquee items={marqueeItems} />
      </FlowSection>

      {/* Section 2 - THE OVERWHELMING */}
      <FlowSection aria-label="The Overwhelming" style={{ backgroundColor: '#0d0d0d', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">01 — คุณเคยรู้สึกไหมว่า…</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            AI มันมา
            <br />
            เร็วเกินไป
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={150}>
          <div className="flex flex-wrap gap-2">
            {buzzwords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-white/15 px-3 py-1 text-sm font-medium transition-all hover:border-white/50 hover:bg-white/8 cursor-default"
              >
                {word}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            ทุกอย่างดูน่าตื่นเต้นมาก แต่ในขณะเดียวกัน…{' '}
            <strong className="font-bold">มันก็โคตร overwhelming</strong>
          </p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-[4vw]">
            <div className="flex-1 min-w-[200px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider opacity-40">สิ่งที่คุณเริ่มทำ</p>
              <div className="space-y-2">
                {[
                  '— เริ่มดูคลิป',
                  '— เริ่มเซฟโพสต์',
                  '— เริ่มตามเพจ',
                  '— เริ่มซื้อคอร์ส',
                  '— เริ่มลอง prompt',
                  '— เริ่มสมัคร tool หลายตัว',
                ].map((item) => (
                  <p key={item} className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">{item}</p>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider opacity-40">แต่ผ่านไปหลายเดือน…</p>
              <div className="space-y-2">
                {[
                  '✗ ยังไม่ได้สร้างระบบอะไรของตัวเองจริงๆ',
                  '✗ ยังใช้ AI แบบถามตอบอยู่',
                  '✗ ยังให้ AI ช่วยเขียน caption เป็นครั้งๆ',
                  '✗ ยังไม่รู้ว่าจะทำให้เป็น "ระบบ" ได้ยังไง',
                ].map((item) => (
                  <p key={item} className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 3 - ROOT PROBLEM */}
      <FlowSection aria-label="Root Problem" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">02 — ปัญหาจริง</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            ไม่รู้จะเอา
            <br />
            AI มาเป็น
            <br />
            ระบบได้ยังไง
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            นี่คือปัญหาจริงของคนส่วนใหญ่ในตอนนี้
            ไม่ใช่ว่าเราไม่รู้จัก AI แต่เราไม่รู้ว่า{' '}
            <em>&ldquo;จะเอา AI มาทำงานแทนเราอย่างเป็นระบบได้ยังไง&rdquo;</em>
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <p className="max-w-[55ch] text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
            Tomorrow&apos;s Claude Cowork Camp ถูกสร้างขึ้นมาเพื่อแก้ปัญหานี้
            ไม่ใช่เพื่อสอนให้คุณ &ldquo;ใช้ AI เป็น&rdquo; แบบพื้นฐาน
            แต่เพื่อพาคุณเริ่มคิดแบบใหม่ว่า AI ควรกลายเป็น &ldquo;เพื่อนร่วมงาน&rdquo;
          </p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="border border-white/30 p-6">
            <p className="text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed italic">
              &ldquo;AI ไม่ควรเป็นแค่เครื่องมือที่เราถามเวลาต้องการคำตอบ —
              แต่ AI ควรกลายเป็น <strong className="font-bold not-italic">เพื่อนร่วมงาน</strong> ที่ช่วยทำงานให้เรา
              มากขึ้น เร็วขึ้น และมี leverage มากขึ้น&rdquo;
            </p>
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 4 - WHY CLAUDE */}
      <FlowSection aria-label="Why Claude" style={{ backgroundColor: '#F5F0E8', color: '#0d0d0d' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">03 — ทำไมต้อง Claude?</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Claude.
            <br />
            Not Just
            <br />
            A Chatbot.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {claudeCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="group border border-current/15 p-5 transition-all duration-300 hover:border-current/50 hover:bg-current/5 cursor-default"
              >
                <p className="mb-1 font-bold text-sm uppercase tracking-wider">{cap.name}</p>
                <p className="text-[clamp(0.75rem,1.1vw,0.9rem)] leading-relaxed opacity-60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] border border-current/20 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider opacity-40">ถามทีละคำถาม</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
                ช่วยได้แค่ทีละงาน ไม่ต่อเนื่อง
              </p>
            </div>
            <div className="flex-1 min-w-[200px] border border-current/40 bg-current/5 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider opacity-40">ใช้แบบ workflow</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed">
                <strong>กลายเป็นระบบทำงาน</strong> ที่ต่อเนื่องและมี leverage
              </p>
            </div>
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 5 - CLAUDE COWORK */}
      <FlowSection aria-label="Claude Cowork" style={{ backgroundColor: '#0d0d0d', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">04 — Claude Cowork</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            AI ควรเป็น
            <br />
            เพื่อน
            <br />
            ร่วมงาน
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-3">
            {['ช่วยคิด', 'ช่วยอ่าน', 'ช่วยเขียน', 'ช่วยวางแผน', 'ช่วยสร้างคอนเทนต์', 'ช่วยทำงานซ้ำ', 'ช่วยเตรียมข้อมูล', 'ช่วยสร้าง workflow'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <p className="text-[clamp(1.2rem,3vw,2.5rem)] font-bold leading-relaxed">
            เปิดจอ · เปิด Claude · เปิด workflow · สร้างระบบที่ใช้ได้จริง
          </p>
        </FadeIn>
        <FadeIn delay={350}>
          <p className="max-w-[55ch] text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
            เราเรียกมันว่า Claude Cowork เพราะ camp นี้ไม่ได้เน้นการนั่งฟัง lecture ยาวๆ
            แต่เราจะมา &ldquo;ทำงานไปด้วยกัน&rdquo; เปิดจอ เปิด Claude เปิด workflow แล้วค่อยๆ สร้างระบบที่ใช้ได้จริง
          </p>
        </FadeIn>
      </FlowSection>

      {/* Section 6 - WHO IS FOR */}
      <FlowSection aria-label="Who Is For" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">05 — Camp นี้เหมาะกับใคร?</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            For
            <br />
            Every-
            <br />
            one.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-4">
            {[
              '&ldquo;ฉันรู้ว่า AI สำคัญ แต่ไม่รู้จะเริ่มยังไงให้มันใช้ได้จริง&rdquo;',
              '&ldquo;ฉันใช้ AI อยู่แล้ว แต่ยังใช้แบบกระจัดกระจาย ไม่เป็นระบบ&rdquo;',
              '&ldquo;ฉันอยากใช้ AI เพื่อช่วยทำงาน สร้างคอนเทนต์ หรือหารายได้เสริม แต่ไม่อยากเรียนแบบทฤษฎีเยอะๆ&rdquo;',
            ].map((quote, i) => (
              <div key={i} className="flex-1 min-w-[220px] border border-white/30 p-5">
                <p
                  className="text-[clamp(0.9rem,1.5vw,1.2rem)] font-light italic leading-relaxed opacity-90"
                  dangerouslySetInnerHTML={{ __html: quote }}
                />
              </div>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="space-y-0">
            {audiences.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-white/25 cursor-default"
              >
                <span className="text-white/40 transition-transform group-hover:translate-x-1">→</span>
                <span className="text-[clamp(0.85rem,1.3vw,1.05rem)]">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={350}>
          <p className="text-[clamp(0.75rem,1.1vw,0.9rem)] opacity-60">
            ไม่จำเป็นต้องเขียนโค้ดเป็น · ไม่จำเป็นต้องเป็นสาย tech · ไม่จำเป็นต้องมีพื้นฐาน automation มาก่อน
            <br />
            แต่ควรมีความพร้อมที่จะลงมือทำจริง
          </p>
        </FadeIn>
      </FlowSection>

      {/* Section 7 - 8 WORKFLOWS OVERVIEW */}
      <FlowSection aria-label="Workflows Overview" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">06 — สิ่งที่เราจะสร้างใน Camp</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            8 Workflows.
            <br />
            4 วัน.
            <br />
            ใช้ได้จริง.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            ไม่ใช่ workflow ที่ลอยอยู่ในอากาศ แต่คือระบบที่สร้างมาจากปัญหาจริงของคนจริง
          </p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="space-y-3">
            {[
              'อยากสร้าง content ทุกวัน แต่คิดไม่ออก',
              'อยากทำ affiliate แต่ไม่มีระบบ',
              'อยากสร้างรายได้จาก photostock แต่ไม่รู้จะเริ่มยังไง',
              'อยากสมัครงานได้เก่งขึ้น แต่ resume ไม่ตรง JD',
              'อยากทำ YouTube Shorts แต่ไม่มี script',
              'อยากมี personal brand แต่ไม่รู้จะพูดเรื่องอะไร',
              'อยากโพสต์ content อย่างต่อเนื่อง แต่ไม่มีระบบ',
              'อยากให้ AI ช่วยทำงานก่อนที่ตัวเองจะต้องถาม',
            ].map((item) => (
              <p key={item} className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
                · {item}
              </p>
            ))}
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 8 - WORKFLOWS 1-4 */}
      <FlowSection aria-label="Workflows 1-4" style={{ backgroundColor: '#F5F0E8', color: '#0d0d0d' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">07 — Workflows 1–4</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Earn.
            <br />
            Grow.
            <br />
            Land.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                num: '01',
                name: 'Affiliate Content Factory',
                desc: 'ระบบ content affiliate แบบต่อเนื่อง',
                steps: ['หาไอเดีย content', 'วิเคราะห์สินค้า', 'สร้าง hook + caption', 'แตก content หลาย format', 'วาง content calendar'],
                platform: 'Shopee · Lazada · TikTok Shop',
              },
              {
                num: '02',
                name: 'Photostock Generation & Upload',
                desc: 'จัดระบบสร้างและ upload stock media',
                steps: ['หา niche + generate idea', 'สร้าง prompt + ภาพ', 'title + keyword + description', 'upload system', 'asset library'],
                platform: 'Adobe Stock · Shutterstock · Freepik',
              },
              {
                num: '03',
                name: 'AI Resume & Job Hunter',
                desc: 'ระบบสมัครงานอัจฉริยะ',
                steps: ['อ่าน JD + วิเคราะห์ fit', 'ปรับ resume + cover letter', 'เตรียมคำตอบสัมภาษณ์', 'research บริษัท', 'ปรับ LinkedIn + ติดตามงาน'],
                platform: 'งานต่างประเทศ · Remote · ย้ายสาย',
              },
              {
                num: '04',
                name: 'YouTube Shorts Factory',
                desc: 'pipeline ผลิต short-form video',
                steps: ['หา niche + content angle', 'เขียน script + hook', 'AI generate visual + voice', 'caption + content pipeline', 'ระบบโพสต์'],
                platform: 'YouTube Shorts · TikTok · Reels',
              },
            ].map((wf) => (
              <div
                key={wf.num}
                className="group border border-current/15 p-5 transition-all duration-300 hover:border-current/40 hover:scale-[1.01] cursor-default"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider opacity-40">{wf.num}</p>
                <p className="mb-2 font-bold text-[clamp(0.9rem,1.5vw,1.15rem)]">{wf.name}</p>
                <p className="mb-3 text-[clamp(0.75rem,1.1vw,0.9rem)] opacity-60">{wf.desc}</p>
                <div className="mb-3 space-y-1">
                  {wf.steps.map((s) => (
                    <p key={s} className="text-[clamp(0.7rem,1vw,0.85rem)] opacity-50">· {s}</p>
                  ))}
                </div>
                <p className="text-[0.7rem] font-bold uppercase tracking-widest opacity-30">{wf.platform}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 9 - WORKFLOWS 5-8 */}
      <FlowSection aria-label="Workflows 5-8" style={{ backgroundColor: '#0d0d0d', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">08 — Workflows 5–8</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Brand.
            <br />
            Create.
            <br />
            Automate.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                num: '05',
                name: 'Creator Personal Brand System',
                desc: 'สร้างตัวตนออนไลน์อย่างเป็นระบบ',
                steps: ['หาจุดยืน + content pillars', 'เขียนโพสต์ + content angles', 'voice & tone guide', 'repurpose + idea bank', 'content calendar'],
                highlight: 'Personal brand = career leverage ในยุคนี้',
              },
              {
                num: '06',
                name: 'Content Generation Workflow',
                desc: 'ระบบผลิต content แบบต่อเนื่อง',
                steps: ['Feed → Idea → Write', 'Generate → Post → Report', 'เห็นข้อมูล → แปลงเป็นไอเดีย', 'สร้าง visual → โพสต์', 'สรุปผล → วางต่อ'],
                highlight: 'เลิกคิด content แบบวันต่อวัน',
              },
              {
                num: '07',
                name: 'Claude Scheduled Tasks',
                desc: 'หัวใจของ Camp — AI ช่วยทำงานก่อนที่คุณจะต้องถาม',
                steps: ['สรุปข่าวทุกเช้า', 'เตรียมไอเดีย content', 'สรุป task ประจำสัปดาห์', 'content calendar อัตโนมัติ', 'เตรียมโพสต์ล่วงหน้า'],
                highlight: '"เราถาม แล้ว AI ตอบ" → "AI ช่วยทำงานให้ก่อน"',
              },
              {
                num: '08',
                name: 'Automation Mindset',
                desc: 'คิดเป็นระบบ ลด friction ในงาน',
                steps: ['งานซ้ำคือโอกาส', 'งานที่มี pattern = workflow', 'ลด friction ทุกขั้นตอน', 'AI เหมาะกับงานคิด เขียน อ่าน', 'งานที่ใช้ 3 ชม. → 45 นาที'],
                highlight: 'งานที่เคยใช้เวลา 3 ชั่วโมง → อาจลดเหลือ 45 นาที',
              },
            ].map((wf) => (
              <div
                key={wf.num}
                className="group border border-white/15 p-5 transition-all duration-300 hover:border-white/50 hover:bg-white/5 cursor-default"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider opacity-40">{wf.num}</p>
                <p className="mb-2 font-bold text-[clamp(0.9rem,1.5vw,1.15rem)]">{wf.name}</p>
                <p className="mb-3 text-[clamp(0.75rem,1.1vw,0.9rem)] opacity-60">{wf.desc}</p>
                <div className="mb-3 space-y-1">
                  {wf.steps.map((s) => (
                    <p key={s} className="text-[clamp(0.7rem,1vw,0.85rem)] opacity-50">· {s}</p>
                  ))}
                </div>
                <p className="text-[clamp(0.7rem,1vw,0.85rem)] border-t border-white/10 pt-3 italic opacity-50">{wf.highlight}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 10 - FORMAT */}
      <FlowSection aria-label="Format" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">09 — รูปแบบการเรียน</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Live.
            <br />
            Real.
            <br />
            Together.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            ไม่ใช่คอร์สวิดีโอที่อัดไว้แล้วให้คุณดูคนเดียว
          </p>
          <p className="mt-4 max-w-[55ch] text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
            เวลาสร้าง workflow จริง มันไม่ได้สวยตั้งแต่แรก:
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="space-y-2">
            {[
              'บาง prompt ต้องแก้',
              'บาง output ใช้ไม่ได้',
              'บาง automation ต้องปรับ',
              'บาง idea ต้องตัดทิ้ง',
              'บาง workflow ต้องเริ่มใหม่',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-white/60 font-bold">×</span>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] opacity-80">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <div className="border border-white/30 p-6">
            <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold leading-relaxed">
              &ldquo;การใช้ AI ให้เก่ง ไม่ใช่การจำ prompt
              <br />
              แต่คือการรู้ว่าจะคุยกับ AI ยังไง จะปรับยังไง จะคิดเป็นระบบยังไง&rdquo;
            </p>
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 11 - WHAT YOU GET + NOT FOR */}
      <FlowSection aria-label="Benefits" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">10 — สิ่งที่คุณจะได้รับ</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            10+
            <br />
            สิ่งที่
            <br />
            คุณได้
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-[4vw]">
            <div className="flex-1 min-w-[220px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider opacity-40">สิ่งที่คุณจะได้รับ</p>
              <div className="space-y-0">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-2 border-b border-white/10 hover:border-white/30 transition-colors cursor-default"
                  >
                    <span className="text-white/50 font-bold shrink-0">✓</span>
                    <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-[220px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider opacity-40">Camp นี้ไม่เหมาะกับใคร?</p>
              <div className="space-y-0">
                {notFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-2 border-b border-white/10 hover:border-white/30 transition-colors cursor-default"
                  >
                    <span className="text-white/40 font-bold shrink-0">×</span>
                    <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed opacity-70">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[clamp(0.7rem,1vw,0.85rem)] italic opacity-50">
                สิ่งที่เราสอนคือ workflow, system, process, และวิธีคิด
              </p>
            </div>
          </div>
        </FadeIn>
      </FlowSection>

      {/* Section 12 - WHY NOW */}
      <FlowSection aria-label="Why Now" style={{ backgroundColor: '#F5F0E8', color: '#0d0d0d' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">11 — ทำไมต้องเรียนตอนนี้?</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            The
            <br />
            Workflow
            <br />
            Race.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            AI กำลังเปลี่ยนจาก <strong>&ldquo;เครื่องมือ&rdquo;</strong> ไปเป็น <strong>&ldquo;ระบบ&rdquo;</strong>
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] border border-current/20 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider opacity-40">ช่วงแรก</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
                แข่งกันที่ว่าใครรู้จัก tool เยอะกว่า
              </p>
            </div>
            <div className="flex-1 min-w-[200px] border border-current/40 bg-current/5 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider opacity-40">ช่วงต่อไป →</p>
              <div className="space-y-2">
                {[
                  'ใครมี workflow ดีกว่า',
                  'ทำงานเร็วกว่า',
                  'สร้าง content ได้ต่อเนื่องกว่า',
                  'ใช้ AI เป็น coworker ได้จริงกว่า',
                  'เปลี่ยนไอเดียเป็น output ได้เร็วกว่า',
                ].map((item) => (
                  <p key={item} className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed">· {item}</p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold leading-relaxed">
            คนที่ใช้ AI เป็นระบบ จะมี advantage มากกว่าคนที่ใช้ AI แบบถามตอบ
          </p>
        </FadeIn>
      </FlowSection>

      {/* Section 13 - CAMP DETAILS */}
      <FlowSection aria-label="Camp Details" style={{ backgroundColor: '#0d0d0d', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">12 — รายละเอียด Camp</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Tomorrow&apos;s
            <br />
            Claude
            <br />
            Cowork.
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: 'ชื่อ', value: "Tomorrow's Claude Cowork Camp" },
              { label: 'ระยะเวลา', value: '4 วัน' },
              { label: 'รูปแบบ', value: 'Live Online Cowork' },
              { label: 'โฟกัส', value: 'Claude · AI Workflows · Automation · Content Systems' },
              { label: 'จำนวนรับ', value: 'จำกัด 45 คน' },
              { label: 'ราคา', value: '1,290 บาท' },
            ].map(({ label, value }) => (
              <div key={label} className="border border-white/15 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider opacity-40">{label}</p>
                <p className="text-[clamp(0.85rem,1.3vw,1.1rem)] font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <p className="text-[clamp(1.2rem,3vw,2.5rem)] font-bold leading-relaxed">
            &ldquo;แล้วเราจะ build ไปด้วยกัน&rdquo;
          </p>
        </FadeIn>
      </FlowSection>

      {/* Section 14 - CTA */}
      <FlowSection aria-label="CTA" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">13 — พร้อมแล้ว เริ่มได้เลย</p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={100}>
          <h2 className="text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] uppercase tracking-tight">
            Ready
            <br />
            To
            <br />
            Build?
          </h2>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={200}>
          <div>
            <p className="text-[clamp(3rem,12vw,10rem)] font-bold leading-none">1,290 บาท</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-white" />
              <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase tracking-wider">รับจำกัด 45 คน</p>
            </div>
          </div>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={300}>
          <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed">
            ไม่ต้องรอให้พร้อม 100% เพราะการเรียน AI ที่ดีที่สุด คือการเริ่ม build อะไรบางอย่างจริงๆ
          </p>
        </FadeIn>
        <hr className="border-t border-current/15" />
        <FadeIn delay={350}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Tomorrow School</p>
        </FadeIn>
      </FlowSection>

    </FlowArt>
  );
}
