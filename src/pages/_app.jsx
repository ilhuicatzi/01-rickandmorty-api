import {Kenia} from '@next/font/google'
import '@/styles/globals.css'

const kenia = Kenia({ weight: '400', subsets: ['latin'] })
export default function App({ Component, pageProps }) {

  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-kenia: ${kenia.style.fontFamily};
          }
        `}
      </style>
    </div>
  )
}