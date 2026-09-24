import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    description: 'Perfect for side projects and experiments.',
    features: ['1 project', 'Community support', '100 deploys / month', '1 GB bandwidth'],
  },
  {
    name: 'Pro',
    monthly: 29,
    yearly: 24,
    description: 'For growing teams that need more power.',
    features: ['10 projects', 'Priority support', 'Unlimited deploys', '100 GB bandwidth', 'Custom domains', 'Analytics dashboard'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: 99,
    yearly: 82,
    description: 'Built for organizations at scale.',
    features: ['Unlimited projects', 'Dedicated support', 'SLA guarantee', 'Unlimited bandwidth', 'SSO & SAML', 'Audit logs'],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, <span className="text-gradient">transparent pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Start free, upgrade when you need to. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' : 'text-slate-400'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${yearly ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' : 'text-slate-400'}`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-success-400">Save 20%</span>
            </button>
          </div>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto`}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? 'glass border-2 border-primary-500/50 glow'
                  : 'glass glass-hover'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-slate-500 text-sm ml-1">/mo</span>
              </div>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
                    : 'glass glass-hover text-slate-200'
                }`}
              >
                {plan.monthly === 0 ? 'Get started free' : 'Start free trial'}
              </button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
