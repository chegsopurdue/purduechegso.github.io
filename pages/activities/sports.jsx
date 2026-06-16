// pages/activities/sports.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../../utils/prefix'

const photos = [
    `${prefix}/images/sports/basketball.JPEG`,
    `${prefix}/images/sports/soccer.JPEG`,
    `${prefix}/images/sports/climbing.JPEG`,
    `${prefix}/images/sports/bowling.JPEG`,
  ]

export default function Sports() {
  return (
    <ActivityLayout
      title="Sports"
      icon="⚽"
      intro="The GSO organizes sporting events of all kinds to keep the graduate community active and connected outside the lab."
    >
      <div className="actSection">
        <h2>Sports Events</h2>
        <p>
          From classics like basketball, volleyball, and soccer to more unique
          events like Esports and bowling — there is something for everyone.
          Events are open to all ChE graduate students regardless of skill
          level.
        </p>
        <h3>End-of-Year Awards</h3>
        <p>
          At the end of each year the GSO recognizes standout athletic
          participation with two awards:
        </p>
        <ul>
          <li><strong>Grad-lete of the Year</strong> — awarded to the most outstanding individual athlete</li>
          <li><strong>Athletically Activated Research Group of the Year</strong> — awarded to the most active research group</li>
        </ul>
      </div>

      <div className="actSection">
        <h2>Gallery</h2>
        <Gallery photos={photos} />
      </div>

    </ActivityLayout>
  )
}