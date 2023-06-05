
import type IProject from "@/interfaces/IProject"
import { defineStore } from "pinia"

export interface ProjectState {
  projects: IProject[],
}

export const useProjectStore = defineStore('projectStore', {
  state: (): ProjectState => ({
    projects: [] 
  }),
  actions: {
    addProject(projectName: string): void {
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject
      
      this.projects.push(project)
    },
    editProject(project: IProject) {
      const projectIndex = this.projects.findIndex(item => item.id === project.id)
      this.projects[projectIndex] = project
    },
    deleteProject(projectId: string) {
      this.projects = this.projects.filter(item => item.id !== projectId)
    }
  }
})