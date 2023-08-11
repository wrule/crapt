import { Routes, Route } from 'react-router-dom';
import { Home } from './views/home';

export
function RouteView() {
  return <Routes>
    <Route path="/" element={<Home />} />
  </Routes>;
}
