import { Header } from 'ui'
import '../style/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {



  return(
    <Header>
      <Component {...pageProps} />
    </Header>
  ) 
}