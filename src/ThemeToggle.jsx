import { useGlobalContext } from './context'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeToggle() {
  const { isThemeDark, toggleDarkTheme } = useGlobalContext()
  return (
    // <div className={isThemeDark ? 'darkTheme' : 'lightTheme'}>
    //   <button type="button" onClick={toggleDarkTheme}>
    //     Click
    //   </button>
    //
    // </div>
    <section className="toggle-container">
      <button type="button" onClick={toggleDarkTheme} className="dark-toggle">
        {isThemeDark ? (
          <MdDarkMode className="toggle-icon" style={{ color: 'white' }} />
        ) : (
          <MdLightMode className="toggle-icon" />
        )}
      </button>
    </section>
  )
}
