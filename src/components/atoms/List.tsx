export interface ListProp {
  children: React.ReactNode
  className?: string
}

const List = (prop: ListProp): JSX.Element => <li {...prop}>{prop.children}</li>

export default List
