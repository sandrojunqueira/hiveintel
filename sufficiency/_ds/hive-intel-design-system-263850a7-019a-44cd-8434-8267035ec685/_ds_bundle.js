/* @ds-bundle: {"format":4,"namespace":"HiveIntelDesignSystem_263850","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GradientText","sourcePath":"components/core/GradientText.jsx"},{"name":"HexTile","sourcePath":"components/core/HexTile.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"HexBackdrop","sourcePath":"components/marketing/HexBackdrop.jsx"},{"name":"QuoteBlock","sourcePath":"components/marketing/QuoteBlock.jsx"},{"name":"SectionHeader","sourcePath":"components/marketing/SectionHeader.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"063d58fb86ac","components/core/Button.jsx":"994f3b70ed95","components/core/Card.jsx":"716104d64619","components/core/Divider.jsx":"2c99db2e42a6","components/core/Eyebrow.jsx":"55ac3bc77a44","components/core/GradientText.jsx":"e9326a999bef","components/core/HexTile.jsx":"699f841fb9ff","components/core/Icon.jsx":"e803a6aaafb5","components/core/IconButton.jsx":"2325179053cd","components/core/Logo.jsx":"b6fb04173686","components/core/Stat.jsx":"387610bc1def","components/core/Tag.jsx":"f9ca0097742e","components/feedback/Dialog.jsx":"308c4dc7f569","components/feedback/ProgressBar.jsx":"239fb6636bb7","components/feedback/Toast.jsx":"7d75fd8ebd31","components/feedback/Tooltip.jsx":"0264f281dd57","components/forms/Checkbox.jsx":"b2190bdedbad","components/forms/Input.jsx":"46e1bc935247","components/forms/Radio.jsx":"d8f6dab62219","components/forms/Select.jsx":"a43eb755b0f0","components/forms/Switch.jsx":"8e42f47b943c","components/forms/Textarea.jsx":"f789b03b3885","components/marketing/FeatureCard.jsx":"e1d11b97d065","components/marketing/HexBackdrop.jsx":"53d1acb500e1","components/marketing/QuoteBlock.jsx":"8c65d45cee73","components/marketing/SectionHeader.jsx":"4c8dffaec2bb","components/navigation/Footer.jsx":"0a860d7cec9d","components/navigation/NavBar.jsx":"8f4056de1217","components/navigation/Tabs.jsx":"49c702355438","ui_kits/hive-intel-landing/App.jsx":"32a5ed109fdd","ui_kits/hive-intel-landing/Briefing.jsx":"391cfd60c533","ui_kits/hive-intel-landing/Hero.jsx":"a2e2cbb3a84f","ui_kits/hive-intel-landing/Sections.jsx":"922312494ff5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HiveIntelDesignSystem_263850 = window.HiveIntelDesignSystem_263850 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container: 16px radius, hairline border, inset top highlight. */
function Card({
  children,
  variant = "default",
  padding = 28,
  interactive = false,
  glow = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const base = {
    position: "relative",
    borderRadius: "var(--radius-card)",
    padding,
    transition: "var(--transition-surface)",
    overflow: "hidden",
    transform: lift ? "translateY(-3px)" : "none",
    cursor: interactive ? "pointer" : "default"
  };
  const looks = {
    default: {
      background: lift ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (lift ? "var(--border-subtle)" : "var(--border-hairline)"),
      boxShadow: glow || lift ? "var(--glow-accent)" : "var(--shadow-card)"
    },
    glass: {
      background: "var(--surface-glass)",
      backdropFilter: "var(--backdrop-glass)",
      WebkitBackdropFilter: "var(--backdrop-glass)",
      border: "1px solid " + (lift ? "var(--border-subtle)" : "var(--border-hairline)"),
      boxShadow: "var(--shadow-md)"
    },
    gradient: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      boxShadow: lift ? "var(--glow-accent)" : "var(--shadow-card)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(looks[variant] || looks.default),
      ...style
    }
  }, rest), variant === "gradient" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--grad-panel)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: "var(--white-a08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline rule. `gradient` fades electric→magenta from the centre. */
