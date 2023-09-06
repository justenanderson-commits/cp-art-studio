import React, { useState } from 'react'
import {
  Navbar,
  Collapse,
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen((cur) => !cur)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-evenly lg:gap-10">
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center text-sage hover:text-white active:text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center text-sage hover:text-white">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/testimonials" className="flex items-center text-sage hover:text-white">
          Testimonials
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/gallery" className="flex items-center text-sage hover:text-white">
          Gallery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/contact" className="flex items-center text-sage hover:text-white">
          Contact
        </a>
      </Typography>
    </ul>
  )

  return (
    <div>
      <Navbar className="mx-auto w-screen py-2 px-4 lg:px-2 lg:py-4 bg-black">



        <div className="container mx-auto flex items-center justify-evenly text-blue-gray-900">



          <div className="hidden flex w-full items-center lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        <Card className="my-4 mx-auto w-9/12">
          <CardBody className="mx-auto">
            {navList}
          </CardBody>
        </Card>
      </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
