export const theme = {
  colors: {
    // Primary - Deep Burgundy/Maroon
    primary: {
      main: "#5C2434",
      light: "#7A3448",
      dark: "#3D1823",
      contrast: "#FFFFFF",
    },
    // Secondary - Warm Cream/Beige
    secondary: {
      main: "#F5EDE4",
      light: "#FAF8F5",
      dark: "#E8DFD4",
      contrast: "#2C1810",
    },
    // Accent - Warm Gold
    accent: {
      main: "#C9A962",
      light: "#D4B87A",
      dark: "#B89B4F",
    },
    // Text colors
    text: {
      primary: "#2C1810",
      secondary: "#5A4A42",
      light: "#8B7B73",
      inverse: "#FFFFFF",
    },
    // Background variations
    background: {
      primary: "#FAF8F5",
      secondary: "#F5EDE4",
      tertiary: "#E8DFD4",
      dark: "#5C2434",
    },
    // Utility colors
    white: "#FFFFFF",
    black: "#1A1A1A",
    overlay: "rgba(92, 36, 52, 0.85)",
  },

  typography: {
    fontFamily: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      accent: "'Cormorant Garamond', Georgia, serif",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "1.875rem", // 30px
      "3xl": "2.25rem", // 36px
      "4xl": "3rem", // 48px
      "5xl": "3.75rem", // 60px
      "6xl": "4.5rem", // 72px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
  },

  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px rgba(44, 24, 16, 0.05)",
    md: "0 4px 6px rgba(44, 24, 16, 0.07)",
    lg: "0 10px 15px rgba(44, 24, 16, 0.1)",
    xl: "0 20px 25px rgba(44, 24, 16, 0.12)",
    inner: "inset 0 2px 4px rgba(44, 24, 16, 0.06)",
  },

  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
    slower: "700ms ease",
    spring: "500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  container: {
    maxWidth: "1280px",
    padding: "1rem",
  },

  zIndex: {
    dropdown: 100,
    sticky: 200,
    modal: 300,
    overlay: 400,
    tooltip: 500,
  },
} as const;

export type Theme = typeof theme;
