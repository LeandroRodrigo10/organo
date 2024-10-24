import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio}>
                <option value="">Selecione uma opção</option>
                {props.itens.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;
