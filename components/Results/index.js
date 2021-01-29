/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';

function ResultWidget({ results }) {
  return (

    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          perguntas
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </p>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
