import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { brand } from "../data/content";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Login failed.");

      const storage = remember ? localStorage : sessionStorage;
      storage.setItem("gf_token", data.token);
      storage.setItem("gf_user", JSON.stringify(data.user));

      navigate("/crm");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-ink overflow-hidden flex items-center justify-center px-6">
      {/* flowing gradient lines background, same signature style as the marketing hero */}
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="loginGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="loginGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path d="M-100,700 C300,850 500,400 900,500 C1200,570 1400,250 1750,150"
          stroke="url(#loginGrad1)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <path d="M-100,780 C350,900 550,480 950,570 C1250,640 1450,320 1800,220"
          stroke="url(#loginGrad2)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>

      <div className="relative w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-brand-gradient" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
          <label className="block text-sm font-medium mb-1">Username or Email Address</label>
          <input
            name="identifier"
            value={form.identifier}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-violet"
          />

          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative mb-2">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-10 outline-none focus:border-violet"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {status === "error" && <p className="text-sm text-red-600 mb-2">{errorMsg}</p>}

          <label className="flex items-center gap-2 text-sm mb-6 mt-3">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-magenta hover:opacity-90 text-white font-medium py-3 rounded-lg transition-opacity disabled:opacity-60"
          >
            {status === "loading" ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-white/70 text-sm mt-6">
          <Link to="/" className="hover:text-white">
            ← Go to {brand.name} — Digital Marketing Agency
          </Link>
        </p>
      </div>
    </div>
  );
}
