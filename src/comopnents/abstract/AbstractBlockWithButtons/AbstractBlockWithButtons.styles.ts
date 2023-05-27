import {makeStyles} from "tss-react/mui";

const useAbstractBlockWithButtonsStyles = makeStyles()({
  blockWrapper: {
    backgroundColor: '#fff',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '18px',
    gap: '18px',
  },
  buttonsRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  }
});

export default useAbstractBlockWithButtonsStyles;
