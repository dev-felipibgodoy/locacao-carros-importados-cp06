import Card from '../components/Card'
import { carros } from '../data/carros'

function Carros() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight">
        Carros disponíveis
      </h1>
      <p className="mt-2 text-steel">
        {carros.length} carros importados prontos para retirada.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  )
}

export default Carros
