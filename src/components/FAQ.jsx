import { useState } from 'react'
import styles from './FAQ.module.css'

const items = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the start of the next billing cycle.',
  },
  {
    q: 'What happens when I exceed my monthly limit?',
    a: 'Requests above your plan\'s limit are paused rather than billed automatically. You\'ll receive an alert so you can upgrade or wait for the next cycle.',
  },
  {
    q: 'Do unused API calls roll over?',
    a: 'No — monthly allocations reset on your billing date. Upgrade to a higher plan if you regularly need more.',
  },
  {
    q: 'Is there a trial period for the Pro plan?',
    a: 'Yes. Start a 14-day Pro trial with no credit card required. Cancel anytime before the trial ends.',
  },
  {
    q: 'How do I get an Enterprise quote?',
    a: 'Click "Contact Sales" on any Enterprise card and fill in the short form. Our team responds within one business day.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <svg className={styles.chevron} viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <p className={styles.answer}>{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Frequently asked questions</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <Item key={item.q} {...item} />
        ))}
      </div>
    </section>
  )
}
