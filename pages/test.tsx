
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useControls } from 'leva'
import SvgImage from '@/components/Bg/SvgImage'

export default function Card() {
  const cardRef = useRef<any>(null)
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  })

  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], config }), [config])

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    })

  const handleMouseMove = (e:any) => {
    const rect = cardRef.current.getBoundingClientRect()
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    })
  }

  return (
    <div className="card-main" ref={cardRef}>
      <animated.div
        className="card"
        style={{ transform: xys.to(trans) }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <SvgImage/>
      </animated.div>
    </div>
  )
}

const calc = (x:any, y:any, rect:any) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
]

const trans = (x:any, y:any, s:any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`