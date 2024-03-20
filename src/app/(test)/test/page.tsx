
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className='text-center space-x-5 flex flex-wrap items-center h-40'>
        <div>
            <div className="inline-block bg-red-500 text-5xl">Helo1</div>
        </div>
        <div>
            <div className="inline-block bg-green-500 text-xl">Helo2</div>
        </div>
        <div>
            <div className="inline-block bg-blue-500 text-xs">Helo3</div>
        </div>
      </div>
    </div>
  );
}

export default Page