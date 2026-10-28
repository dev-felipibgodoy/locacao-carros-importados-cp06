function Card({ carro }) {
  return (
    <article>
      <p>{carro.marca}</p>
      <h3>{carro.modelo}</h3>
      <p>{carro.categoria}</p>
      <ul>
        <li>{carro.potencia} cv</li>
        <li>{carro.lugares} lugares</li>
        <li>{carro.cambio}</li>
      </ul>
      <p>R$ {carro.diaria} por dia</p>
    </article>
  )
}

export default Card
