import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { carros } from '../data/carros'

const passos = [
  {
    titulo: 'Escolha o carro',
    texto: 'Filtre por categoria e veja a diária de cada modelo.',
  },
  {
    titulo: 'Informe o período',
    texto: 'Alugue por um dia, uma semana ou o mês inteiro.',
  },
  {
    titulo: 'Retire e dirija',
    texto: 'Documentos conferidos, seguro incluso e chave na mão.',
  },
]

function Home() {
  const destaques = carros.filter((carro) => carro.destaque)

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Importados para alugar por dia, semana ou mês.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/75">
              Escolha o carro, informe o período e retire na hora. Sem
              burocracia e com seguro incluso.
            </p>
            <Link
              to="/carros"
              className="mt-8 inline-block rounded bg-carmine px-6 py-3 font-semibold text-white transition-colors hover:bg-carmine-dark"
            >
              Ver carros disponíveis
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="mx-auto w-full max-w-xs rounded-xl border-4 border-white bg-paper p-3 text-ink"
          >
            <div className="rounded-md border-2 border-ink px-4 py-6 text-center">
              <p className="font-display text-5xl font-black tracking-widest">
                IMP-2026
              </p>
              <p className="mt-2 text-sm font-semibold text-steel">Brasil</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Mais alugados da semana
          </h2>
          <Link to="/carros" className="font-semibold text-carmine hover:underline">
            Ver todos os carros
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((carro) => (
            <Card key={carro.id} carro={carro} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Como funciona
          </h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {passos.map((passo, indice) => (
              <li key={passo.titulo} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display font-black text-white">
                  {indice + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{passo.titulo}</h3>
                  <p className="mt-1 text-sm text-steel">{passo.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-carmine text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-10">
          <p className="font-display text-2xl font-extrabold tracking-tight">
            Pronto para escolher o seu?
          </p>
          <Link
            to="/carros"
            className="rounded bg-white px-6 py-3 font-semibold text-ink transition-colors hover:bg-paper"
          >
            Ver carros disponíveis
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home