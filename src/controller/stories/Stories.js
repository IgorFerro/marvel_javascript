const request = require('supertest')
const { expect } = require('chai')
const sessionVariables = require('../stories/sessionVariables.js')
const variables = require('../../../variables')
module.exports ={

    searchFiveStories : async function (){
       await request(variables.MARVEL_URL).get(`/stories?limit=5&offset=100&apikey=${variables.apikey}&ts=${variables.ts}&hash=${variables.hash}`)
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