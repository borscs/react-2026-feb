import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoPRojectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: []
	});
	
	function handleSelectAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	};
	
	function handleAddProject(projectData) {
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
	
	function handleCancelAddProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}
	
	function handleDeleteProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(project => project.id !== projectState.selectedProjectId),
			}
		})
	}
	
	function handleSelectProject(projectId) {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: projectId,
			}
		})
	}
	
	
	function onAddTaskHandler(task) {
		setProjectState(prevState => {
			const taskId = Math.random();
			const newTask = {text: task, id: taskId, projectId: projectState.selectedProjectId};
			
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			}
			
		})
	}
	
	function onDeleteTask(taskId) {
		setProjectState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== taskId),
			}
		})
	}
	
	const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
	const selectedTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId);
	
	let content = <SelectedProject
																project={selectedProject}
																onDelete={handleDeleteProject}
																onAddTask={onAddTaskHandler}
																onDeleteTask={onDeleteTask}
																tasks={selectedTasks}
												/>
	
	if (projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleSelectAddProject}/>
	}
	
	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar onStartAddProject={handleSelectAddProject} projects={projectState.projects}
											onSelectProject={handleSelectProject}/>
			{content}
		</main>
	);
}

export default App;
