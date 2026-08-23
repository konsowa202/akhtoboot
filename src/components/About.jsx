import React from 'react';

export default function About() {
  return (
    <section id="about" data-screen-label="عن أخطبوط" style={{ padding: '110px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-160px', right: '-80px', width: '460px', height: '460px', color: 'rgba(255,255,255,.04)' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path fill="currentColor" d="M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z"></path>
        </svg>
      </div>
      <div className="ak-reveal ak-grid2" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'flex-start', position: 'relative' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px' }}>
            <span>٠١</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>عن أخطبوط</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '18px 0 0' }}>بيت لصناعة المحتوى.</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'rgba(255,255,255,.72)', margin: '22px 0 0', maxWidth: '55ch' }}>نشتغل على المحتوى من أوله لآخره. الفكرة، السكربت، التصوير، المونتاج، النشر — كله عندنا، وما تحتاج تدور على أحد ثاني.<br/><br/>بدايتنا من جدة، ونعرف السوق اللي نشتغل فيه.<br/><br/>اسمنا يشرح شغلنا: ذراع لكل مرحلة، وعقل واحد يديرها.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '28px' }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '40px', color: 'var(--purple-300)' }}>٣ في ١</div><div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', marginTop: '6px' }}>إبداع + إنتاج + توزيع</div></div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '28px' }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '40px', color: 'var(--purple-300)' }}>٢٤ ساعة</div><div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', marginTop: '6px' }}>نرد على طلبك</div></div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '28px' }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '40px', color: 'var(--purple-300)' }}>١ نقطة</div><div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', marginTop: '6px' }}>تواصل مسؤولة</div></div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '28px' }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '40px', color: 'var(--purple-300)' }}>١٠٠٪</div><div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', marginTop: '6px' }}>محتوى يولد سعوديًا</div></div>
        </div>
      </div>
    </section>
  );
}
