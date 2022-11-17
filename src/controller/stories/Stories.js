const request = require('supertest')
const { expect } = require('chai')
const sessionVariables = require('../stories/sessionVariables.js')
module.exports ={

    searchFiveStories : async function (){
       await request('https://gateway.marvel.com:443/v1/public').get('/stories?limit=5&offset=100&apikey=d6fa171a71b818ffd0455d1c59b8c554&ts=1668507926&hash=0605d67484f892bc6f57b83297be12f5')
        .then((res)=>{
        //console.log(res.body)
         sessionVariables.statusCode=res.body.code
         sessionVariables.limit=res.body.data.limit
         sessionVariables.titleOne=res.body.data.results[0].title
         sessionVariables.titleTwo=res.body.data.results[1].title
         sessionVariables.titleThree=res.body.data.results[2].title
         sessionVariables.titleFour=res.body.data.results[3].title
         sessionVariables.titleFive=res.body.data.results[4].title
         console.log(sessionVariables.statusCode)
        })
       

    }

}