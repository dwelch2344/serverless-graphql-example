const pets = [
  { id: 1, name: 'Giacomo', type: 'DOG', ownerId: 1 },
  { id: 2, name: 'Tidus', type: 'DOG', ownerId: 2 }
]

const people = [
  { id: 1, name: 'Dave sucks' },
  { id: 2, name: 'Seth rocks' },
  { id: 3, name: 'Kaleb meh' }
]

// people.forEach(p => (p.pets = pets.filter(e => e.ownerId == p.id)))

const Person = {
  pets: async (root, args, context) => {
    if (!root) {
      return []
    }
    const result = pets.filter(e => e.ownerId == root.id)
    console.log('Find me pets', {
      root,
      args,
      context,
      result
    })
    return result
  }
}

const Query = {
  getPeople: async () => {
    return people
  },
  _blank: () => Promise.resolve(1)
}

const Mutation = {
  _blank: () => Promise.resolve(1)
}

const resolvers = {
  Person,
  Query,
  Mutation
}

module.exports = {
  resolvers
}
