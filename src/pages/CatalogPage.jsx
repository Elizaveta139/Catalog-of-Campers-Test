import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CatalogList from '../components/CatalogList/CatalogList';

import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

import { fetchCampersPage } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';
import { selectError } from '../redux/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampersPage());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Catalog</title>
        </Helmet>

        <div>
          {/* <SearchBox /> */}
          <CatalogList />
          {/* {isLoading && <Loader />}
          {error && <ErrorMessage />} */}
        </div>
      </HelmetProvider>
    </>
  );
}
