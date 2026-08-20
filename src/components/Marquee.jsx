import React from 'react';

export default function Marquee() {
  const items = (
    <>
      <span>إبداع</span><span style={{ color: 'var(--purple-300)' }}>◆</span>
      <span>إنتاج</span><span style={{ color: 'var(--purple-300)' }}>◆</span>
      <span>توزيع</span><span style={{ color: 'var(--purple-300)' }}>◆</span>
      <span>إيقاع يومي</span><span style={{ color: 'var(--purple-300)' }}>◆</span>
      <span>أصالة سعودية</span><span style={{ color: 'var(--purple-300)' }}>◆</span>
    </>
  );

  const group = (
    <div style={{ display: 'flex', gap: '56px', paddingInlineEnd: '56px' }}>
      {items}
      {items}
      {items}
    </div>
  );

  return (
    <div style={{ borderBlock: '1px solid rgba(255,255,255,.1)', padding: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
      <div className="ak-anim" style={{ display: 'flex', flex: 'none', animation: 'ak-marquee 30s linear infinite', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'rgba(255,255,255,.5)' }}>
        {group}
      </div>
      <div className="ak-anim" aria-hidden="true" style={{ display: 'flex', flex: 'none', animation: 'ak-marquee 30s linear infinite', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'rgba(255,255,255,.5)' }}>
        {group}
      </div>
    </div>
  );
}
