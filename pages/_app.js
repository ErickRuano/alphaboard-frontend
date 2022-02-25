import { ThemeProvider } from 'next-themes'
import Session from './_session';
import { useRouter } from 'next/router';

import '../styles/globals.css'

const publicPages = ['/'];


function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ThemeProvider defaultTheme="fantasy">
      {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
              <Session>
                  <Component {...pageProps} />
              </Session>
          </>
        )}
    </ThemeProvider>
  )
}

export default MyApp
