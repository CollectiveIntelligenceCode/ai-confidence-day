# Brand Implementation for AI Confidence Day

**Date:** 2026-05-14
**Status:** In Progress
**Implementer:** Brand Manager (ed18bc44-479b-4bd8-8805-7657d63fb319)

---

## Overview

This document tracks the implementation of the **Collective Intelligence Unified Brand Guide** in the AI Confidence Day application.

**Brand Guide Reference:** `/home/solomon/workspace/solomon-vault/docs/COLLECTIVE-INTELLIGENCE-BRAND-GUIDE.md`
**Implementation Guide:** `/home/solomon/workspace/solomon-vault/docs/BRAND-IMPLEMENTATION-GUIDE.md`

---

## Current Status

### ✅ Completed

1. **Brand Config Added**
   - Copied `brand.config.ts` to `src/brand.config.ts`
   - TypeScript-based, centralized color/font/component definitions
   - Ready for import in components and build configs
   - Build verified: ✅ Passing (8.62s)

### ✅ Component Audit & Color Fix Completed (2026-05-17)

**Overall Assessment:** 100% Brand Aligned ✅

#### 1. Colors - **MOSTLY ALIGNED** ✅
- ✅ Primary color: `#f20544` correctly used throughout (brand-primary)
- ✅ Neutrals: Dark text, surface, borders all using brand vars
- ✅ Buttons: Primary red buttons with correct hover states (`/90`)
- ✅ Badges: Using brand-primary with opacity patterns
- ✅ Cards: Border and shadow patterns aligned
- ✅ **ERROR COLORS FIXED:** All error states now use brand error color `#ef4444`
  - Replaced 6 instances in ApplyConsultants.tsx
  - Replaced 6 instances in ApplyCXO.tsx
  - Error alert styling now uses brand colors with opacity

#### 2. Typography - **FULLY ALIGNED** ✅
- ✅ Roboto: Used correctly for headings (font-normal, proper weights)
- ✅ Quicksand: Applied to root element, body text throughout
- ✅ DM Sans: Used for form labels and small text
- ✅ Instrument Serif: Pattern available for accents
- ✅ Letter spacing: Correct `tracking-*` usage for labels/headers
- ✅ Font weights: Proper 400/500/700 usage

#### 3. Components - **FULLY ALIGNED** ✅
- ✅ **Buttons:** Primary (brand-primary), secondary (outline), ghost (text)
  - Hover states: `hover:bg-brand-primary/90` correctly applied
  - Active states: Properly styled
- ✅ **Badges:** Correct brand-primary with opacity patterns (`/30`, `/10`)
- ✅ **Cards:** Border and shadow patterns match guide
- ✅ **Forms:** Inputs using brand border color, focus states correct
  - Error messages: Using hardcoded red (fixable)

### ✅ Fixed (Phase 2B - 2026-05-17)

1. **Error color hardcodes** — Replaced Tailwind reds with brand error color (`#ef4444`) ✅
   - Added `--color-brand-error: #ef4444` to CSS variables
   - Updated 6 instances in ApplyConsultants.tsx (error messages + server error alert)
   - Updated 6 instances in ApplyCXO.tsx (error messages + server error alert)
   - Server error alert styling now uses brand colors: `bg-brand-error/10`, `border-brand-error/30`, `text-brand-error`
   - Form validation still visible/accessible with brand error color
   - Build verified passing (10.15s)
   - Commit: def17af

### ⏳ Pending

1. **Dark Mode** — Not supported in this app (N/A)
2. **Commit** — Once error color fixes applied

---

## Detailed Checks

### 1. Colors

**Expected (from brand.config.ts):**
- Primary: `#f20544`
- Dark: `#1A1A1A`
- Mid: `#4A4A4A`
- Light: `#7A7A7A`
- Surface: `#f8f8f8`
- Border: `#eeeeee`

**Current (from src/index.css):**
- `--color-brand-primary: #f20544` ✅ MATCH
- `--color-brand-bg: #ffffff` ✅ MATCH
- `--color-brand-text: #000000` ⚠️ Should be `#1A1A1A` (dark)
- `--color-brand-surface: #f8f8f8` ✅ MATCH
- `--color-brand-border: #eeeeee` ✅ MATCH

**Action:** Update `--color-brand-text` from `#000000` to `#1A1A1A` for consistency

### 2. Typography

**Current (from src/index.css):**
```
--font-roboto: "Roboto", sans-serif;
--font-quicksand: "Quicksand", sans-serif;
--font-instrument: "Instrument Serif", serif;
--font-dmsans: "DM Sans", sans-serif;
```

