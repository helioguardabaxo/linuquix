import styled from 'styled-components';
import React from 'react';
import db from '../../../db.json';

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 30%;
`;
const Card = styled.div`
  background:#ddd;
  text-align: center;
  background-color: #fdcb6e;
  border-radius: 8px;
  height: 500px;
`;

const BackgroundImage = styled.div`
border-radius: 8px 8px 0 0;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: top center;
  height: 400px;
`;
const Info = styled.div`
  padding-top: 300px;
`;

const Me = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 28px;
  color: #FFF;
`;

const Description = styled.p`
  padding: 5px 10px;
  font-size:18px;
  letter-spacing: 2px;
`;

function Avatar() {
  return (
    <Main>
      <Card>
        <BackgroundImage backgroundImage={db.avatar}>
          <Info>

            <Me>
              <h2>Hélio Guardabaxo</h2>
            </Me>
          </Info>
        </BackgroundImage>
        <Description>
          Eu sou um aspirante a programador!
          Aprender React e NextJS vai me ajudar a criar grandes projetos.
        </Description>
      </Card>
    </Main>

  );
}

export default Avatar;
