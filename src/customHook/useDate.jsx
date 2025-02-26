import { useState, useEffect } from 'react'

const useDate = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return date
}

export { useDate }
