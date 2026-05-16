import type { Meta, StoryObj } from '@storybook/react';

const BadgeDemo = ({ variant, label }: { variant: 'default' | 'success' | 'error'; label: string }) => {
  const baseClass = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase';

  const variantClass =
    variant === 'default'
      ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/30'
      : variant === 'success'
        ? 'bg-green-100 text-green-700 border border-green-300'
        : 'bg-brand-error/10 text-brand-error border border-brand-error/30';

  return <span className={`${baseClass} ${variantClass}`}>{label}</span>;
};

const meta: Meta<typeof BadgeDemo> = {
  title: 'Brand Components/Badge',
  component: BadgeDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
      description: 'Badge style variant',
    },
    label: {
      control: 'text',
      description: 'Badge text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Featured',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Approved',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <BadgeDemo variant="default" label="Featured" />
      <BadgeDemo variant="success" label="Approved" />
      <BadgeDemo variant="error" label="Error" />
    </div>
  ),
};
