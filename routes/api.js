module.exports = function(io){
    io.sockets.on("connection", function(socket){
        console.log("connected")

        socket.on("Test", function(e){
            console.log(e)
        })

        socket.on('disconnect', function(){
            console.log("disconnected")
        })
    })
}