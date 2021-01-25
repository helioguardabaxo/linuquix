import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import NavBar from '../src/components/NavBar'
import AboutContainer from '../src/components/AboutContainer'

import db from '../db.json'



export default function About() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <NavBar></NavBar>
      <AboutContainer>
          <Widget>
            <Widget.Header>
              <h1>Quem sou eu?</h1>
            </Widget.Header>
            
            <Widget.Content>
              <p>Eu sou o Hélio, um aspirante a programador React!</p>
            </Widget.Content>
          </Widget>
      </AboutContainer>
    </QuizBackground>
    
  )
}