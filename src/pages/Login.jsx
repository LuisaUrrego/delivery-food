import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  ContainerTextField,
  Image,
  Formulario,
  ButtonLogin,
  SpanLogin,
  ContainerIconPassword,
  ButtonLoginGoogle,
  ImageGoogle
} from "../components/login/styleLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../services/information";
import { actionLoginAsync, actionLoginGoogle } from "../redux/actions/useActions";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debes ingresar tu correo electronico")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});
const Login = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const login = (data) => {
    console.log(data)
    dispatch(actionLoginAsync(data.email, data.password))
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginGoogle = (provider) => {
    dispatch(actionLoginGoogle(provider));
  };

  return (
    <section>
      <figure>
        <Image
          src="https://sprint-final-23fa8.web.app/static/media/logo.d35a45a3abc1c9b520c842d9997b03c5.svg"
          alt=""
        />
      </figure>
      <div>
        <SpanLogin>
          Login or create an account with your phone number to start ordering
        </SpanLogin>
      </div>
      <Formulario onSubmit={handleSubmit(login)}>
        <ContainerTextField>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </ContainerTextField>
        <ContainerTextField>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <ContainerIconPassword>
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </ContainerIconPassword>
        </ContainerTextField>
        <ButtonLoginGoogle> Login with google
        {loginWithGoogle.map((provider, index) => (
          <ImageGoogle
            key={index}
            src={provider.image}
            alt={provider.name}
           
            onClick={() => {
              handleLoginGoogle(provider.provider);
            }}
          />
        ))}
      </ButtonLoginGoogle>
        <div>
          <ButtonLogin>Login</ButtonLogin>
        </div>
        <p>¿No tienes una cuenta? <Link to="/register">Haz click aquí</Link></p>
        
      </Formulario>
    </section>
  );
};

export default Login;
