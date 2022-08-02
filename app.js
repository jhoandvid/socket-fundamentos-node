//socket.io: es una implementación de una web socket



require('dotenv').config();

const Server=require('./models/server');


const server=new Server();


server.listen();


