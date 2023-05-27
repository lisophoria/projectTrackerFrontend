import { makeStyles } from 'tss-react/mui';

const useProfileStyles = makeStyles()({
  profileWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoWrapper: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '-5px',
  },
});

export default useProfileStyles;
