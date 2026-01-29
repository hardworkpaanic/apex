import { Title } from '@/page/projects/widgets'
import { ProjectCard } from '@/shared/components'

export default function ProjectsPage() {
	return (
		<main className="container max-w-[1320px] mx-auto px-4">
			<Title />
			<div className="flex flex-col mt-5 gap-3">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</main>
	)
}
