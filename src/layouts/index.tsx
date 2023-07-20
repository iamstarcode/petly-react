import { Outlet } from "react-router"
import MFooter from "@/layouts/partials/MFooter"
import NavBar from "@/layouts/partials/NavBar"

export type LayoutMainProps = {
  children?: React.ReactNode
}

const LayoutMain = (): JSX.Element => {
  return (
    <>

      <NavBar />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <MFooter />
    </>
  )

}

export default LayoutMain
