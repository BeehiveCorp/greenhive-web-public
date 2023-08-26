/* eslint-disable @next/next/no-img-element */

'use client'

import { BiLogoAndroid, BiLogoApple } from 'react-icons/bi'

import { Button } from '@/components/Button'
import { kyivTypeSans } from '@/app/fonts'

import './styles.scss'

const CallToAction = () => {
  return (
    <div className="container call-to-action">
      <div className="call-to-action__content">
        <h5 className="call-to-action__title" style={kyivTypeSans.style}>
          Baixe o app agora!
        </h5>

        <p className="call-to-action__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          libero vitae eros.
        </p>

        <div className="call-to-action__buttons">
          <Button
            text="ANDROID"
            variant="outline"
            LeftIcon={() => <BiLogoAndroid size={24} />}
            style={{ width: 'fit-content' }}
          />

          <Button
            text="IOS"
            variant="outline"
            LeftIcon={() => <BiLogoApple size={24} />}
            style={{ width: 'fit-content' }}
          />
        </div>
      </div>

      <div className="call-to-action__mockup">
        <img
          src="/app-mockup.png"
          alt="Imagem da tela inicial do aplicativo Greenhive"
        />
      </div>
    </div>
  )
}

export { CallToAction }
