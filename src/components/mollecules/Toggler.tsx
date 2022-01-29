import useTheme from '@/hooks/useTheme'

import clsx from 'clsx'

const Toggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='relative self-end'>
      <input
        checked={theme === 'dark'}
        onChange={toggleTheme}
        type='checkbox'
        className={clsx(
          'key-visible w-12 md:w-14 h-6',
          'peer appearance-none cursor-pointer border',
          'border-neutral-500 rounded-full checked:border-violet-500'
        )}
      />
      <span
        className={clsx(
          'peer-checked:left-[1.6rem] md:peer-checked:left-[2.15rem] transition-all duration-200',
          'pointer-events-none w-5 h-5 block absolute top-0.5 left-0.5',
          'rounded-full bg-neutral-500 peer-checked:bg-gradient-to-r peer-checked:from-violet-500 peer-checked:to-rose-500'
        )}
      />
    </div>
  )
}

export default Toggler
