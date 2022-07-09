import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const DoggosLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.doggos()} className="rw-link">
            Doggos
          </Link>
        </h1>
        <Link to={routes.newDoggo()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Doggo
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DoggosLayout
