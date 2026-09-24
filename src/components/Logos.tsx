const logos = ['Acme', 'Globex', 'Stark', 'Wayne', 'Umbrella', 'Hooli'];

export default function Logos() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-500 mb-8 font-medium">
          Trusted by fast-moving teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-bold text-slate-600 hover:text-slate-300 transition-colors cursor-default select-none"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
