'use client'

import Link from 'next/link'

import { Greenhive } from '@/components/Greenhive'

import { useTheme } from '@/contexts/ThemeContext'

import './styles.scss'

const Footer = () => {
  const { palette } = useTheme()

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__content__logo">
          <Greenhive.Vertical width={148} color={palette.title} />
        </div>

        <hr className="footer__content__separator" />

        <div className="footer__content__util">
          <div className="footer__content__util__links">
            <div className="col">
              <p className="title">Geral</p>
              <ul>
                <li className="description">
                  <Link href="">Termos</Link>
                </li>
                <li className="description">
                  <Link href="">Privacidade</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <p className="title">Links</p>
              <ul>
                <li className="description">
                  <Link href="">Início</Link>
                </li>
                <li className="description">
                  <Link href="">App</Link>
                </li>
                <li className="description">
                  <Link href="">Corporativo</Link>
                </li>
                <li className="description">
                  <Link href="">Blog</Link>
                </li>
                <li className="description">
                  <Link href="">Faq</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <p className="title">For devs</p>
              <ul>
                <li className="description">
                  <Link href="">API</Link>
                </li>
                <li className="description">
                  <Link href="">Docs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__content__util__about">
            <p className="title">Quem é Ambipar?</p>

            <p className="description">
              A Ambipar atua em diversos segmentos para oferecer serviços e
              produtos completos voltados à gestão ambiental. Em franca expansão
              mundial, a Ambipar respeita as regras de compliance e
              responsabilidade socioambiental, prezando a ética e o pronto
              atendimento às demandas de seus clientes.
            </p>

            <br />

            <p className="description">
              Oferecemos serviços inteligentes e expertise aos nossos clientes,
              para juntos superar os desafios da sustentabilidade. Afinal, para
              nós, sustentabilidade não é apenas um discurso, é nosso dia a dia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
