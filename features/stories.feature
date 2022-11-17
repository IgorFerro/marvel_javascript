Feature: Search Stories
  Search at least five Stories

  Scenario Outline: Search at least five stories
    Given the search stories begins 
    When the search returns <Code>
    Then returns five records
    Then returns records titles

     Examples:

        | Code|
        | 200 |
        
      
