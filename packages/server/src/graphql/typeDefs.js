import { gql } from 'apollo-server-express';
import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
import { typeDefs as nodeTypeDefs } from './Node/Node';
import { typeDefs as listTypeDefs } from './List/List';

 const typeDefs = gql`
    type Query{
        _root: String
    }

    type Mutation {
        _root: String
    }

    ${nodeTypeDefs}
    ${listTypeDefs}
    ${clientTypeDefs}
    ${demandTypeDefs}
`;

export default typeDefs;
