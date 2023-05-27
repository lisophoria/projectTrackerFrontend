import { makeStyles } from 'tss-react/mui';

const useTaskCardStyles = makeStyles()({
  taskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
  },
  categoryName: {
    color: '#888888',
  },
});

export default useTaskCardStyles;
