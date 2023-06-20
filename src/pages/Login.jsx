import React from "react";
import TextField from "@mui/material/TextField";
import { ContainerTextField, Image, Formulario, ButtonLogin, SpanLogin} from "../components/login/styleLogin";

const Login = () => {
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
      <Formulario>
        <ContainerTextField>
          <TextField id="standard-basic" label="Name" variant="standard" type="text"/>
        </ContainerTextField>
        <ContainerTextField>
          <TextField id="standard-basic" label="Password" variant="standard" type="password" />
        </ContainerTextField>
        <div>
          <ButtonLogin>Login</ButtonLogin>
        </div>
      </Formulario>
    </section>
  );
};

export default Login;
