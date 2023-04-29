export default (props) => {
  return (
    <div className="d-flex">
      <div className="d-flex align-items-center">
        {/* i.fas.fa-hdd.fa-2x */}
        <i className={props.icone}></i>
      </div>
      <div className="flex-grow-1 ms-3 border">
        <h4 className="text-center">{props.titulo}</h4>
        <p className="text-center">{props.descricao}</p>
      </div>
    </div>
  )
}

// export default Pedido