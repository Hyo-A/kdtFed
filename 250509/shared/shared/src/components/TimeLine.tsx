import { useState, useEffect } from "react";
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Tweet from "./Tweet";

export interface ITweet {
  id: string;
  createdAt: number;
  photo?: string;
  video?: string;
  tweet: string;
  userId: string;
  username: string;
}

const TimeLine = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(tweetsQuery);
    const tweets = snapshot.docs.map((doc) => {
      const { photo, video, userId, username, tweet, createdAt } = doc.data();
      return {
        id: doc.id,
        createdAt,
        photo,
        video,
        userId,
        username,
        tweet,
      };
    });
    setTweets(tweets);
    useEffect(() => {
      fetchTweets();
    }, []);
  };

  return <div>{JSON.stringify(tweets)}</div>;
};

export default TimeLine;
