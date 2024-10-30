interface IProps {
  index: number
  numQuestions: number
  points?: number
  maxPossiblePoints?: number
  answer?: number | null
}

function Progress({ index, numQuestions, points = 0, maxPossiblePoints = 0, answer = null }: IProps) {
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      >
      </progress>
      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  );
}

export default Progress;
