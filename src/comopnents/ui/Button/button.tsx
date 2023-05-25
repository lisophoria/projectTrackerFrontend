import {FC} from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps, SxProps
} from '@mui/material';
import {
  ButtonTypes,
  MuiButtonStyleByButtonType,
  MuiButtonVariantByButtonType
} from './button.types';

export interface IButtonProps extends MuiButtonProps{
  styleType: ButtonTypes,
  onClick: () => void;
  icon?: JSX.Element,
  title?: string;
  disabled?: boolean;
  sx?: SxProps;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <MuiButton
      type={props.type}
      startIcon={props.icon}
      variant={MuiButtonVariantByButtonType[props.styleType] as 'outlined' | 'contained'}
      sx={{...MuiButtonStyleByButtonType[props.styleType], ...props.sx}}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
    </MuiButton>
  );
};

export default Button;
