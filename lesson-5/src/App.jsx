import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoPRojectSelected.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  
  function handleSelectAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  };
  
  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {...projectData, id: projectId};
      
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      }
    })
  }
  
  
  function handleCancelAddProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  
  let content;
  
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleSelectAddProject}/>
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleSelectAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
