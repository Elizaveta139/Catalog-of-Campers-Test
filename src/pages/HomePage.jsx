import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../components/Home/Home';

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Catalog of campers</title>
      </Helmet>
      <Home />
    </HelmetProvider>
  );
}
