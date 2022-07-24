import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import ListaReceitas from "./ListaReceitas";

export default function Receita() {
  const { id } = useParams();
  const [receita, setReceita] = useState({});

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/tastecamp/receitas/${id}`
    );

    requisicao.then((res) => {
      setReceita(res.data);
    });
  }, []);

  return (
    <>
      <div class="view">
        <div class="pagina receita">
          <div class="navbar">
            <div class="grupo">
              <Link to="/">
                <div class="botao fechar">
                  <ion-icon name="close-outline"></ion-icon>
                </div>
              </Link>
            </div>
          </div>

          <div class="titulo">{receita.titulo}</div>

          <div class="ingredientes">
            <div class="titulo">Ingredientes</div>
            <div class="destaque">{receita.ingredientes}</div>
          </div>

          <div class="modo-de-preparo">
            <div class="titulo">Modo de Preparo</div>
            <div class="destaque">{receita.preparo}</div>
          </div>
        </div>
      </div>
    </>
  );
}
