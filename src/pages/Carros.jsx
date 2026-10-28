import { useState } from 'react'
import Card from '../components/Card'
import { carros, categorias } from '../data/carros'

function Carros() {
  const [categoria, setCategoria] = useState('Todos')
  const [busca, setBusca] = useState('')

  const termo = busca.trim().toLowerCase()

  const filtrados = carros.filter((carro) => {
    const daCategoria = categoria === 'Todos' || carro.categoria === categoria
    const nome = `${carro.marca} ${carro.modelo}`.toLowerCase()
    return daCategoria && nome.includes(termo)
  })

  function limparFiltros() {
    setCategoria('Todos')
    setBusca('')
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight">
        Carros disponíveis
      </h1>
      <p className="mt-2 text-steel">
        {filtrados.length} de {carros.length} carros importados prontos para
        retirada.
      </p>

      <label className="mt-6 block max-w-md">
        <span className="text-sm font-medium">Buscar por marca ou modelo</span>
        <input
          type="search"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder="Ex.: BMW"
          className="mt-1 w-full rounded border border-line bg-white px-3 py-2"
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
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

      {filtrados.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((carro) => (
            <Card key={carro.id} carro={carro} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-line bg-white p-10 text-center">
          <p className="font-semibold">Nenhum carro encontrado.</p>
          <p className="mt-1 text-sm text-steel">
            Tente outra marca ou remova os filtros.
          </p>
          <button
            type="button"
            onClick={limparFiltros}
            className="mt-4 rounded bg-carmine px-4 py-2 text-sm font-semibold text-white hover:bg-carmine-dark"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  )
}

export default Carros
