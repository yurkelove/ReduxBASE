import React from 'react'
import PropTypes from 'prop-types'

//Глупый компонент который нечего не знает о Redux
//Читается из props
export class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <p>Привет, {name}!</p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
