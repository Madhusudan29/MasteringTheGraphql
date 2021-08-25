import CatModel from "./CatModel";

const resolvers = {
  Query: {
    hello: () => "Hello World",
    cats: async () => await CatModel.find(),
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const Cat = new CatModel({ name });
      return await Cat.save();
    },
  },
};

export default resolvers;