function Divider({
  gradient = false,
  vertical = false,
  inset = 0,
  style,
  ...rest
}) {
  const bg = gradient ? "var(--grad-hairline)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: "stretch",
      background: bg,
      margin: `${inset}px 0`,
      ...style
    } : {
      height: 1,
      width: "100%",
      background: bg,
      margin: `0 ${inset}px`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Wide-tracked uppercase kicker that sits above a section headline. */
function Eyebrow({
  children,
  tone = "accent",
  rule = false,
  style,
  ...rest
}) {
  const color = tone === "accent" ? "var(--hive-orchid)" : tone === "muted" ? "var(--text-muted)" : "var(--neutral-0)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "var(--grad-hive)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GRADS = {
  hive: "var(--grad-hive)",
  wide: "var(--grad-hive-wide)",
  deep: "var(--grad-hive-deep)",
  vertical: "var(--grad-hive-v)"
};

/** Clips the brand gradient into type. One phrase per page, maximum. */
function GradientText({
  children,
  gradient = "hive",
  as = "span",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: GRADS[gradient] || GRADS.hive,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      display: "inline",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js";
let loading = null;
function loadLucide() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.lucide) return Promise.resolve(window.lucide);
  if (!loading) {
    loading = new Promise(res => {
      const s = document.createElement("script");
      s.src = CDN;
      s.onload = () => res(window.lucide);
      s.onerror = () => res(null);
      document.head.appendChild(s);
    });
  }
  return loading;
}
const pascal = n => n.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

/** Lucide glyph rendered inline. Stroke-only, currentColor, 1.5px at brand scale. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = "currentColor",
  style,
  ...rest
}) {
  const [lib, setLib] = React.useState(typeof window !== "undefined" ? window.lucide : null);
  React.useEffect(() => {
    if (!lib) loadLucide().then(setLib);
  }, [lib]);
  const node = lib && lib.icons && lib.icons[pascal(name)];
  const box = {
    width: size,
    height: size,
    flex: "0 0 auto",
    display: "block",
    ...style
  };
  if (!node) return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: box
  }, rest));
  const children = (Array.isArray(node) ? node[2] : node.children) || [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: box
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    bg: "var(--electric-a16)",
    fg: "var(--hive-orchid)",
    bd: "var(--electric-a32)"
  },
  neutral: {
    bg: "var(--white-a08)",
    fg: "var(--text-body)",
    bd: "var(--border-subtle)"
  },
  positive: {
    bg: "rgba(63,207,142,.14)",
    fg: "var(--status-positive)",
    bd: "rgba(63,207,142,.3)"
  },
  caution: {
    bg: "rgba(245,181,71,.14)",
    fg: "var(--status-caution)",
    bd: "rgba(245,181,71,.3)"
  },
  critical: {
    bg: "var(--magenta-a16)",
    fg: "var(--hive-magenta)",
    bd: "var(--magenta-a32)"
  },
  gradient: {
    bg: "var(--grad-hive)",
    fg: "var(--text-on-accent)",
    bd: "transparent"
  }
};

/** Small status/label pill. */
function Badge({
  children,
  tone = "neutral",
  icon,
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-chip)",
      background: t.bg,
      color: t.fg,
      border: "1px solid " + t.bd,
      font: "var(--fw-medium) var(--fs-3xs)/1 var(--font-body)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "currentColor"
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "0 14px",
    height: 34,
    font: "var(--fw-medium) var(--fs-xs)/1 var(--font-body)",
    gap: 6,
    icon: 14
  },
  md: {
    padding: "0 20px",
    height: 44,
    font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)",
    gap: 8,
    icon: 16
  },
  lg: {
    padding: "0 28px",
    height: 54,
    font: "var(--fw-medium) var(--fs-base)/1 var(--font-body)",
    gap: 10,
    icon: 18
  }
};
function look(variant, hover) {
  switch (variant) {
    case "primary":
      return {
        background: "var(--grad-hive)",
        color: "var(--text-on-accent)",
        border: "1px solid transparent",
        boxShadow: hover ? "var(--glow-accent-strong)" : "none",
        filter: hover ? "brightness(1.06)" : "none"
      };
    case "secondary":
      return {
        background: hover ? "var(--white-a08)" : "var(--white-a04)",
        color: "var(--text-primary)",
        border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border-subtle)"),
        boxShadow: "none"
      };
    case "outline":
      return {
        background: hover ? "var(--electric-a16)" : "transparent",
        color: hover ? "var(--neutral-0)" : "var(--hive-orchid)",
        border: "1px solid " + (hover ? "var(--hive-electric)" : "var(--electric-a32)"),
        boxShadow: "none"
      };
    case "ghost":
      return {
        background: "transparent",
        color: hover ? "var(--text-primary)" : "var(--text-muted)",
        border: "1px solid transparent",
        boxShadow: "none"
      };
    case "invert":
      return {
        background: hover ? "var(--neutral-100)" : "var(--neutral-0)",
        color: "var(--text-on-light)",
        border: "1px solid transparent",
        boxShadow: "none"
      };
    default:
      return {};
  }
}

