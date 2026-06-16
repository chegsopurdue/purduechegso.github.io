// pages/activities/sustainability.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../../utils/prefix'

const photos = [
    `${prefix}/images/sustainability/arborday-1.JPEG`,
    `${prefix}/images/sustainability/totebag.JPEG`,
    `${prefix}/images/sustainability/highway.JPEG`,
    `${prefix}/images/sustainability/arborday-2.JPEG`,
  ]

export default function Sustainability() {
  return (
    <ActivityLayout
      title="Sustainability Initiatives"
      icon="🌱"
      intro="The GSO promotes sustainable practices within the department and actively engages with the broader West Lafayette–Lafayette community through service and environmental initiatives."
    >
      <div className="actSection">
        <h2>Coffee Mugs</h2>
        <p>
          To encourage the reduction of disposable cups at seminars and events,
          the GSO provides each incoming graduate student with their own coffee
          mug featuring a GSO logo design.
        </p>
      </div>

      <div className="actSection">
        <h2>Community Service</h2>
        <p>
          The GSO conducts volunteer activities every year to help the
          community of West Lafayette–Lafayette in various ways, including:
        </p>
        <ul>
          <li>Highway cleanup</li>
          <li>Food drive</li>
          <li>Arbor Day tree planting</li>
        </ul>
      </div>

      <div className="actSection">
        <h2>Gallery</h2>
        <Gallery photos={photos} />
      </div>

    </ActivityLayout>
  )
}