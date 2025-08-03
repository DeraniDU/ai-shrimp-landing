import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 p-8 sm:p-20">
      {/* Intro Section */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          AI-powered Shrimp Farming in Sri Lanka
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
          Revolutionizing Sri Lankan shrimp farms with real-time water quality monitoring, smart AI feeding, disease detection, and an intelligent assistant for maximum yield and sustainability.
        </p>
      </header>

      {/* Feature Boxes */}
      <main className="max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2">
        {/* Feature 1: Water Quality Measuring */}
        <section className="bg-white rounded-xl border border-gray-200 shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Image src="/window.svg" alt="Water Quality Measuring" width={72} height={72} className="mb-4" priority />
          <h2 className="text-xl font-bold mb-2">Water Quality Measuring</h2>
          <p className="text-gray-600">
            Advanced sensors track critical parameters (pH, oxygen, ammonia) to keep your shrimp healthy and thriving, 24/7.
          </p>
        </section>

        {/* Feature 2: Automated Feed System */}
        <section className="bg-white rounded-xl border border-gray-200 shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Image src="/window.svg" alt="Automated Feed System" width={72} height={72} className="mb-4" priority />
          <h2 className="text-xl font-bold mb-2">Automated Feed System</h2>
          <p className="text-gray-600">
            AI-driven feeding schedules precisely deliver nutrition, reduce waste, and improve growth for higher efficiency.
          </p>
        </section>

        {/* Feature 3: Disease Identifier */}
        <section className="bg-white rounded-xl border border-gray-200 shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Image src="/file.svg" alt="Disease Identifier" width={72} height={72} className="mb-4" priority />
          <h2 className="text-xl font-bold mb-2">Disease Identifier</h2>
          <p className="text-gray-600">
            Early AI diagnosis spots health issues before outbreaks, protecting your harvest and reducing losses.
          </p>
        </section>

        {/* Feature 4: AI Agent */}
        <section className="bg-white rounded-xl border border-gray-200 shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Image src="/globe.svg" alt="AI Agent" width={72} height={72} className="mb-4" priority />
          <h2 className="text-xl font-bold mb-2">AI Agent</h2>
          <p className="text-gray-600">
            Your digital assistant provides insights, advice, and smart analytics—right at your fingertips.
          </p>
        </section>
      </main>

      {/* Shrimp Research Section */}
      <section className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Shrimp Farming Research Insights</h2>
        <p className="text-gray-700 mb-6">
          Explore the latest research and advancements in shrimp farming, including sustainable practices, innovative technologies, and global trends.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <article className="bg-white rounded-xl border border-gray-200 shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">
              Learn how eco-friendly methods are reshaping shrimp farming for a greener future.
            </p>
          </article>
          <article className="bg-white rounded-xl border border-gray-200 shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">AI in Aquaculture</h3>
            <p className="text-gray-600">
              Discover how artificial intelligence is driving efficiency and innovation in aquaculture.
            </p>
          </article>
          <article className="bg-white rounded-xl border border-gray-200 shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">Global Market Trends</h3>
            <p className="text-gray-600">
              Stay updated on the latest market trends and demands in the shrimp farming industry.
            </p>
          </article>
          <article className="bg-white rounded-xl border border-gray-200 shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">Disease Management</h3>
            <p className="text-gray-600">
              Explore cutting-edge research on preventing and managing diseases in shrimp farms.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
