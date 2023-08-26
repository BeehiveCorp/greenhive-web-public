/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiLogIn, BiMenu, BiX } from 'react-icons/bi'
import {
  useWindowSize,
  useIsFirstRender,
  useWindowScroll,
} from '@uidotdev/usehooks'

import { useTheme } from '@/contexts/ThemeContext'

import { Greenhive } from '../Greenhive'
import { Button } from '../Button'

import './styles.scss'

const Navbar = () => {
  const { palette, theme } = useTheme()
  const pathname = usePathname()
  const windowSize = useWindowSize()
  const windowScroll = useWindowScroll()[0]
  const isFirstRender = useIsFirstRender()
  const navRef = useRef<HTMLDivElement>(null)

  const [isExpanded, setIsExpanded] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  const validateHeader = () => {
    if (!navRef?.current) return

    const windowY = window.scrollY
    const windowH = window.innerHeight
    const scrollThreshold = windowH * 0.8

    const isPastThreshold = windowY > scrollThreshold

    if (isPastThreshold) {
      navRef.current.classList.add('--is-fixed')

      const isScrollingUp = windowY < lastScroll
      navRef.current.classList.toggle('--scrolling-up', isScrollingUp)
    } else {
      navRef.current.classList.remove('--is-fixed', '--scrolling-up')
    }

    setLastScroll(windowY)
  }

  useEffect(() => {
    if (windowSize?.width && windowSize.width > 869) {
      setIsExpanded(false)
    }
  }, [windowSize])

  useEffect(() => {
    validateHeader()
  }, [windowScroll])

  useEffect(() => {
    if (!isFirstRender) {
      handleExpandToggle()
    }
  }, [pathname])

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="outer-container">
          <div className="navbar">
            <div className={`navbar__logo ${isExpanded && '--expanded'}`}>
              <Link href="/">
                <Greenhive.Horizontal
                  color={
                    theme === 'light' ? palette.primary : palette.secondary
                  }
                />
              </Link>
            </div>

            <div className={`navbar__routes ${isExpanded && '--expanded'}`}>
              <div className="navbar__routes__header">
                <div style={{ marginLeft: '-6px' }}>
                  <Link href="/">
                    <Greenhive.Icon color={palette.title} size={40} />
                  </Link>
                </div>

                <Button
                  variant="outline"
                  LeftIcon={() => (
                    <BiX
                      size={32}
                      color={
                        theme === 'light' ? palette.primary : palette.secondary
                      }
                    />
                  )}
                  style={{
                    width: '44px',
                    padding: 0,
                    marginRight: '-2px',
                    marginBottom: '4px',
                  }}
                  onClick={handleExpandToggle}
                />
              </div>

              <Link
                className={`navbar__routes__route ${
                  pathname === '/' && '--active'
                }`}
                href="/"
              >
                Início
              </Link>

              <Link
                className={`navbar__routes__route ${
                  pathname === '/corporate' && '--active'
                }`}
                href="/corporate"
              >
                Corporativo
              </Link>

              <Link
                className={`navbar__routes__route ${
                  pathname === '/blog' && '--active'
                }`}
                href="/blog"
              >
                Blog
              </Link>

              <div className="navbar__routes__corporate-button">
                <Button
                  variant="ghost"
                  secondary
                  text="LOGIN CORPORATIVO"
                  onClick={() => alert('not implemented yet')}
                  RightIcon={() => <BiLogIn size={24} />}
                  style={{ padding: 0 }}
                />
              </div>

              <div className="navbar__routes__splash"></div>
            </div>

            <div className="navbar__corporate-button">
              <Button
                variant="ghost"
                secondary
                text="LOGIN CORPORATIVO"
                onClick={() => alert('not implemented yet')}
                RightIcon={() => <BiLogIn size={24} />}
                style={{ padding: 0 }}
              />
            </div>

            <div className="navbar__toggle-menu">
              <Button
                variant="outline"
                LeftIcon={() => (
                  <BiMenu
                    size={24}
                    color={
                      theme === 'light' ? palette.primary : palette.secondary
                    }
                  />
                )}
                style={{ width: '44px', padding: 0 }}
                onClick={handleExpandToggle}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className={`blur ${isExpanded && '--expanded'}`}></div>
    </>
  )
}

export { Navbar }
