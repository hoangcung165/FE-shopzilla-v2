import logo from './logo.svg';
import { Container, CssBaseline, StyledEngineProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './screens/DashBoard';
import routers from './router'

function App() {
  // === LOGIC
  const getRouters = (allRouters) =>
    allRouters.map((router) => {

      if (router.router != null) {

        return <Route path={router.router} element={router.component} />
      }
      return null;
    })

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Routes>
        {getRouters(routers)}
        <Route path='*' element={<Navigate to={'/dashboard'} replace />} />
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
