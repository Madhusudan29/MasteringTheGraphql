const { buildSchema } = require("graphql");

const schema = buildSchema(`
   type Course {
      id:ID
      courseName: String
      category: String
      price: Int
      language: String
      email: String
      stack: Stack
      teachingAssits: [TeachingAssist]
   }
   enum Stack {
      Web
      Mobile
      Other
   }
   type TeachingAssist {
      firstName: String
      lastName: String
      experience: Int
   }
   input CourseInput {
      courseName: String!
      category: String
      price: Int!
      language: String
      email: String
      stack: Stack
      teachingAssits: [TeachingAssistInput]!
   }
   input TeachingAssistInput {
      firstName: String
      lastName: String
      experience: Int
   }
   type Query {
      getCourse(id: ID): Course
   }
   type Mutation {
      createCourse(input: CourseInput): Course
   }
`);
module.exports = schema;
