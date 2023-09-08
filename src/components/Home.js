import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import { Button, Card, Typography } from '@material-tailwind/react'

const Home = () => {
  return (
    <div className="relative home-page text-white text-2xl min-h-screen bg-black pt-8 lg:pt-20 flex flex-col items-center">
      <Typography className='mr-auto px-4'>
        Students progress through the courses on an individual basis. Enrollment
        for new students is always open!
      </Typography>
      <div id='cp-title-container' className="bg-white w-full flex justify-center items-center" style={{ width: '100%', height: '200px' }}>
        <Typography
          id='cp-title-title' 
          variant="h1"
          className="pr-24 font-serif font-bold text-12xl"
          style={{ WebkitTextStroke: '2px teal' }}
        >
          CP Art
        </Typography>
          </div>
        <div className='bg-yellow-300 flex items-center justify-center' style={{ width: '100%', height: '200px' }}>
        <Typography
          as="span"
          variant="h1"
          className="pl-24 font-serif text-12xl"
          style={{ WebkitTextStroke: '2px teal' }}
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
