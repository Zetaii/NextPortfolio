import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ProjectPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 text-white mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Projects
        </h1>
        <p className="text-2xl">Here are some projects I've worked on.</p>

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
      </div>
    </MaxWidthWrapper>
  )
}

export default ProjectPage
