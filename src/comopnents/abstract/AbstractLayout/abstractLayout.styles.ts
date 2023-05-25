import {makeStyles} from "tss-react/mui";

const useAbstractLayoutStyles = makeStyles()({
  horizontalFlex: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  leftBlock: {
    flex: '0 0 0',
  },
  verticalFlex: {
    display: 'flex',
    flex: '1 0 0',
    flexDirection: 'column',
  },
  topRightBlock: {
    flex: '0',
  },
  bottomRightBlock: {
    flex: '1',
  }
});

export default useAbstractLayoutStyles;
