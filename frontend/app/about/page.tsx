import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const features = [
  {
    icon: "📡",
    title: "Real-time Monitoring",
    desc: "Track soil moisture, temperature, humidity, and crop health live from your dashboard — updated every few minutes using IoT sensors placed across your fields.",
  },
  {
    icon: "🤖",
    title: "AI Recommendations",
    desc: "Get intelligent suggestions on when to irrigate, fertilize, or harvest based on your farm's live data, weather forecasts, and crop growth history.",
  },
  {
    icon: "🌾",
    title: "Crop Management",
    desc: "Maintain a detailed record of all your crops, fields, and growth stages in one place — from seedling to harvest, always organised and up to date.",
  },
  {
    icon: "🔔",
    title: "Alert System",
    desc: "Receive instant notifications when something needs your attention — whether it's a sensor anomaly, low moisture level, or an AI-detected risk.",
  },
];

const stats = [
  { value: "4+", label: "Screens Built" },
  { value: "5", label: "UI Components" },
  { value: "3", label: "Weeks of Work" },
  { value: "1", label: "AI Integration" },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 to-emerald-800 dark:from-green-900 dark:to-emerald-950 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl mb-4 block">🌱</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              About Smart Farm Hub
            </h1>
            <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
              An AI-powered farm management platform built to help modern farmers
              monitor, manage, and optimise their agricultural operations —
              all from one place.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-8 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{s.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">Our Mission</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
              Precision agriculture for every farmer
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base">
              We combine real-time IoT sensor data with artificial intelligence to give
              farmers actionable insights about soil health, crop conditions, weather
              patterns, and irrigation needs. Whether you manage a small family farm or
              large agricultural fields, Smart Farm Hub helps you make smarter decisions,
              reduce waste, and improve yield.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm transition-all"
                >
                  <span className="text-3xl mt-1">{f.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      

      </main>

      <Footer />
    </>
  );
}
