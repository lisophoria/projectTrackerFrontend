import {makeStyles} from "tss-react/mui";

const useCategoriesStyles = makeStyles()({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '18px',
    flex: '0',
  },
  categoriesListWrapper: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
});

export default useCategoriesStyles;
