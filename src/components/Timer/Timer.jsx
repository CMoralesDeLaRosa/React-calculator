import './Timer.css'

const Timer = ({ date }) => {
  return (
    <article className='timer'>
      <h4>{date.toLocaleTimeString()}</h4>
    </article>
  )
}

export default Timer
