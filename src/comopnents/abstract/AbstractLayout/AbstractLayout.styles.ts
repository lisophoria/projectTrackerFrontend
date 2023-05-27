import { makeStyles } from 'tss-react/mui';

const useAbstractLayoutStyles = makeStyles()({
  horizontalFlex: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  leftBlock: {
    flex: '0',
    height: '100%',
  },
  verticalFlex: {
    height: '100%',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
  },
  topRightBlock: {
    flex: '0',
  },
  bottomRightBlock: {
    flex: '1',
    overflow: 'auto',
  },
});

export default useAbstractLayoutStyles;
