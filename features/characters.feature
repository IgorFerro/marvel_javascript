Feature: Search Characters By Id
  Search at least three Characters by Id

  Scenario Outline: Search character by <Id>
      Given the search character by <Id> begins 
      When the search returns <Code> 
      Then the character name must be <Name>

      Examples:

      |      Id          | Name           | Code |
      |    1011198       | Agents of Atlas| 200  |
      |    1011297       | Agent Brand    | 200  | 
      |    1011456       | Balder         | 200  |


    Scenario: Search non existent character 
      Given the search non existent character begins 
      When the search returns <Code> 
      Then the error message must be <Message>








