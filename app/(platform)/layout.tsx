import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

const PlatFormLayout = ({
    children
} : {
    children:ReactNode
} ) => {
    return (
        <ClerkProvider>
            {
                children
            }
        </ClerkProvider>
    )
}

export default PlatFormLayout