import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
  return (
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          I'm Luccas Eastman, a passionate Web Developer and Business Educator with over a decade of experience in creating innovative digital solutions and mentoring aspiring entrepreneurs. My expertise lies in crafting responsive, user-friendly websites and applications, as well as guiding businesses to leverage technology for growth and success.
        </p>
      </CardContent>
    </Card>
  )
}

export default About