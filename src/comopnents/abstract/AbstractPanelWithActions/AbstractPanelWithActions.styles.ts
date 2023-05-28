import { makeStyles } from 'tss-react/mui';

const useAbstractPanelWithActionsStyles = makeStyles()({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBlockFlex: {
    flex: '0',
  },
  rightBlockFlex: {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionsVisible: {
    opacity: '1',
    transition: 'all 0.2s',
  },
  actionsHidden: {
    opacity: '0',
    transition: 'all 0.2s',
  },
});

export default useAbstractPanelWithActionsStyles;
