import { useState } from "react";
import { brand } from "../data/content";

const initialForm = { name: "", phone: "", email: "", city: "", service: "", message: "" };

// If you deploy the backend separately, set VITE_API_URL in a .env file
// in the frontend folder, e.g. VITE_API_URL=https://api.yourdomain.com
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">Contact us</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          Get in touch with <span className="gradient-text">{brand.name}</span>
        </h2>
        <p className="mt-2 text-mist">We'll get back to you within 24 hours.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-sm">
          <p className="text-mist">
            <span className="text-white font-medium">Phone: </span>
            {brand.phone}
          </p>
          <p className="text-mist">
            <span className="text-white font-medium">Email: </span>
            {brand.email}
          </p>
          <p className="text-mist">
            <span className="text-white font-medium">Office: </span>
            {brand.address}
          </p>
          <p className="text-mist">
            <span className="text-white font-medium">Hours: </span>
            {brand.hours}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />
          <input
            name="service"
            value={form.service}
            onChange={handleChange}
            placeholder="Select Service"
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write Your Requirement"
            rows={4}
            className="w-full bg-ink border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-violet"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-brand-gradient py-3 rounded-lg font-medium disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-sm text-cyan">Thanks! We'll be in touch shortly.</p>
          )}
          {status === "error" && <p className="text-sm text-magenta">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}
