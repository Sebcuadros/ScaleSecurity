import type { AppProps } from 'next/app'
import 'styles/globals.css'
import { Noto_Serif_Lao } from 'next/font/google'

const noto = Noto_Serif_Lao({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={noto.className}>
  <Component {...pageProps} />
  </main>
}
