import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const itens = props.itens || []; // Evita erro caso itens seja vazio

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={evento => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value="">Selecione um time</option> {/* Opção padrão */}
        {itens.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
