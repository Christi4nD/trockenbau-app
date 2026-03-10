"use client";

import { useState } from "react";

export default function KundenPage() {
  const [showForm, setShowForm] = useState(false);
  const [kunden, setKunden] = useState<
    { name: string; adresse: string; telefon: string; email: string }[]
  >([]);

  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    if (!name || !adresse || !telefon || !email) {
      alert("Completează toate câmpurile.");
      return;
    }

    const neuerKunde = { name, adresse, telefon, email };

    setKunden([...kunden, neuerKunde]);
    setName("");
    setAdresse("");
    setTelefon("");
    setEmail("");
    setShowForm(false);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Kunden</h1>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Neuer Kunde
          </button>
        </div>

        {showForm && (
          <div className="bg-neutral-900 p-6 rounded-xl mb-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700"
            />
            <input
              type="text"
              placeholder="Adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700"
            />
            <input
              type="text"
              placeholder="Telefon"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700"
            />
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700"
            />

            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              Speichern
            </button>
          </div>
        )}

        <div className="bg-neutral-900 p-6 rounded-xl">
          {kunden.length === 0 ? (
            <p className="text-neutral-400">Aici vor apărea clienții tăi.</p>
          ) : (
            <div className="space-y-4">
              {kunden.map((kunde, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-neutral-800 border border-neutral-700"
                >
                  <h2 className="text-xl font-semibold">{kunde.name}</h2>
                  <p className="text-neutral-400">{kunde.adresse}</p>
                  <p className="text-neutral-400">{kunde.telefon}</p>
                  <p className="text-neutral-400">{kunde.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}