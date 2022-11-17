const searchCharacters = require('../../src/controller/characters/Characters.js')
const sessionVariables = require('../../src/controller/characters/sessionVariables.js');

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/characters.feature');

defineFeature(feature, (test) => {
  test('Search character by <Id>', ({ given, when, then }) => {
    given(/^the search character by (.*) begins$/, async (Id) => {
      await searchCharacters.searchCharactersById(Id);
    });


  when(/^the search returns (.*)$/, (code) => {
    expect(sessionVariables.statusCode).toBe(200)
  });

  then(/^the character name must be (.*)$/, (name) => {
    expect(sessionVariables.nameOne).toEqual(name)
    expect(sessionVariables.nameTwo).toEqual(name)
    expect(sessionVariables.nameThree).toEqual(name)
    console.log(name)
  });
});
  

test('Search non existent character', ({ given, when, then }) => {                                                                              
  given('the search non existent character begins', async () => {                                                                                   
    await searchCharacters.searchNonExistentCharactersById()                                                                                                                                  
  });                                                                                                                                         

  when(/^the search returns (.*)$/, (arg0) => {
    expect(sessionVariables.statusCode).toEqual(404)
  });

  then(/^the error message must be (.*)$/, (arg0) => {
    expect(sessionVariables.statusMessage).toEqual("We couldn't find that character")
    console.log(sessionVariables.statusCode)
    console.log(sessionVariables.statusMessage)
  });
});

});