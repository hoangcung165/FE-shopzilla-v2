import logo from './logo.svg';
import { Container, CssBaseline, StyledEngineProvider } from '@mui/material';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import DashBoard from './screens/DashBoard';
import routers from './router'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helper } from './utils/helpers';
import { Key } from './utils/common';
import { USER_DETAIL_ACTION, USER_LOGIN_SUCCESS_ACTION } from './redux/type';

function App() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  console.log("APP", token)
  // === LOGIC ===
  const getRouters = (allRouters) =>
    allRouters.map((router) => {

      if (router.router != null) {

        return <Route path={router.router} element={router.component} />
      }
      return null;
    })


  const initUserLogin = () => {
    dispatch({
      type: USER_DETAIL_ACTION,
      payload: {
        callback: (success, res) => {
          if (success) {
            navigate((location.pathname === '/login' || location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgot-password') ? '/dashboard' : location.pathname);
          }
        }
      }
    })

  }

  const getLocalData = () => {
    let localToken = Helper.getDataStorage(Key.dataToken)
    if (localToken) {
      dispatch({
        type: USER_LOGIN_SUCCESS_ACTION,
        payload: localToken
      });
    } else {
      navigate((location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/register' || location.pathname === '/forgot-password') ? '/login' : `${location.pathname}${location.search}`);
      // setLoading(false);
    }
  }
  useEffect(() => {
    if (token) {
      initUserLogin();
    }
  }, [token])

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
