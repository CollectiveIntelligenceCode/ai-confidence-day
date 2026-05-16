import type { Meta, StoryObj } from '@storybook/react';

const CardDemo = ({ highlighted, children }: { highlighted?: boolean; children: string }) => (
  <div
    className={`
      border bg-white rounded-lg p-6 max-w-sm
      ${highlighted ? 'border-l-4 border-l-brand-primary border-brand-border' : 'border-brand-border'}
      hover:shadow-lg transition-shadow
    `}
  >
    <h3 className="text-lg font-bold text-brand-text mb-2">Card Title</h3>
    <p className="text-brand-text/70">{children}</p>
  </div>
);

const meta: Meta<typeof CardDemo> = {
  title: 'Brand Components/Card',
  component: CardDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    highlighted: {
      control: 'boolean',
      description: 'Apply left border accent',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    highlighted: false,
    children: 'This is a standard card with subtle borders and hover effects.',
  },
};

export const Highlighted: Story = {
  args: {
    highlighted: true,
    children: 'This card is highlighted with a left border accent for emphasis.',
  },
};

export const WithLongContent: Story = {
  args: {
    highlighted: false,
    children:
      'Cards can contain any content. This example shows how the card adapts to longer text content while maintaining proper spacing and readability through the brand typography system.',
  },
};
