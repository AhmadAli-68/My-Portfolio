// import { getFeaturedProjects, getReposData } from '@/lib/github'
// import ProjectCard from '../components/ProjectCard'
// import { Suspense } from 'react'

// const page = async () => {
//   const projects = await getFeaturedProjects()

//   console.log('PROJECTS:', projects)

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2'>
//       <Suspense fallback={'Loading...'}>
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             name={project.name}
//             description={project.description}
//             language={project.language}
//             githubUrl={project.html_url}
//             liveUrl={project.homepage}
//           />
//         ))}
//       </Suspense>
//     </div>

//   )
// }

// export default page