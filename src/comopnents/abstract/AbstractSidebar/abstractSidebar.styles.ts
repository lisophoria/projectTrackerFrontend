import { makeStyles } from 'tss-react/mui';

const useAbstractSidebarStyles = makeStyles()({
  sidebarContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
  },
  contentWrapper: {
    flex: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  childrenWrapper: {
    flex: '1',
  },
});

export default useAbstractSidebarStyles;
