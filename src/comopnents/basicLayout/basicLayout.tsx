import {FC} from "react";
import AbstractLayout from "../abstract/abstractLayout";
import {Box} from "@mui/material";

const BasicLayout: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <AbstractLayout
        topRightBlock={(
          <Box sx={{ backgroundColor: 'red' }}>header</Box>
        )}
        leftBlock={(
          <Box sx={{ backgroundColor: 'blue', height: '100%' }}>sidebar</Box>
        )}
      >
        <Box sx={{ backgroundColor: 'pink', height: '100%' }}>content</Box>
      </AbstractLayout>
    </Box>
  );
};

export default BasicLayout;
