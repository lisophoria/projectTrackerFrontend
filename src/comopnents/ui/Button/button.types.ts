export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
}

export const MuiButtonVariantByButtonType = {
  [ButtonTypes.PRIMARY]: 'contained',
  [ButtonTypes.SECONDARY]: 'outlined',
  [ButtonTypes.ACCENT]: 'contained',
}

export const MuiButtonStyleByButtonType = {
  [ButtonTypes.PRIMARY]: {
    color: '#fff',
    backgroundColor: '#85b0ff',
    fontSize: '18px',
    ':hover': {
      backgroundColor: '#739ff0',
    },
  },
  [ButtonTypes.SECONDARY]: {
    color: '#85b0ff',
    borderColor: '#85b0ff',
    backgroundColor: '#fff',
    fontSize: '18px',
    ':hover': {
      color: '#739ff0',
      backgroundColor: '#739ff0',
    },
  },
  [ButtonTypes.ACCENT]: {
    color: '#fff',
    backgroundColor: '#f44336',
    fontSize: '18px',
    ':hover': {
      backgroundColor: '#c6372d',
    },
  },
}