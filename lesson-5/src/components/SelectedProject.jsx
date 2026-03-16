import Tasks from "./Tasks.jsx";

export default function SelectedProject({
	project,
	onDelete,
	onDeleteTask,
	onAddTask,
	tasks,
	}) {
	
	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold mb-2 text-stone-600">
						{project.title}
					</h1>
						<button
							onClick={onDelete}
							className="text-stone-600 hover:text-stone-950"
						>
							Delete
						</button>
				</div>
				<p className="text-stone-400 mb-4">{project.dueDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">
					{project.description}
				</p>
			</header>
			<Tasks tasks={tasks}  onDelete={onDeleteTask} onAdd={onAddTask}/>
		</div>
	)
}
