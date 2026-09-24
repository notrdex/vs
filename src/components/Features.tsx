import { useScrollReveal } from '../hooks/useScrollReveal';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Deploy in milliseconds with our globally distributed edge network. Your users get instant loads, every time.',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 3.4a9 9 0 11-12.8 0 9 9 0 0112.8 0z" />
      </svg>
    ),
    title: 'Secure by Default',
    description: 'End-to-end encryption, SOC 2 compliance, and automatic security patches. Your data is protected at every layer.',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 2 3 4 3h8c2 0 4-1 4-3V7M4 7l8-4 8 4M4 7l8 4 8-4M4 7v4m16-4v4" />
      </svg>
    ),
    title: 'Scales Infinitely',
    description: 'From your first user to your millionth, Nimbus handles the load automatically. No re-architecture, no downtime.',
    gradient: 'from-success-500 to-success-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Developer First',
    description: 'Clean APIs, comprehensive docs, and zero-config setup. Your team will be shipping in minutes, not days.',
    gradient: 'from-primary-400 to-accent-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-time Analytics',
    description: 'See exactly how users interact with your product. Built-in dashboards give you insights without extra tooling.',
    gradient: 'from-warning-500 to-warning-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.4-1.8M9 20H4v-2a3 3 0 015.4-1.8m2.6 3.8h-4M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Real-time editing, comments, and role-based access. Your whole team stays in sync, wherever they are.',
    gradient: 'from-primary-600 to-primary-800',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group relative glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything you need to <span className="text-gradient">ship great products</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A complete toolkit that grows with you — from prototype to production to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
