const searchFiveStories = require('../../src/controller/stories/Stories.js')
const sessionVariables = require('../../src/controller/stories/sessionVariables.js');

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/stories.feature');

defineFeature(feature, (test) => {
  test('Search at least five stories', ({ given, when, then }) => {
        given('the search stories begins', async () => {
             await searchFiveStories.searchFiveStories();
         });
        
   
         when(/^the search returns (.*)$/, async (code) => {
            expect(sessionVariables.statusCode).toBe(200)
            
        });

        then('returns five records', () => {
          expect(sessionVariables.limit).toBe(5)

        });

        then('returns records titles', () => {
          console.log("Title One: ",sessionVariables.titleOne)
          console.log("Title Two: ",sessionVariables.titleTwo)
          console.log("Title Three: ",sessionVariables.titleThree)
          console.log("Title Four: ",sessionVariables.titleFour)
          console.log("Title Five: ",sessionVariables.titleFive)
        });
    });
  });