export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Trockenbau Dashboard</h1>
        <p className="text-neutral-400 mb-8">
          Program pentru Aufmaß, proiecte și rechnungen
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-neutral-900 rounded-xl">
            <h2 className="text-xl font-semibold">Kunden</h2>
            <p className="text-neutral-400">Gestionare clienți</p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-xl">
            <h2 className="text-xl font-semibold">Projekte</h2>
            <p className="text-neutral-400">Șantiere</p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-xl">
            <h2 className="text-xl font-semibold">Räume</h2>
            <p className="text-neutral-400">Dimensiuni camere</p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-xl">
            <h2 className="text-xl font-semibold">Rechnungen</h2>
            <p className="text-neutral-400">Facturi PDF</p>
          </div>
        </div>
      </div>
    </main>
  );
}