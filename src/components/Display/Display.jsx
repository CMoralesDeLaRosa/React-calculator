import './Display.css'
import React, { useRef, useCallback, useReducer, useEffect, memo } from 'react'
import ResultsDisplay from '../ResultDisplay/ResultDisplay'
import { calculatorReducer, initialState } from '../utils/calculatorReducer'
import CalculatorActions from '../utils/calculatorActions.js'

const Display = memo(() => {
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.target.value.trim()

      if (inputValue !== '') {
        dispatch({ type: 'SET_FIRST_INPUT', payload: inputValue })
      }
    },
    [dispatch]
  )

  return (
    <article className='calculator flex-container'>
      <label>
        <input
          type='number'
          className='input-field'
          onChange={handleChange}
          ref={inputRef}
        />
      </label>
      <CalculatorActions
        inputRef={inputRef}
        state={state}
        dispatch={dispatch}
      />
      <ResultsDisplay
        lastResult={state.lastResult}
        resultsList={state.resultsList}
      />
    </article>
  )
})

export default Display
