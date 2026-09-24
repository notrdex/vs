export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
          <span className="text-sm text-slate-300">Now in public beta — join 12,000+ builders</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
          Build better.
          <br />
          <span className="text-gradient">Ship faster.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          Nimbus is the all-in-one platform that helps teams design, build, and deploy
          products at lightning speed — without compromising on quality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <button className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-105 flex items-center gap-2">
            Start building free
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="glass glass-hover text-slate-200 font-semibold px-8 py-4 rounded-xl text-base flex items-center gap-2 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" fill="currentColor" />
            </svg>
            Watch demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '2.4M+', label: 'Deploys / month' },
            { value: '40ms', label: 'Avg. response' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
