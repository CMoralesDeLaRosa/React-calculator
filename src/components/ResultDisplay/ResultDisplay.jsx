import './ResultDisplay.css'
import { memo } from 'react'

const ResultsDisplay = memo(({ lastResult, resultsList }) => {
  const sortedResultsList = [...resultsList].sort((a, b) => a - b)

  return (
    <>
      <div className='last-result'>
        <h4>Last Result: {lastResult !== null ? lastResult : ' '}</h4>
      </div>
      <ul className='results-list flex-container'>
        Results List:
        {sortedResultsList.length > 0
          ? sortedResultsList.map((result, index) => (
              <li key={index}>{result}</li>
            ))
          : ''}
      </ul>
    </>
  )
})

export default ResultsDisplay
