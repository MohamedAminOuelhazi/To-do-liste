import { merge } from 'lodash';
import { 
  typeDef as Author, 
  resolvers as authorResolvers,
} from './author.js';
import { 
  typeDef as Book, 
  resolvers as bookResolvers,
} from './book.js'; 


import { makeExecutableSchema } from '@graphql-tools/schema';

// If you had Query fields not associated with a
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema= makeExecutableSchema({
  typeDefs: [ Query, Author, Book ],
  resolvers: merge(resolvers, authorResolvers, bookResolvers),
});