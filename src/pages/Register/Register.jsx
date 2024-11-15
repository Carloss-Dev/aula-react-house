import React from "react";
import Form from "../../components/Form/Form";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
const Register = () => {
  return (
    <section className="register-container">
      <Form title="Cadastro" width="50rem" height="42rem" bg="whitesmoke">
        <div className="register-inputs">
          <Input height="4rem">Nome: </Input>
          <Input height="4rem">Email: </Input>
          <Input height="4rem">Senha: </Input>
        </div>
        <Button height="4rem">Cadastrar</Button>
      </Form>
    </section>
  );
};

export default Register;
