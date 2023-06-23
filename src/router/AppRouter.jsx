import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/home/Home";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Layout from "../components/Layout";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UserPorfile from "../pages/UserPorfile";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "../redux/actions/useActions";
import SearchPlates from "../pages/SearchPlates";
import ConfirmationBuy from "../pages/ConfirmationBuy";

const AppRouter = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (LoginUser) => {
      if (LoginUser?.uid) {
        setUserLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay informacion");
          const legged = {
            email: LoginUser.auth.currentUser.email,
            name: LoginUser.auth.currentUser.displayName,
            porfileUser: LoginUser.auth.currentUser.photoURL,
            accessToken: LoginUser.auth.currentUser.accessToken,
          };
          dispatch(actionLoginSync(legged));
        }

        console.log(LoginUser);
      } else {
        setUserLoggedIn(false);
      }
      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAutentication={userLoggedIn} />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRouter isAutentication={userLoggedIn} />}>
            <Route path="home" element={<Home />} />
            <Route path="perfil" element={<UserPorfile />} />
            <Route path="browser" element={<SearchPlates />} />
            <Route path="confirmationBuy" element={<ConfirmationBuy />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
