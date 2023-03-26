import { slate } from '@radix-ui/colors'
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  /*
   * @see https://www.radix-ui.com/colors
   */
  color: {
    gray1: slate.slate1,
    gray2: slate.slate2,
    gray3: slate.slate3,
    gray4: slate.slate4,
    gray5: slate.slate5,
    gray6: slate.slate6,
    gray7: slate.slate7,
    gray8: slate.slate8,
    gray9: slate.slate9,
    gray10: slate.slate10,
    gray11: slate.slate11,
    gray12: slate.slate12,
  },
  font: {
    body: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  },
  fontSize: {
    xl: '32px',
    lg: '24px',
    md: '16px',
    sm: '12px',
    xs: '8px',
  },
  transition: {
    all: 'all 0.1s ease-in-out',
  },
})
