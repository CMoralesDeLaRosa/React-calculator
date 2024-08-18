import './App.css'
import Display from './components/Display/Display'
import Timer from './components/Timer/Timer'
import { useDate } from './customHook/useDate'

const App = () => {
  const date = useDate()

  return (
    <div id='div-app' className='flex-container'>
      <Timer date={date} />
      <Display />
    </div>
  )
}

export default App
