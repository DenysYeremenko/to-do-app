import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.all);
        }}
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.active);
        }}
      >
        Active
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.completed);
        }}
      >
        Completed
      </Button>
    </div>
  );
};
