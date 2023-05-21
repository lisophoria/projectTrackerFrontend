import {makeStyles} from "tss-react/mui";

const useAbstractSidebarStyles = makeStyles()({
  sidebarContainer: {
    width: '210px',
    height: '100%',
    padding: '20px 0',
    backgroundColor: '#F4F5F7',
  },
  tabs: {
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  tab: {
    '&.MuiTab-root': {
      color: '#172B4D',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minHeight: '30px',
      textTransform: 'none',
      fontSize: '14px',
      lineHeight: '20px',
      display: 'flex',
      boxShadow: 'none',
      padding: '0px 8x',
      justifyContent: 'flex-start',
    },
    '& .MuiTab-iconWrapper': {
      marginRight: '10px',
    },
    '&.Mui-selected': {
      color: '#0767DB'
    }
  },
});

export default useAbstractSidebarStyles;
