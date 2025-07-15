import {useState} from 'react'
import {useClock} from './hooks'
import Clock from './pages/Clock'

export default function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  return (
    <div>
      <h2>{'덧셈기'}</h2>
      <div className="flex flex-row items-center">
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(parseInt(e.target.value))}
        />
        <span>{'+'}</span>
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(parseInt(e.target.value))}
        />
      </div>

      <p>{`덧셈결과는 : ${num1} + ${num2} = ${num1 + num2}`}</p>
    </div>
  )
}

// 커스텀 훅 Clock
// export default function App() {
//   const today = useClock()
//   return <Clock today={today} />
// }

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
