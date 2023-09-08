import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { Button, Card, Typography } from '@material-tailwind/react'
import aspens from '../assets/aspens.jpg'
import ceramics from '../assets/ceramics.jpeg'

const Home = () => {
  const handleClick = () => {}

  return (
    <div className="relative home-page text-white text-2xl min-h-screen bg-black pt-8 lg:pt-20 flex flex-col items-center z-0">
      <div className="mr-auto pl-10 -mt-10 mb-6 w-5/12">
        <Typography className="text-xl mr-auto px-4">
          Students progress through the courses on an individual basis.
          Enrollment for new students is always open!
        </Typography>
      </div>
      {/* This is the start of the grid */}

      {/* This is the container for CP Art and the ceramics image */}
      <div className='flex'>
      
        <div
          className="flex items-center justify-center"
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
        <img
          src={ceramics}
          alt="boy working with clay"
          className="mr-0 ml-12 h-48"
        />
      </div>

      {/* This is the container for Studio and the aspens image */}
      <div className="flex">
        <img
          src={aspens}
          alt="aspen tree painting"
          className="ml-0 mr-12 h-48"
        />
        <div
          className="flex justify-center items-center"
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

        {/* This is the end of the containers */}
      </div>

      {/* This is the end of the grid */}
      <div className="mt-6 ml-60 pl-40">
        <a href="mailto:conniesartstudio@yahoo.com">
          <Button className="rounded-none bg-white text-black text-2xl py-1 px-2 capitalize hover:scale-110">
            Email Connie
          </Button>
        </a>
      </div>
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
