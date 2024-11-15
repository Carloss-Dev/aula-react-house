import React from "react";
import Button from "../../components/Button/Button";
import "./home.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
const Home = () => {
  return (
    <section className="home-container">
      <div className="action-panel">
        <h1>Olá </h1>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Button width="14rem" height="3rem">
          Ver Usuários
        </Button>
      </div>
      <section className="cards-area"></section>
    </section>
  );
};

export default Home;
