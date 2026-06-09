// Navbar – hamburgarmeny på mobil
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colors } from '../theme'

const links = [
  { to: '/', label: 'Hem' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/lediga-tjanster', label: 'Lediga tjänster' },
]

function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  function isActive(path) { return location.pathname === path }
  function close() { setOpen(false) }

  return (
    <nav style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>

      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}>

        <Link to="/" onClick={close} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Corelink Group" style={{ height: '52px', display: 'block' }} />
        </Link>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} style={{
                color: isActive(to) ? colors.primary : '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: isActive(to) ? 700 : 500,
                borderBottom: isActive(to) ? `2px solid ${colors.primary}` : '2px solid transparent',
                paddingBottom: '2px',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Öppna meny">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        <div className="wrap" style={{ padding: '8px 16px 16px' }}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} onClick={close} style={{
              display: 'block',
              color: isActive(to) ? colors.primary : '#374151',
              padding: '13px 0',
              borderBottom: `1px solid ${colors.border}`,
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: isActive(to) ? 700 : 400,
            }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default NavBar
