import React from 'react';

const reviews = [
  { id: 1, name: 'أحمد صالح', role: 'مدير تسويق', text: 'فريق أخطبوط كان شريكاً حقيقياً في إطلاق حملتنا. احترافية في التعامل وجودة تفوق التوقعات في الإنتاج.' },
  { id: 2, name: 'نورة السعيد', role: 'صانعة محتوى', text: 'العمل معهم يختصر الكثير من الوقت والجهد. يفهمون الهوية المحلية ويقدمون أفكاراً خارج الصندوق.' },
  { id: 3, name: 'محمد الغامدي', role: 'مؤسس شركة ناشئة', text: 'كنا نعاني من عدم الانتظام في النشر، ولكن مع باقات أخطبوط، أصبح لدينا محتوى يومي بجودة ممتازة.' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-screen-label="آراء العملاء" style={{ padding: '110px 48px', background: 'var(--ink-900)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div className="ak-reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px', justifyContent: 'center' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>آراء شركائنا</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span>
        </div>
        <h2 className="ak-reveal" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, color: '#fff', margin: '18px auto 0', textAlign: 'center', maxWidth: '16ch' }}>
          ثقة بنيناها بالنتائج.
        </h2>
        
        <div className="ak-reveal ak-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '56px' }}>
          {reviews.map((r) => (
            <div key={r.id} style={{ background: 'rgba(26,20,38,.5)', border: '1px solid rgba(255,255,255,.08)', padding: '36px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ color: 'var(--purple-400)', display: 'flex', gap: '4px' }}>
                 {[1,2,3,4,5].map(s => <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,.8)', flex: 1, margin: 0 }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(107,31,181,0.2)', color: 'var(--purple-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px', border: '1px solid rgba(107,31,181,0.3)' }}>
                  {r.name.split(' ').map(n=>n[0]).join('').substring(0,2)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>{r.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', marginTop: '2px' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
