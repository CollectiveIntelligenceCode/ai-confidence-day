import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@collective-intelligence/components';

const CardContent = ({ children }: { children: string }) => (
  <div>
    <h3 className="text-lg font-bold text-brand-text mb-2">Card Title</h3>
    <p className="text-brand-text/70">{children}</p>
  </div>
);

const meta: Meta<typeof Card> = {
  title: 'Brand Components/Card',
  component: Card,
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
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: '400px' }}>
      <CardContent>This is a standard card with subtle borders and hover effects.</CardContent>
    </Card>
  ),
};

export const Highlighted: Story = {
  args: {
    highlighted: true,
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: '400px' }}>
      <CardContent>This card is highlighted with a left border accent for emphasis.</CardContent>
    </Card>
  ),
};

export const WithLongContent: Story = {
  args: {
    highlighted: false,
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: '400px' }}>
      <CardContent>
        Cards can contain any content. This example shows how the card adapts to longer text content while maintaining proper spacing and readability through the brand typography system.
      </CardContent>
    </Card>
  ),
};
