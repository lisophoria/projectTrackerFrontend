import { makeStyles } from 'tss-react/mui';

const useTaskCardStyles = makeStyles()({
  taskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    color: '#888888',
  },
  checkboxFlex: {
    flex: '0',
  },
  insideFlex: {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoFlex: {
    display: 'flex',
    gap: '10px',
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

export default useTaskCardStyles;
