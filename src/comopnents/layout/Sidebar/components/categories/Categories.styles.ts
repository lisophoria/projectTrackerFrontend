import { makeStyles } from 'tss-react/mui';

const useCategoriesStyles = makeStyles()({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '0',
  },
  categoriesListWrapper: {
    flex: '1',
    display: 'flex',
    paddingLeft: '8px',
    boxSizing: 'border-box',
    flexDirection: 'column',
  },
});

export default useCategoriesStyles;
