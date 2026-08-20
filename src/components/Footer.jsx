import React, { useState } from 'react';
import Logo from './Logo';

export default function Footer({ email }) {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <footer id="contact" data-screen-label="التواصل" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.1)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 120%, rgba(107,31,181,.45), transparent 65%)' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', right: '40px', width: '420px', height: '420px', color: 'rgba(255,255,255,.05)' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path fill="currentColor" d="M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z"></path>
        </svg>
      </div>
      <div className="ak-fpad" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '110px 48px 56px', position: 'relative' }}>
        <div className="ak-reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.15, color: '#fff', margin: 0 }}>لنرسم أول خطة محتوى معًا.</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,.72)', margin: '18px auto 0', maxWidth: '44ch' }}>جاهزون للبدء مع علامتك — راسلنا ونعود إليك خلال ٢٤ ساعة.</p>
          <a 
            href={`mailto:${email}`} 
            style={{ 
              display: 'inline-flex', alignItems: 'center', marginTop: '32px', background: hoverBtn ? 'var(--brand-hover)' : 'var(--brand)', 
              color: '#fff', borderRadius: '999px', padding: '17px 44px', fontWeight: 700, fontSize: '17px', 
              boxShadow: 'var(--shadow-brand)', transition: 'background 140ms var(--ease-out)',
              transform: activeBtn ? 'translateY(1px)' : 'none',
              textDecoration: 'none'
            }}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            onMouseDown={() => setActiveBtn(true)}
            onMouseUp={() => setActiveBtn(false)}
          >
            راسلنا الآن
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', marginTop: '72px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,.12)', flexWrap: 'wrap', textAlign: 'center' }}>
          <div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>الموقع</div><div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, direction: 'ltr', color: '#fff' }}>akhtoboot.com</div></div>
          <div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>البريد</div><div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, direction: 'ltr', color: '#fff' }}>{email}</div></div>
          <div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>المقر</div><div style={{ fontWeight: 700, color: '#fff' }}>جدة، المملكة العربية السعودية</div></div>
        </div>
        <div className="ak-fbottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '56px' }}>
          <Logo variant="full" lang="ar" tone="inverse" size={30} />
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.5)' }}>© ٢٠٢٦ أخطبوط · شريكك في صناعة المحتوى</div>
        </div>
      </div>
    </footer>
  );
}
