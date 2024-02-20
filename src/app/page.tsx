import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <p className="text-2xl text-white">Steven Nguyen</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Frontend Developer
          </h1>
          <p className="text-white text-2xl py-3">
            React | Next.js | Javascript | Typescript
          </p>
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
          <h1 className="text-4xl text-white border-b">About Me</h1>
          <p className="text-slate-400 text-xl py-3">
            I'm a self-taught Frontend Developer.
          </p>
          <p className="text-slate-400 text-xl">
            {" "}
            I'm looking for a chance to prove myself in the tech world and show
            what I'm capable of.
          </p>
          <p className="text-slate-400 text-xl py-3">
            My goal is to make the web a better-looking, and accessible place
            for everyone.
          </p>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="py-10">
          <h1 className="text-4xl text-white border-b">Favorite Projects</h1>
          <p className="text-slate-400 text-xl py-3">
            Here are some of my favorite projects that I've worked on.
          </p>

          <div className="flex py-5">
            <Image
              src="/Marketplace.png"
              alt="First Project"
              className="w-ful5"
              width={500}
              height={500}
            ></Image>
            <div className="pl-3 text-white">
              <h1 className="  text-2xl"> E-Commerce Site</h1>
              <p>An e-commerce site.</p>
              <Link href="/projects" className={buttonVariants()}>
                Website
              </Link>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
          <div className="flex mt-10">
            <Image
              src="/AnimeFinder.png"
              alt="First Project"
              className="w-ful5"
              width={500}
              height={500}
            ></Image>
            <div className="pl-3 text-white">
              <h1 className="  text-2xl"> AnimeFinder</h1>
              <p>A website to look for your watched animes.</p>
              <Link href="/projects" className={buttonVariants()}>
                Website
              </Link>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
