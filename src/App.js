import logo from './logo.svg';
import { Box, Container, CssBaseline, Grid, StyledEngineProvider } from '@mui/material';
import { Navigate, Route, Routes, useLocation, useNavigate, Outlet } from 'react-router-dom';
import DashBoard from './screens/DashBoard';
import routers from './router'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Helper } from './utils/helpers';
import { Key, drawerWidth } from './utils/common';
import { USER_DETAIL_ACTION, USER_LOGIN_SUCCESS_ACTION } from './redux/type';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';


function App() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);

  // === LOGIC ===
  const getRouters = (allRouters, useCommonLayout) =>
    allRouters.map((router) => {
      if (router.router != null && router.useCommonLayout === useCommonLayout) {

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
      navigate((location.pathname !== '/login' && location.pathname !== '/register' || location.pathname === '/forgot-password') ? '/login' : `${location.pathname}${location.search}`);
      // setLoading(false);
    }
  }
  useEffect(() => {
    if (token) {
      initUserLogin();
    }
  }, [token])

  useEffect(() => {
    getLocalData()
  }, [])



  // === UI RENDER ===
  const CommonLayout = () => {
    return (
      <Box display={'flex'}>
        <CssBaseline />
        <Header />
        <SideNav />
        <Box component={'main'} flexGrow={1} sx={{ width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: 64 } }}>
          <Outlet />
        </Box>
      </Box>
    )
  }

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Routes>
        {getRouters(routers, false)}
        <Route element={<CommonLayout />}>
          {getRouters(routers, true)}
        </Route>
        <Route path='*' element={<Navigate to={'/login'} replace />} />
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
