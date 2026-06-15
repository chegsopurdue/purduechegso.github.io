// components/Gallery.jsx
import Image from 'next/image'
import { useState } from 'react'
import styles from './Gallery.module.css'

export default function Gallery({ photos }) {
  const [lightbox, setLightbox] = useState(null)

  if (!photos || photos.length === 0) return null

  return (
    <>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <div
            key={i}
            className={styles.item}
            onClick={() => setLightbox(src)}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              width={400}
              height={280}
              className={styles.photo}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} onClick={() => setLightbox(null)}>✕</button>
          <Image
            src={lightbox}
            alt="Full size"
            width={1200}
            height={800}
            className={styles.lightboxImg}
          />
        </div>
      )}
    </>
  )
}