import { Link, NavLink } from 'react-router-dom'

export type MyLinkProps = {
  href: string
  children: React.ReactNode
  as?: 'navlink' | 'link' | 'newtab'
  className?: string | ((prop: { isActive: boolean }) => string)
  onClick?: () => void
}

const MyLink = ({ children, href, as: asof = 'link', ...props }: MyLinkProps): JSX.Element => {
  const navLink = asof === 'navlink'
  const onlyLink = asof === 'link'

  if (navLink) {
    return (
      <NavLink {...props} to={href}>
        {children}
      </NavLink>
    )
  }

  if (onlyLink) {
    return (
      <Link className={props.className as string} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={props.className as string} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  )
}

export default MyLink
