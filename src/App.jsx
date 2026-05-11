import { useState } from 'react'
import PricingCard from './components/PricingCard'
import FAQ from './components/FAQ'
import { excelPlans, smsPlans } from './data/pricing'
import styles from './App.module.css'

const APIS = [
  {
    key: 'excel',
    label: 'Excel API',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#10b981" />
        <path d="M7 8l3.5 4L7 16M13 16h4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
    plans: excelPlans,
    tagline: 'Read, write & convert spreadsheets at scale — with one API call.',
  },
  {
    key: 'sms',
    label: 'Bulk SMS API',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#6366f1" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="9" cy="11" r="1" fill="#fff" />
        <circle cx="12" cy="11" r="1" fill="#fff" />
        <circle cx="15" cy="11" r="1" fill="#fff" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
    plans: smsPlans,
    tagline: 'Deliver millions of SMS messages globally — fast, reliable, affordable.',
  },
]

export default function App() {
  const [activeKey, setActiveKey] = useState('excel')
  const active = APIS.find((a) => a.key === activeKey)

  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.nav} style={{ background: active.gradient }}>
        <div className={styles.navInner}>
          <span className={styles.logo}>
            <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
              <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.2)" />
              <path d="M8 22L14 10l4 8 3-5 5 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Nexora
          </span>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Docs</a>
            <a href="#" className={styles.navLink}>Blog</a>
            <a href="#" className={styles.navLink}>Contact</a>
            <a href="#" className={styles.navCta}>Sign in</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className={styles.hero} style={{ background: active.gradient }}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Simple, transparent pricing</div>
          <h1 className={styles.heroTitle}>
            The right plan for every team
          </h1>
          <p className={styles.heroSub}>
            Simple, transparent plans. No hidden fees.
          </p>

          {/* API toggle */}
          <div className={styles.toggle}>
            {APIS.map((api) => (
              <button
                key={api.key}
                className={`${styles.toggleBtn} ${activeKey === api.key ? styles.toggleActive : ''}`}
                onClick={() => setActiveKey(api.key)}
              >
                {api.icon}
                {api.label}
              </button>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
          </svg>
        </div>
      </header>

      {/* API tagline */}
      <div className={styles.taglineRow}>
        <span className={styles.taglinePill} style={{ background: active.gradient }}>
          {active.icon}
          {active.label}
        </span>
        <p className={styles.taglineText}>{active.tagline}</p>
      </div>

      {/* Pricing grid */}
      <section className={styles.grid}>
        {active.plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </section>

      {/* Trust bar */}
      <div className={styles.trustBar}>
        <TrustItem icon="🔒" label="SOC 2 Type II" />
        <TrustItem icon="⚡" label="99.9% uptime" />
        <TrustItem icon="🌍" label="Global infrastructure" />
        <TrustItem icon="🛡️" label="GDPR compliant" />
      </div>

      {/* FAQ */}
      <FAQ />

      {/* CTA banner */}
      <section className={styles.ctaBanner} style={{ background: active.gradient }}>
        <h2 className={styles.ctaTitle}>Ready to get started?</h2>
        <p className={styles.ctaSub}>
          Join thousands of developers already using our APIs. One payment, lifetime access — no subscriptions.
        </p>
        <div className={styles.ctaBtns}>
          <button className={styles.ctaBtnPrimary}>Start Pro Trial</button>
          <button className={styles.ctaBtnSecondary}>View docs</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
      </footer>
    </div>
  )
}

function TrustItem({ icon, label }) {
  return (
    <div className={styles.trustItem}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
