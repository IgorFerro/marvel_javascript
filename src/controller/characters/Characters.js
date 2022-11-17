const request = require('supertest')
const { expect } = require('chai')
const url = require('../../../urls')
const sessionVariables = require('../characters/sessionVariables.js')



module.exports ={

 searchCharactersById : async function (id){
       await request(url.MARVEL_URL).get(`/characters/${id}?apikey=d6fa171a71b818ffd0455d1c59b8c554&ts=1668507926&hash=0605d67484f892bc6f57b83297be12f5`)
        .then((res)=>{
         sessionVariables.statusCode=res.body.code
         sessionVariables.nameOne = res.body.data.results[0].name
         sessionVariables.nameTwo = res.body.data.results[0].name
         sessionVariables.nameThree = res.body.data.results[0].name
        })
    },

    searchNonExistentCharactersById : async function (id){
        await request(url.MARVEL_URL).get(`/characters/9?apikey=d6fa171a71b818ffd0455d1c59b8c554&ts=1668507926&hash=0605d67484f892bc6f57b83297be12f5`)
         .then((res)=>{
          sessionVariables.statusCode=res.body.code
          sessionVariables.statusCode = res.body.code
          sessionVariables.statusMessage = res.body.status
         })
     }
 

}