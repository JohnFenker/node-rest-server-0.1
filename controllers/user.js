// importamos el response solo para tener las sugerencias en VS CODE.
const { response } = require('express');
const { request } = require('express');



const  getUser = (req = request, res = response ) => {
    const {name = 'Nada', lastName = 'Nada'} = req.query;
    res.json({ 
        msg : 'Hola GET--Controller',
        name,
        lastName
    })
}
const postUser = (req, res) => {
    const {nombre, edad, ciudad } = req.body;
    res.json({ 
        msg : 'Hola POST--Controller',
        nombre,
        edad,
        ciudad
    });
}
const patchUser = (req, res) => {
    res.json({ msg : 'Hola PATCH--Controller' })
}
const deleteUser = (req, res) => {
    res.json({ msg : 'Hola DELETE--Controller' })
}
const putUser = (req = request, res) => {
    const {pk} = req.params;
    res.json({ 
        msg : 'Hola PUT --Controller',
        "ID": pk
    })
}


module.exports = {
    getUser, postUser, patchUser, deleteUser, putUser
}