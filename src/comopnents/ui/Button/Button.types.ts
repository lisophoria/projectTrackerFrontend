export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  TEXT = 'text',
}

export const MuiButtonVariantByButtonType = {
  [ButtonTypes.PRIMARY]: 'contained',
  [ButtonTypes.SECONDARY]: 'outlined',
  [ButtonTypes.ACCENT]: 'contained',
  [ButtonTypes.TEXT]: 'text',
};

export const MuiButtonStyleByButtonType = {
  [ButtonTypes.PRIMARY]: {
    color: '#fff',
    backgroundColor: '#0767DB',
    fontSize: '18px',
    ':hover': {
      backgroundColor: '#0552af',
    },
  },
  [ButtonTypes.SECONDARY]: {
    color: '#0767DB',
    borderColor: '#0767DB',
    backgroundColor: '#fff',
    fontSize: '18px',
    ':hover': {
      color: '#fff',
      backgroundColor: '#0767DB',
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
  [ButtonTypes.TEXT]: {
    color: '#172B4D',
  },
};
