import { Link } from "react-router-dom";
import { brand, crmModules } from "../data/content";

// This page lives at /crm — a hub linking out to each CRM module.
// Swap crmModules in data/content.js to add/remove/reorder cards.
export default function CrmHome() {
  const isLoggedIn = Boolean(localStorage.getItem("gf_token"));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* top nav — light theme, mirrors the marketing site's nav but for the app shell */}
      <header className="border-b border-slate-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="w-8 h-8 rounded-full bg-brand-gradient inline-block" />
            {brand.name}
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <li><Link to="/" className="hover:text-slate-900">Home</Link></li>
            <li><Link to="/crm" className="text-slate-900 font-medium">CRM</Link></li>
          </ul>
          <Link
            to="/login"
            className="bg-brand-gradient text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Team Login
          </Link>
        </nav>
      </header>

      {/* purple banner */}
      <section className="relative overflow-hidden bg-brand-gradient px-6 py-14">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center font-display font-bold text-2xl text-violet shrink-0">
            {brand.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">
              {brand.name.toUpperCase()} CRM
            </h1>
            <p className="mt-1 text-white/80">Business Management &amp; Growth Platform</p>
          </div>
          <Link
            to="/login"
            className="bg-white text-violet font-medium px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white/90 transition-colors shrink-0"
          >
            🔒 {isLoggedIn ? "Go to Dashboard" : "Login to Team"}
          </Link>
        </div>
      </section>

      {/* module grid */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {crmModules.map((m) => (
            <Link
              key={m.label}
              to={isLoggedIn ? m.path : "/login"}
              className={`${m.color} rounded-2xl px-5 py-6 flex items-center gap-3 text-white font-medium shadow-sm hover:opacity-90 transition-opacity`}
            >
              <span className="text-xl">{m.icon}</span>
              {m.label}
            </Link>
          ))}
        </div>

        {!isLoggedIn && (
          <p className="text-sm text-slate-500 mt-6">
            Modules are visible to everyone, but you'll need to log in to open them.
          </p>
        )}
      </section>
    </div>
  );
}
