import { useState, useEffect } from 'react'

function useMouseCoord() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      })
    }
    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  return coords
}

function Hooks() {
  const { x, y } = useMouseCoord()

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: y - 20,
          left: x + 10,
          height: '20px',
        }}
      >
        Seu mouse
      </div>
      <p>Hook que escuta a posição do mouse</p>
      <p>
        Mouse em (x,y): ({x},{y})
      </p>
    </div>
  )
}

export default Hooks
