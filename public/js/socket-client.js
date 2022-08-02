//Referencia del HTML;


const lblOnline = document.querySelector('#lblOnline');
const lblOffline=document.querySelector('#lblOffline');

const btnEnviar=document.querySelector('#btnEnviar');
const txtMensaje=document.querySelector('#txtMensaje');

const socket=io();

//on es para escuchar los eventos
socket.on('connect', ()=>{
/*     console.log('conectado') */
    lblOffline.style.display='none';
    lblOnline.style.display='';
})

socket.on('disconnect',()=>{
/*     console.log('Desconectado del servidor') */
    lblOnline.style.display='none';
    lblOffline.style.display='';
})

//los clientes escucha lo que se envia en le servidor
socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})

btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMensaje.value;

    const payload={
        mensaje,
        id:'abcdt',
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje', payload,(id)=>{
            console.log('Desde el server', id)
    })
})

