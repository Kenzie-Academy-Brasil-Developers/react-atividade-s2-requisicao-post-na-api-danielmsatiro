import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./style.js";
import axios from "axios";
import { useState } from "react";
import { Display } from "../../components/Display/index.jsx";

export const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Entre com um usuário"),
    password: yup.string().required("Entre com uma senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [statusText, setStatusText] = useState("");

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setStatusText(response.statusText);
      })
      .catch((err) => {
        setStatusText("error");
      });
  };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Login</h1>
        <input type="text" placeholder="User Name" {...register("username")} />
        {errors.username?.message}
        <input password="text" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Login</button>
      </Container>
      {statusText && <Display statusText={statusText} />}
    </>
  );
};
