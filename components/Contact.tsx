"use client";
import React, { useEffect, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    setLoading(true);
    try {
      const res = await fetch(
        "https://email-sender-api-xi.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "stephuni35@gmail.com",
            subject: "Nouveau message",
            message: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
          }),
        }
      );

      if (res.ok) {
        setStatus("Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Erreur lors de l'envoi, veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Erreur lors de l'envoi, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status && !loading) {
      setTimeout(() => setStatus(""), 3000);
    }
  }, [loading, status]);

  return (
    <section
      id="contact"
      className="flex flex-col bg-white rounded-md px-4 pb-6 pt-2 w-full gap-4 scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Contactez-moi
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* Nom */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-black transition">
          <User className="text-gray-400" />
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-black transition">
          <Mail className="text-gray-400" />
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Message */}
        <div className="flex items-start gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-black transition">
          <MessageSquare className="text-gray-400 mt-1" />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full outline-none text-gray-800 placeholder-gray-400 resize-none h-32"
            required
          />
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="bg-black text-white font-medium py-2 
          rounded-md hover:bg-gray-900 transition
          disabled:bg-gray-400 disabled:text-gray-300
          "
          disabled={loading || !name || !message || !email}
        >
          {status ? "en cours..." : "Envoyer"}
        </button>
      </form>

      {/* Status */}
      {status && (
        <p
          className={`text-center mt-2 font-medium ${
            status.includes("succès") ? "text-green-600" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
