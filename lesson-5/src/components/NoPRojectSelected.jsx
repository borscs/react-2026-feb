import noProjectImage from '../assets/no-projects.png';

export default function NoProjectSelected({onStartAddProject}) {
	return (
		<div className="mt-24 text-center w-2/3">
			<img
				className="w-16 h-16 object-contain mx-auto"
				alt="No Project Selected"
				src={noProjectImage}
			/>
			<h2 className="text-xl font-semibold mt-4">
				No Project Selected
			</h2>
			<p className="text-stone-500 mt-2">
				Select a project or get started with a new one
			</p>
			<button
				onClick={onStartAddProject}
				className="mt-6 px-4 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-700"
			>
				Create New Project
			</button>
		</div>
	)
}
