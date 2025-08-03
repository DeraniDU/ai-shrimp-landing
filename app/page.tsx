import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-8 sm:p-20">
      {/* Header / Intro Section */}
      <header className="max-w-4xl mx-auto mb-16 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          AI-powered Shrimp Farming in Sri Lanka
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto sm:mx-0 text-gray-700 dark:text-gray-300">
          Revolutionizing shrimp farming with real-time AI monitoring, predictive analytics, and smart automation to enhance sustainability and productivity for Sri Lankan aquaculture.
        </p>
      </header>

      {/* Main Features Section */}
      <main className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Feature: Intelligent Water Quality */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 sm:p-12 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <Image
            src="/next.svg"
            alt="AI Monitoring"
            width={180}
            height={120}
            className="dark:invert"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Intelligent Water Quality Monitoring</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Real-time sensors integrated with AI analyze water parameters to maintain optimal conditions, preventing disease outbreaks and ensuring shrimp health.
            </p>
          </div>
        </section>

        {/* Feature: Predictive Analytics */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 sm:p-12 flex flex-col sm:flex-row-reverse items-center sm:items-start gap-8">
          <Image
            src="/vercel.svg"
            alt="Predictive Analytics"
            width={180}
            height={120}
            className="dark:invert"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Predictive Analytics</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Utilizing AI to forecast shrimp growth, feed requirements, and harvest timing to maximize yield and minimize costs.
            </p>
          </div>
        </section>

        {/* Feature: Automated Feeding System */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 sm:p-12 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <Image
            src="/window.svg"
            alt="Automated Feeding"
            width={180}
            height={120}
            className="dark:invert"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Automated Feeding System</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Smart feeders controlled by AI optimize feed delivery, reducing waste and improving growth rates.
            </p>
          </div>
        </section>

        {/* Feature: Sustainability and Monitoring */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 sm:p-12 flex flex-col sm:flex-row-reverse items-center sm:items-start gap-8">
          <Image
            src="/globe.svg"
            alt="Sustainability"
            width={180}
            height={120}
            className="dark:invert"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Sustainability & Monitoring</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Continuous monitoring reduces environmental impact and supports eco-friendly farming practices adapted for Sri Lanka.
            </p>
          </div>
        </section>
      </main>

      {/* Footer with links */}
      <footer className="mt-auto pt-12 border-t border-gray-300 dark:border-gray-700 flex flex-wrap justify-center gap-8 max-w-5xl mx-auto text-sm text-gray-600 dark:text-gray-400">
        <a
          href="/about"
          className="hover:underline"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="hover:underline"
        >
          Contact Us
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Next.js Docs
        </a>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Deploy with Vercel
        </a>
      </footer>
    </div>
  );
}
