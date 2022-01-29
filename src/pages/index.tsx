import Toggler from '@/components/mollecules/Toggler'
import RelatedList from '@/components/organism/RelatedList'

import illustration from '@/assets/img/illustration.svg'

import clsx from 'clsx'

const IndexPage = (): JSX.Element => {
  return (
    <div className={clsx('flex justify-center flex-col', 'min-h-screen')}>
      <header className={clsx('flex flex-col-reverse md:flex-row items-center justify-between')}>
        <div className='w-full mt-4 mb-8 md:mt-0'>
          <h1 className='text-4xl md:text-6xl font-black'>
            Kickstart your React App with{' '}
            <span className='dark:bg-gradient-to-r dark:text-transparent dark:bg-clip-text dark:from-rose-500 dark:to-violet-500'>
              Stravital
            </span>
          </h1>
        </div>
        <figure className='flex items-center justify-center w-full'>
          <img className='w-60 md:w-96 aspect-auto' src={illustration} alt='illustration' />
        </figure>
      </header>

      <section className={clsx('flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between', 'w-full')}>
        <div className='w-full md:w-auto'>
          <h2>Related Link</h2>
          <RelatedList />
        </div>
        <Toggler />
      </section>
    </div>
  )
}

export default IndexPage
