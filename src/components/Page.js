import React from 'react'
import PropTypes from 'prop-types'

//Глупый компонент который нечего не знает о Redux
//Читается из props
export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  render() {
    const { year, photos, isFetching } = this.props
    return (
      <div>
        <button onClick={this.onBtnClick}>2018</button>
        <button onClick={this.onBtnClick}>2017</button>
        <h3>{year} год</h3>
        {/* добавили отрисовку по условию */}
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired, // добавили новое свойство в propTypes
  // добавили новое свойство - isFetching, причем в propTypes нет boolean, есть bool
  isFetching: PropTypes.bool.isRequired,
}
