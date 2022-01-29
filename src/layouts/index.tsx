export type LayoutMainProps = {
  children: React.ReactNode
}

const LayoutMain = ({ children }: LayoutMainProps): JSX.Element => {
  return <main className='layout'>{children}</main>
}

export default LayoutMain
