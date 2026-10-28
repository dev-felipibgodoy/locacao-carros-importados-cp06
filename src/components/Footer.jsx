const contatos = [
  { label: 'Telefone', valor: '(11) 4000-1234' },
  { label: 'E-mail', valor: 'reservas@importados.example' },
  { label: 'Atendimento', valor: 'Segunda a sábado, das 8h às 20h' },
]

const ano = new Date().getFullYear()

function Footer() {
function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2">
        <div>
          <p className="font-display text-xl font-black tracking-tight">
            Importados<span className="text-carmine">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Locação de carros importados por dia, semana ou mês.
          </p>
        </div>

        <dl className="grid gap-3 text-sm">
          {contatos.map((item) => (
            <div key={item.label} className="flex gap-3">
              <dt className="w-28 shrink-0 text-white/60">{item.label}</dt>
              <dd>{item.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/60">
          © {ano} Importados. Projeto acadêmico, FIAP.
        </p>
      </div>
    </footer>
  )
}

export default Footer
