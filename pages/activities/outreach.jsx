// pages/activities/outreach.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../../utils/prefix'

const photos = [
    `${prefix}/images/outreach/murdock-1.JPEG`,
    `${prefix}/images/outreach/murdock-2.JPEG`,
    `${prefix}/images/outreach/murdock-3.JPEG`,
    `${prefix}/images/outreach/murdock-4.JPEG`,]

export default function Outreach() {
  return (
    <ActivityLayout
      title="Outreach"
      icon="🌍"
      intro="The GSO connects Purdue ChE graduate students with the local community through science education and environmental initiatives."
    >
      <div className="actSection">
        <h2>Science Outreach with Local Schools</h2>
        <p>
          The GSO runs an After School Science Education Program with Murdock
          Elementary, providing opportunities for graduate students to interact
          with and teach elementary school students, prepare educational
          materials (videos, posters), and more. Recently, we teamed up with
          graduate organizations from other departments to create short video
          lessons on various scientific concepts for students in K–5 grades.
        </p>
      </div>

      <div className="actSection">
        <h2>Murdock Elementary Science Night</h2>
        <p>
          Graduate students pair up and organize different science experiments
          to demonstrate to elementary school students. A fun, hands-on event
          that inspires young students and gives grad students a chance to
          share their passion for science.
        </p>
      </div>

      <div className="actSection">
        <h2>Gallery</h2>
        <Gallery photos={photos} />
      </div>

    </ActivityLayout>
  )
}