/** Primary action control. Primary variant carries the brand gradient. */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      onMouseLeave && onMouseLeave(e);
    },
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "var(--transition-control)",
      opacity: disabled ? 0.4 : 1,
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      ...look(variant, hover && !disabled),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 1.75
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon,
    strokeWidth: 1.75
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/HexTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hexagonal container — the brand's signature shape. Holds an icon, initial or number. */
function HexTile({
  children,
  icon,
  size = 72,
  variant = "outline",
  style,
  ...rest
}) {
  const clip = "var(--hex-clip-pointy)";
  const inner = size - (variant === "outline" ? 3 : 0);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      flex: "0 0 auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: clip,
      background: variant === "solid" ? "var(--grad-hive)" : variant === "outline" ? "var(--grad-hive)" : "var(--white-a12)",
      filter: variant === "glow" ? "none" : "none"
    }
  }), variant !== "solid" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 1.5,
      left: 1.5,
      width: inner,
      height: inner,
      clipPath: clip,
      background: variant === "glow" ? "var(--neutral-900)" : "var(--surface-card)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: variant === "solid" ? "var(--text-on-accent)" : "var(--neutral-0)",
      font: "var(--fw-medium) var(--fs-md)/1 var(--font-display)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.36),
    strokeWidth: 1.5
  }) : children), variant === "glow" && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: -8,
      clipPath: clip,
      boxShadow: "var(--glow-hex)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { HexTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HexTile.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 30,
  md: 38,
  lg: 46
};

/** Square icon-only control for toolbars, dismissals and pagination. */
function IconButton({
  icon,
  size = "md",
  variant = "ghost",
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const filled = variant === "filled";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      background: filled ? "var(--grad-hive)" : hover ? "var(--white-a08)" : "transparent",
      border: "1px solid " + (variant === "outline" ? hover ? "var(--border-strong)" : "var(--border-subtle)" : "transparent"),
      color: filled ? "var(--text-on-accent)" : hover ? "var(--text-primary)" : "var(--text-muted)",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)",
      boxShadow: filled && hover ? "var(--glow-accent)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 15 : size === "lg" ? 20 : 17,
    strokeWidth: 1.75
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  lockup: "logo-hive-intel-lockup.png",
  wordmark: "logo-hive-intel-wordmark.png",
  hex: "hex-outline.png",
  "hex-glow": "hex-glow.png",
  "nestle-hive": "logo-nestle-hive-white.png",
  "nestle-hive-color": "logo-nestle-hive-color.png"
};

/** Renders a supplied brand mark. Never re-draw these — always the shipped art. */
function Logo({
  variant = "wordmark",
  height = 32,
  assetBase = "assets",
  style,
  ...rest
}) {
  const file = SRC[variant] || SRC.wordmark;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: "The Hive Intel",
    style: {
      height,
      width: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single figure with label, optional unit and delta. */
function Stat({
  value,
  unit,
  label,
  delta,
  direction = "up",
  gradient = false,
  size = "md",
  style,
  ...rest
}) {
  const fs = size === "lg" ? "var(--fs-5xl)" : size === "sm" ? "var(--fs-2xl)" : "var(--fs-3xl)";
  const dc = direction === "down" ? "var(--hive-magenta)" : "var(--status-positive)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: fs,
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      fontVariantNumeric: "tabular-nums",
      ...(gradient ? {
        background: "var(--grad-hive)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent"
      } : {
        color: "var(--text-primary)"
      })
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--fs-lg)",
      color: "var(--text-muted)"
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      marginLeft: 6,
      color: dc,
      font: "var(--fw-medium) var(--fs-xs)/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: direction === "down" ? "trending-down" : "trending-up",
    size: 13,
    strokeWidth: 2
  }), delta)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter / taxonomy chip. Selectable and optionally removable. */
function Tag({
  children,
  selected = false,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 32,
      padding: onRemove ? "0 8px 0 14px" : "0 14px",
      borderRadius: "var(--radius-chip)",
      cursor: rest.onClick || onRemove ? "pointer" : "default",
      background: selected ? "var(--electric-a16)" : hover ? "var(--white-a08)" : "var(--white-a04)",
      border: "1px solid " + (selected ? "var(--hive-electric)" : hover ? "var(--border-subtle)" : "var(--border-hairline)"),
      color: selected ? "var(--neutral-0)" : "var(--text-body)",
      font: "var(--fw-book) var(--fs-xs)/1 var(--font-body)",
      transition: "var(--transition-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal over a blurred scrim. */
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--black-a64)",
      backdropFilter: "blur(var(--blur-sm))",
      WebkitBackdropFilter: "blur(var(--blur-sm))",
      animation: "hiveFade var(--dur-base) var(--ease-out)"
    },
    onClick: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-7)",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: "var(--grad-hive-wide)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, "@keyframes hiveFade{from{opacity:0}to{opacity:1}}"));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Determinate or indeterminate gradient progress track. */
