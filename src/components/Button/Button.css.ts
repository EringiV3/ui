import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '@/styles'

export const button = recipe({
  base: {
    borderRadius: 6,
    fontFamily: 'inherit',
    fontSize: vars.fontSize.md,
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    appearance: 'none',
    transition: vars.transition.all,
    ':focus': {
      outline: `2px solid ${vars.color.gray9}`,
      outlineOffset: 2,
    },
    ':active': {
      transform: 'scale(0.95)',
    },
  },

  variants: {
    color: {
      primary: {
        background: vars.color.gray12,
        color: vars.color.gray1,
        ':hover': { background: vars.color.gray11 },
      },
    },
    size: {
      small: { padding: 6 },
      medium: { padding: 12 },
      large: { padding: 18 },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
