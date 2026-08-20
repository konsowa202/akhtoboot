import React from 'react';

export default function WhyUs() {
  return (
    <section id="why" data-screen-label="لماذا أخطبوط" style={{ padding: '110px 48px' }}>
      <div className="ak-reveal ak-grid2" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px' }}>
            <span>٠٤</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>لماذا أخطبوط</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, color: '#fff', margin: '18px 0 0' }}>سريعون كالمستقلّين، منضبطون كالوكالات.</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'rgba(255,255,255,.72)', margin: '22px 0 0' }}>تحصل علامتك على سرعة المبدع المستقلّ وانضباط الوكالة وجودتها في آنٍ واحد — دون أن تضطرّ للاختيار بينها.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '26px', background: 'rgba(255,255,255,.04)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>جودة بلا انتظار</div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,.62)', margin: '8px 0 0' }}>جودة استوديو في كل عمل، دون بطء الوكالات الكبرى وكلفتها.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '26px', background: 'rgba(255,255,255,.04)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>سرعة بلا فوضى</div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,.62)', margin: '8px 0 0' }}>إيقاع نشرٍ ثابت تديره عملية منظّمة، لا اجتهادات فردية.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '26px', background: 'rgba(255,255,255,.04)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>أصالة سعودية</div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,.62)', margin: '8px 0 0' }}>محتوى يفهم جمهورك المحلي ويتحدّث بلهجته وسياقه.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: '16px', padding: '26px', background: 'rgba(255,255,255,.04)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff' }}>فريق واحد مسؤول</div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,.62)', margin: '8px 0 0' }}>نقطة تواصل واحدة تتولّى كل شيء، بدل تنسيقٍ مُرهق.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
