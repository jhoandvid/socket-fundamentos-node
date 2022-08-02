const socketController= (socket) => {

    //console.log('cliente conectado', socket.id);

    console.log('Cliente conectado', socket.id)

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado', socket.id);
    })

    //Escucha cuando el cliente emite ->socket es del cliente, io->hace referencia al servidor
    socket.on('enviar-mensaje',(payload, callback)=>{  
        //Se recibe el mensaje desde el cliente
        //console.log(payload)
        const id=123456666;
        callback(id);
    //servidor de socket envia mensaje a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload)
    })





}


module.exports={
    socketController
}