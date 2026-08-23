import React, { useState } from 'react';

function ServiceRow({ num, title, desc, tag }) {
  const [hover, setHover] = useState(false);
  return (
    <div 
      className="ak-row" 
      style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', 
        padding: '34px 0', borderBottom: '1px solid rgba(255,255,255,.12)', 
        transition: 'padding-inline-start 200ms var(--ease-out)',
        paddingInlineStart: hover ? '20px' : '0'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.4)' }}>{num}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.6rem, 5vw, 2.75rem)', color: '#fff', lineHeight: 1.2 }}>{title}</span>
        {tag && <span style={{ background: 'var(--brand)', color: '#fff', borderRadius: '999px', padding: '4px 14px', fontSize: '12px', fontWeight: 700 }}>{tag}</span>}
      </div>
      <span style={{ fontSize: '15px', color: 'rgba(255,255,255,.55)', flex: 'none', marginTop: '4px' }}>{desc}</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" data-screen-label="الخدمات" style={{ padding: '40px 48px 110px' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div className="ak-reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--purple-300)', fontWeight: 700, fontSize: '14px' }}>
          <span>٠٢</span><span style={{ width: '28px', height: '1px', background: 'var(--purple-300)' }}></span><span>خدماتنا</span>
        </div>
        <div className="ak-reveal" style={{ marginTop: '28px', borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <ServiceRow num="٠١" title="الفيديوهات القصيرة" tag="الخدمة الأساسية" desc="سكربت · تصوير · مونتاج · نشر يومي" />
          <ServiceRow num="٠٢" title="الباقات الشهرية" desc="تدفّق مستمر بسعر ثابت ومتوقَّع" />
          <ServiceRow num="٠٣" title="الحملات التجارية" desc="من الإستراتيجية إلى التنفيذ" />
          <ServiceRow num="٠٤" title="المبدعون والمؤثرون" desc="الوجه الأنسب لجمهورك من شبكتنا" />
        </div>
      </div>
    </section>
  );
}
