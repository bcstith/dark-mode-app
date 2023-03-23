import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState();

  const handleClick = () => {
    const newColor = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newColor);
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={handleClick}>Toggle</button>
        </div>
      </nav>

      <section className="articles">
      {data.map((item) => {
        // const {} = item;
        return (
          <Article {...item} key={item.id} />
        )
      })}
      </section>
    </main>
  )
}

export default App
