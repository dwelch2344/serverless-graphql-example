Run this!

```graphql
query Foo {
  getPeople{
    id
    name    
    pets {
      id
      name
    }
  }
}
```