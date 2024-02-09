// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {item, withdrawFunc} = this.props
    const {value} = item

    const onWithdraw = () => {
      withdrawFunc(value)
    }

    return (
      <li>
        <button className="button" type="button" onClick={onWithdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
