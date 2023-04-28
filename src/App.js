import logo from './logo.svg';
import { Container, CssBaseline, Grid, StyledEngineProvider } from '@mui/material';
import { Navigate, Route, Routes, useLocation, useNavigate, Outlet } from 'react-router-dom';
import DashBoard from './screens/DashBoard';
import routers from './router'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helper } from './utils/helpers';
import { Key } from './utils/common';
import { USER_DETAIL_ACTION, USER_LOGIN_SUCCESS_ACTION } from './redux/type';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';


function App() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  console.log("APP", token)
  // === LOGIC ===
  const getRouters = (allRouters, useCommonLayout) =>
    allRouters.map((router) => {
      console.log("T", useCommonLayout)
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
          console.log(success)
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
      <Grid container direction={'column'} spacing={'5'}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Container maxWidth='xl'>
            <Grid container>

              <Grid item sx={{ display: { sm: 'block', xs: 'none' } }} sm={2}>
                <SideNav />
              </Grid>


              <Grid item sm={10} >
                <Outlet />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    )
  }

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Routes>
        {/* Custom layout */}
        {getRouters(routers, false)}

        {/* Conmmon Layout */}

        <Route element={<CommonLayout />}>

          {getRouters(routers, true)}

        </Route>
        {/* <Route element={<CommonLayout />}>
          <Route path='/' element={<DashBoard />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Route> */}
        <Route path='*' element={<Navigate to={'/login'} replace />} />
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
