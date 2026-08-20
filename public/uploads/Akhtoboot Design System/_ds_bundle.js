/* @ds-bundle: {"format":3,"namespace":"AkhtobootDesignSystem_1e74e8","components":[{"name":"OctopusMark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"62db636a81e7","components/core/Avatar.jsx":"556893b7754d","components/core/Badge.jsx":"b4071078429b","components/core/Button.jsx":"8972e9082876","components/core/Card.jsx":"56e8906c9fef","components/core/Input.jsx":"72e51bdc09e1","ui_kits/web/Surfaces.jsx":"d6da6e8acb48"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AkhtobootDesignSystem_1e74e8 = window.AkhtobootDesignSystem_1e74e8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Akhtoboot octopus mark — non-detailed dome silhouette with four
 * tentacle lobes. Inherits `color` via currentColor.
 */
function OctopusMark({
  size = 40,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    role: "img",
    "aria-label": "Akhtoboot",
    style: {
      color: color,
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z"
  }));
}

/**
 * Full Akhtoboot logo lockup: octopus mark + Thmanyah wordmark.
 * variant: 'full' | 'mark' | 'wordmark'
 * lang: 'ar' (أخطبوط) | 'en' (Akhtoboot)
 * tone: 'brand' (purple) | 'ink' | 'inverse' (white, for dark/colored bg)
 */
function Logo({
  variant = 'full',
  lang = 'ar',
  tone = 'brand',
  size = 40,
  style,
  ...rest
}) {
  const palette = {
    brand: {
      mark: 'var(--purple-500)',
      text: 'var(--ink-900)'
    },
    ink: {
      mark: 'var(--ink-900)',
      text: 'var(--ink-900)'
    },
    inverse: {
      mark: '#ffffff',
      text: '#ffffff'
    }
  }[tone] || {
    mark: 'var(--purple-500)',
    text: 'var(--ink-900)'
  };
  const word = lang === 'en' ? 'Akhtoboot' : 'أخطبوط';
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement(OctopusMark, _extends({
      size: size,
      color: palette.mark,
      style: style
    }, rest));
  }
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: lang === 'en' ? 'var(--font-sans)' : 'var(--font-display)',
      fontWeight: 900,
      fontSize: lang === 'en' ? size * 0.78 : size * 0.86,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: palette.text,
      direction: lang === 'en' ? 'ltr' : 'rtl'
    }
  }, word);
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        ...style
      }
    }, rest), wordmark);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(OctopusMark, {
    size: size,
    color: palette.mark
  }), wordmark);
}
Object.assign(__ds_scope, { OctopusMark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: 32,
  md: 44,
  lg: 64
};

/** User/entity avatar — image, initials, or octopus fallback. */
function Avatar({
  src,
  name,
  size = 'md',
  tone = 'brand',
  style,
  ...rest
}) {
  const px = sizeMap[size] || size;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : null;
  const toneBg = {
    brand: 'var(--purple-100)',
    accent: 'var(--teal-100)',
    neutral: 'var(--ink-100)'
  }[tone] || 'var(--purple-100)';
  const toneFg = {
    brand: 'var(--purple-700)',
    accent: 'var(--teal-700)',
    neutral: 'var(--ink-600)'
  }[tone] || 'var(--purple-700)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: '50%',
      overflow: 'hidden',
      flex: 'none',
      background: toneBg,
      color: toneFg,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: px * 0.4,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials ? initials : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: px * 0.62,
    height: px * 0.62,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z"
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const palettes = {
  brand: {
    bg: 'var(--purple-50)',
    fg: 'var(--purple-700)',
    bd: 'var(--purple-200)'
  },
  accent: {
    bg: 'var(--teal-100)',
    fg: 'var(--teal-700)',
    bd: 'var(--teal-200)'
  },
  neutral: {
    bg: 'var(--ink-50)',
    fg: 'var(--ink-600)',
    bd: 'var(--ink-200)'
  },
  success: {
    bg: 'var(--success-subtle)',
    fg: 'var(--green-700)',
    bd: 'var(--green-500)'
  },
  warning: {
    bg: 'var(--warning-subtle)',
    fg: 'var(--amber-700)',
    bd: 'var(--amber-500)'
  },
  danger: {
    bg: 'var(--danger-subtle)',
    fg: 'var(--red-700)',
    bd: 'var(--red-500)'
  }
};

/** Small status / category label. */
function Badge({
  tone = 'brand',
  solid = false,
  dot = false,
  children,
  style,
  ...rest
}) {
  const p = palettes[tone] || palettes.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? p.fg : p.bg,
      color: solid ? '#fff' : p.fg,
      border: solid ? '1px solid transparent' : `1px solid ${p.bd}`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : p.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '0 14px',
    height: 36,
    fontSize: 'var(--text-sm)',
    radius: 'var(--radius-sm)',
    gap: 6
  },
  md: {
    padding: '0 20px',
    height: 44,
    fontSize: 'var(--text-base)',
    radius: 'var(--radius-md)',
    gap: 8
  },
  lg: {
    padding: '0 28px',
    height: 54,
    fontSize: 'var(--text-lg)',
    radius: 'var(--radius-md)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--brand-on)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)',
    '--hover-bg': 'var(--brand-hover)',
    '--active-bg': 'var(--brand-active)'
  },
  secondary: {
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--accent-hover)',
    '--active-bg': 'var(--teal-700)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--brand)',
    border: '1px solid var(--border-brand)',
    boxShadow: 'none',
    '--hover-bg': 'var(--brand-subtle)',
    '--active-bg': 'var(--purple-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--ink-50)',
    '--active-bg': 'var(--ink-100)'
  }
};

