import { makeStyles } from 'tss-react/mui';

const useCollapsiblePanelStyles = makeStyles()({
  collapsiblePanelWrapper: {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    '&:before': {
      display: 'none',
    },
  },
  header: {
    fontSize: '22px',
  },
});

export default useCollapsiblePanelStyles;
