import React, { useCallback } from 'react'
import Buttons from '../Buttons/Buttons'

const CalculatorActions = ({ inputRef, state, dispatch }) => {
  const handleOpButtonClick = useCallback(
    (op) => {
      if (inputRef.current) {
        const inputValue = parseFloat(inputRef.current.value)
        if (!isNaN(inputValue)) {
          dispatch({ type: 'SET_OPERATION', payload: op })
          inputRef.current.value = ''
          inputRef.current.focus()
        }
      }
    },
    [dispatch, inputRef]
  )

  const handleEqualButtonClick = useCallback(() => {
    if (inputRef.current) {
      const inputValue = parseFloat(inputRef.current.value)
      if (!isNaN(inputValue) && state.operation) {
        dispatch({ type: 'CALCULATE_RESULT', payload: inputValue })
        inputRef.current.value = ''
        inputRef.current.focus()
      }
    }
  }, [dispatch, inputRef, state.operation])

  return (
    <Buttons
      onOpButtonClick={handleOpButtonClick}
      onEqualButtonClick={handleEqualButtonClick}
    />
  )
}

export default CalculatorActions
