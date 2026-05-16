export default function Home() {
  const faqs = [
    {
      q: "Where does the rate data come from?",
      a: "We aggregate publicly available job postings and completed contract data from Upwork, Toptal, Freelancer, and Fiverr Pro, updated daily."
    },
    {
      q: "How current is the data?",
      a: "Our scrapers run every 24 hours. Each rate entry shows its collection date so you always know how fresh the benchmark is."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your billing portal with one click. No questions, no lock-in, no fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Rate Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly what the market pays —{" "}
          <span className="text-[#58a6ff]">before you negotiate</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ContractorRate aggregates real paid rates from Upwork, Toptal, and more by skill and location so freelancers and agencies always have the upper hand.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start benchmarking — $12/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-4 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "2.4M+", label: "Rate data points" },
            { value: "140+", label: "Skill categories" },
            { value: "60+", label: "Countries tracked" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Full rate database access",
              "Filter by skill, platform & location",
              "Daily data refreshes",
              "Export to CSV",
              "Rate trend charts",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-sm hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ContractorRate. All rights reserved.
      </footer>
    </main>
  );
}
