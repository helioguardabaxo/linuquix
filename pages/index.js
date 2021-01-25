import styled from 'styled-components'
import db from '../db.json'

import Widget from '../src/components/Widget'
import FooterWrapper from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
` 

export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
    <Widget>
      <Widget.Header>
        <h1>Linux Quiz</h1>
      </Widget.Header>
      
      <Widget.Content>
        <p>Vamos ver se você manja do terminal</p>
      </Widget.Content>
    </Widget>
      
    <Widget>
      <Widget.Content>
        <h1>Quizes da galera</h1>
        <p>Vamos galera!</p>
      </Widget.Content>
    </Widget>
    <FooterWrapper/>
    </QuizContainer>

    
    
    <GitHubCorner projectUrl="http://github.com/helioguardabaxo" />
  </QuizBackground>
  
  )
}
