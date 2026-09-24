import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} relative overflow-hidden rounded-3xl glass border border-white/10 p-12 sm:p-16 text-center`}
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Ready to <span className="text-gradient">build something great?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-8">
              Join thousands of teams shipping faster with Nimbus. Get started in under two minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-105 flex items-center gap-2">
                Start building free
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="text-slate-300 font-semibold px-8 py-4 rounded-xl text-base border border-white/10 hover:bg-white/5 transition-all">
                Talk to sales
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-6">No credit card required — free forever plan available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
