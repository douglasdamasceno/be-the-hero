import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";
import "./style.css";
import logoImg from "../../assets/logo.svg";
export default function Register() {
  function handleRegister(e) {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tem cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Whatsapp" />
          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
