import Layout from "../../components/Layout";
import Link from "next/link";
import ArrowLeft from "../../components/icons/ArrowLeft.js";
import { getAllProjects } from "../../functions/getAllProjects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage({ projects }) {
    console.log('projects', projects)
    return (
        <Layout title={"Portfolio / Projects"} description={"My Projects"}>
            <section className="max-w-5xl pt-4 h-full mx-auto md:pt-16">
                <Link href="/">
                    <a className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
                        <ArrowLeft className="w-8 h-8 fill-current"></ArrowLeft>
                        <span className="text-xl font-normal">Back to Home</span>
                    </a>
                </Link>

                {/* Projects */}
                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const projects = await getAllProjects();
    return {
        props: {
            projects
        },
    }
}