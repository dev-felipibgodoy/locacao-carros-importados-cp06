import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'

function NaoEncontrada() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl font-black tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-3 text-steel">O endereço que você abriu não existe.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded bg-carmine px-6 py-3 font-semibold text-white hover:bg-carmine-dark"
      >
        Voltar para a Home
      </Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
