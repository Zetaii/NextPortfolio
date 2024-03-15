import Footer from "@/components/Footer"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { MotionDiv } from "@/components/MotionDiv"

import { TextReveal } from "@/components/TextReveal"
import { TextReveal2 } from "@/components/TextReveal2"
import { TextReveal3 } from "@/components/TextReveal3"
import { TextReveal4 } from "@/components/TextReveal4"
import { TextReveal5 } from "@/components/TextReveal5"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <TextReveal3>
            <p className="text-2xl text-white">Steven Nguyen</p>
          </TextReveal3>
          <TextReveal>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Frontend Developer
            </h1>
          </TextReveal>
          <TextReveal2>
            <p className="text-white text-2xl py-3">
              React | Next.js | Javascript | Typescript
            </p>
          </TextReveal2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/projects" className={buttonVariants()}>
              {" "}
              Browse Projects
            </Link>
            <Button className="text-white" variant="ghost">
              Test
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="  border-gray-200 bg-gray-700">
        <MaxWidthWrapper className="py-10">
          <TextReveal5>
            <h1 className="text-4xl text-white border-b">About Me</h1>
          </TextReveal5>
          <TextReveal3>
            <p className="text-slate-400 text-xl py-3">
              I&apos;m a self-taught Frontend Developer.
            </p>
          </TextReveal3>
          <TextReveal5>
            <p className="text-slate-400 text-xl">
              {" "}
              I&apos;m looking for a chance to prove myself in the tech world
              and show what I&apos;m capable of.
            </p>
          </TextReveal5>
          <TextReveal4>
            <p className="text-slate-400 text-xl py-3">
              My goal is to make the web a better-looking, and accessible place
              for everyone.
            </p>
          </TextReveal4>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="py-10">
          <TextReveal>
            <h1 className="text-4xl text-white border-b">Favorite Projects</h1>
          </TextReveal>
          <TextReveal2>
            <p className="text-slate-400 text-xl py-3">
              Here are some of my favorite projects that I&apos;ve worked on.
            </p>
          </TextReveal2>

          <div className="flex py-5">
            <MotionDiv
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.8,
                ease: "easeInOut",
                duration: 0.7,
              }}
            >
              <Image
                src="/Marketplace.png"
                alt="First Project"
                className="w-ful5"
                width={2000}
                height={2500}
              ></Image>
            </MotionDiv>
            <div className="pl-3 text-white">
              <TextReveal3>
                <h1 className="  text-2xl"> E-Commerce Site</h1>
              </TextReveal3>
              <TextReveal2>
                <p>
                  A digital marketplace using clean maintainable code with
                  reusable components and fully responsive. The website has a
                  fully functioning backend and has a checkout implemented using
                  Stripe. Sellers can create products to list on the website
                  which can then be verified by an admin to display on the
                  website.
                </p>
              </TextReveal2>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/projects" className={buttonVariants()}>
                  React
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Next.js
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Stripe
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Payload
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Typescript
                </Link>
              </div>
            </div>
          </div>

          <div className="flex py-5">
            <MotionDiv
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4,
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              <Image
                src="/AnimeFinder.png"
                alt="First Project"
                className="w-ful5"
                width={2000}
                height={500}
              ></Image>
            </MotionDiv>
            <div className="pl-3 text-white">
              <h1 className="  text-2xl"> Anime Finder V2 </h1>
              <p>
                A digital marketplace using clean maintainable code with
                reusable components and fully responsive. The website has a
                fully functioning backend and has a checkout implemented using
                Stripe. Sellers can create products to list on the website which
                can then be verified by an admin to display on the website.
              </p>
              <p></p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/projects" className={buttonVariants()}>
                  React
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Next.js
                </Link>

                <Link href="/projects" className={buttonVariants()}>
                  Framer Motion
                </Link>
                <Link href="/projects" className={buttonVariants()}>
                  Typescript
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
