// pages/activities/social.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../../utils/prefix'

const photos = {
  coffeeHour: [
    `${prefix}/images/social/coffee-1.JPEG`,
    `${prefix}/images/social/coffee-2.JPEG`,
    `${prefix}/images/social/coffee-3.JPEG`,
    `${prefix}/images/social/coffee-4.JPEG`,
  ],
  paintNight: [
    `${prefix}/images/social/paint-1.jpg`,
    `${prefix}/images/social/paint-2.jpg`,
    `${prefix}/images/social/paint-3.jpeg`,
    `${prefix}/images/social/paint-4.jpeg`,
  ],
  gameNight: [
    `${prefix}/images/social/game-1.JPEG`,
    `${prefix}/images/social/game-2.JPEG`,
    `${prefix}/images/social/game-3.JPEG`,
    `${prefix}/images/social/game-4.JPEG`,
  ],
  picnic: [
    `${prefix}/images/social/picnic-1.JPEG`,
    `${prefix}/images/social/picnic-2.JPEG`,
    `${prefix}/images/social/picnic-3.JPEG`,
    `${prefix}/images/social/picnic-4.JPEG`,
  ],
  holidays: [
    `${prefix}/images/social/holiday-1.JPEG`,
    `${prefix}/images/social/holiday-2.JPEG`,
    `${prefix}/images/social/holiday-3.JPEG`,
    `${prefix}/images/social/holiday-4.JPEG`,
  ],
  additional: [
    `${prefix}/images/social/additional-1.JPEG`,
    `${prefix}/images/social/additional-2.JPEG`,
    `${prefix}/images/social/additional-3.JPEG`,
    `${prefix}/images/social/additional-4.JPEG`,
  ],
}

export default function Social() {
  return (
    <ActivityLayout
      title="Social and Cultural Events"
      icon="🎉"
      intro="The GSO organizes a wide variety of social and cultural events throughout the year to bring the graduate community together and make life at Purdue more fun."
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
        <Gallery photos={photos.paintNight} />
      </div>

      <div className="actSection">
        <h2>Game Night</h2>
        <p>
          We regularly conduct Trivia and Game Nights with exciting prizes for
          the winners. A great way to unwind and get to know fellow grad
          students outside the lab.
        </p>
        <Gallery photos={photos.gameNight} />
      </div>

      <div className="actSection">
        <h2>Cultural Picnic</h2>
        <p>
          Every semester, the GSO organizes a picnic at one of the local parks to celebrate
          the diversity of our community. It is a great opportunity to enjoy the outdoors,
          share delicious food, and have fun with the ChE community.
        </p>
        <Gallery photos={photos.picnic} />
      </div>

      <div className="actSection">
        <h2>Cultural Holiday Celebrations</h2>
        <p>
          Across the year, the GSO also conducts a variety of events
          commemorating cultural holidays, such as Lunar New Year and Holi.
          These events are a great way to celebrate the diversity of our community.
        </p>
        <Gallery photos={photos.holidays} />
      </div>

      <div className="actSection">
        <h2>Additional Events</h2>
        <p>
          Across the year, the GSO also conducts a variety of fun events
          including s&rsquo;mores under the stars, Friendsgiving, ice skating,
          and much more. Check the GSO calendar for upcoming events!
        </p>
        <Gallery photos={photos.additional} />
      </div>
      
    </ActivityLayout>
  )
}