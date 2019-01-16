import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../action/PageAction'

//Умный компонент
class App extends Component {
  render() {
    const { user, page, getPhotosAction } = this.props
    return (
      <div className="App">
        <User name={user.name} />

        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
        />
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

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
})

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
