# Component Storybook

This is the interactive Storybook documentation for all branded components in ai-confidence-day.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

This will start the Storybook dev server at `http://localhost:6006`.

### Build Storybook

```bash
npm run storybook:build
```

This generates a static build suitable for deployment.

## Structure

- **Button.stories.tsx** — Primary, secondary, and ghost button variants
- **Badge.stories.tsx** — Default, success, and error badge variants
- **Card.stories.tsx** — Standard and highlighted card styles

## Adding New Stories

1. Create a component story file in `src/components/ComponentName.stories.tsx`
2. Use the pattern from existing stories (TypeScript with Meta/StoryObj typing)
3. Export named story exports (e.g., `Primary`, `Secondary`)
4. Add `tags: ['autodocs']` to auto-generate documentation

## Brand Integration

All stories automatically apply brand colors and typography through the `.storybook/preview.ts` decorator, which:
- Imports brand CSS (`src/index.css`)
- Wraps stories with brand base styles
- Applies `font-quicksand` and `text-brand-text` globally

## Tailwind CSS

Storybook is configured to work with Tailwind CSS v4. All utility classes like:
- `bg-brand-primary`
- `text-brand-text`
- `border-brand-border`

...are available in stories and will render correctly.

## Next Steps

- Add more component stories as new components are created
- Deploy Storybook to a static host for team documentation
- Link to Storybook in design system documentation
- Use Storybook as reference for component patterns during code review
