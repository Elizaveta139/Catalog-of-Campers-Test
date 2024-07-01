import { Helmet, HelmetProvider } from 'react-helmet-async';

import Loader from '../../components/Loader/Loader';

export default function FavoritesPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Favorites</title>
        </Helmet>
        {/* 
        <div className={css.wrapContacts}>
          <SearchBox />
          <ContactList />
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
        </div> */}

        <div>
          <Loader />
        </div>
      </HelmetProvider>
    </>
  );
}
