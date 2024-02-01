import '@/styles/globals.css'
import App from 'next/app'
import Link from 'next/link'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className='p-[20px]'>
        <Link href='/' legacyBehavior>
          <a className='p-[20px]'>
            Index
          </a>
        </Link>
        <Link href='/repos' legacyBehavior>
          <a className='p-[20px]'>
            Repos
          </a>
        </Link>
        <Component {...pageProps} />
      </div >
    )
  }
}