/** Primary action button. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [state, setState] = React.useState('rest');
  const bg = disabled ? undefined : state === 'active' ? v['--active-bg'] : state === 'hover' ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: v.border,
      background: bg || v.background,
      color: v.color,
      boxShadow: state === 'rest' && !disabled ? v.boxShadow : 'none',
      opacity: disabled ? 0.45 : 1,
      transform: state === 'active' && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), startIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, startIcon), children, endIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, endIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container with optional elevation and accent. */
function Card({
  elevation = 'sm',
  interactive = false,
  accent = false,
  padding = 'var(--space-5)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: accent ? '3px solid var(--brand)' : '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? shadows.lg : shadows[elevation],
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, helper, and error states. */
function Input({
  label,
  helper,
  error,
  startIcon,
  size = 'md',
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--brand)' : 'var(--border)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, startIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, startIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Surfaces.jsx
try { (() => {
/* global React, lucide */
const {
  useState
} = React;
const NS = window.AkhtobootDesignSystem_1e74e8;
const {
  Logo,
  Button,
  Badge,
  Card,
  Avatar,
  OctopusMark
} = NS;

// Lucide icon helper -> inline SVG via currentColor.
// Lucide icon data is ["svg", {attrs}, [["path",{...}], ...]]
function Icon({
  name,
  size = 20,
  ...rest
}) {
  const store = typeof lucide !== 'undefined' && (lucide.icons || lucide) || {};
  const node = store[name];
  if (!Array.isArray(node)) return null;
  const children = node[2] || [];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...rest
  }, children.map(([tag, a], i) => React.createElement(tag, {
    key: i,
    ...a
  })));
}
const EPISODES = [{
  n: '٤٢',
  tag: 'حلقة جديدة',
  tone: 'brand',
  title: 'لماذا ننسى ما نقرأ؟',
  sub: 'في الذاكرة والقراءة',
  dur: '٤٨ دقيقة',
  g: ['#6B1FB5', '#340e5a']
}, {
  n: '٤١',
  tag: 'الأكثر استماعًا',
  tone: 'accent',
  title: 'أعماق الخوارزميات',
  sub: 'كيف تقرّر الآلة',
  dur: '٣٦ دقيقة',
  g: ['#377ea2', '#0d1f28']
}, {
  n: '٤٠',
  tag: 'حوار',
  tone: 'neutral',
  title: 'صناعة الفضول',
  sub: 'مع ضيف الأسبوع',
  dur: '٥٢ دقيقة',
  g: ['#173543', '#0d1f28']
}];
function Header() {
  const links = ['الرئيسية', 'البودكاست', 'المقالات', 'عن أخطبوط'];
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(250,249,252,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    lang: "ar",
    tone: "brand",
    size: 36
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => setActive(i),
    style: {
      cursor: 'pointer',
      fontSize: 15,
      fontWeight: 500,
      color: active === i ? 'var(--brand)' : 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 18
    })
  }, "\u0628\u062D\u062B"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Play",
      size: 16
    })
  }, "\u0627\u0633\u062A\u0645\u0639 \u0627\u0644\u0622\u0646")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '72px 40px 56px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: '-60px',
      top: '-30px',
      opacity: 0.06,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(OctopusMark, {
    size: 420,
    color: "var(--purple-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ak-eyebrow"
  }, "\u0645\u0646\u0635\u0651\u0629 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 76,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '14px 0 18px'
    }
  }, "\u062D\u0628\u0631\u064C \u0645\u0646 \u0623\u0639\u0645\u0627\u0642", /*#__PURE__*/React.createElement("br", null), "\u0627\u0644\u0645\u0639\u0631\u0641\u0629."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: 560,
      margin: '0 0 28px'
    }
  }, "\u062B\u0645\u0627\u0646\u064A\u0629 \u0623\u0630\u0631\u0639\u060C \u0641\u0643\u0631\u0629\u064C \u0648\u0627\u062D\u062F\u0629. \u0628\u0648\u062F\u0643\u0627\u0633\u062A \u0648\u0645\u0642\u0627\u0644\u0627\u062A \u062A\u063A\u0648\u0635 \u0641\u064A \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0648\u062A\u064F\u062E\u0631\u062C\u0647\u0627 \u0648\u0627\u0636\u062D\u0629\u064B \u0628\u064A\u0646 \u064A\u062F\u064A\u0643."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Headphones",
      size: 20
    })
  }, "\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u062D\u0644\u0642\u0627\u062A"))));
}
function EpisodeGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "\u0623\u062D\u062F\u062B \u0627\u0644\u062D\u0644\u0642\u0627\u062A"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-link)',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      cursor: 'pointer'
    }
  }, "\u0627\u0644\u0643\u0644 ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowLeft",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, EPISODES.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.n,
    interactive: true,
    elevation: "sm",
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 168,
      background: `linear-gradient(150deg, ${e.g[0]}, ${e.g[1]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 72,
      color: 'rgba(255,255,255,0.92)',
      lineHeight: 1
    }
  }, e.n), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineEnd: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone,
    solid: true
  }, e.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 14,
      bottom: 14,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      margin: '0 0 4px',
      color: 'var(--text-strong)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, e.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Clock",
    size: 15
  }), " ", e.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bookmark",
    size: 15
  }), " \u062D\u0641\u0638")))))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '0 40px 48px',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(160deg, var(--purple-600), var(--teal-800))',
      padding: '48px 44px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineEnd: -30,
      bottom: -50,
      opacity: 0.16
    }
  }, /*#__PURE__*/React.createElement(OctopusMark, {
    size: 260,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 40,
      color: '#fff',
      margin: '0 0 12px',
      lineHeight: 1.1
    }
  }, "\u0627\u0646\u0636\u0645\u0651 \u0625\u0644\u0649 \u0623\u0639\u0645\u0627\u0642 \u0623\u062E\u0637\u0628\u0648\u0637"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 17,
      lineHeight: 1.6,
      margin: '0 0 24px'
    }
  }, "\u062D\u0644\u0642\u0629 \u062C\u062F\u064A\u062F\u0629 \u0643\u0644 \u0623\u0633\u0628\u0648\u0639\u060C \u0648\u0645\u0642\u0627\u0644\u0627\u062A \u062A\u0635\u0644\u0643 \u0623\u0648\u0644\u064B\u0627. \u0645\u062C\u0651\u0627\u0646\u064B\u0627."), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 440
    },
    onSubmit: ev => ev.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    style: {
      flex: 1,
      height: 54,
      padding: '0 18px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    type: "submit"
  }, "\u0627\u0634\u062A\u0631\u0643"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      padding: '36px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    lang: "ar",
    tone: "inverse",
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      color: 'var(--ink-300)'
    }
  }, ['Twitter', 'Youtube', 'Instagram', 'Rss'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)',
      fontSize: 13
    }
  }, "\xA9 \u0662\u0660\u0662\u0666 \u0623\u062E\u0637\u0628\u0648\u0637"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(EpisodeGrid, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.AkhtobootWeb = {
  App
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Surfaces.jsx", error: String((e && e.message) || e) }); }

__ds_ns.OctopusMark = __ds_scope.OctopusMark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
