import {FC, PropsWithChildren} from "react";
import {Box, Typography} from "@mui/material";
import useAbstractBlockWithButtonsStyles from "./AbstractBlockWithButtons.styles";
import {IButtonProps} from "../../ui/Button/button";
import Button from "../../ui/Button";

interface IAbstractBlockWithButtonsProps {
  width?: number;
  height?: number;
  heading?: string;
  buttons?: IButtonProps[];
}

const AbstractBlockWithButtons: FC<PropsWithChildren<IAbstractBlockWithButtonsProps>> = (props) => {
  const { classes } = useAbstractBlockWithButtonsStyles();

  return (
    <Box
      className={classes.blockWrapper}
      sx={{
        height: props.height ?? 'fit-content',
        width: props.width ?? 300,
      }}
    >
      <Typography
        fontSize={18}
        // fontWeight={700}
      >
        {props.heading}
      </Typography>
      <Box>
        {props.children}
      </Box>
      {props.buttons && (
        <Box className={classes.buttonsRow}>
          {props.buttons.map((item) => (
            <Button {...item} sx={{ width: '100%', height: '40px' }} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AbstractBlockWithButtons;
