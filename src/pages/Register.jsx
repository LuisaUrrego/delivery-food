import React from "react";
import TextField from "@mui/material/TextField";
import { StyledTextField } from "../../src/components/register/styleRegister";
import { Form } from "../components/register/styleRegister";
import { Button } from "../components/register/styleRegister";
import { Title } from "../components/register/styleRegister";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  name: yup.string().required("Por favor ingresar su nombre"),
  email: yup
    .string()
    .email("Debes ingresar tu correo electronico")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(12, "La contraseña no debe contener mas de 12 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
      "La contraseña debe tener al menos una letra mayúscula, un número y un carácter especial"
    ),
});
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleCreateUsers = (data) => {
    console.log(data);
  };
  return (
    <section>
      <div>
        <Title>Create account</Title>
      </div>
      <Form onSubmit={handleSubmit(handleCreateUsers)}>
        <StyledTextField>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </StyledTextField>
        <StyledTextField>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </StyledTextField>
        <StyledTextField>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </StyledTextField>
        <div>
          <Button>Sing in</Button>
        </div>
      </Form>
    </section>
  );
};

export default Register;
