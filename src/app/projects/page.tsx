import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { MotionDiv } from "@/components/MotionDiv"
import { MotionImage } from "@/components/MotionImage"
import { TextReveal5 } from "@/components/TextReaveal5"
import { TextReveal } from "@/components/TextReveal"
import { TextReveal2 } from "@/components/TextReveal2"
import { TextReveal3 } from "@/components/TextReveal3"
import { TextReveal4 } from "@/components/TextReveal4"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ProjectPage = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <MaxWidthWrapper>
      <div className="py-20 text-white mx-auto text-center flex flex-col items-center max-w-3xl">
        <TextReveal>
          <h1 className="text-4xl pb-4 font-bold tracking-tight text-white sm:text-6xl">
            Projects
          </h1>
        </TextReveal>
        <TextReveal5>
          <p className="text-2xl pb-20">
            Here are some projects I've worked on.
          </p>
        </TextReveal5>

        <div className="flex py-10">
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.3,
              ease: "easeInOut",
              duration: 0.6,
            }}
          >
            <div>
              <Image
                src="/Marketplace.png"
                alt="First Project"
                className=""
                width={2500}
                height={2500}
              ></Image>
            </div>
          </MotionDiv>

          <div className="pl-3 text-white">
            <TextReveal>
              <h1 className="  text-2xl"> Digital Marketplace</h1>
            </TextReveal>

            <TextReveal5>
              <p>
                A digital marketplace using clean maintainable code with
                reusable components and fully responsive. The website has a
                fully functioning backend and has a checkout implemented using
                Stripe. Sellers can create products to list on the website which
                can then be verified by an admin to display on the website.
              </p>
            </TextReveal5>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <TextReveal4>
                <Link href="/projects" className={buttonVariants()}>
                  Website
                </Link>
              </TextReveal4>
              <TextReveal5>
                <Link href="/projects" className={buttonVariants()}>
                  Github
                </Link>
              </TextReveal5>
            </div>
          </div>
        </div>

        <div className="flex py-10">
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              ease: "easeInOut",
              duration: 0.7,
            }}
          >
            <div>
              <Image
                src="/AnimeFinder.png"
                alt="First Project"
                className="sm:w-200 md:w-200 lg:w-200 xl:w-200"
                width={2500}
                height={2500}
              ></Image>
            </div>
          </MotionDiv>
          <div className="pl-3 text-white">
            <TextReveal5>
              <h1 className="  text-2xl"> Watchlist V2</h1>
            </TextReveal5>
            <TextReveal4>
              <p>
                A digital marketplace using clean maintainable code with
                reusable components and fully responsive. The website has a
                fully functioning backend and has a checkout implemented using
                Stripe. Sellers can create products to list on the website which
                can then be verified by an admin to display on the website.
              </p>
            </TextReveal4>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <TextReveal5>
                <a
                  href="https://nextjsanime.onrender.com/"
                  className={buttonVariants()}
                >
                  {" "}
                  Website
                </a>
              </TextReveal5>
              <TextReveal4>
                <Link href="/projects" className={buttonVariants()}>
                  Github
                </Link>
              </TextReveal4>
            </div>
          </div>
        </div>

        <div className="flex py-10">
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.25,
              ease: "easeInOut",
              duration: 0.4,
            }}
          >
            <div>
              <Image
                src="/AnimeFinder.png"
                alt="First Project"
                className="sm:w-200 md:w-200 lg:w-200 xl:w-200"
                width={2500}
                height={2500}
              ></Image>
            </div>
          </MotionDiv>
          <div className="pl-3 text-white">
            <TextReveal2>
              <h1 className="  text-2xl"> Watchlist V2 (alternate) </h1>
            </TextReveal2>
            <TextReveal3>
              <p>
                A digital marketplace using clean maintainable code with
                reusable components and fully responsive. The website has a
                fully functioning backend and has a checkout implemented using
                Stripe. Sellers can create products to list on the website which
                can then be verified by an admin to display on the website.
              </p>
            </TextReveal3>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://krisanime.onrender.com"
                className={buttonVariants()}
              >
                Website
              </a>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
        </div>

        <div className="flex py-10">
          <Image
            src="/Watchlist2.png"
            alt="First Project"
            className="sm:w-200 md:w-200 lg:w-200 xl:w-200"
            width={400}
            height={400}
          ></Image>
          <div className="pl-3 text-white">
            <TextReveal3>
              <h1 className="  text-2xl"> Watchlist </h1>
            </TextReveal3>
            <TextReveal4>
              <p>
                A digital marketplace using clean maintainable code with
                reusable components and fully responsive. The website has a
                fully functioning backend and has a checkout implemented using
                Stripe. Sellers can create products to list on the website which
                can then be verified by an admin to display on the website.
              </p>
            </TextReveal4>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://candid-cajeta-7e403b.netlify.app/watchlist"
                className={buttonVariants()}
              >
                Website
              </a>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="flex py-10">
          <Image
            src="/BlogSite.png"
            alt="First Project"
            className="sm:w-200 md:w-200 lg:w-200 xl:w-200"
            width={400}
            height={400}
          ></Image>
          <div className="pl-3 text-white">
            <h1 className="  text-2xl"> Blog-Site </h1>
            <p>
              A digital marketplace using clean maintainable code with reusable
              components and fully responsive. The website has a fully
              functioning backend and has a checkout implemented using Stripe.
              Sellers can create products to list on the website which can then
              be verified by an admin to display on the website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/projects" className={buttonVariants()}>
                Website
              </Link>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="flex py-10">
          <Image
            src="/FlappyBird.png"
            alt="First Project"
            className="sm:w-200 md:w-200 lg:w-200 xl:w-200"
            width={400}
            height={400}
          ></Image>
          <div className="pl-10 text-white">
            <h1 className="  text-2xl"> FlappyBird Remake </h1>
            <p>
              A digital marketplace using clean maintainable code with reusable
              components and fully responsive. The website has a fully
              functioning backend and has a checkout implemented using Stripe.
              Sellers can create products to list on the website which can then
              be verified by an admin to display on the website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://flappy-bird-remake-ih8al3cjx-zetaiis-projects.vercel.app/"
                className={buttonVariants()}
              >
                Website
              </a>
              <Link href="/projects" className={buttonVariants()}>
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default ProjectPage
