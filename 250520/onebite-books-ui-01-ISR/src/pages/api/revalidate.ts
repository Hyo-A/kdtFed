import { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest는 객체형태 타입 정의
// NextApiResponse는 response 관련 함수 타입정의

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    // 클라이언트로부터 request가 들어와서 통신했다면 해댱메인페이지로 돌아가면서 새로고침해주겠다는것
    return res.json({ revalidata: true });
  } catch (err) {
    console.log(err);
  }
  res.status(500).send("Revalidation Failed");
};

export default handler;
