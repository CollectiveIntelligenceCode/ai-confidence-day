/**
 * Collective Intelligence Brand Configuration
 *
 * This file defines all brand colors, typography, and component patterns.
 * Import this config in your component libraries and Tailwind setup.
 *
 * Usage:
 * - Tailwind: import colors and extend tailwind.config.ts
 * - CSS: use CSS variables like var(--color-brand-primary)
 * - React: import brandConfig and use in styled-components or inline styles
 */

export const brandConfig = {
  // ============================================
  // COLOR PALETTE
  // ============================================
  colors: {
    // Primary Brand Color
    primary: '#f20544',        // Collective Red
    primaryHover: 'rgba(242, 5, 68, 0.9)',
    primaryActive: 'rgba(242, 5, 68, 0.8)',
    primaryLight: 'rgba(242, 5, 68, 0.1)',
    primaryLighter: 'rgba(242, 5, 68, 0.05)',

    // Neutrals
    dark: '#1A1A1A',           // Dark text, headings
    mid: '#4A4A4A',            // Secondary text
    light: '#7A7A7A',          // Tertiary text, disabled

    // Surfaces
    bg: '#ffffff',             // Main background
    surface: '#f8f8f8',        // Card backgrounds, sections
    border: '#eeeeee',         // Dividers, form borders

    // CXO Variant (optional)
    cxo: {
      red: '#C0392B',
      redHover: '#A93226',
      cream: '#F5F3EF',
      border: '#E5E5E3',
    },

    // Status Colors (semantic)
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  fonts: {
    heading: '"Roboto", Georgia, serif',
    body: '"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    label: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    accent: '"Instrument Serif", Georgia, serif',
  },

  typography: {
    h1: {
      fontSize: '3rem',         // 48px
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'Roboto',
    },
    h2: {
      fontSize: '2.25rem',      // 36px
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'Roboto',
    },
    h3: {
      fontSize: '1.875rem',     // 30px
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'Roboto',
    },
    h4: {
      fontSize: '1.5rem',       // 24px
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'Roboto',
    },
    body: {
      fontSize: '1rem',         // 16px
      fontWeight: 400,
      lineHeight: 1.6,
      fontFamily: 'Quicksand',
    },
    small: {
      fontSize: '0.875rem',     // 14px
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Quicksand',
    },
    label: {
      fontSize: '0.75rem',      // 12px
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: 'DM Sans',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  // ============================================
  // COMPONENT PATTERNS
  // ============================================
  components: {
    button: {
      primary: {
        bg: '#f20544',
        text: '#ffffff',
        padding: '12px 24px',
        borderRadius: '0.5rem',
        fontSize: '14px',
        fontWeight: 500,
        font: 'DM Sans',
        hover: 'rgba(242, 5, 68, 0.9)',
        active: 'rgba(242, 5, 68, 0.8)',
        disabled: {
          bg: '#cccccc',
          text: '#666666',
        },
      },
      secondary: {
        bg: 'transparent',
        border: '1px solid #f20544',
        text: '#f20544',
        padding: '11px 23px',
        borderRadius: '0.5rem',
        fontSize: '14px',
        fontWeight: 500,
        hover: 'rgba(242, 5, 68, 0.05)',
        active: 'rgba(242, 5, 68, 0.1)',
      },
      ghost: {
        bg: 'transparent',
        text: '#4A4A4A',
        border: 'none',
        padding: '12px 24px',
        hover: {
          text: '#1A1A1A',
          textDecoration: 'underline',
        },
      },
    },

    badge: {
      default: {
        border: '1px solid rgba(242, 5, 68, 0.3)',
        bg: 'rgba(242, 5, 68, 0.1)',
        text: '#f20544',
        padding: '4px 12px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      },
      success: {
        border: '1px solid rgba(16, 185, 129, 0.3)',
        bg: 'rgba(16, 185, 129, 0.1)',
        text: '#10b981',
      },
      warning: {
        border: '1px solid rgba(245, 158, 11, 0.3)',
        bg: 'rgba(245, 158, 11, 0.1)',
        text: '#f59e0b',
      },
      error: {
        border: '1px solid rgba(239, 68, 68, 0.3)',
        bg: 'rgba(239, 68, 68, 0.1)',
        text: '#ef4444',
      },
    },

    card: {
      default: {
        bg: '#ffffff',
        border: '1px solid #eeeeee',
        borderRadius: '0.5rem',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        hover: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
      highlighted: {
        borderLeft: '4px solid #f20544',
      },
    },

    input: {
      default: {
        border: '1px solid #eeeeee',
        padding: '12px 16px',
        borderRadius: '0.375rem',
        fontSize: '16px',
        font: 'Quicksand',
        focus: {
          border: '2px solid #f20544',
          outline: 'none',
        },
        placeholder: '#7A7A7A',
        disabled: {
          bg: '#f8f8f8',
          text: '#cccccc',
        },
      },
      label: {
        fontSize: '14px',
        fontWeight: 500,
        font: 'DM Sans',
        color: '#1A1A1A',
        marginBottom: '8px',
      },
    },
  },

  // ============================================
  // SPACING SCALE
  // ============================================
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
};

// Export as CSS custom properties (for use in :root)
export const cssVariables = {
  '--color-brand-primary': brandConfig.colors.primary,
  '--color-brand-primary-hover': brandConfig.colors.primaryHover,
  '--color-brand-dark': brandConfig.colors.dark,
  '--color-brand-mid': brandConfig.colors.mid,
  '--color-brand-light': brandConfig.colors.light,
  '--color-brand-bg': brandConfig.colors.bg,
  '--color-brand-surface': brandConfig.colors.surface,
  '--color-brand-border': brandConfig.colors.border,
  '--font-heading': brandConfig.fonts.heading,
  '--font-body': brandConfig.fonts.body,
  '--font-label': brandConfig.fonts.label,
};

export default brandConfig;
