import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";


export const actionRegisterAsync = ({ email, password, name, porfileUser }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: porfileUser,
      });
      const { accessToken } = user.auth.currentUser;
      console.log(user);
      dispatch(
        actionRegisterSync({ email, name, porfileUser, accessToken }, null)
      );
    } catch (error) {
      console.log(error);
      dispatch(
        actionRegisterSync({}, { code: error.code, message: error.message })
      );
    }
  };
};

const actionRegisterSync = (newUser, error) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

export const actionLogoutAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);

      errors = {
        errors: true,
        code: error.code,
        message: error.message,
      };
    } finally {
      dispatch(actionLogoutSync(errors));
    }
  };
};

const actionLogoutSync = (errors) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: errors,
  };
};

export const actionLoginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { displayName, accessToken, photoURL } = user.auth.currentUser;

      const LoginUser = {
        email,
        name: displayName,
        porfileUser: photoURL,
        accessToken,
      };
      dispatch(actionLoginSync(LoginUser));
    } catch (error) {
      console.log(error);
    }
  };
};
export const actionLoginSync = (user) => {
  return {
    type: userTypes.LOGGIN_USER,
    payload: user,
  };
};

export const actionLoginGoogle= (provider) => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, accessToken, photoURL, email } =
          result.user;
        console.log(result.user);
        dispatch(
          actionLoginSync({
            email,
            name: displayName,
            accessToken,
            photoURL,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionLoginSync({ email, error: true, errorMessage }));
      });
  };
};