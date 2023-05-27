import {makeStyles} from "tss-react/mui";

const useAbstractSidebarStyles = makeStyles()({
  sidebarContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#F4F5F7',
  },
  contentWrapper: {
    flex: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  tabs: {
    minHeight: 0,
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  tab: {
    '&.MuiTab-root': {
      padding: '0 18px',
      color: '#172B4D',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minHeight: '45px',
      textTransform: 'none',
      fontSize: '16px',
      lineHeight: '20px',
      display: 'flex',
      boxShadow: 'none',
      margin: '0',
      justifyContent: 'flex-start',
    },
    '&.Mui-selected': {
      color: '#0767DB'
    }
  },
  childrenWrapper: {
    flex: '1',
  }
});

export default useAbstractSidebarStyles;
