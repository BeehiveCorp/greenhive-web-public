import { kyivTypeSans } from '@/app/fonts'

import { PageHeaderProps } from './types'

import './styles.scss'

const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle,
  title,
  backgroundText,
  position,
  subtitleStyle,
  titleStyle,
  backgroundTextStyle,
}) => {
  return (
    <div className="page-header">
      {!!subtitle && (
        <span
          className={`page-header__subtitle ${position}`}
          style={subtitleStyle}
        >
          {subtitle}
        </span>
      )}

      {!!title && (
        <h3
          className={`page-header__title ${position}`}
          style={{
            ...kyivTypeSans.style,
            ...titleStyle,
            marginTop: subtitle ? 4 : 0,
          }}
        >
          {title}
        </h3>
      )}

      {!!backgroundText && (
        <span
          className={`page-header__background-text ${position}`}
          style={{ ...kyivTypeSans.style, ...backgroundTextStyle }}
        >
          {backgroundText}
        </span>
      )}
    </div>
  )
}

export { PageHeader }
