import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin'] })

export const kyivTypeSans = localFont({
  src: [
    {
      path: '../assets/fonts/KyivType-Sans-Medium-.otf',
      weight: '550',
    },
    {
      path: '../assets/fonts/KyivType-Sans-Medium3.otf',
      weight: '500',
    },
  ],
})
