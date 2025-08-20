export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <h1 className="text-5xl font-bold mb-6">Welch Digital</h1>
        <p className="text-xl mb-8">Social Media Management that drives growth, engagement, and results.</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</button>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Welch Digital?</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          At Welch Digital, we help brands and businesses build authentic connections online. From content creation to analytics, our team ensures your brand stays ahead of the curve in an ever-changing digital world.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Our Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <p className="text-gray-400 mb-6">Perfect for small businesses testing the waters.</p>
            <p className="text-3xl font-bold mb-6">$500<span className="text-lg">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ 8 social posts / month</li>
              <li>✔ Basic analytics report</li>
              <li>✔ 1 strategy call / month</li>
            </ul>
            <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">Choose Starter</button>
          </div>

          {/* Growth Plan */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border-2 border-blue-600">
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <p className="text-gray-400 mb-6">Our most popular plan to scale your brand.</p>
            <p className="text-3xl font-bold mb-6">$1,500<span className="text-lg">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ 20 social posts / month</li>
              <li>✔ Advanced analytics + growth insights</li>
              <li>✔ 2 strategy calls / month</li>
              <li>✔ Community engagement management</li>
            </ul>
            <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">Choose Growth</button>
          </div>

          {/* Domination Plan */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Domination</h3>
            <p className="text-gray-400 mb-6">Maximize impact with full-service social domination.</p>
            <p className="text-3xl font-bold mb-6">$3,000<span className="text-lg">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ 40+ posts & videos / month</li>
              <li>✔ Dedicated account manager</li>
              <li>✔ Weekly strategy sessions</li>
              <li>✔ Paid ads management</li>
              <li>✔ Influencer partnerships</li>
            </ul>
            <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">Choose Domination</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Talk</h2>
        <p className="text-lg text-gray-300 mb-6">Ready to take your brand to the next level? Reach out today and let’s make it happen.</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Contact Us</button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-center py-6 border-t border-gray-800">
        <p>© 2025 Welch Digital. All rights reserved.</p>
      </footer>
    </div>
  )
}
