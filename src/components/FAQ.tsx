import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Do I need a credit card to start?',
    a: 'No. The Starter plan is free forever with no credit card required. You only need to add payment details when you upgrade to a paid plan.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately and we prorate the difference.',
  },
  {
    q: 'What frameworks do you support?',
    a: 'Nimbus supports all major frameworks including React, Vue, Svelte, Angular, Next.js, Nuxt, and more. If it builds with Node.js, it deploys on Nimbus.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and undergo regular third-party security audits.',
  },
  {
    q: 'What happens if I exceed my limits?',
    a: 'We will notify you before you reach your limits. You can either upgrade to a higher plan or pay for overage at transparent, per-unit rates.',
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass glass-hover rounded-xl overflow-hidden`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-medium text-white pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent-400 mb-3 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Questions? <span className="text-gradient">We have answers.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
