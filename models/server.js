const express=require('express');
const cors=require('cors');
const { socketController } = require('../sockets/controller');

class Server{

    constructor(){

        this.app=express();
        this.port=process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.path={};

        //middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.router();

        //configuracion de Sockets
        this.sockets();


    }


    middlewares(){
    
        //Cors
        this.app.use(cors());

        //Directorio public
        this.app.use(express.static('public'));

    }


    router(){

/*         this.app.use(this.app.use(this.path.auth, require('../router/auth'))) */

    }

    sockets(){
        this.io.on("connection", socketController)
    }


    listen(){
        this.server.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }



    
}


module.exports=Server;