const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routesUsers = '/api/user'
        //middlewares
        this.middlewares();
        //routes of my app
        this.routes();
    }
    middlewares(){
        // cors
        this.app.use( cors() );
        // la lectura y parseo del frontend
        this.app.use( express.json )
        // con el metodo use, decimos que declaramos un middleware
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.routesUsers, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en: ", this.port);
        });
    }
}

module.exports = Server;