
import styled from './Filter.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
    const onSetFilter = payload => {
        dispatch(setFilter(payload));
      };
    
      const updateFilter = event => {
        onSetFilter(event.target.value);
      };
    
      const dispatch = useDispatch();
    
      const filter = useSelector(getFilter);

     return (
         <label className={styled.filter}>
            Пошук
            <input type="text" value={filter} onChange={updateFilter} />
          </label>
     )
}

export default Filter
