const typeDefs = /* GraphQL */ `
  type Person {
    id: Int
    name: String
    pets: [Pet]
  }
  type Pet {
    id: Int
    name: String
    type: Animal
    owner: Person
  }
  type Query {
    getPeople: [Person]
    _blank: Int
  }

  type Mutation {
    _blank: Int
  }

  enum Animal {
    CAT
    DOG
  }
`

module.exports = {
  typeDefs
}
