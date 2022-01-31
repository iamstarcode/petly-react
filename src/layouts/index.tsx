export type LayoutMainProps = {
  children: React.ReactNode
}

const LayoutMain = ({ children }: LayoutMainProps): JSX.Element => {
  return <main >{children}</main>
}

export default LayoutMain
