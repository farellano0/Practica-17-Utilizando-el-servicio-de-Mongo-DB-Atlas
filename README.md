# Practica 17: Utilizando el servicio de Mongo DB Atlas
Sigue los pasos que se indican para utilizar el servicio de Mongo DB Atlas. Como evidencia, deberás empujar un pequeño código en Node JS que utilice el paquete "mongoose" para conectarse de forma exitosa a una base de datos que hayas creado con el servicio de "MongoDB Atlas"

[![Alt text](https://img.youtube.com/vi/Imwk0HtEuGY/0.jpg)](https://www.youtube.com/watch?v=Imwk0HtEuGY)

**Utilizar el siguiente código:**

*const mongoose = require('mongoose');*

*mongoose.connect(*

*`tuCadenaDeConexion`,*

*{*

*useNewUrlParser: true,*

*useUnifiedTopology: true*

*}*

*);*

*const db = mongoose.connection;*

*db.on("error", console.error.bind(console, "connection error: "));*

*db.once("open", function () {*

*console.log("Connected successfully");*

*});*
