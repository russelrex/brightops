import { useEffect, useState } from 'react'

export function useClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())} EST`
}
