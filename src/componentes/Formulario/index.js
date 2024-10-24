import { useState } from "react";
import CampoTexto from "../CampoTexto";
import CampoImagem from "../CampoImagem";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    // Envia os dados do colaborador para o componente pai
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    // Limpa os campos após o envio
    setNome("");
    setCargo("");
    setImagem("");
    setTime(""); // Limpa o campo do time também
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos colaboradores</h2>
        <CampoTexto
  obrigatorio={true}
  label="Nome"
  placeholder="Digite seu nome"
  valor={nome}
  aoAlterado={valor => setNome(valor)}
/>
<CampoTexto
  obrigatorio={true}
  label="Cargo"
  placeholder="Digite seu cargo"
  valor={cargo}
  aoAlterado={valor => setCargo(valor)}
/>
<CampoImagem
  label="Imagem" // Este rótulo será o mesmo
  aoAlterado={valor => setImagem(valor)}
/>
<ListaSuspensa
  obrigatorio={true}
  label="Time"
  itens={props.times}
  valor={time}
  aoAlterado={valor => setTime(valor)}
/>

        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
