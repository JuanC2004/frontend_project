import './App.scss';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import allRoutes, { AdminRoutes, GeneralRoutes } from './config/routes';
import { AuthProvider } from './context';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {GeneralRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component/>}
            />
          ))}
          {AdminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component/>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;

