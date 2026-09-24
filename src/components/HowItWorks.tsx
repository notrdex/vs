import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Connect your repo',
    description: 'Link your GitHub or GitLab repository in seconds. Nimbus detects your framework and configures everything automatically.',
  },
  {
    number: '02',
    title: 'Build & preview',
    description: 'Every push triggers an instant preview deployment. Share links with your team and get feedback in real time.',
  },
  {
    number: '03',
    title: 'Deploy to the world',
    description: 'Ship to production with a single click. Rollbacks are instant and automatic if anything goes wrong.',
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent-400 mb-3 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From idea to production in <span className="text-gradient">three steps</span>
          </h2>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-8 relative`}>
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-accent-500/0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-xl" />
                <div className="relative w-24 h-24 glass rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
