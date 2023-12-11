import { ReactNode } from "react"
import { Roboto } from 'next/font/google'
import { Navbar } from "./_components/navbar"
import { Footer } from "./_components/footer"
// export const metadata: Metadata = {
//   title: "Taskify No. 1",
//   description: "Such a Good Apps"
// }

const roboto = Roboto({
  weight: ['100', '300', '400', "500", "700", '900'], 
  subsets: ['latin']
})

const MarketingLayout = ({
    children
}: {
    children: ReactNode
}) => {
  return (
    <div className="h-full ">
        <Navbar/>
        <main className={`h-full pt-40 pb-20 bg-slate-100 ${roboto.className}`}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default MarketingLayout