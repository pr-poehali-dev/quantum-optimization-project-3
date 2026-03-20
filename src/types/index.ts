import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string | ReactNode
  subtitle?: ReactNode
  content?: string | ReactNode
  showButton?: boolean
  buttonText?: string
  backgroundImage?: string
  customContent?: ReactNode
}

export interface SectionProps extends Section {
  isActive: boolean
}
