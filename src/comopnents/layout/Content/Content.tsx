import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

interface IContentProps {
  maxWidth?: number;
}

const Content: FC<PropsWithChildren<IContentProps>> = (props) => {
  return (
    <Box 
      sx={{
        height: '100%',
        maxWidth: props.maxWidth ?? '100%',
        boxSizing: 'border-box',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
