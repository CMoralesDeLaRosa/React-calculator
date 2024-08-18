export const initialState = {
  firstInputValue: null,
  operation: null,
  lastResult: null,
  resultsList: []
}

export function calculatorReducer(state, action) {
  switch (action.type) {
    case 'SET_FIRST_INPUT':
      return {
        ...state,
        firstInputValue:
          state.firstInputValue === null
            ? action.payload
            : state.firstInputValue
      }
    case 'SET_OPERATION':
      return {
        ...state,
        operation: action.payload
      }
    case 'CALCULATE_RESULT':
      let result = action.payload
      const firstValue = parseFloat(state.firstInputValue)

      switch (state.operation) {
        case '+':
          result = firstValue + result
          break
        case '-':
          result = firstValue - result
          break
        case '*':
          result = firstValue * result
          break
        case '/':
          result = firstValue / result
          break
        default:
          break
      }

      return {
        ...state,
        lastResult: result,
        resultsList: [...state.resultsList, result],
        firstInputValue: null,
        operation: null
      }
    default:
      return state
  }
}
