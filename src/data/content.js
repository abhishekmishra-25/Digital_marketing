// Edit everything in this file to make the site yours.
// Every component pulls its text from here — nothing brand-specific
// is hardcoded inside the components themselves.

export const brand = {
  name: "PS Global",
  tagline: "Marketing that compounds",
  whatsappNumber: "910000000000", // country code + number, no + or spaces
  email: "hello@yourdomain.com",
  phone: "+91 90000 00000",
  address: "Your Street, Your City, Your State",
  hours: "Mon – Sat: 10 AM – 7 PM",
};

export const heroStats = [
  { value: "4.9", label: "Avg. rating" },
  { value: "500+", label: "Clients served" },
];

export const stats = [
  {
    title: "Businesses Transformed",
    value: "400+",
    desc: "Helping startups and established brands grow with performance-driven strategy.",
  },
  {
    title: "Cost Effective",
    value: "₹25,000",
    desc: "Performance campaigns starting from just per month.",
  },
  {
    title: "Data That Delivers",
    value: "85%",
    desc: "Better ROI through full-funnel analytics and A/B tested campaigns.",
  },
  {
    title: "Fast Execution",
    value: "70%",
    desc: "Faster project delivery powered by automation and creative frameworks.",
  },
  {
    title: "Brand Growth",
    value: "2X",
    desc: "Scale faster with proven content funnels and high-converting ad systems.",
  },
];

export const services = [
  {
    title: "Meta Ads (FB & IG)",
    desc: "Strategic ad campaigns designed to stop the scroll and maximize ROAS with precision targeting.",
    points: ["Custom Funnel Design", "A/B Split Testing"],
  },
  {
    title: "Google & YouTube Ads",
    desc: "Capture high-intent customers searching for your products with search and video ads.",
    points: ["Search & P-Max Campaigns", "Keyword Optimization"],
  },
  {
    title: "Website Development",
    desc: "High-speed, SEO-friendly, mobile-responsive websites that turn visitors into customers.",
    points: ["E-commerce & Landing Pages", "Fast Loading Speed"],
  },
];

export const portfolio = [
  { title: "Client Project One", tag: "Corporate Website • 220% Lead Increase" },
  { title: "Client Project Two", tag: "Meta & Google Ads • Sales in 45 Days" },
  { title: "Client Project Three", tag: "E-Commerce Ads • 9.4x ROAS Achieved" },
];

export const testimonials = [
  {
    quote: "They helped us reduce our ad spend by 40% while tripling our lead flow.",
    name: "Client Name",
    role: "Founder, Company",
  },
  {
    quote: "Our e-commerce sales grew fast after partnering with the team. The strategies work.",
    name: "Client Name",
    role: "CEO, Company",
  },
  {
    quote: "Professional, transparent, and result-driven. Highly recommend to any growing brand.",
    name: "Client Name",
    role: "Marketing Head, Company",
  },
];

export const faqs = [
  {
    q: "What makes you different from other agencies?",
    a: "We pair every campaign with full-funnel analytics, so decisions are backed by data, not guesswork.",
  },
  {
    q: "Do you work with small or early-stage businesses?",
    a: "Yes — our plans scale from first-campaign startups to established multi-location brands.",
  },
  {
    q: "What's included in an engagement?",
    a: "Strategy, creative, campaign management, and monthly reporting, tailored to your goals.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, every plan includes a dedicated point of contact for the length of the engagement.",
  },
];

export const team = [
  { name: "Your Name", role: "Founder & Strategy Lead" },
  { name: "Team Member", role: "Growth & Performance Lead" },
];

// Modules shown on the /crm hub page. `path` is where the card links to
// once a user is logged in — wire these up to real pages as you build them.
export const crmModules = [
  { label: "Dashboard", icon: "📊", path: "/crm/dashboard", color: "bg-violet" },
  { label: "Leads", icon: "🎯", path: "/crm/leads", color: "bg-orange-500" },
  { label: "Clients", icon: "👤", path: "/crm/clients", color: "bg-cyan-500" },
  { label: "Projects", icon: "🚀", path: "/crm/projects", color: "bg-green-500" },
  { label: "Tasks", icon: "✅", path: "/crm/tasks", color: "bg-magenta" },
  { label: "Reports", icon: "📈", path: "/crm/reports", color: "bg-indigo-600" },
  { label: "Invoices", icon: "💰", path: "/crm/invoices", color: "bg-amber-500" },
];
