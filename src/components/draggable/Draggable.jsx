// Source: https://stackoverflow.com/a/75269362
import { useState, useEffect } from 'react'

const Draggable = ({ children, dragArea }) => {
  const [pressed, setPressed] = useState(false)
  const [pos, setPos] = useState({x: 0, y: 0})
  const [initMousePos, setInitMousePos] = useState({})

  const onMouseDown = (e) => {
    setInitMousePos({ x: e.clientX, y: e.clientY })
    setPressed(true)
    e.preventDefault()
  }

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({
        x: getBoundedValue(pos.x + e.clientX - initMousePos.x, -1 * dragArea.width, 0),
        y: getBoundedValue(pos.y + e.clientY - initMousePos.y, -1 * dragArea.height, 0)
      })
      e.preventDefault()
    }
    if (pressed) window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [pressed, initMousePos])

  useEffect(() => {
    const onMouseUp = () => setPressed(false)
    window.addEventListener("mouseup", onMouseUp)
    return () => window.removeEventListener("mouseup", onMouseUp)
  }, [])
  
  return (
    <div
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  )
}

const getBoundedValue = (val, min, max) => {
  if (val < min) return min
  if (val > max) return max
  return val
}

export default Draggable
