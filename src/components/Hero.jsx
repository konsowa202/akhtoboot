import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

export default function Hero({ goContact, goServices }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const SEG = 12;
    const vids = Array.from(headerRef.current?.querySelectorAll('video') || []);
    
    const trim = (v, i) => {
      if (v._akTrim) return; 
      v._akTrim = true;
      const setup = () => {
        if (!isFinite(v.duration) || v.duration <= SEG + 1) return;
        const start = Math.min((i % 4) * SEG, Math.max(0, v.duration - SEG - 0.5));
        v.currentTime = start;
        v.addEventListener('timeupdate', () => { 
          if (v.currentTime > start + SEG) v.currentTime = start; 
        });
      };
      if (v.readyState >= 1) setup(); else v.addEventListener('loadedmetadata', setup, { once: true });
    };

    const kick = () => vids.forEach((v, i) => { 
      v.muted = true; v.defaultMuted = true; v.volume = 0; trim(v, i); 
    });
    
    kick();
    const t = setTimeout(kick, 800);
    
    let heroHidden = false;
    const playAll = () => {
      if (heroHidden) return;
      vids.forEach(v => { 
        v.muted = true; v.defaultMuted = true; v.volume = 0; 
        v.play().catch(() => {}); 
      });
    };
    
    playAll();
    const rot = setInterval(playAll, 5000);
    
    let vio;
    if (headerRef.current) {
      vio = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          heroHidden = !e.isIntersecting;
          vids.forEach(v => { 
            if (e.isIntersecting) { v.play().catch(() => {}); } 
            else { v.pause(); } 
          });
        });
      }, { threshold: 0.05 });
      vio.observe(headerRef.current);
    }
    
    return () => {
      clearTimeout(t);
      clearInterval(rot);
      if (vio) vio.disconnect();
    };
  }, []);

  return (
    <header ref={headerRef} data-screen-label="الهيرو" style={{ position: 'relative', height: '100vh', minHeight: '720px', overflow: 'hidden' }}>
      <div className="ak-hero-grid" style={{ position: 'absolute', inset: '-70px', gap: '14px', transform: 'rotate(-3deg) scale(1.14)' }}>
        <div className="ak-anim" style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'ak-scrollY 30s linear infinite' }}>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-5.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-1.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/coverage.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/bts.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
        </div>
        <div className="ak-anim" style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'ak-scrollY 42s linear infinite', marginTop: '-180px' }}>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-4.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/promo.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-5.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-1.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
        </div>
        <div className="ak-anim" style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'ak-scrollY 36s linear infinite', marginTop: '-90px' }}>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-6.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-6.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/ad.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-4.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
        </div>
        <div className="ak-anim" style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'ak-scrollY 48s linear infinite', marginTop: '-240px' }}>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-5.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/coverage.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/bts.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
          <video autoPlay muted loop playsInline preload="auto" src="/reels/reel-5.mp4" style={{ width: '100%', aspectRatio: '9/15', objectFit: 'cover', borderRadius: '14px', background: 'var(--ink-800)' }}></video>
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 45%, rgba(26,20,38,.82), rgba(26,20,38,.55) 55%, rgba(26,20,38,.35)), linear-gradient(180deg, rgba(26,20,38,.75), transparent 25%, transparent 70%, rgba(26,20,38,.98)), radial-gradient(ellipse at 50% 100%, rgba(107,31,181,.35), transparent 60%)' }}></div>
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 48px' }}>
        <Logo variant="full" lang="ar" tone="inverse" size={34} />
        <div className="ak-navlinks" style={{ display: 'flex', gap: '32px', fontSize: '15px' }}>
          <a href="#services" style={{ color: 'rgba(255,255,255,.85)' }}>خدماتنا</a>
          <a href="#how" style={{ color: 'rgba(255,255,255,.85)' }}>كيف نعمل</a>
          <a href="#why" style={{ color: 'rgba(255,255,255,.85)' }}>لماذا أخطبوط</a>
          <a href="#contact" style={{ color: 'rgba(255,255,255,.85)' }}>تواصل</a>
        </div>
        <button onClick={goContact} style={{ background: 'rgba(46,36,66,.75)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', borderRadius: '999px', padding: '10px 22px', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'background 140ms var(--ease-out)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.22)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(46,36,66,.75)'} onMouseDown={e => e.currentTarget.style.transform = 'translateY(1px)'} onMouseUp={e => e.currentTarget.style.transform = 'none'}>ابدأ مشروعك</button>
      </nav>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center', padding: '0 48px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: '26px auto 0', maxWidth: '13ch', textShadow: '0 4px 40px rgba(26,20,38,.6)' }}>نصنع المحتوى الذي يُذكَر.</h1>
          <p style={{ fontSize: '20px', lineHeight: 1.7, color: 'rgba(255,255,255,.88)', maxWidth: '44ch', margin: '22px auto 0' }}>إبداع وإنتاج ونشر تحت سقف واحد — من الفكرة لشاشة جمهورك.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '34px', flexWrap: 'wrap' }}>
            <button onClick={goContact} style={{ background: 'var(--brand)', color: '#fff', border: 'none', borderRadius: '999px', padding: '17px 40px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '17px', cursor: 'pointer', boxShadow: 'var(--shadow-brand)', transition: 'background 140ms var(--ease-out)' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--brand-hover)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--brand)'} onMouseDown={e => e.currentTarget.style.transform = 'translateY(1px)'} onMouseUp={e => e.currentTarget.style.transform = 'none'}>ابدأ مشروعك</button>
            <button onClick={goServices} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(255,255,255,.4)', background: 'rgba(46,36,66,.6)', color: '#fff', borderRadius: '999px', padding: '17px 36px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '17px', cursor: 'pointer', transition: 'background 140ms var(--ease-out)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.18)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(46,36,66,.6)'} onMouseDown={e => e.currentTarget.style.transform = 'translateY(1px)'} onMouseUp={e => e.currentTarget.style.transform = 'none'}>اكتشف خدماتنا</button>
          </div>
        </div>
      </div>
      <div className="ak-herofoot" style={{ position: 'absolute', bottom: '26px', left: '48px', right: '48px', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.6)', fontSize: '14px' }}>
        <span>فيديوهات قصيرة · باقات شهرية · حملات تجارية · مبدعون ومؤثرون</span>
      </div>
    </header>
  );
}
