import Link from 'next/link'

import Header from '../components/header'

export default () => {
  return (
    <div>
      <Header />
      Index Page
      <Link href='/auth'>
        <a>Auth</a>
      </Link>
    </div>
  )
}