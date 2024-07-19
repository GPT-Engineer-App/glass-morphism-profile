import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Header = ({ setActiveSection }) => {
  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <Avatar className="h-24 w-24 mr-4">
          <AvatarImage src="/placeholder.svg" alt="Luccas Eastman" />
          <AvatarFallback>LE</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold">Luccas Eastman</h1>
          <p className="text-xl">Web Developer and Business Educator</p>
        </div>
      </div>
      <nav className="flex space-x-2">
        <Button variant="ghost" onClick={() => setActiveSection('about')}>About</Button>
        <Button variant="ghost" onClick={() => setActiveSection('skills')}>Skills</Button>
        <Button variant="ghost" onClick={() => setActiveSection('projects')}>Projects</Button>
        <Button variant="ghost" onClick={() => setActiveSection('contact')}>Contact</Button>
      </nav>
    </header>
  )
}

export default Header