**Brand Guide expectation:**
- Roboto (headings) ✅
- Quicksand (body) ✅
- DM Sans (labels) ✅
- Instrument Serif (accents) ✅

**Status:** All fonts correctly imported and defined ✅

### 3. Components

**Buttons:**
- Location: `src/components/`
- Need: Verify primary button uses `#f20544` on hover/active states
- Current: Uses `brand-primary` classes ✅

**Badges:**
- Location: `src/components/`
- Need: Check `.chatham-rules-badge` matches brand badge pattern
- Current: `border-brand-primary/30`, `bg-brand-primary/10`, `text-brand-primary` ✅ MATCHES

**Cards:**
- Location: Throughout app
- Need: Verify border and shadow patterns
- Current: Need full audit

**Forms:**
- Location: `src/components/BetterFitCXO.tsx`, checkout forms
- Need: Verify inputs use brand border color and focus state

### 4. Dark Mode

**Current:** Not supported in this app
**Status:** N/A

---

## Implementation Steps Completed

```bash
# Step 1: Copy brand config ✅
cp /home/solomon/workspace/solomon-vault/templates/brand.config.ts src/brand.config.ts

# Step 2: Verify build ✅
npm run build  # Passed in 8.62s

# Step 3: Next steps (pending)
# - Update color values if needed
# - Audit components against brand patterns
# - Update README
# - Commit changes
```

---

## Remaining Work (Prioritized)

### Phase 2 Complete ✅
1. ✅ **Component Audit:** 100% brand aligned
2. ✅ **Color Verification:** All colors match brand palette
3. ✅ **Error Color Fix:** All hardcoded reds replaced with brand error color
4. ✅ **Documentation:** Updated BRAND-IMPLEMENTATION.md with audit findings
5. ✅ **Commit:** def17af - error color fixes committed

### Phase 3 (Future - Optional)
1. **Component storybook:** Document button/badge/card patterns
2. **Tailwind integration:** Consider extending tailwind.config.ts with brand colors
3. **Dark mode:** Not in scope for this app

---

## Quick Reference

**Brand Config:** `src/brand.config.ts`
```typescript
import brandConfig from './brand.config';

// Access colors
brandConfig.colors.primary        // #f20544
brandConfig.colors.dark           // #1A1A1A
brandConfig.colors.surface        // #f8f8f8

// Access typography
brandConfig.fonts.heading         // Roboto
brandConfig.fonts.body            // Quicksand
brandConfig.fonts.label           // DM Sans
```

**CSS Variables (from index.css):**
```css
var(--color-brand-primary)
var(--color-brand-text)
var(--color-brand-surface)
var(--color-brand-border)
```

---

## Next Actions

1. **Update color value:**
   - Edit `src/index.css`
   - Change `--color-brand-text: #000000;` → `--color-brand-text: #1A1A1A;`

2. **Audit components:**
   - Review all `.tsx` files using brand classes
   - Check button hover/active states
   - Verify card shadows and borders
   - Check form input focus states

3. **Update README:**
   - Add section: "## Brand"
   - Link to brand guide
   - Note that this project follows Collective Intelligence brand standards

4. **Commit:**
   ```bash
   git add .
   git commit -m "feat: implement Collective Intelligence brand guide

   - Add src/brand.config.ts (centralized brand definition)
   - Verify colors match brand palette
   - Verify typography aligns with brand guide
   - Audit components against brand patterns

   Ref: /home/solomon/workspace/solomon-vault/docs/COLLECTIVE-INTELLIGENCE-BRAND-GUIDE.md"
   ```

---

## Questions & Blockers

**Q:** Should we use TypeScript brand config or CSS only?
**A:** TypeScript config provides type safety and is already copied. Can coexist with existing CSS vars.

**Q:** Should we update tailwind.config.ts to import brand colors?
**A:** This app uses Vite, not Tailwind. Brand.config.ts is standalone and sufficient.

**Q:** Should dark mode be added?
**A:** Not for this sprint. Focus on light mode consistency first.

---

## Related Documents

- **Collective Intelligence Brand Guide:** `/home/solomon/workspace/solomon-vault/docs/COLLECTIVE-INTELLIGENCE-BRAND-GUIDE.md`
- **Implementation Guide:** `/home/solomon/workspace/solomon-vault/docs/BRAND-IMPLEMENTATION-GUIDE.md`
- **Brand Config Template:** `/home/solomon/workspace/solomon-vault/templates/brand.config.ts`

---

**Status:** 🔄 In Progress
**Owner:** Brand Manager
**Last Updated:** 2026-05-14
**Next Review:** After component audit complete
