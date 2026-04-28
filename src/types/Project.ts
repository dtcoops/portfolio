export type Topic = 'all' | 'personal' | 'school'

export interface MetaItem {
  label: string
  value: string
}

export interface ProjectImage {
  src: string
  caption: string
}

export interface Project {
  id: string
  title: string
  topic: 'personal' | 'school'
  desc: string
  tags: string[]
  thumb: string
  images: ProjectImage[]
  meta: MetaItem[]
  overview: string
  goals: string[]
  liveUrl?: string
}
