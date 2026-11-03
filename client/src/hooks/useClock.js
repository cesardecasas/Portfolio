import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

const formatTime = (date) => `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`

const useClock = () => {
    const [time, setTime] = useState(() => formatTime(new Date()))

    useEffect(() => {
        const id = setInterval(() => setTime(formatTime(new Date())), 1000)
        return () => clearInterval(id)
    }, [])

    return time
}

export default useClock
