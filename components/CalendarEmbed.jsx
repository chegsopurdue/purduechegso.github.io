import styles from './CalendarEmbed.module.css'

export default function CalendarEmbed({ src, icalSrc }) {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <h2 className="section-title">GSO Calendar</h2>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="section-link"
        >
          Open in Google Calendar →
        </a>
      </div>

      {/* Add to calendar buttons */}
      <div className={styles.buttons}>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className={styles.calBtn}
        >
          Add to Google Calendar
        </a>
        <a
          href={icalSrc}
          target="_blank"
          rel="noreferrer"
          className={styles.calBtn}
        >
          Add to Apple Calendar
        </a>
        <a
          href={icalSrc}
          target="_blank"
          rel="noreferrer"
          className={styles.calBtn}
        >
          Add to Outlook
        </a>
      </div>

      <div className={styles.wrapper}>
        <iframe
          src={src}
          className={styles.frame}
          frameBorder="0"
          scrolling="no"
          title="GSO Google Calendar"
        />
      </div>
    </section>
  )
}