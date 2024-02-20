import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <div className="bg-gray-700 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-gray-700">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0 text-red-50 space-x-6">
                <Link href="/">
                  <p> Home</p>
                </Link>
                <Link href="/projects">
                  <p> Projects</p>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden text-white lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href="/sign-in">Github</Link>

                  <Link href="/sign-up">Create account</Link>

                  <div className="ml-4 flow-root lg:ml-6"></div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
