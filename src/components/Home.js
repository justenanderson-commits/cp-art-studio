import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { Button, Card, Typography } from '@material-tailwind/react'

const Home = () => {
  return (
    <div className="relative home-page text-white text-2xl min-h-screen bg-black pt-8 lg:pt-20 flex flex-col items-center">
      <div className="mr-auto pl-10 -mt-10 mb-6 w-5/12">
        <Typography className="text-xl mr-auto px-4">
          Students progress through the courses on an individual basis.
          Enrollment for new students is always open!
        </Typography>
      </div>
      <div
        id="cp-title-container"
        className="flex justify-center items-center"
        style={{ width: '100%', height: '180px' }}
      >
        <Typography
          variant="h1"
          className="pr-24 font-serif font-bold text-11xl"
          style={{ WebkitTextStroke: '3px teal' }}
        >
          CP Art
        </Typography>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ width: '100%', height: '180px' }}
      >
        <Typography
          as="span"
          variant="h1"
          className="pl-24 font-serif text-11xl"
          style={{ WebkitTextStroke: '3px teal' }}
        >
          Studio
        </Typography>
      </div>

      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
