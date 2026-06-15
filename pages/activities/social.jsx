// pages/activities/social.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../utils/prefix'

const photos = {
  coffeeHour: [
    `${prefix}/images/social/coffee-1.jpeg`,
    `${prefix}/images/social/coffee-2.jpeg`,
    `${prefix}/images/social/coffee-3.jpeg`,
    `${prefix}/images/social/coffee-4.jpeg`,
  ],
  // paintNight: [
  //   `${prefix}/images/social/paint-1.jpg`,
  //   `${prefix}/images/social/paint-2.jpg`,
  // ],
  // gameNight: [
  //   `${prefix}/images/social/game-1.jpg`,
  //   `${prefix}/images/social/game-2.jpg`,
  // ],
  // additional: [
  //   `${prefix}/images/social/extra-1.jpg`,
  //   `${prefix}/images/social/extra-2.jpg`,
  // ],
}

export default function Social() {
  return (
    <ActivityLayout
      title="Social Events"
      icon="🎉"
      intro="The GSO organizes a wide variety of social events throughout the year to bring the graduate community together and make life at Purdue more fun."
    >
      <div className="actSection">
        <h2>Coffee Hour</h2>
        <p>
          The GSO organizes Coffee Hours every month in the atrium featuring a
          relaxing atmosphere, free coffee, and great conversations. Occasionally
          the coffee is accompanied with tea or hot chocolate!
        </p>
        <Gallery photos={photos.coffeeHour} />
      </div>

      <div className="actSection">
        <h2>Paint Nights</h2>
        <p>
          The GSO hosts activities for graduate students to bring out their inner
          artists. Whether it is painting on a canvas or decorating a cookie with
          frosting, it is always a good time.
        </p>
        {/* <Gallery photos={photos.paintNight} /> */}
      </div>

      <div className="actSection">
        <h2>Trivia and Game Night</h2>
        <p>
          We regularly conduct Trivia and Game Nights with exciting prizes for
          the winners. A great way to unwind and get to know fellow grad
          students outside the lab.
        </p>
        {/* <Gallery photos={photos.gameNight} /> */}
      </div>

      <div className="actSection">
        <h2>Additional Events</h2>
        <p>
          Across the year, the GSO also conducts a variety of fun events
          including s&rsquo;mores under the stars, Friendsgiving, ice skating,
          and much more. Check the GSO calendar for upcoming events!
        </p>
        {/* <Gallery photos={photos.additional} /> */}
      </div>

      <div className="calendarBox">
        <h3>GSO Calendar</h3>
        <p>
          <a
            href="https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
            rel="noreferrer"
            className="actLink"
          >
            Add to Google Calendar
          </a>
          {' '}·{' '}
          <a
            href="https://calendar.google.com/calendar/ical/v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com/public/basic.ics"
            target="_blank"
            rel="noreferrer"
            className="actLink"
          >
            Add to Outlook / Apple Calendar
          </a>
        </p>
      </div>
    </ActivityLayout>
  )
}