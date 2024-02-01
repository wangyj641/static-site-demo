import axios from "axios"
import Link from 'next/link'

function Repos({ list }: { list: any }) {
  console.log('-------------- Repos ----------------')
  console.log(list)
  return (
    <div>
      {
        list.map((item: any) => <p key={item.id}>{item.owner.login + '/' + item.name}</p>)
      }
      <div>
        <Link href='/repos' legacyBehavior>
          <a className='p-[20px]'>
            1
          </a>
        </Link>
        <Link href='/repos?page=2' as='/repos/2' legacyBehavior>
          <a className='p-[20px]'>
            2
          </a>
        </Link>
      </div>
    </div>
  )
}

Repos.getInitialProps = async ({ query: { page = 1 } }) => {
  console.log('-------------- getStaticProps ----------------')
  const res = await axios.get(`https://api.github.com/search/repositories?q=react&page=${page}`)
  return {
    list: res.data.items
  }
}

export default Repos