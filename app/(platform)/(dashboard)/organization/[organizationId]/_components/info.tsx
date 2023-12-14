"use client"

import { useOrganization } from "@clerk/nextjs"

export const Info = () => {

    const { organization, isLoaded } = useOrganization()

    if(!isLoaded){
        return <p>Loading....</p>
    }

    return (
        <div>
            Info!
        </div>
    )
}