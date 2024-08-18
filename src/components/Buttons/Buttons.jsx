import './Buttons.css'
const Buttons = ({ onOpButtonClick, onEqualButtonClick }) => {
  return (
    <div className='div-buttons flex-container'>
      <button onClick={() => onOpButtonClick('+')}>+</button>
      <button onClick={() => onOpButtonClick('-')}>-</button>
      <button onClick={() => onOpButtonClick('*')}>*</button>
      <button onClick={() => onOpButtonClick('/')}>/</button>
      <button onClick={() => onOpButtonClick('%')}>%</button>
      <button onClick={onEqualButtonClick}>=</button>
    </div>
  )
}

export default Buttons
