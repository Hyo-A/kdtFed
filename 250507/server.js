import { ApolloServer, gql } from "apollo-server";

// GET /allTweets => 지금까지의 전체 총 트윗 자료를 가져와!
// GET /tweet/1
// GET /ping => 문자열 값을 반환(반드시!)

let tweets = [
  {
    id: "1",
    text: "First",
    userId: "2",
  },
  {
    id: "2",
    text: "Second",
    userId: "1",
  },
  {
    id: "3",
    text: "Third",
    userId: "3",
  },
];

let users = [
  {
    id: "1",
    firstName: "KIM",
    lastName: "Mandu",
  },
  {
    id: "2",
    firstName: "DDat",
    lastName: "GGee",
  },
  {
    id: "3",
    firstName: "Jang",
    lastName: "Hyoa",
  },
];

// 여기서 저장되는것은 일시적이고, db가 필요한데, 이거는 백엔드쪽
// 실제 실행하고자 하는 값은 resolvers 안에 넣어봐
const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName}${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다!");
        return null;
      }
      return result;
    },
  },
};
// tweet(root, args){ args는 주기로 했던 값이고 두번째로 와야한다고 한다
// console.log(args);는 { id: '1' } 처럼 객체가 들어왔다
// 게시글을 남기고 탈퇴한 사용자의 경우도 만들어놀거임

const typeDefs = gql`
  """
  주석처럼 쓸 수 있는 형식?
  """
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a String
    """
    fullName: String!
  }

  """
  Tweet Object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }

  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    """
    Delet a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean
  }
`;

//Error: Query root type must be provided. Gql 문법은 Root를 요구한다 Query로 시작되어지는 type이 최상단
// [Tweet]이렇게 대괄호로 되어진 구문을 list라고 부름 배열말고

// 본래에는 작성한 type 혹 null이 될수 있는것이 기본인데..
// 뒤에 !가 붙는다면? 필수값이라는 의미가 된다!

const server = new ApolloServer({ typeDefs, resolvers });
// 클라이언트와 서버는 특정 포트를 통해서 get이라는 요청을 하기도 하고 대응을 해줘야 하고..

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
