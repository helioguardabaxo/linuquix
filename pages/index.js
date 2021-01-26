import styled from 'styled-components';
import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import FooterWrapper from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import NavBar from '../src/components/NavBar';

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
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Linuquix - Um Quiz sobre comandos do terminal do Linux</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <NavBar />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input 
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diga aí seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar!
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Vamos galera!</p>
          </Widget.Content>
        </Widget>
        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/helioguardabaxo" />
    </QuizBackground>
  );
}
