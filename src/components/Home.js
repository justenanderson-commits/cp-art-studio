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
      <div className="flex justify-center mx-auto -mt-10 mb-12 w-8/12">
        <Typography className="text-xl">
          Students progress through the courses on an individual basis.
          Enrollment for new students is always open!
        </Typography>
      </div>
      <div
        id="grid-container"
        className="flex mt-8"
      >
        <div 
          id="left-image-container" 
          className="">
          <img
            src={aspens}
            alt="aspen tree painting"
            className="mr-auto mb-0 h-80"
          />
        </div>
        <div 
          id="center-text-container" 
          className="w-260 flex flex-col">
          <div 
            id='upper-center'
            >
              <Typography
               variant="h1"
               className="ml-10 pt-10 pr-20 font-serif font-bold text-11xl"
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
               className="mx-20 pl-32 pt-28 font-serif text-11xl"
               style={{ WebkitTextStroke: '3px teal' }}
               >
               Studio
              </Typography>

          </div>
        </div>
        <div id="right-image-container">
          <img
            src={ceramics}
            alt="boy working with clay"
            className="ml-auto h-80"
          />
        </div>
      </div>

      <div className="-mt-8 ml-60 pl-40">
        <a href="mailto:conniesartstudio@yahoo.com">
          <Button className="rounded-none bg-white text-black text-2xl py-1 px-2 capitalize hover:scale-110">
            Email Connie
          </Button>
        </a>
      </div>
      <Typography
      className='my-8 w-7/12 text-2xl text-teal/80'
      >
        "Art teaches us to feel good about ourselves and about the world around us. To see the beauty and endlessness of this wonderful world, one only needs to look through the eye of an artist." - Connie Parrish
      </Typography>
      {/* <About />
      <Testimonials />
      <Gallery />
      <Contact /> */}
    </div>
  )
}

export default Home
