import {FC, PropsWithChildren} from 'react';
import {Box, SxProps} from "@mui/material";
import useAbstractLayoutStyles from "./abstractLayout.styles";

interface IAbstractLayoutProps {
  leftBlock?: JSX.Element;
  topRightBlock?: JSX.Element;
  styleForWrapper?: SxProps;
  styleForBottomRightBlock?: SxProps;
}

const AbstractLayout: FC<PropsWithChildren<IAbstractLayoutProps>> = (props) => {
  const { classes } = useAbstractLayoutStyles();

  return (
    <Box className={classes.horizontalFlex} sx={props.styleForWrapper}>
      <Box className={classes.leftBlock}>
        {props.leftBlock}
      </Box>
      <Box className={classes.verticalFlex}>
        <Box className={classes.topRightBlock}>
          {props.topRightBlock}
        </Box>
        <Box className={classes.bottomRightBlock} sx={props.styleForBottomRightBlock}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default AbstractLayout;
