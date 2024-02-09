// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawMoney = money => {
    this.setState(prevState => ({
      balance: prevState.balance - money,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <span className="logo-name">S</span>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="your-balance-container">
            <p className="bal-para">Your Balance</p>
            <div className="balance">
              <p className="remaining-balance">{balance}</p>
              <p className="bal-para">In Rupees</p>
            </div>
          </div>
          <p className="remaining-balance">Withdraw</p>
          <p className="bal-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                withdrawFunc={this.withdrawMoney}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
