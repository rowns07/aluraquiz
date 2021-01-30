import React from 'react';
import LoadingWidget from '../components/Loading';
import QuestionWidget from '../components/QuestionWidget';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import ResultWidget from '../components/Results';
import db from '../db.json';

// function QuestionWidget({
//   question,
//   questionIndex,
//   totalQuestions,
//   onSubmit,
//   addResult,
// }) {
//   const [selectAlternative, setSelectAlternative] = React.useState(undefined);
//   const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
//   const questionId = `question_${questionIndex}`;
//   const isCorrect = selectAlternative === question.answer;
//   const hasAlternativeSelected = selectAlternative !== undefined;

//   return (
//     <Widget>
//       <Widget.Header>
//         <h3>
//           {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
//         </h3>
//       </Widget.Header>

//       <img
//         alt="Descrição"
//         style={{
//           width: '100%',
//           height: '150px',
//           objectFit: 'cover',
//         }}
//         src={question.image}
//       />

//       <Widget.Content>
//         <h1>
//           {question.title}
//         </h1>
//         <p>
//           {question.description}
//         </p>

//         <form
//           onSubmit={(infosDoEvento) => {
//             infosDoEvento.preventDefault();
//             setIsQuestionSubmited(true);
//             setTimeout(() => {
//               addResult(isCorrect);
//               onSubmit();
//               setIsQuestionSubmited(false);
//               setSelectAlternative(undefined);
//             }, 3 * 1000);
//           }}
//         >
//           {question.alternatives.map((alternative, alternativeIndex) => {
//             const alternativeId = `alternative__${alternativeIndex}`;
//             return (
//               <Widget.Topic
//                 as="label"
//                 key={alternativeId}
//                 htmlFor={alternativeId}
//               >
//                 <input
//                   // style={{ display: 'none' }}
//                   id={alternativeId}
//                   name={questionId}
//                   onChange={() => setSelectAlternative(alternativeIndex)}
//                   type="radio"
//                 />
//                 {alternative}
//               </Widget.Topic>
//             );
//           })}
//           <Button type="submit" disabled={!hasAlternativeSelected}>
//             Confirmar
//           </Button>
//           <p>
//             SelectedAlternative:
//             {`${selectAlternative}`}
//           </p>
//           {isQuestionSubmited && isCorrect && <p>Voce acertou</p>}
//           {isQuestionSubmited && !isCorrect && <p>Voce errou</p>}
//         </form>

//       </Widget.Content>
//     </Widget>
//   );
// }

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

      </QuizContainer>
    </QuizBackground>
  );
}
