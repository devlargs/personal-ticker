var binance = require('node-binance-api');
var key = process.env.BKey;
var secret = process.env.BSecret;

binance.options({
    'APIKEY': key,
    'APISECRET': secret
});

module.exports = function (io) {
    io.sockets.on("connection", function (socket) {
        
        socket.on('TRADE:HISTORY', res => {
            binance.trades(res.symbol, (trades, symbol) => {
                socket.emit('TRADE:HISTORY:RESPONSE', {
                    trades, symbol
                })
            });
        });

        socket.on('disconnect', function () {
            console.log("disconnected")
        })
    })
}