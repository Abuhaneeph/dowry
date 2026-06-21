import styles from './PricingCard.module.css'

export default function PricingCard({ plan }) {
  const { name, price, renewal, period, description, color, badge, features, cta, highlighted } = plan

  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      {badge && (
        <div className={styles.badge} style={{ background: color }}>
          {badge}
        </div>
      )}

      <div className={styles.header}>
        <div className={styles.dot} style={{ background: color }} />
        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.priceRow}>
        {price === null ? (
          <span className={styles.custom}>Custom</span>
        ) : (
          <>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>{price.toLocaleString()}</span>
          </>
        )}
      </div>
      {renewal != null && (
        <div className={styles.renewalBadge} style={{ color }}>
          Renewal: ${renewal.toLocaleString()} / year
        </div>
      )}
      {period === 'lifetime' && (
        <div className={styles.lifetimeBadge} style={{ color, borderColor: color }}>
          ♾ One-time payment · Lifetime access
        </div>
      )}

      <p className={styles.description}>{description}</p>

      <ul className={styles.features}>
        {features.map((f) => (
          <li key={f} className={styles.feature}>
            <svg className={styles.check} viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.12" />
              <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`${styles.cta} ${highlighted ? styles.ctaFilled : styles.ctaOutline}`}
        style={highlighted ? { background: color, borderColor: color } : { borderColor: color, color }}
      >
        {cta}
      </a>
    </div>
  )
}
