import NewTask from "./NewTask.jsx";

export default function Tasks({tasks, onDelete, onAdd}) {
	return (
		<section>
			<h2  className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<NewTask onAdd={onAdd} />
			{tasks && (
				<p className="text-stone-800 my-4">
					No tasks to display
				</p>
			)}
			{tasks && (
				<ul className="p-4 mt-8 rounded-md bg-stone-100">
					{tasks.map((task) => (
						<li key={task.id} className="flex justify-between my-4">
							<span>{task.text}</span>
							<button
								className="text-stone-700 hover:text-red-500"
								onClick={() => onDelete(task.id)}
							>
								Done
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	)
}
