import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <Progress value={level} className="w-full" />
  </div>
)

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Business Strategy", level: 90 },
  ]

  return (
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </CardContent>
    </Card>
  )
}

export default Skills