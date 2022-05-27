import { resolvers as demandResolvers } from "./Demand/Demand";
import { resolvers as clientResolvers } from './Client/Client';
import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as listResolvers } from "./List/List";

const resolvers = {
    ...nodeResolvers,
    ...listResolvers,
    ...demandResolvers,
    ...clientResolvers,

    Query: {
        ...clientResolvers.Query,
        ...demandResolvers.Query,
    },

    Mutation: {
        ...clientResolvers.Mutation,
    }

}

export default resolvers;