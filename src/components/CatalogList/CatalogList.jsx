import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectCatalogAll,
  selectCatalogPage,
  selectCountPage,
  selectIsLoading,
} from '../../redux/selectors';

import css from './CatalogList.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchCampersAll, fetchCampersPage } from '../../redux/operations';
import { nextPage } from '../../redux/catalogsSlice.js';

export default function CatalogList() {
  const dispatch = useDispatch();
  const [isLoadMore, setIsLoadMore] = useState(true);

  const advertsAll = useSelector(selectCatalogAll);
  const adverts = useSelector(selectCatalogPage);
  const page = useSelector(selectCountPage);
  const loading = useSelector(selectIsLoading);

  console.log('page', page);
  console.log('advertsAll', advertsAll);
  console.log('adverts', adverts);

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(fetchCampersAll());
      dispatch(fetchCampersPage({ page }));
    }
  }, [adverts, dispatch, page]);

  useEffect(() => {
    if (page + 1 > Math.ceil(advertsAll.length / 4)) {
      setIsLoadMore(false);
    } else {
      setIsLoadMore(true);
    }
  }, [page, advertsAll.length]);

  const handleLoadMore = () => {
    dispatch(nextPage());
    dispatch(fetchCampersPage(page + 1));
  };

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {adverts.map(data => {
          return (
            <li key={data._id} className={css.item}>
              <CatalogCard data={data} />
            </li>
          );
        })}
      </ul>

      {advertsAll.length > 0 && !loading && isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
