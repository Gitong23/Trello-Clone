"use client"

import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion } from '@radix-ui/react-accordion'

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({
  storageKey="t-sidebar-state", 
} : SidebarProps) => {

  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey, 
    {}
  )

  const { 
    organization: activeOrganization,
    isLoaded: isLoadOrg
  } = useOrganization()

  const {
    userMemberships,
    isLoaded: isLoadedOrgList
  } = useOrganizationList({
    userMemberships:{
      infinite: true
    }
  })

  const defaultAccordionValue: string[] = Object.keys(expanded)
  .reduce((acc: string[], key: string) => {
    if(expanded[key]){
      acc.push(key)
    }

    return acc
  },[])

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }))
  }

  if(!isLoadOrg || !isLoadedOrgList || userMemberships.isLoading){
    return (
      <>
        <Skeleton/>
      </>
    )
  }

  return (
    <>
      <div>
        Sidebar
      </div>
    </>
  )
}
