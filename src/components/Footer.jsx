import { brand } from "../data/content";

export default function Footer() {
  const waLink = `https://wa.me/${brand.whatsappNumber}`;

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="text-cyan hover:underline"
        >
          Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}
