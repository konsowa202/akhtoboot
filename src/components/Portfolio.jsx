import React, { useState, useEffect, useRef } from 'react';

const works = [
  { id: 1, title: 'بودكاست ثمانية', cat: 'تنسيق مبدعين', vid: '/uploads/فيديو اخطبوط 1 (1).mp4' },
  { id: 2, title: 'حملة العين العزيزية', cat: 'إنتاج كامل', vid: '/uploads/فيديو العين العزيزية 2(6).mp4' },
  { id: 3, title: 'تغطية المعرض', cat: 'فيديوهات قصيرة', vid: '/uploads/تيك توك العين العزيزية 1.mp4' },
  { id: 4, title: 'كواليس الاستوديو', cat: 'يوميات', vid: '/uploads/تلفزيون اخطبوط .mp4' },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const child = el.children[index];
    if (child) {
      // Use scrollTo on the container to prevent vertical page jumping
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
        if (!isVisible || hovered !== null) return;
        setActiveIndex(prev => {
          let nextIndex = prev + 1;
          if (nextIndex >= works.length) nextIndex = 0;
          
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
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [hovered]);

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
    <section id="work" data-screen-label="أعمالنا" style={{ padding: '110px 48px', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div className="ak-reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px' }}>
          <span>٠٣</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>أعمالنا</span>
        </div>
        <div className="ak-reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '18px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, color: '#fff', margin: 0, maxWidth: '20ch' }}>
            نصنع المحتوى الذي يتحدث عن نفسه.
          </h2>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="ak-reveal ak-grid4 ak-vid-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '48px' }}
        >
          {works.map((w, i) => (
            <div 
              key={w.id} 
              className="ak-vid-card"
              style={{ 
                position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                transform: hovered === i ? 'translateY(-6px)' : 'none',
                transition: 'transform 300ms var(--ease-out), box-shadow 300ms var(--ease-out)',
                boxShadow: hovered === i ? '0 12px 30px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.1)',
                background: 'var(--ink-800)'
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <video 
                autoPlay muted loop playsInline 
                src={w.vid} 
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms var(--ease-out)', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }}
              ></video>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px', background: 'linear-gradient(0deg, rgba(26,20,38,.9) 0%, rgba(26,20,38,.2) 40%, transparent 100%)' }}>
                <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#fff', padding: '6px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, width: 'fit-content', marginBottom: '12px' }}>
                  {w.cat}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#fff', margin: 0 }}>
                  {w.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div style={{ display: 'none', justifyContent: 'center', gap: '8px', marginTop: '32px' }} className="ak-mobile-dots">
          {works.map((_, i) => (
            <div 
              key={i} 
              onClick={() => scrollTo(i)}
              style={{ width: activeIndex === i ? '24px' : '8px', height: '8px', borderRadius: '4px', background: activeIndex === i ? 'var(--purple-400)' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s', cursor: 'pointer' }}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
