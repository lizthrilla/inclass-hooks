import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  const tick = () => {
      setTime(new Date())
  }

  useEffect(() => {
      setInterval(() => tick(), 1000)
  })

  return (
      <div>
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
  )
    
}

export default Clock