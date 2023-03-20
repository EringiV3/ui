import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
}
export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
}
