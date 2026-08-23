import React, { useState } from 'react';
import Logo from './Logo';

export default function Contact({ email }) {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { id: 'short', label: 'فيديوهات قصيرة' },
    { id: 'monthly', label: 'باقة شهرية' },
    { id: 'campaign', label: 'حملة إبداعية' },
    { id: 'other', label: 'أخرى' }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const serviceLabel = selectedService ? services.find(s => s.id === selectedService).label : 'لم يحدد';
    
    formData.append('نوع الخدمة', serviceLabel);
    formData.append('_captcha', 'false');
    formData.append('_subject', 'طلب جديد من موقع أخطبوط!');
    formData.append('_template', 'table');

    try {
      const res = await fetch("https://formsubmit.co/ajax/Akhtoboot@gmail.com", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setIsSuccess(true);
        e.target.reset();
        setSelectedService('');
      } else {
        alert("حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.");
      }
    } catch (error) {
      alert("حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.");
    }
    setIsSubmitting(false);
  };

  return (
    <footer id="contact" data-screen-label="التواصل" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.1)', background: 'var(--ink-900)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 120%, rgba(107,31,181,.45), transparent 65%)' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', right: '40px', width: '420px', height: '420px', color: 'rgba(255,255,255,.05)' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path fill="currentColor" d="M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z"></path>
        </svg>
      </div>
      
      <div className="ak-fpad" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '110px 48px 56px', position: 'relative' }}>
        
        <div className="ak-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.15, color: '#fff', margin: 0 }}>لنرسم أول خطة محتوى معًا.</h2>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,.72)', margin: '18px 0 32px', maxWidth: '44ch' }}>جاهزون للبدء مع علامتك — املأ النموذج وسنعود إليك خلال ٢٤ ساعة.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>البريد الإلكتروني</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, direction: 'ltr', color: '#fff', width: 'fit-content' }}>{email}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>المقر</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>جدة، المملكة العربية السعودية</div>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'rgba(26,20,38,.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.1)', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--green-50)', color: 'var(--green-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '28px', color: '#fff', margin: '0 0 12px' }}>تم إرسال طلبك بنجاح! 🎉</h3>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة طلبك والرد عليك في أقرب وقت.</p>
                <button onClick={() => setIsSuccess(false)} style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.2)', padding: '14px 28px', borderRadius: '12px', cursor: 'pointer', fontWeight: 700, fontSize: '15px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,.15)'} onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,.1)'}>
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <input type="text" name="الاسم" required placeholder="الاسم الكريم" style={{ width: '100%', boxSizing: 'border-box', padding: '16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', color: '#fff', fontSize: '15px', outline: 'none', transition: 'border 0.2s' }} onFocus={e => e.target.style.borderColor = 'var(--brand)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'} />
                  <input type="email" name="البريد الإلكتروني" placeholder="البريد الإلكتروني (اختياري)" style={{ width: '100%', boxSizing: 'border-box', padding: '16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', color: '#fff', fontSize: '15px', outline: 'none', transition: 'border 0.2s' }} onFocus={e => e.target.style.borderColor = 'var(--brand)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'} />
                </div>
                
                <div style={{ display: 'flex', gap: '12px', direction: 'ltr' }}>
                  <div style={{ width: '90px', boxSizing: 'border-box', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', color: '#fff', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    +966
                  </div>
                  <input type="tel" name="رقم الجوال" required placeholder="رقم الجوال" dir="rtl" style={{ flex: 1, boxSizing: 'border-box', minWidth: 0, padding: '16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', color: '#fff', fontSize: '15px', outline: 'none', transition: 'border 0.2s' }} onFocus={e => e.target.style.borderColor = 'var(--brand)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'} />
                </div>
                
                <div style={{ position: 'relative' }}>
                  <div 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ width: '100%', boxSizing: 'border-box', padding: '16px', background: 'rgba(255,255,255,.05)', border: '1px solid', borderColor: dropdownOpen ? 'var(--brand)' : 'rgba(255,255,255,.1)', borderRadius: '12px', color: selectedService ? '#fff' : 'rgba(255,255,255,.5)', fontSize: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border 0.2s' }}
                  >
                    {selectedService ? services.find(s => s.id === selectedService).label : 'نوع الخدمة المطلوبة...'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  {dropdownOpen && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', background: '#1c1528', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', overflow: 'hidden', zIndex: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                      {services.map(s => (
                        <div 
                          key={s.id} 
                          onClick={() => { setSelectedService(s.id); setDropdownOpen(false); }}
                          style={{ padding: '14px 16px', color: '#fff', cursor: 'pointer', fontSize: '15px', transition: 'background 0.2s' }}
                          onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,.05)'}
                          onMouseLeave={e => e.target.style.background = 'transparent'}
                        >
                          {s.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <textarea name="الرسالة" required placeholder="نبذة عن المشروع أو الفكرة..." rows={4} style={{ width: '100%', boxSizing: 'border-box', padding: '16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '12px', color: '#fff', fontSize: '15px', outline: 'none', resize: 'vertical', transition: 'border 0.2s' }} onFocus={e => e.target.style.borderColor = 'var(--brand)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'}></textarea>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    marginTop: '12px',
                    width: '100%',
                    background: hoverBtn ? '#8437d8' : 'var(--brand)', 
                    color: '#fff', border: 'none', borderRadius: '12px', padding: '18px', fontWeight: 700, fontSize: '16px', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'all 200ms var(--ease-out)',
                    transform: activeBtn && !isSubmitting ? 'scale(0.98)' : 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoverBtn(true)}
                  onMouseLeave={() => {setHoverBtn(false); setActiveBtn(false);}}
                  onMouseDown={() => setActiveBtn(true)}
                  onMouseUp={() => setActiveBtn(false)}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                  {hoverBtn && !isSubmitting && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', transform: 'skewX(-20deg)', animation: 'ak-shine 0.8s' }}></div>}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="ak-fbottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '90px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <Logo variant="full" lang="ar" tone="inverse" size={30} />
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.5)' }}>© ٢٠٢٦ أخطبوط · شريكك في صناعة المحتوى</div>
        </div>
      </div>
    </footer>
  );
}
