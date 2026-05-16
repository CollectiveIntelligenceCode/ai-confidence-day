import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@collective-intelligence/components';

const meta: Meta<typeof Badge> = {
  title: 'Brand Components/Badge',
  component: Badge,
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
    children: 'Featured',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Approved',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge variant="default">Featured</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};
