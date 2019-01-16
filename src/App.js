import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { user, page } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p>Привет ,{user.name}</p>
        <p>
          {' '}
          У тебя {page.photos.length} фото за {page.year} год
        </p>
      </div>
    )
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user, // Получили из rootReducer (index.js в папке reducer);
    page: store.page,
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)