function ProgressBar({
  value = 0,
  label,
  indeterminate = false,
  height = 6,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, Math.round(value), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : value,
    style: {
      height,
      width: "100%",
      background: "var(--white-a08)",
      borderRadius: 99,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: 99,
      background: "var(--grad-hive-wide)",
      width: indeterminate ? "40%" : Math.max(0, Math.min(100, value)) + "%",
      transition: "width var(--dur-slow) var(--ease-out)",
      animation: indeterminate ? "hiveSlide 1.4s var(--ease-inout) infinite" : "none"
    }
  })), /*#__PURE__*/React.createElement("style", null, "@keyframes hiveSlide{0%{transform:translateX(-100%)}100%{transform:translateX(250%)}}"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    icon: "info",
    color: "var(--text-body)"
  },
  positive: {
    icon: "check-circle",
    color: "var(--status-positive)"
  },
  caution: {
    icon: "alert-triangle",
    color: "var(--status-caution)"
  },
  critical: {
    icon: "alert-circle",
    color: "var(--hive-magenta)"
  }
};

/** Transient glass notification. */
function Toast({
  title,
  message,
  tone = "neutral",
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 300,
      maxWidth: 420,
      padding: "var(--space-4) var(--space-4) var(--space-4) var(--space-5)",
      background: "var(--surface-glass)",
      backdropFilter: "var(--backdrop-glass)",
      WebkitBackdropFilter: "var(--backdrop-glass)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    style: {
      color: t.color,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1.3 var(--font-body)",
      color: "var(--text-primary)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover label on a near-black chip. */
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: "var(--z-overlay)",
      whiteSpace: "nowrap",
      padding: "6px 10px",
      background: "var(--neutral-800)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xs)",
      color: "var(--text-primary)",
      font: "var(--type-caption)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox; checked fills with the brand gradient. */
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      flex: "0 0 auto",
      marginTop: description ? 2 : 0,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--grad-hive)" : "var(--surface-inset)",
      border: "1px solid " + (checked ? "transparent" : "var(--border-strong)"),
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3,
    color: "var(--neutral-0)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text field. */
function Input({
  label,
  hint,
  error,
  icon,
  iconAfter,
  size = "md",
  fullWidth = true,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === "sm" ? 36 : size === "lg" ? 54 : 46;
  const border = error ? "var(--hive-magenta)" : focus ? "var(--hive-electric)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : undefined,
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: h,
      padding: "0 14px",
      background: "var(--surface-inset)",
      border: "1px solid " + border,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--glow-accent)" : "none",
      transition: "var(--transition-control)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    style: {
      color: "var(--text-faint)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: 0,
      outline: "none",
      color: "var(--text-primary)",
      font: size === "sm" ? "var(--type-body-sm)" : "var(--type-body)",
      ...style
    }
  }, rest)), iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: 17,
    style: {
      color: "var(--text-faint)"
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: error ? "var(--hive-magenta)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-choice control. */
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      flex: "0 0 auto",
      marginTop: description ? 2 : 0,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-inset)",
      border: "1px solid " + (checked ? "var(--hive-electric)" : "var(--border-strong)"),
      boxShadow: checked ? "var(--glow-accent)" : "none",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--grad-hive)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in brand dress. */
