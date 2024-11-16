import HomeGrid from "./components/HomeGrid"
import ProjectsGrid from "./components/ProjectsGrid"
import WorkGrid from './components/WorkGrid'
import EducationGrid from './components/EducationGrid'
import resumegrid from './components/resumeGrid'
import AchievmentGrid from "./components/AchievmentGrid"


export const GRIDS = [
  { label: "home", Component: HomeGrid },
  { label: "projects", Component: ProjectsGrid },
  { label: "work", Component: WorkGrid },
  {label:"education", Component:EducationGrid},
  {label:"resume",Component:resumegrid},
  {label:"achievments",Component:AchievmentGrid},
]
