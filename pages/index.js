import styled from 'styled-components'
import db from '../db.json'
import QuizBackground from '../components/QuizBackground'
import Widget from '../components/Widget'
import QuizLogo from '../components/QuizLogo';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo/>
      <Widget>
        <Widget.Header>
          {db.title}
        </Widget.Header>
        <Widget.Content>
          {db.description}
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>
            Quizes da Galera
          </h1>
          <p>Um mais doido que o outro...</p>
        </Widget.Content>
      </Widget>
      <GitHubCorner projectUrl='http://globo.com'/>
      <Footer/>
      </QuizContainer>
    </QuizBackground>
  )
}
