'use client'

import { useEffect, useRef, useState } from 'react'
import { useMouse } from '@uidotdev/usehooks'
import { BiLogoAndroid, BiLogoApple } from 'react-icons/bi'

import { kyivTypeSans } from '@/app/fonts'
import { useTheme } from '@/contexts/ThemeContext'

import { Button } from '../Button'

import './styles.scss'

const targetClasses = ['theme-switcher', 'button', 'buttons']

const Hero = () => {
  const { theme } = useTheme()
  const mouseX = useMouse()[0].x

  const cursorRoundRef = useRef<HTMLDivElement>(null)
  const cursorPointerRef = useRef<HTMLDivElement>(null)

  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const verifyOveredElement = () => {
      if (!cursorPointerRef?.current?.style || !cursorRoundRef?.current?.style)
        return

      const isOverSomeElement = targetClasses.some((className) => {
        const elements = document.querySelectorAll(`.${className}`)
        return Array.from(elements).some((element) => element.matches(':hover'))
      })

      if (isOverSomeElement) {
        cursorPointerRef.current.style.opacity = '0'
        cursorRoundRef.current.style.opacity = '0'
      } else {
        cursorPointerRef.current.style.opacity = '1'
        cursorRoundRef.current.style.opacity = '1'
      }
    }

    if (cursorPointerRef?.current?.style) {
      verifyOveredElement()

      const left = `${mouseX}px`
      const top = `${mouseY - 82}px`

      cursorPointerRef.current.style.left = left
      cursorPointerRef.current.style.top = top

      setTimeout(() => {
        if (cursorRoundRef?.current?.style) {
          cursorRoundRef.current.style.left = left
          cursorRoundRef.current.style.top = top
        }
      }, 100)
    }
  }, [mouseY, mouseX])

  useEffect(() => {
    let clientScrollY = 0
    let totalScrollY = 0

    function updateTotalScrollY() {
      totalScrollY = window.scrollY + clientScrollY
      setMouseY(totalScrollY)
    }

    document.addEventListener('mousemove', (e1) => {
      clientScrollY = e1.clientY
      updateTotalScrollY()
    })

    document.addEventListener('scroll', () => {
      updateTotalScrollY()
    })
  }, [])

  return (
    <section className="container hero">
      <div className="hero__content">
        <h1 className="title" style={kyivTypeSans.style}>
          APRENDA E GANHE COM O MEIO AMBIENTE
        </h1>

        <p className="text">
          Baixe agora! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed auctor justo in.
        </p>

        <div className="buttons">
          <Button
            text="ANDROID"
            variant="outline"
            LeftIcon={() => <BiLogoAndroid size={24} />}
          />

          <Button
            text="IOS"
            variant="outline"
            LeftIcon={() => <BiLogoApple size={24} />}
          />
        </div>
      </div>

      <>
        <div className="hero__gif"></div>
        <div className="hero__horizontal-gradient"></div>
        {theme === 'dark' && <div className="hero__vertical-gradient"></div>}
        <div className="hero__blur"></div>
      </>

      <div ref={cursorRoundRef} className="hero__cursor-round"></div>
      <div ref={cursorPointerRef} className="hero__cursor-pointer"></div>
    </section>
  )
}

export { Hero }
