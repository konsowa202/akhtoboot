import React, { useState, useEffect, useRef } from 'react';

const videos = [
  { id: 1, title: 'سكتش', src: '/reels/reel-1.mp4', cat: 'محتوى سوشال ميديا' },
  { id: 2, title: 'تغطية لقاءات', src: '/reels/تغطية لقاءات.mp4', cat: 'محتوى سوشال ميديا' },
  { id: 3, title: 'خلف الكواليس', src: '/reels/خلف الكواليس.mp4', cat: 'محتوى سوشال ميديا' },
  { id: 4, title: 'فيديو دعائي', src: '/reels/فيديو دعائي.mp4', cat: 'محتوى سوشال ميديا' },
  { id: 5, title: 'فيديو إعلاني', src: '/reels/فيديو اعلاني.mp4', cat: 'محتوى سوشال ميديا' },
  { id: 6, title: 'لقاء تفاعلي - تيك توك', src: '/uploads/تيك توك العين العزيزية 1.mp4', cat: 'سوشيال ميديا' },
  { id: 7, title: 'إعلان أخطبوط 1', src: '/uploads/فيديو اخطبوط 1 (1).mp4', cat: 'إعلانات قصيرة' },
  { id: 8, title: 'كواليس الإنتاج', src: '/reels/reel-4.mp4', cat: 'يوميات' },
];

export default function VideoLibrary() {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const child = el.children[index];
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.offsetWidth / 2 + child.offsetWidth / 2,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    let interval;
    let observer;
    let isVisible = false;
    const isMobile = window.innerWidth <= 860;
    
    if (isMobile) {
      observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { threshold: 0.1 });
      
      if (scrollRef.current) {
        observer.observe(scrollRef.current);
      }

      interval = setInterval(() => {
        if (!isVisible || activeVideo !== null) return;
        setActiveIndex(prev => {
          let nextIndex = prev + 1;
          if (nextIndex >= videos.length) nextIndex = 0;
          
          const el = scrollRef.current;
          const child = el?.children[nextIndex];
          if (el && child) {
            el.scrollTo({
              left: child.offsetLeft - el.offsetWidth / 2 + child.offsetWidth / 2,
              behavior: 'smooth'
            });
          }
          return nextIndex;
        });
      }, 3500);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [activeVideo]);

  const handleScroll = (e) => {
    if (window.innerWidth > 860) return;
    const el = e.target;
    const scrollPos = Math.abs(el.scrollLeft);
    const cardWidth = el.children[0].offsetWidth;
    const index = Math.round(scrollPos / cardWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="library" data-screen-label="مكتبة المحتوى" style={{ padding: '140px 48px', background: 'var(--ink-900)', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        
        <div className="ak-reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px', justifyContent: 'center' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>مكتبة المحتوى</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span>
        </div>
        <h2 className="ak-reveal" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, color: '#fff', textAlign: 'center', margin: '18px 0 0' }}>
          استكشف <span style={{ color: 'var(--purple-400)' }}>مكتبتنا</span> المتنوعة.
        </h2>
        <p className="ak-reveal" style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,.7)', textAlign: 'center', marginTop: '24px', maxWidth: '60ch', marginInline: 'auto' }}>
          تصفح مجموعة من أعمالنا السابقة، حملاتنا الإعلانية، وتغطياتنا، واضغط على أي فيديو لتشغيله بكامل الشاشة.
        </p>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="ak-reveal ak-grid4 ak-vid-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '64px' }}
        >
          {videos.map((v, i) => (
            <div 
              key={v.id}
              onClick={() => setActiveVideo(v.src)}
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'var(--ink-800)',
                cursor: 'pointer',
                transform: 'scale(1)',
                transition: 'transform 0.3s'
              }}
              className="ak-vid-card"
            >
              <video 
                src={v.src} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                muted
                playsInline
                onMouseOver={e => e.target.play()}
                onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
              ></video>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(26,20,38,0.9) 0%, rgba(26,20,38,0) 60%)', pointerEvents: 'none' }}></div>
              
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', pointerEvents: 'none' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--purple-300)', letterSpacing: '1px' }}>{v.cat}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff', margin: '4px 0 0' }}>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div style={{ display: 'none', justifyContent: 'center', gap: '8px', marginTop: '32px' }} className="ak-mobile-dots">
          {videos.map((_, i) => (
            <div 
              key={i} 
              onClick={() => scrollTo(i)}
              style={{ width: activeIndex === i ? '24px' : '8px', height: '8px', borderRadius: '4px', background: activeIndex === i ? 'var(--purple-400)' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s', cursor: 'pointer' }}
            ></div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(10,8,15,0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button 
            onClick={() => setActiveVideo(null)}
            style={{ position: 'absolute', top: '32px', right: '48px', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <video 
            src={activeVideo} 
            controls 
            autoPlay 
            style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', objectFit: 'contain' }}
          ></video>
        </div>
      )}
    </section>
  );
}
