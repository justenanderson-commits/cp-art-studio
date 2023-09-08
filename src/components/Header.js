import React, { useState } from 'react'
import {
  Collapse,
  Card,
  CardBody,
  Typography,
  IconButton,
  Navbar,
} from '@material-tailwind/react'

const Header = () => {
  const [open, setOpen] = useState(false)
  // This may not be necessary
  const toggleOpen = () => setOpen((cur) => !cur)
  //

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 text-teal mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:justify-evenly lg:gap-10">
      <Typography as="li" className="p-1 px-10 font-normal">
        <a
          href="/"
          className="flex items-center hover:text-white active:text-white"
        >
          HOME
        </a>
      </Typography>
      <Typography as="li" className="p-1 px-10 font-normal">
        <a
          href="/about"
          className="flex items-center hover:text-white active:text-white"
        >
          ABOUT
        </a>
      </Typography>
      <Typography as="li" className="p-1 px-10 font-normal">
        <a
          href="/testimonials"
          className="flex items-center hover:text-white active:text-white"
        >
          TESTIMONIALS
        </a>
      </Typography>
      <Typography as="li" className="p-1 px-10 font-normal">
        <a
          href="/gallery"
          className="flex items-center hover:text-white active:text-white"
        >
          GALLERY
        </a>
      </Typography>
      <Typography as="li" className="p-1 px-10 font-normal">
        <a
          href="/contact"
          className="flex items-center hover:text-white active:text-white"
        >
          CONTACT
        </a>
      </Typography>
    </ul>
  )

  return (
    <Navbar className="sticky bg-black top-0 z-10 max-w-full rounded-none py-0 px-4 lg:px-8 lg:py-3 border-none">
      <div className="p-0 sticky top-0 inset-0 z-1">
        <div className="flex items-center justify-evenly">
          <div className="hidden flex items-center lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto mr-4 h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <Card className="my-4 mx-auto w-9/12 bg-black">
            <CardBody className="mx-auto">{navList}</CardBody>
          </Card>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header
