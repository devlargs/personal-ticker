import React, { Component } from 'react'

class Trades extends Component {
    constructor() {
        super();

        this.state = {
            symbol: '',
            trades: []
        }
    }

    componentDidMount() {
        socket.on('TRADE:HISTORY:RESPONSE', res => {
            if (res.code == -1121) {
                console.log("err")
            } else {
                this.setState({
                    trades: res.trades
                })
            }
        })
    }

    getTradeHistory() {
        let { symbol } = this.state;
        socket.emit('TRADE:HISTORY', { symbol })
    }

    render() {
        let { trades } = this.state;

        console.log(trades)

        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1> Trade History </h1>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <div class="col-md-6">
                                        <div class="input-group margin">
                                            <input type="text" class="form-control" onChange={(e) => {
                                                this.setState({ symbol: e.target.value })
                                            }} />
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-info btn-flat" onClick={() => {
                                                    this.getTradeHistory()
                                                }}>Get Trade History</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    {
                                        (trades.length) ?
                                            <table class="table table-responsive table-bordered">
                                                <thead>
                                                    <tr>
                                                        {/* <td>Best Match</td> */}
                                                        <td>ACTION</td>
                                                        {/* <td>Maker</td> */}
                                                        <td>Price</td>
                                                        <td>Quantity</td>
                                                        <td>Commission (1% Fee)</td>
                                                        <td>Total</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        trades.map((q, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    {/* <td>{q.isBestMatch.toString()}</td> */}
                                                                    <td>{(q.isBuyer) ? 'BUY' : 'SELL'}</td>
                                                                    {/* <td>{q.isMaker.toString()}</td> */}
                                                                    <td>{q.price}</td>
                                                                    <td>{q.qty.split('.')[0]}</td>
                                                                    <td>{q.commission}</td>
                                                                    <td><b>{(q.price * q.qty).toFixed(7)}</b></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            : 'please enter symbol !'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Trades;