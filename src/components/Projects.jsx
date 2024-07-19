import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ProjectCard = ({ title, description, demoLink, repoLink }) => (
  <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src="/placeholder.svg" alt={title} className="w-full h-48 object-cover rounded-md" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="secondary" onClick={() => window.open(demoLink, '_blank')}>
        Live Demo
      </Button>
      <Button variant="outline" onClick={() => window.open(repoLink, '_blank')}>
        GitHub Repo
      </Button>
    </CardFooter>
  </Card>
)

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Business Analytics Dashboard",
      description: "Interactive dashboard for business insights using D3.js",
      demoLink: "#",
      repoLink: "#"
    },
    // Add more projects as needed
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default Projects