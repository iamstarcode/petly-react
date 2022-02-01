import React from "react"
export interface MyComponentProps {
  children: React.ReactNode
  className?: string
}

export type PetCardPropsType = {
    name:string,
    animal:string,
    city:string,
    state:string,
    images:string[]
}

export interface TabsType{
  active:string
}