# Animation & Micro-Interaction Guidelines

## Overview

This document establishes the motion design system for The Collective Intelligence brand. Animations enhance user experience by providing visual feedback, guiding attention, and creating delightful moments without compromising performance.

---

## Core Motion Principles

### 1. **Purpose-Driven Animation**
Every animation must serve a clear purpose:
- **Feedback**: Confirm user actions (button clicks, form submissions)
- **Guidance**: Direct user attention to important changes
- **Delight**: Create memorable micro-moments that feel intentional
- **Performance**: Never animate without reason—each motion costs CPU/GPU cycles

### 2. **Timing & Easing**
- **Duration**: 200-300ms for micro-interactions, 400-600ms for transitions
- **Easing**: Use `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for transitions
- **Avoid**: Linear easing feels robotic; unpredictable easing confuses users

### 3. **Accessibility**
- Respect `prefers-reduced-motion` media query
- Provide non-animated fallbacks for all critical interactions
- Avoid rapid flashing or strobing effects
- Motion should never be the only way to communicate state changes

### 4. **Performance**
- Prioritize `transform` and `opacity` over layout-triggering properties
- Use `will-change` sparingly on high-frequency animations
- Test on lower-end devices to ensure smooth performance
- Aim for 60 FPS (16ms per frame)

---

## Animation Timings

### Fast Micro-Interactions (200ms)
Used for immediate, lightweight feedback:
- Button state changes (hover, active, disabled)
- Icon transitions
- Tooltip appears/disappears
- Form field validation messages

```css
.button {
  transition: background-color 200ms ease-out, transform 200ms ease-out;
}

.button:hover {
  background-color: #f20544;
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}
```

### Standard Transitions (300-400ms)
Used for modal opens, page transitions, and component state changes:
- Modal fade-in with scale
- Sidebar slide-in
- Dropdown menu expand
- Card hover effects

```css
.modal {
  opacity: 0;
  transform: scale(0.95);
  transition: all 300ms ease-out;
}

.modal.open {
  opacity: 1;
  transform: scale(1);
}
```

### Slower Transitions (600ms+)
Used sparingly for page-level transitions or complex sequences:
- Full-page fade transitions
- Multi-step form progress animations
- Loading state indicators
- Success celebration animations

---

## Brand-Specific Motion Styles

### Primary Brand Color Pulse (Accent Animation)
Use the brand primary color (#f20544) for attention-grabbing animations:

```css
@keyframes brand-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(242, 5, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(242, 5, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(242, 5, 68, 0);
  }
}

.feature-callout {
  animation: brand-pulse 2s infinite;
}
```

### Smooth Elevation (Shadow Depth)
Indicate interactive depth through shadow transitions:

```css
.card {
  box-shadow: 0 2px 4px rgba(26, 26, 26, 0.08);
  transition: box-shadow 300ms ease-out;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(26, 26, 26, 0.12);
}
```

### Subtle Slide Transitions
Enter/exit animations with directional purpose:

```css
.slide-in-left {
  animation: slideInLeft 400ms ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## Micro-Interaction Patterns

### 1. **Button Interactions**

#### Hover State
```css
.button {
  transition: all 200ms ease-out;
}

.button:hover {
  background-color: #d6033a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(242, 5, 68, 0.3);
}
```

#### Loading State
```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.button.loading::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
  margin-left: 8px;
}
```

#### Success State (Completion)
```css
@keyframes checkmark {
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.button.success::after {
  content: '✓';
  animation: checkmark 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 2. **Form Field Interactions**

#### Focus State
```css
input {
  border: 2px solid #e0e0e0;
  transition: border-color 200ms ease-out, box-shadow 200ms ease-out;
}

input:focus {
  border-color: #f20544;
  box-shadow: 0 0 0 3px rgba(242, 5, 68, 0.1);
  outline: none;
}
```

#### Validation Feedback
```css
.form-error {
  animation: slideInBottom 300ms ease-out;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 4px;
}

@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3. **Badge & Status Animations**

#### Success Badge Entrance
```css
.badge-success {
  animation: badgeEnter 300ms ease-out;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

@keyframes badgeEnter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 4. **Card Hover Effects**

#### Interactive Card Lift
```css
.card {
  transition: all 300ms ease-out;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(26, 26, 26, 0.12);
}

.card.highlighted {
  border-left: 4px solid #f20544;
  padding-left: calc(1.5rem - 4px);
  transition: padding-left 300ms ease-out, border-left 300ms ease-out;
}
```

---

## Accessibility & Preferences

### Respecting Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color-Only Transitions (No Flash)

Instead of relying on animation alone for state changes, combine with clear visual feedback:

```css
/* Bad: Only animation, users with reduced motion miss the state change */
.notification {
  opacity: 0;
  animation: fadeIn 400ms ease-out forwards;
}

/* Good: Color change + optional animation */
.notification {
  opacity: 0;
  background-color: #10b981;
  animation: fadeIn 400ms ease-out forwards;
}

.notification.visible {
  opacity: 1;
}
```

---

## Implementation in Components

### Using Framer Motion (Recommended)

The shared component library uses Framer Motion for declarative animations:

```tsx
import { motion } from 'framer-motion';

export const AnimatedButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="px-6 py-3 bg-brand-primary text-white rounded"
    >
      Click me
    </motion.button>
  );
};
```

### Using CSS Transitions (Lightweight)

For simpler animations, CSS transitions are sufficient:

```tsx
export const SimpleCard = ({ highlighted }) => {
  return (
    <div
      className={`
        border rounded-lg p-6 transition-all duration-300
        ${highlighted ? 'border-l-4 border-l-brand-primary shadow-lg' : 'shadow'}
      `}
    >
      Content
    </div>
  );
};
```

---

## Common Pitfalls to Avoid

1. **Over-Animation**: Every animation should have purpose. Avoid motion for motion's sake.
2. **Inconsistent Timing**: Use consistent durations across similar interactions (all buttons should animate at same speed).
3. **Easing Mismatches**: Don't use `ease-in` for entrances (feels sluggish) or `ease-out` for exits (feels unfinished).
4. **Ignoring Accessibility**: Always test with `prefers-reduced-motion` enabled.
5. **Layout Shift Animations**: Never animate `width`, `height`, `position`, `top`, `left`—use `transform` instead.
6. **Excessive GPU Use**: Avoid `box-shadow`, `border`, and `background-color` animations on many elements simultaneously.

---

## Testing & Verification

### Performance Testing
- Use Chrome DevTools Performance tab to verify 60 FPS
- Test on real mobile devices (not just emulation)
- Profile with "Rendering" checkbox enabled to catch jank

### Accessibility Testing
- Disable animations in system preferences
- Verify state changes are still visible without motion
- Test with screen readers to ensure no information is lost

### Browser Compatibility
- Test on Chrome, Firefox, Safari, Edge
- Use vendor prefixes where needed
- Provide fallbacks for unsupported features

---

## Next Steps

1. **Integrate Framer Motion** into the `@collective-intelligence/components` package
2. **Create animated component variants** (Button with loading state, Card with entrance animation)
3. **Document animation patterns** in Storybook with interactive examples
4. **Update component stories** to showcase micro-interactions

---

**Version**: 1.0
**Last Updated**: 2026-05-18
**Maintained By**: Brand Manager (ed18bc44)
