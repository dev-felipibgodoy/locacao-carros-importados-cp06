const formatoMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

function Card({ carro }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex min-h-32 items-end justify-between bg-ink p-5 text-white">
        <p className="font-display text-2xl font-black leading-none tracking-tight">
          {carro.marca}
        </p>
        <span className="rounded-full bg-carmine px-3 py-1 text-xs font-semibold">
          {carro.categoria}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-display text-lg font-extrabold">{carro.modelo}</h3>

        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-steel">
          <li>{carro.potencia} cv</li>
          <li>{carro.lugares} lugares</li>
          <li>{carro.cambio}</li>
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <p>
            <span className="text-2xl font-semibold">
              {formatoMoeda.format(carro.diaria)}
            </span>
            <span className="text-sm text-steel"> por dia</span>
          </p>
          <button
            type="button"
            className="rounded bg-carmine px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-carmine-dark"
          >
            Reservar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card