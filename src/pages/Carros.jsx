import { useState } from 'react'
import Card from '../components/Card'
import { carros, categorias } from '../data/carros'

function Carros() {
  const [categoria, setCategoria] = useState('Todos')

  const filtrados =
    categoria === 'Todos'
      ? carros
      : carros.filter((carro) => carro.categoria === categoria)

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight">
        Carros disponíveis
      </h1>
      <p className="mt-2 text-steel">
        {filtrados.length} de {carros.length} carros importados prontos para
        retirada.
      </p>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {['Todos', ...categorias].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={categoria === item}
            onClick={() => setCategoria(item)}
            className={[
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              categoria === item
                ? 'border-ink bg-ink text-white'
                : 'border-line bg-white hover:border-ink',
            ].join(' ')}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  )
}

export default Carros
