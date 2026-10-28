import { Link } from 'react-router-dom'

function Home() {
  return (
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
            <p className="mt-2 text-sm font-semibold text-steel">
              Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
