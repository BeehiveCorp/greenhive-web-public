'use client'

import { ThemeSwitcher } from '../ThemeSwitcher'

import './styles.scss'

const OuterContent = () => {
  return (
    <div className="outer-container">
      <div className="left-content">
        <ThemeSwitcher />
      </div>

      <div className="right-content">
        <p className="right-content__social">
          <span>siga-nos</span>
          <span>•</span>
          <a href="http://" target="_blank" rel="noreferrer">
            ig /
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            tw /
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            yt /
          </a>
        </p>
      </div>
    </div>
  )
}

export { OuterContent }
