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

      {/* ////////////////////////////////////////////// */}

      <div
        id="grid-container"
        className="h-80 bg-white flex mt-4"
      >
        <div 
          id="left-image-container" 
          className="">
          <img
            src={aspens}
            alt="aspen tree painting"
            className="mr-auto mb-0 h-60"
          />
        </div>
        <div 
          id="center-text-container" 
          className="w-260 flex flex-col">
          <div 
            id='upper-center'
            className='bg-white flex align-baseline'
            >
              <Typography
               variant="h1"
               className="pt-10 pr-20 font-serif font-bold text-11xl flex align-baseline"
               style={{ WebkitTextStroke: '3px teal' }}
              >
                CP Art
              </Typography>
          </div>
          
          <div 
            id='lower-center'
          >
              <Typography
               as="span"
               variant="h1"
               className="pl-24 pt-28 font-serif text-11xl"
               style={{ WebkitTextStroke: '3px teal' }}
               >
               Studio
              </Typography>

          </div>
        </div>
        <div id="right-image-container" className="flex align-baseline">
          <img
            src={ceramics}
            alt="boy working with clay"
            className="ml-auto h-60"
          />
        </div>
      </div>

      {/* ////////////////////////////////////////////// */}

      <div className="mt-10 ml-60 pl-40">
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
