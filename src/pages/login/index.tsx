import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Products = (): JSX.Element => {
  return (
    <>
      <Head
        title="Login"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Login</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <h2>Já sou cadastrado</h2>
            <form action="/user/home">
              <label htmlFor="email">
                <input type="text" placeholder="E-mail" id="email" />
              </label>
              <label htmlFor="password">
                <input type="text" placeholder="Senha" id="password" />
              </label>
              <button type="submit" className="btn-primary">
                Entrar
              </button>
            </form>
          </div>
          <div className="col-md-5 offset-md-1">
            <h2>Ainda não sou cadastrado</h2>
            <form action="">
              <label htmlFor="name">
                <input type="text" placeholder="Nome" id="name" />
              </label>
              <label htmlFor="cpf">
                <input type="text" placeholder="CPF" id="cpf" />
              </label>
              <label htmlFor="emailJoin">
                <input type="text" placeholder="E-mail" id="emailJoin" />
              </label>
              <label htmlFor="phone">
                <input type="text" placeholder="Telefone" id="phone" />
              </label>
              <button type="submit" className="btn-primary">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;