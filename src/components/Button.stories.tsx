import type { Meta, StoryObj } from '@storybook/react';

const ButtonDemo = ({ variant, label }: { variant: 'primary' | 'secondary' | 'ghost'; label: string }) => (
  <button
    className={
      variant === 'primary'
        ? 'px-6 py-3 bg-brand-primary text-white rounded hover:bg-brand-primary/90 transition-colors'
        : variant === 'secondary'
          ? 'px-6 py-3 border-2 border-brand-primary text-brand-primary rounded hover:bg-brand-primary/10 transition-colors'
          : 'px-6 py-3 text-brand-text hover:underline transition-colors'
    }
  >
    {label}
  </button>
);

const meta: Meta<typeof ButtonDemo> = {
  title: 'Brand Components/Button',
  component: ButtonDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Button style variant',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const Playground: Story = {
  args: {
    variant: 'primary',
    label: 'Interactive Button',
  },
};
