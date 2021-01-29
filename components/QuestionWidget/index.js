/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button';
import Widget from '../Widget';

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectAlternative, setSelectAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question_${questionIndex}`;
  const isCorrect = selectAlternative === question.answer;
  const hasAlternativeSelected = selectAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h1>
          {question.title}
        </h1>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
        </form>

        <Button type="submit" disabled={!hasAlternativeSelected}>
          Confirmar 2
        </Button>

        <p>
          SelectedAlternative:
          {`${selectAlternative}`}
        </p>

        {isQuestionSubmited && isCorrect && <p>Voce acertou</p> }
        {isQuestionSubmited && !isCorrect && <p>Voce errou</p> }

      </Widget.Content>
    </Widget>
  );
}
