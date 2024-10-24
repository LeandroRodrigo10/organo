import { useState, useEffect } from "react";
import "./CampoImagem.css";

const CampoImagem = (props) => {
  const [preview, setPreview] = useState(""); // Para armazenar a prévia da imagem

  // Quando o valor do props for alterado (como após o reset), o preview deve ser limpo
  useEffect(() => {
    if (!props.valor) {
      setPreview(""); // Limpa a prévia da imagem quando o valor for resetado
    }
  }, [props.valor]);

  const aoSelecionarImagem = (evento) => {
    const arquivo = evento.target.files[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onload = () => {
        setPreview(leitor.result); // Define a prévia da imagem
        props.aoAlterado(leitor.result); // Envia a imagem codificada em base64 para o formulário
      };
      leitor.readAsDataURL(arquivo); // Converte a imagem para base64
    }
  };

  const aoArrastarImagem = (evento) => {
    evento.preventDefault();
    const arquivo = evento.dataTransfer.files[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onload = () => {
        setPreview(leitor.result);
        props.aoAlterado(leitor.result);
      };
      leitor.readAsDataURL(arquivo);
    }
  };

  const aoSoltarImagem = (evento) => {
    evento.preventDefault();
    aoArrastarImagem(evento);
  };

  return (
    <div className="campo-imagem">
      <label>{props.label}</label>
      <div
        className="area-upload"
        onDragOver={(evento) => evento.preventDefault()}
        onDrop={aoSoltarImagem}
      >
        {preview ? (
          <img src={preview} alt="Prévia" className="imagem-preview" />
        ) : (
          <p>Arraste uma imagem aqui ou clique abaixo para selecionar</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={aoSelecionarImagem}
        className="input-imagem"
      />
    </div>
  );
};

export default CampoImagem;
    