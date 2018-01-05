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
                                                        <td>Best Match</td>
                                                        <td>Buyer</td>
                                                        <td>Maker</td>
                                                        <td>Price</td>
                                                        <td>Quantity</td>
                                                        <td>Commission (1% Fee)</td>
                                                        {/* <td>Time</td> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        trades.map((q, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{q.isBestMatch.toString()}</td>
                                                                    <td>{q.isBuyer.toString()}</td>
                                                                    <td>{q.isMaker.toString()}</td>
                                                                    <td>{q.price}</td>
                                                                    <td>{q.qty}</td>
                                                                    <td>{q.commission}</td>
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