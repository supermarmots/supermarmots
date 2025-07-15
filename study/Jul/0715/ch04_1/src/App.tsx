import {useClock} from './hooks'
import Clock from './pages/Clock'
// 커스텀 훅
export default function App() {
  const today = useClock()
  return <Clock today={today} />
}

// useEffect, useState을 이용한 훅훅 잽잽 원 투
// import Clock from './pages/Clock'
// import {useEffect, useState} from 'react'

// export default function App() {
//   const [today, setToday] = useState(new Date())
//   useEffect(() => {
//     const duration = 1000
//     const id = setInterval(() => {
//       setToday(new Date())
//     }, duration)
//     return () => clearInterval(id)
//   }, [])
//   return <Clock today={today} />
// }