function Select({
  label,
  hint,
  options = [],
  size = "md",
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === "sm" ? 36 : size === "lg" ? 54 : 46;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 40px 0 14px",
      background: "var(--surface-inset)",
      color: "var(--text-primary)",
      font: "var(--type-body)",
      border: "1px solid " + (focus ? "var(--hive-electric)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? "var(--glow-accent)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: "var(--neutral-900)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17,
    style: {
      position: "absolute",
      right: 14,
      color: "var(--text-faint)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Immediate-effect toggle. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: 99,
      padding: 2,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      background: checked ? "var(--grad-hive)" : "var(--white-a12)",
      border: "1px solid " + (checked ? "transparent" : "var(--border-subtle)"),
      boxShadow: checked ? "var(--glow-accent)" : "none",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "var(--neutral-0)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const border = error ? "var(--hive-magenta)" : focus ? "var(--hive-electric)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: "var(--surface-inset)",
      border: "1px solid " + border,
      borderRadius: "var(--radius-control)",
      padding: "12px 14px",
      color: "var(--text-primary)",
      font: "var(--type-body)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "var(--glow-accent)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: error ? "var(--hive-magenta)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hex-badged capability card for feature grids. */
function FeatureCard({
  icon,
  title,
  description,
  meta,
  featured = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: featured ? "gradient" : "default",
    interactive: !!onClick,
    onClick: onClick,
    padding: featured ? 36 : 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      height: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.HexTile, {
    icon: icon,
    size: featured ? 64 : 52,
    variant: featured ? "glow" : "outline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: featured ? "var(--type-h2)" : "var(--type-h4)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description)), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--hive-orchid)"
    }
  }, meta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 13,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HexBackdrop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed hex background — still texture or the supplied 6s loop — under a black veil. */
function HexBackdrop({
  media = "texture",
  veil = "up",
  assetBase = "assets",
  children,
  minHeight,
  style,
  ...rest
}) {
  const veilBg = veil === "up" ? "var(--grad-veil-up)" : veil === "down" ? "var(--grad-veil)" : veil === "flat" ? "var(--black-a64)" : "none";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--neutral-1000)",
      minHeight,
      ...style
    }
  }, rest), media === "video" ? /*#__PURE__*/React.createElement("video", {
    src: `${assetBase}/hex-anim.mp4`,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : media === "texture" ? /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/hex-bg.png`,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, veilBg !== "none" && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: veilBg
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { HexBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HexBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/marketing/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pull quote with a gradient rule and attribution. */
function QuoteBlock({
  quote,
  name,
  role,
  size = "md",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      maxWidth: 820,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 3,
      background: "var(--grad-hive)",
      borderRadius: 99
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: size === "lg" ? "var(--fs-3xl)" : "var(--fs-xl)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, quote), (name || role) && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1.3 var(--font-body)",
      color: "var(--text-primary)"
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + headline + optional deck, the standard opening of every section. */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  maxWidth = 720,
  style,
  ...rest
}) {
  const centred = align === "center";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-7)",
      alignItems: centred ? "center" : "flex-end",
      flexDirection: centred ? "column" : "row",
      justifyContent: "space-between",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth,
      alignItems: centred ? "center" : "flex-start",
      textAlign: centred ? "center" : "left"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    rule: !centred
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-primary)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)"
    }
  }, description)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto"
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Page footer: mark, link columns, co-brand line. */
function Footer({
  columns = [],
  note,
  assetBase = "assets",
  coBrand = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--neutral-950)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-11) var(--space-8) var(--space-7)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-page)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-12)",
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 280px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 72,
    assetBase: assetBase
  }), note && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-faint)",
      maxWidth: 300
    }
  }, note)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, l)))))), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    style: {
      margin: "var(--space-9) 0 var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, "\xA9 ", new Date().getFullYear(), " The Hive. Intelligence built for Nestl\xE9."), coBrand && /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "nestle-hive",
    height: 26,
    assetBase: assetBase,
    style: {
      opacity: 0.7
    }
  }))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed top bar. Transparent over the hero, glass once scrolled. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = "Request access",
  onCta,
  assetBase = "assets",
  scrolled = false,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: "var(--z-sticky)",
      background: scrolled ? "var(--surface-glass)" : "transparent",
      backdropFilter: scrolled ? "var(--backdrop-glass)" : "none",
      WebkitBackdropFilter: scrolled ? "var(--backdrop-glass)" : "none",
      borderBottom: "1px solid " + (scrolled ? "var(--border-hairline)" : "transparent"),
      transition: "var(--transition-surface)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-page)",
      margin: "0 auto",
      height: 76,
      padding: "0 var(--space-8)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      display: "flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wordmark",
    height: 26,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase().replace(/\s+/g, "-"),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      font: "var(--fw-medium) var(--fs-xs)/1 var(--font-body)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: active === l ? "var(--neutral-0)" : "var(--text-muted)",
      paddingBottom: 4,
      borderBottom: "1px solid " + (active === l ? "var(--hive-electric)" : "transparent"),
      transition: "var(--transition-control)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlined tab strip. */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const fs = size === "sm" ? "var(--fs-2xs)" : "var(--fs-xs)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-7)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), items.map(it => {
    const key = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const on = value === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(key),
      style: {
        background: "none",
        border: 0,
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-medium)",
        fontSize: fs,
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: on ? "var(--neutral-0)" : "var(--text-muted)",
        borderBottom: "2px solid " + (on ? "var(--hive-electric)" : "transparent"),
        marginBottom: -1,
        transition: "var(--transition-control)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hive-intel-landing/App.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Dialog,
  Toast,
  Button,
  Input,
  Select,
  Checkbox
} = window.HiveIntelDesignSystem_263850;
function AccessDialog({
  open,
  onClose,
  onSent
}) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    width: 520,
    title: "Request access",
    description: "The Hive Intel is limited to Nestl\xE9 and UM Worldwide teams.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      iconAfter: "arrow-right",
      onClick: onSent
    }, "Send request"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@nestle.com",
    icon: "mail"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Market",
    options: ["UK & Ireland", "France", "Brazil", "Global"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the weekly briefing",
    description: "Mondays, 07:00 GMT",
    checked: true,
    onChange: () => {}
  })));
}
function App() {
  const [view, setView] = React.useState("landing");
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    const on = () => setScrolled(el.scrollTop > 40);
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(false), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const goBriefing = () => {
    setView("briefing");
    window.scrollTo(0, 0);
  };
  const goLanding = () => {
    setView("landing");
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, view === "landing" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    links: ["Intel", "Platforms", "Method", "Access"],
    active: "Intel",
    scrolled: scrolled,
    assetBase: "../../assets",
    onCta: () => setDialog(true),
    onNavigate: l => {
      const n = document.getElementById(l.toLowerCase());
      if (n) window.scrollTo({
        top: n.offsetTop - 90,
        behavior: "smooth"
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -76
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onRequest: () => setDialog(true),
    onBriefing: goBriefing
  })), /*#__PURE__*/React.createElement(SignalGrid, {
    onBriefing: goBriefing
  }), /*#__PURE__*/React.createElement(Coverage, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(AccessBand, {
    onRequest: () => setDialog(true)
  }), /*#__PURE__*/React.createElement(Footer, {
    assetBase: "../../assets",
    note: "The intelligence layer behind Nestl\xE9 media planning.",
    columns: [{
      title: "Intel",
      links: ["Weekly briefing", "Platform pulse", "Culture signal", "Competitor watch"]
    }, {
      title: "The Hive",
      links: ["How we work", "The team", "Contact"]
    }, {
      title: "Legal",
      links: ["Privacy", "Terms", "Data sources"]
    }]
  })) : /*#__PURE__*/React.createElement(Briefing, {
    onBack: goLanding
  }), /*#__PURE__*/React.createElement(AccessDialog, {
    open: dialog,
    onClose: () => setDialog(false),
    onSent: () => {
      setDialog(false);
      setToast(true);
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-7)",
      bottom: "var(--space-7)",
      zIndex: "var(--z-toast)"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "Request sent",
    message: "We'll come back to you within one working day.",
    onDismiss: () => setToast(false)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hive-intel-landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hive-intel-landing/Briefing.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Divider,
  Eyebrow,
  Stat,
  Icon,
  ProgressBar,
  Tabs,
  Tooltip,
  Logo,
  HexTile
} = window.HiveIntelDesignSystem_263850;
const ROWS = [{
  platform: "TikTok",
  signal: "Search-led discovery up sharply in confectionery",
  impact: "High",
  dir: "up",
  change: "+18%"
}, {
  platform: "Meta",
  signal: "Advantage+ shifting budget away from prospecting",
  impact: "High",
  dir: "down",
  change: "−9%"
}, {
  platform: "Retail media",
  signal: "Sponsored-product CPCs flat for a third week",
  impact: "Medium",
  dir: "up",
  change: "+1%"
}, {
  platform: "YouTube",
  signal: "Shorts completion outpacing in-stream on recipe content",
  impact: "Medium",
  dir: "up",
  change: "+12%"
}, {
  platform: "Reddit",
  signal: "Category sentiment softening around packaging claims",
  impact: "Watch",
  dir: "down",
  change: "−4%"
}];
function ImpactBadge({
  impact
}) {
  const tone = impact === "High" ? "critical" : impact === "Medium" ? "caution" : "neutral";
  return /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, impact);
}
function Briefing({
  onBack
}) {
  const [tab, setTab] = React.useState("Platforms");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--neutral-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hive-shell",
    style: {
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 24,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement(Divider, {
    vertical: true,
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Weekly briefing \xB7 W33 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "Export",
    variant: "outline",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: "Share",
    variant: "outline",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack
  }, "Back to site")))), /*#__PURE__*/React.createElement("div", {
    className: "hive-shell",
    style: {
      padding: "var(--space-10) 0 var(--space-12)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Sample briefing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-primary)"
    }
  }, "Confectionery \xB7 UK & Ireland")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "5",
    label: "Signals this week",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+41",
    unit: "%",
    label: "Engaged reach",
    delta: "+6 wk/wk",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Anomalies",
    size: "sm",
    direction: "down",
    delta: "\u22123"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "gradient",
    padding: 32,
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(HexTile, {
    variant: "glow",
    size: 72,
    icon: "zap"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient"
  }, "Headline"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, "TikTok search is now the cheapest route to category discovery."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: 720
    }
  }, "Search-led discovery in confectionery rose 18% week on week while CPMs held. Recommend shifting 10% of prospecting budget from Advantage+ into TikTok search-adjacent placements for the next two flights."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconAfter: "arrow-right"
  }, "Open the working"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "message-square"
  }, "Ask the analyst")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Platforms", "Culture", "Competitors", "Category"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "All markets"), /*#__PURE__*/React.createElement(Tag, null, "UK"), /*#__PURE__*/React.createElement(Tag, null, "Ireland"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Confectionery")), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr 120px 110px 44px",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "14px var(--space-6)",
      background: "var(--surface-inset)",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Platform"), /*#__PURE__*/React.createElement("span", null, "Signal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, "Impact", /*#__PURE__*/React.createElement(Tooltip, {
    label: "Modelled effect on plan delivery"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 12
  }))), /*#__PURE__*/React.createElement("span", null, "Change"), /*#__PURE__*/React.createElement("span", null)), ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.platform,
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr 120px 110px 44px",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "18px var(--space-6)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1.2 var(--font-body)",
      color: "var(--text-primary)"
    }
  }, r.platform), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, r.signal), /*#__PURE__*/React.createElement(ImpactBadge, {
    impact: r.impact
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontVariantNumeric: "tabular-nums",
      font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)",
      color: r.dir === "down" ? "var(--hive-magenta)" : "var(--status-positive)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.dir === "down" ? "trending-down" : "trending-up",
    size: 14,
    strokeWidth: 2
  }), r.change), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Open " + r.platform,
    size: "sm"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Share of voice"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    label: "Nestl\xE9",
    height: 10
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 44,
    label: "Competitor A",
    height: 10
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 22,
    label: "Competitor B",
    height: 10
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Sources"), ["Platform APIs", "Retail media exports", "Social listening", "Panel data"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2,
    style: {
      color: "var(--status-positive)"
    }
  }), s))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Next briefing"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-primary)"
    }
  }, "Mon 24 Aug", /*#__PURE__*/React.createElement("br", null), "07:00 GMT"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "bell",
    fullWidth: true
  }, "Remind me")))));
}
Object.assign(window, {
  Briefing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hive-intel-landing/Briefing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hive-intel-landing/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Eyebrow,
  GradientText,
  Stat,
  Logo,
  Divider
} = window.HiveIntelDesignSystem_263850;
const {
  HexBackdrop
} = window.HiveIntelDesignSystem_263850;
function Hero({
  onRequest,
  onBriefing
}) {
  return /*#__PURE__*/React.createElement(HexBackdrop, {
    media: "video",
    veil: "up",
    assetBase: "../../assets",
    style: {
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hive-shell",
    style: {
      paddingTop: "var(--space-12)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Nestl\xE9 \xD7 UM"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Week 33")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-bold) var(--fs-5xl)/var(--lh-tight) var(--font-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-primary)"
    }
  }, "Every signal Nestl\xE9 needs,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, null, "in one weekly read"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      maxWidth: 620
    }
  }, "The Hive Intel reconciles platform, category, culture and competitor movement into a single briefing \u2014 so planning starts from the answer, not the argument."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "arrow-right",
    onClick: onRequest
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "file-text",
    onClick: onBriefing
  }, "Read this week"))), /*#__PURE__*/React.createElement(Divider, {
    gradient: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-12)",
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "14",
    label: "Markets covered"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2.8",
    unit: "M",
    label: "Signals processed weekly"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    unit: "hrs",
    label: "From signal to briefing"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, "Built by"), /*#__PURE__*/React.createElement(Logo, {
    variant: "nestle-hive",
    height: 24,
    assetBase: "../../assets",
    style: {
      opacity: .8
    }
  })))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hive-intel-landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hive-intel-landing/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Badge,
  Tag,
  Divider,
  HexTile,
  Stat,
  Icon,
  ProgressBar,
  Logo
} = window.HiveIntelDesignSystem_263850;
const {
  SectionHeader,
  FeatureCard,
  QuoteBlock,
  HexBackdrop
} = window.HiveIntelDesignSystem_263850;
const SIGNALS = [{
  icon: "radar",
  title: "Platform pulse",
  description: "What actually changed on every platform Nestlé buys — ranked by what it costs or saves.",
  meta: "This week",
  featured: true
}, {
  icon: "brain",
  title: "Culture signal",
  description: "The conversations moving the category, and which of them are worth entering."
}, {
  icon: "target",
  title: "Competitor watch",
  description: "Spend, creative and share-of-voice shifts across the competitive set."
}, {
  icon: "line-chart",
  title: "Category read",
  description: "Search, retail media and conversation volume against the plan."
}];
function SignalGrid({
  onBriefing
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "intel",
    className: "hive-shell",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "What you get",
    title: "Four signals, one read.",
    description: "Each briefing answers the same four questions, in the same order, every week.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right",
      onClick: onBriefing
    }, "See a sample")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr",
      gap: "var(--space-5)",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: "span 2"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, _extends({}, SIGNALS[0], {
    onClick: onBriefing
  }))), /*#__PURE__*/React.createElement(FeatureCard, SIGNALS[1]), /*#__PURE__*/React.createElement(FeatureCard, SIGNALS[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, SIGNALS[3]))));
}
const PLATFORMS = ["Meta", "TikTok", "YouTube", "Amazon Ads", "Retail media", "Google", "Pinterest", "Reddit"];
function Coverage() {
  const [active, setActive] = React.useState("TikTok");
  return /*#__PURE__*/React.createElement(HexBackdrop, {
    media: "texture",
    veil: "flat",
    assetBase: "../../assets"
  }, /*#__PURE__*/React.createElement("section", {
    id: "platforms",
    className: "hive-shell",
    style: {
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Coverage",
    title: "Wired into every surface you buy.",
    description: "Ingest runs nightly across owned, paid and social feeds, then reconciles against the media plan before anyone reads it.",
    maxWidth: 520
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p,
    selected: active === p,
    onClick: () => setActive(p)
  }, p)))), /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(HexTile, {
    icon: "activity",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-sm)/1.2 var(--font-body)",
      color: "var(--text-primary)"
    }
  }, active, " \xB7 signal health"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, "Sample data \xB7 last ingest 04:12 GMT"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    label: "Share of category conversation",
    height: 10
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 41,
    label: "Creative freshness",
    height: 10
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 83,
    label: "Plan delivery",
    height: 10
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+41",
    unit: "%",
    label: "Engaged reach",
    delta: "+6 wk/wk",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Anomalies flagged",
    size: "sm"
  }))))));
}
const STEPS = [{
  n: "1",
  title: "Ingest",
  body: "Nightly pulls from platform APIs, retail media and social listening."
}, {
  n: "2",
  title: "Reconcile",
  body: "Signals are matched to the live media plan and category taxonomy."
}, {
  n: "3",
  title: "Interrogate",
  body: "Analysts pressure-test the anomalies before anything is published."
}, {
  n: "4",
  title: "Brief",
  body: "One page per signal, in your inbox before Monday stand-up."
}];
function Method() {
  return /*#__PURE__*/React.createElement("section", {
    id: "method",
    className: "hive-shell",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Method",
    title: "Machines find it. Analysts prove it.",
    description: "Automation gets us to the shortlist. People decide what earns a page."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-5)",
      marginTop: "var(--space-9)"
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    padding: 26,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(HexTile, {
    variant: "solid",
    size: 44
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    size: "lg",
    quote: "We stopped arguing about what happened and started deciding what to do.",
    name: "Planning Director",
    role: "Nestl\xE9 UK & Ireland \xB7 sample attribution"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hex-glow.png",
    alt: "",
    style: {
      width: 180,
      margin: "0 auto"
    }
  })));
}
function AccessBand({
  onRequest
}) {
  return /*#__PURE__*/React.createElement(HexBackdrop, {
    media: "texture",
    veil: "down",
    assetBase: "../../assets"
  }, /*#__PURE__*/React.createElement("section", {
    id: "access",
    className: "hive-shell",
    style: {
      padding: "var(--section-y-tight) 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-hive-intel-lockup.png",
    alt: "The Hive Intel",
    style: {
      height: 130
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-primary)",
      maxWidth: 720
    }
  }, "Next briefing lands Monday, 07:00 GMT."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)",
      maxWidth: 520
    }
  }, "Access is limited to Nestl\xE9 and UM Worldwide teams."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "arrow-right",
    onClick: onRequest
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    icon: "mail"
  }, "Talk to the team")))));
}
Object.assign(window, {
  SignalGrid,
  Coverage,
  Method,
  AccessBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hive-intel-landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.HexTile = __ds_scope.HexTile;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.HexBackdrop = __ds_scope.HexBackdrop;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
