'use client';

import React, { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!from || !to || !message) {
      alert("Por favvor,  preencha todos os campos.");
      return;
    }

    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {
      alert("Você não pode enviar uma mensagem para si mesmo.");
      return;
    }

    alert(`Messagem enviada de: ${from}\n Para: ${to}\n\n Messagem: ${message}`);

    handleClear();
  }

  const handleClear = () => {
    setFrom("");
    setTo("");
    setMessage("");
  }
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg rounded-2xl border-2 border-gray-400 bg-gr-800 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-2xl font-semibold text-white">
          Hello World
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="from" className="mb-2 block text-sm font-medium text-gray-300">
                De:
              </label>
              <input type="email" id="from" value={from} onChange={(e) => setFrom(e.target.value)} className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500" placeholder="Seu nome ou email" />
            </div>
            <div>
              <label htmlFor="to" className="mb-2 block text-sm font-medium text-gray-300">
                Para:
              </label>
              <input type="email" id="to" value={to} onChange={(e) => setTo(e.target.value)} className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500" placeholder="Seu nome ou email" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 bloco text-sm font-medium text-gray-300">
              Message:
            </label>
            <textarea id="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Escreva sua mensagem aqui..."></textarea>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <button type="button" onClick={handleClear} className="rounded-lg border-2 border-gray-500 px-4 py-3 font-semibold text-white transition-colors hover:border-red-500 hover:bg-red-500/20">
              Limpar
            </button>

            <button type="submit" className="rounded-lg border-2 border-blue-600 bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
