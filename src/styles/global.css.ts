import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'

globalStyle('html, body', {
  margin: 0,
})

globalStyle('body', {
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
})
