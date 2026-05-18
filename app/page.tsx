import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function Home() {
  return (
    <FlowArt aria-label="Tomorrow's Claude Cowork Camp">
      {/* Section 1: Hero */}
      <FlowSection
        aria-label="Hero"
        style={{ backgroundColor: '#fd5200', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">
          Tomorrow School
        </p>
        <hr className="border-t border-white/40" />
        <div>
          <h1 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Claude
            <br />
            Cowork
            <br />
            Camp
          </h1>
        </div>
        <hr className="border-t border-white/40" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            4 วัน สร้าง AI Workflows ที่ช่วยให้คุณทำงาน สร้างคอนเทนต์ และต่อยอดรายได้ออนไลน์ได้จริง
          </p>
          <div className="text-right">
            <p className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold">1,290 บาท</p>
            <p className="text-sm opacity-75">รับจำกัด 45 คน</p>
          </div>
        </div>
      </FlowSection>

      {/* Section 2: Problem */}
      <FlowSection
        aria-label="ปัญหา"
        style={{ backgroundColor: '#0a0a0a', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — ปัญหาที่หลายคนเจอ</p>
        <hr className="border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            AI
            <br />
            Too
            <br />
            Fast?
          </h2>
        </div>
        <hr className="border-t border-white/20" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          ChatGPT, Claude, AI Agent, Automation, MCP, Content Factory... ทุกอย่างดูน่าตื่นเต้น
          แต่ในขณะเดียวกัน มันก็ <strong>โคตร overwhelming</strong>
        </p>
        <hr className="border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">สิ่งที่เกิดขึ้น</p>
            <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed opacity-75">
              ดูคลิป เซฟโพสต์ ตามเพจ ซื้อคอร์ส ลอง prompt สมัคร tool — แต่สุดท้ายยังไม่ได้สร้างระบบอะไรของตัวเองจริงๆ
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">ปัญหาจริง</p>
            <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed opacity-75">
              ไม่ใช่ว่าเราไม่รู้จัก AI — แต่เราไม่รู้ว่าจะเอา AI มาทำงานแทนเราอย่างเป็น <em>ระบบ</em> ได้ยังไง
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 3: Solution */}
      <FlowSection
        aria-label="ทางออก"
        style={{ backgroundColor: '#1A3DE8', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — ทางออก</p>
        <hr className="border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            AI As
            <br />
            Co-
            <br />
            worker
          </h2>
        </div>
        <hr className="border-t border-white/30" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          AI ไม่ควรเป็นแค่เครื่องมือที่เราถามเวลาต้องการคำตอบ แต่ AI ควรกลายเป็น{' '}
          <strong>&ldquo;เพื่อนร่วมงาน&rdquo;</strong> ที่ช่วยคิด ช่วยเขียน ช่วยวางแผน และช่วยสร้างระบบ
        </p>
        <hr className="border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          {['ช่วยคิด', 'ช่วยเขียน', 'ช่วยวางแผน', 'ช่วยสร้างคอนเทนต์', 'ช่วยทำงานซ้ำ', 'ช่วยสร้าง Workflow'].map(
            (item) => (
              <div key={item} className="min-w-[140px] flex-1">
                <p className="text-sm font-bold uppercase tracking-wider">{item}</p>
              </div>
            ),
          )}
        </div>
        <hr className="border-t border-white/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          เราเรียกมันว่า <strong>Claude Cowork</strong> — เพราะเราจะมา &ldquo;ทำงานไปด้วยกัน&rdquo;
          เปิดจอ เปิด Claude เปิด Workflow แล้วค่อยๆ สร้างระบบที่ใช้ได้จริง
        </p>
      </FlowSection>

      {/* Section 4: Workflows */}
      <FlowSection
        aria-label="Workflows"
        style={{ backgroundColor: '#F5F0E8', color: '#000' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — 8 Workflows ใน 4 วัน</p>
        <hr className="border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Build.
            <br />
            Real.
            <br />
            Systems.
          </h2>
        </div>
        <hr className="border-t border-black/30" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { num: '01', title: 'Affiliate Content Factory', desc: 'สร้างระบบ content affiliate แบบต่อเนื่อง' },
            { num: '02', title: 'Photostock Generation', desc: 'จัดระบบสร้างและ upload stock media' },
            { num: '03', title: 'AI Resume & Job Hunter', desc: 'ระบบสมัครงานอัจฉริยะ' },
            { num: '04', title: 'YouTube Shorts Factory', desc: 'pipeline ผลิต short-form video' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="min-w-[200px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">{num}</p>
              <p className="mb-1 font-bold">{title}</p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed opacity-60">{desc}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-black/30" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { num: '05', title: 'Personal Brand System', desc: 'สร้างตัวตนออนไลน์อย่างเป็นระบบ' },
            { num: '06', title: 'Content Generation', desc: 'Feed → Idea → Write → Post → Report' },
            { num: '07', title: 'Scheduled Tasks', desc: 'AI ช่วยทำงานก่อนที่คุณจะต้องถาม' },
            { num: '08', title: 'Automation Mindset', desc: 'คิดเป็นระบบ ลด friction ในงาน' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="min-w-[200px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">{num}</p>
              <p className="mb-1 font-bold">{title}</p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed opacity-60">{desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 5: Who it's for */}
      <FlowSection
        aria-label="เหมาะกับใคร"
        style={{ backgroundColor: '#000', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — เหมาะกับใคร</p>
        <hr className="border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            For
            <br />
            Every-
            <br />
            one.
          </h2>
        </div>
        <hr className="border-t border-white/20" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          ถ้าคุณรู้สึกว่า &ldquo;ฉันรู้ว่า AI สำคัญ แต่ไม่รู้จะเริ่มยังไงให้มันใช้ได้จริง&rdquo; — camp นี้เหมาะกับคุณ
        </p>
        <hr className="border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            'คนทำงานประจำ',
            'นักศึกษา / คนหางาน',
            'ฟรีแลนซ์',
            'Creator / เจ้าของเพจ',
            'คนอยากทำ Affiliate',
            'คนอยากทำ Digital Product',
          ].map((item) => (
            <div key={item} className="min-w-[160px] flex-1">
              <p className="text-sm font-bold uppercase tracking-wider">{item}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-white/20" />
        <p className="text-sm leading-relaxed opacity-50">
          ไม่จำเป็นต้องเขียนโค้ดเป็น · ไม่จำเป็นต้องเป็นสาย tech · ไม่จำเป็นต้องมีพื้นฐาน automation มาก่อน
        </p>
      </FlowSection>

      {/* Section 6: Format & Benefits */}
      <FlowSection
        aria-label="รูปแบบและสิ่งที่ได้รับ"
        style={{ backgroundColor: '#fd5200', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — รูปแบบ & สิ่งที่ได้รับ</p>
        <hr className="border-t border-white/40" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Live
            <br />
            Co-
            <br />
            work.
          </h2>
        </div>
        <hr className="border-t border-white/40" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          ไม่ใช่คอร์สวิดีโอที่อัดไว้แล้วให้ดูคนเดียว — เราจะ &ldquo;ทำงานไปด้วยกัน&rdquo; เห็น process จริง
          ปรับจริง เรียนรู้จากการลองผิดลองถูกจริง
        </p>
        <hr className="border-t border-white/40" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { title: 'Live Sessions', desc: '4 วัน cowork แบบ live online' },
            { title: 'Workflow Templates', desc: 'Prompt systems & Claude templates ที่ใช้ได้จริง' },
            { title: 'LINE Community', desc: 'กลุ่ม community สำหรับ member' },
            { title: 'Certificate', desc: 'Certificate จาก Tomorrow School' },
          ].map(({ title, desc }) => (
            <div key={title} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">{title}</p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed opacity-80">{desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 7: Why now */}
      <FlowSection
        aria-label="ทำไมต้องเรียนตอนนี้"
        style={{ backgroundColor: '#1A3DE8', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">06 — ทำไมต้องตอนนี้</p>
        <hr className="border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            The
            <br />
            Time
            <br />
            Is Now.
          </h2>
        </div>
        <hr className="border-t border-white/30" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          ช่วงต่อไป คนจะแข่งกันที่ใครมี <strong>workflow</strong> ดีกว่า — ไม่ใช่ใครรู้จัก tool เยอะกว่า
        </p>
        <hr className="border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { label: 'Workflow', desc: 'ใครมี workflow ดีกว่า ทำงานเร็วกว่า' },
            { label: 'Content', desc: 'ใครสร้าง content ได้ต่อเนื่องกว่า' },
            { label: 'Leverage', desc: 'ใครเปลี่ยนไอเดียเป็น output ได้เร็วกว่า' },
          ].map(({ label, desc }) => (
            <div key={label} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">{label}</p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed opacity-75">{desc}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-white/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          คนที่ใช้ AI เป็นระบบ จะมี advantage มากกว่าคนที่ใช้ AI แบบถามตอบไปเรื่อยๆ
        </p>
      </FlowSection>

      {/* Section 8: CTA */}
      <FlowSection
        aria-label="สมัครเลย"
        style={{ backgroundColor: '#0a0a0a', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">07 — รายละเอียด Camp</p>
        <hr className="border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Ready
            <br />
            To
            <br />
            Build?
          </h2>
        </div>
        <hr className="border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { label: 'ระยะเวลา', value: '4 วัน' },
            { label: 'รูปแบบ', value: 'Live Online Cowork' },
            { label: 'จำนวนรับ', value: 'จำกัด 45 คน' },
            { label: 'ราคา', value: '1,290 บาท' },
          ].map(({ label, value }) => (
            <div key={label} className="min-w-[140px] flex-1">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider opacity-50">{label}</p>
              <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold">{value}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-white/20" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
          Tomorrow&apos;s Claude Cowork Camp คือพื้นที่ 4 วันที่เราจะมาลองสร้าง AI workflows จริงไปด้วยกัน
          — เพื่อให้คุณเริ่มใช้ AI เป็น <strong>ระบบ</strong>
        </p>
        <hr className="border-t border-white/20" />
        <p className="mt-auto text-sm leading-relaxed opacity-50">
          โฟกัส: Claude · AI Workflows · Automation · Scheduled Tasks · Content Systems
          <br />
          Community: LINE Group · Certificate: Tomorrow School
        </p>
      </FlowSection>
    </FlowArt>
  );
}
