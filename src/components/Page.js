import React from 'react'
import PropTypes from 'prop-types'

//Глупый компонент который нечего не знает о Redux
//Читается из props
export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { year, photos } = this.props
    return (
      <div>
        <button onClick={this.onBtnClick}>2018</button>
        <button onClick={this.onBtnClick}>2017</button>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired, // добавили новое свойство в propTypes
}
