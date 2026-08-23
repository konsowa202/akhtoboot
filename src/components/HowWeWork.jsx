import React from 'react';

const steps = [
  { num: '01', title: 'الاستكشاف والأفكار', eng: 'Ideation', desc: 'نفهم علامتك وجمهورك، ونختار الأفكار اللي تستاهل تتصور.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { num: '02', title: 'كتابة السكربت', eng: 'Scripting', desc: 'نكتب لأول ثلاث ثواني. اللي ما يوقف فيها ما بيكمل.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { num: '03', title: 'التصوير والإنتاج', eng: 'Filming', desc: 'تصوير يناسب المنصة، وأسلوب قريب من الناس مو من الإعلانات.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { num: '04', title: 'القياس والتطوير', eng: 'Measurement', desc: 'نقرأ الأرقام، ونبني الشهر الجاي على اللي نجح.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
];

export default function HowWeWork() {
  return (
    <section id="how" data-screen-label="كيف نعمل" style={{ padding: '140px 48px', background: 'var(--ink-900)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Background Glow */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(107,31,181,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="ak-reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px', justifyContent: 'center' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>كيف نعمل</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span>
        </div>
        <h2 className="ak-reveal" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.4, color: '#fff', textAlign: 'center', margin: '18px auto 0', maxWidth: '16ch' }}>
          سير عمل واحد.<br />
          <span style={{ background: 'linear-gradient(90deg, var(--purple-400) 0%, var(--teal-400) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            لكل أذرع المحتوى.
          </span>
        </h2>
        <p className="ak-reveal" style={{ fontSize: '19px', lineHeight: 1.7, color: 'rgba(255,255,255,.7)', marginTop: '24px', maxWidth: '64ch', marginInline: 'auto', textAlign: 'center' }}>
          نشتغل كإضافة لفريقك، مو كمشروع ينتهي ويروح.
        </p>
      </div>

      <div style={{ maxWidth: '840px', margin: '80px auto 0', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ position: 'relative', width: '100%', paddingRight: '20px' }}>
          {/* Vertical Line */}
          <div className="ak-timeline-line" style={{ position: 'absolute', right: '49px', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(180deg, var(--purple-400) 0%, transparent 100%)', borderRadius: '2px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {steps.map((step, i) => (
              <div key={i} className="ak-reveal ak-timeline-row" style={{ display: 'flex', gap: '56px', position: 'relative', alignItems: 'flex-start' }}>
                
                {/* Node */}
                <div className="ak-timeline-node" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', width: '60px', flexShrink: 0 }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--ink-900)', border: '3px solid var(--purple-400)', boxShadow: '0 0 0 6px rgba(107,31,181,0.15), 0 0 20px rgba(107,31,181,0.4)', marginTop: '36px', transition: 'all 0.3s ease' }}></div>
                </div>

                {/* Premium Card */}
                <div className="ak-timeline-card" style={{ 
                  flex: 1, 
                  background: 'linear-gradient(145deg, rgba(46,36,66,.6) 0%, rgba(26,20,38,.8) 100%)', 
                  border: '1px solid rgba(255,255,255,.06)', 
                  borderRadius: '24px', 
                  padding: '40px', 
                  position: 'relative', 
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--purple-400)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)';
                }}
                >
                  {/* Big Transparent Number */}
                  <div style={{ position: 'absolute', left: '-10px', bottom: '-20px', fontSize: '180px', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', lineHeight: 0.85, direction: 'ltr' }}>
                    {step.num}
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ak-timeline-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                      {/* Colorful Icon Block */}
                      <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'linear-gradient(135deg, #a855f7, #7e22ce)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 24px rgba(126,34,206,0.4)' }}>
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d={step.icon}></path>
                        </svg>
                      </div>
                      
                      {/* Text Content */}
                      <div style={{ paddingTop: '2px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1px', color: '#a855f7', fontFamily: 'var(--font-sans)', direction: 'ltr' }}>STEP {step.num}</span>
                          <span className="ak-timeline-node" style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></span>
                          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase', direction: 'ltr' }}>{step.eng}</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '28px', color: '#fff', margin: '0 0 16px 0' }}>{step.title}</h3>
                        <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,.75)', margin: 0, maxWidth: '95%' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
