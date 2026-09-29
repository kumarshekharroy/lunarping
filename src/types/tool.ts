export type ToolCategory = 'Developer' | 'Career' | 'Productivity' | 'Utility' | 'Experiment'

export interface LunarTool {
  name: string
  slug: string
  description: string
  url: string
  category: ToolCategory
  priority: number
  featured?: boolean
  status: 'live' | 'beta'
}
