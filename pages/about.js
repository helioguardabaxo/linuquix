import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import NavBar from '../src/components/NavBar'
import AboutContainer from '../src/components/AboutContainer'
import Avatar from '../src/components/Avatar'
import db from '../db.json'



export default function About() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <NavBar></NavBar>
      <AboutContainer>
        <Avatar></Avatar>
      </AboutContainer>
    </QuizBackground>
    
  )
}