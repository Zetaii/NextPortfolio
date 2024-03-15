import Link from "next/link"

import { cookies } from "next/headers"
import { buttonVariants } from "./ui/button"

import Image from "next/image"
import { motion } from "framer-motion"
import { MotionNav } from "./MotionNav"
import { MotionDiv } from "./MotionDiv"

const Navbar = async () => {
  return (
    <>
      <MotionNav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ type: "teen", duration: 0.3 }}
        className="bg-nav w-full"
      >
        <nav
          className="m:px-16 text-xl font-bold py-4 px-8 flex justify-around items-center gap-2
    flex-wrap  text-white border-b-2 border-l-2 border-r-2  rounded-md border-white"
        >
          <h1 className="text-2xl -ml-52 font-extrabold">
            <MotionDiv
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 3,
                delay: 0.5,
              }}
              whileHover={{ scale: 1.3 }}
            >
              <div className="flex -ml-64">
                <Link className="hover:text-black flex  " href="/">
                  <h1 className="ml-2 mt-1 text-4xl font-extrabold">Logo?</h1>
                </Link>
              </div>
            </MotionDiv>
          </h1>
          <div className="flex -ml-[900px]">
            <MotionDiv
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 0.3,
                duration: 0.8,
              }}
            >
              <div>
                <MotionDiv
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <div>
                    <Link
                      className="font-bold text-lg  p-2 rounded-md "
                      href="/"
                    >
                      Home
                    </Link>
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 0.4,
                duration: 1,
              }}
            >
              <div>
                <MotionDiv
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <div>
                    <Link
                      className="font-bold text-lg   p-2 rounded-md"
                      href="/projects"
                    >
                      Projects
                    </Link>
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 0.5,
                duration: 1,
              }}
            >
              <div>
                <MotionDiv
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <div>
                    <Link
                      className="font-bold text-lg   p-2 rounded-md"
                      href="About"
                    >
                      About
                    </Link>
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </nav>
      </MotionNav>
    </>
  )
}

export default Navbar
