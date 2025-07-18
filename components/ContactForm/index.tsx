'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeozorgz");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      formRef.current?.reset();
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (showSuccess) {
    return (
      <p className="text-green-400 text-center mt-2">
        Mensagem enviada com sucesso! Obrigado pelo contato.
      </p>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-3 bg-[#1a1a2e] text-white rounded-lg shadow-md space-y-2"
      style={{ maxHeight: '400px' }}
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-semibold text-sm">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full p-1 rounded bg-gray-800 border border-gray-600 text-sm"
          placeholder="Seu nome"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold text-sm">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full p-1 rounded bg-gray-800 border border-gray-600 text-sm"
          placeholder="seu@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-semibold text-sm">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          rows={2}
          className="w-full p-1 rounded bg-gray-800 border border-gray-600 text-sm"
          placeholder="Sua mensagem..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1.5 rounded text-sm"
      >
        {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};