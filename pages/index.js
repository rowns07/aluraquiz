import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../components/QuizBackground';
import Widget from '../components/Widget';
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
  const router = useRouter();
  const [name, setName] = useState('');

  function submitForm(infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log('Fazendo uma submissão por meio do React');
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {db.title}
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => submitForm(infosDoEvento)}>
              {/* <input
                onChange={function (infosDoEvento) {
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                  console.log(name);
                }}
                placeholder="Diz ai seu nome"
              /> */}
              <input
                onChange={
                  (infosDoEvento) => setName(infosDoEvento.target.value)
                }
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </button>
            </form>
            <br />
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
        <GitHubCorner projectUrl="https://github.com/rowns07" />
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
