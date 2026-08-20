/* global React, lucide */
const { useState } = React;

const NS = window.AkhtobootDesignSystem_1e74e8;
const { Logo, Button, Badge, Card, Avatar, OctopusMark } = NS;

// Lucide icon helper -> inline SVG via currentColor.
// Lucide icon data is ["svg", {attrs}, [["path",{...}], ...]]
function Icon({ name, size = 20, ...rest }) {
  const store = (typeof lucide !== 'undefined' && (lucide.icons || lucide)) || {};
  const node = store[name];
  if (!Array.isArray(node)) return null;
  const children = node[2] || [];
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', ...rest,
  }, children.map(([tag, a], i) => React.createElement(tag, { key: i, ...a })));
}

const EPISODES = [
  { n: '٤٢', tag: 'حلقة جديدة', tone: 'brand', title: 'لماذا ننسى ما نقرأ؟', sub: 'في الذاكرة والقراءة', dur: '٤٨ دقيقة', g: ['#6B1FB5', '#340e5a'] },
  { n: '٤١', tag: 'الأكثر استماعًا', tone: 'accent', title: 'أعماق الخوارزميات', sub: 'كيف تقرّر الآلة', dur: '٣٦ دقيقة', g: ['#377ea2', '#0d1f28'] },
  { n: '٤٠', tag: 'حوار', tone: 'neutral', title: 'صناعة الفضول', sub: 'مع ضيف الأسبوع', dur: '٥٢ دقيقة', g: ['#173543', '#0d1f28'] },
];

function Header() {
  const links = ['الرئيسية', 'البودكاست', 'المقالات', 'عن أخطبوط'];
  const [active, setActive] = useState(0);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 40px', background: 'rgba(250,249,252,0.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <Logo variant="full" lang="ar" tone="brand" size={36} />
      <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {links.map((l, i) => (
          <a key={l} onClick={() => setActive(i)} style={{
            cursor: 'pointer', fontSize: 15, fontWeight: 500,
            color: active === i ? 'var(--brand)' : 'var(--text-body)', textDecoration: 'none',
          }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button variant="ghost" size="sm" startIcon={<Icon name="Search" size={18} />}>بحث</Button>
        <Button variant="primary" size="sm" startIcon={<Icon name="Play" size={16} />}>استمع الآن</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position: 'relative', padding: '72px 40px 56px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', insetInlineStart: '-60px', top: '-30px', opacity: 0.06, pointerEvents: 'none' }}>
        <OctopusMark size={420} color="var(--purple-500)" />
      </div>
      <div style={{ position: 'relative', maxWidth: 880 }}>
        <span className="ak-eyebrow">منصّة المعرفة الصوتية</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '14px 0 18px' }}>
          حبرٌ من أعماق<br />المعرفة.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 560, margin: '0 0 28px' }}>
          ثمانية أذرع، فكرةٌ واحدة. بودكاست ومقالات تغوص في الأفكار الكبيرة وتُخرجها واضحةً بين يديك.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="primary" size="lg" startIcon={<Icon name="Headphones" size={20} />}>ابدأ الاستماع</Button>
          <Button variant="outline" size="lg">تصفّح الحلقات</Button>
        </div>
      </div>
    </section>
  );
}

function EpisodeGrid() {
  return (
    <section style={{ padding: '8px 40px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: 0, color: 'var(--text-strong)' }}>أحدث الحلقات</h2>
        <a style={{ color: 'var(--text-link)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          الكل <Icon name="ArrowLeft" size={16} />
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {EPISODES.map((e) => (
          <Card key={e.n} interactive elevation="sm" padding="0" style={{ overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 168, background: `linear-gradient(150deg, ${e.g[0]}, ${e.g[1]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 72, color: 'rgba(255,255,255,0.92)', lineHeight: 1 }}>{e.n}</span>
              <span style={{ position: 'absolute', insetInlineEnd: 14, top: 14 }}><Badge tone={e.tone} solid>{e.tag}</Badge></span>
              <span style={{ position: 'absolute', insetInlineStart: 14, bottom: 14, width: 44, height: 44, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', boxShadow: 'var(--shadow-md)' }}>
                <Icon name="Play" size={20} />
              </span>
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 4px', color: 'var(--text-strong)' }}>{e.title}</h3>
              <p style={{ margin: '0 0 12px', fontSize: 14, color: 'var(--text-muted)' }}>{e.sub}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-subtle)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="Clock" size={15} /> {e.dur}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="Bookmark" size={15} /> حفظ</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ margin: '0 40px 48px', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(160deg, var(--purple-600), var(--teal-800))', padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', insetInlineEnd: -30, bottom: -50, opacity: 0.16 }}><OctopusMark size={260} color="#fff" /></div>
      <div style={{ position: 'relative', maxWidth: 560 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: '#fff', margin: '0 0 12px', lineHeight: 1.1 }}>انضمّ إلى أعماق أخطبوط</h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.6, margin: '0 0 24px' }}>حلقة جديدة كل أسبوع، ومقالات تصلك أولًا. مجّانًا.</p>
        <form style={{ display: 'flex', gap: 10, maxWidth: 440 }} onSubmit={(ev) => ev.preventDefault()}>
          <input placeholder="بريدك الإلكتروني" style={{ flex: 1, height: 54, padding: '0 18px', borderRadius: 'var(--radius-md)', border: 'none', fontFamily: 'var(--font-body)', fontSize: 16, outline: 'none' }} />
          <Button variant="secondary" size="lg" type="submit">اشترك</Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Logo variant="full" lang="ar" tone="inverse" size={30} />
      <div style={{ display: 'flex', gap: 18, color: 'var(--ink-300)' }}>
        {['Twitter', 'Youtube', 'Instagram', 'Rss'].map((n) => (
          <span key={n} style={{ cursor: 'pointer' }}><Icon name={n} size={20} /></span>
        ))}
      </div>
      <span style={{ color: 'var(--ink-400)', fontSize: 13 }}>© ٢٠٢٦ أخطبوط</span>
    </footer>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
      <Header />
      <Hero />
      <EpisodeGrid />
      <CTA />
      <Footer />
    </div>
  );
}

window.AkhtobootWeb = { App };
