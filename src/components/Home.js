import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { Button, Card, Typography } from '@material-tailwind/react'

const Home = () => {
  return (
    <div className="relative home-page text-white text-2xl min-h-screen bg-black pt-8 lg:pt-20 flex flex-col items-center">
      <Typography>
        Students progress through the courses on an individual basis. Enrollment
        for new students is always open!
      </Typography>
      <Typography
        as="span"
        variant="h1"
        className="p-1 font-normal text-9xl"
        style={{ WebkitTextStroke: '2px teal' }}
      >
        CP Art
      </Typography>
      <Typography>Studio</Typography>

      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
