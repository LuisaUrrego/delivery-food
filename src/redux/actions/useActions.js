import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const actionRegisterAsync = ({ email, password, name }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      dispatch(actionRegisterSync({email, password, name}, null))
    } catch (error) {
      console.log(error);
      dispatch(actionRegisterSync({}, {code: error.code, message: error.message}))
    }
  };
};

const actionRegisterSync = (newUser, error) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
     user: newUser,
     error: error
    },
  };
};
