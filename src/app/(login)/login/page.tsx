
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <section id='log' className='bg-blue-600'>log</section>
    <section id='reg' className='bg-red-600 mt-[2000px]'>register</section>
  </div>
}

export default Page;