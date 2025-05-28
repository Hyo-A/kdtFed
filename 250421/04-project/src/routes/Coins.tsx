import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const CoinList = styled.ul`
  width: 760px;
  height: 500px;

  @media (max-width: 760px) {
    width: 100%;
    padding: 20px;
  }
`;

const Loader = styled.div`
  font-size: 2rem;
  margin-top: 200px;
  font-weight: 200;
  color: ${({ theme }) => theme.grayColor};
`;

const Coin = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    background: ${({ theme }) => theme.accentbColor};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  font-weight: bold;
`;

const Rank = styled.div`
  font-size: 1.6rem;
`;

const Detail = styled.div`
  font-size: 1.4rem;
  right: 0;
  color: ${({ theme }) => theme.grayColor};
  position: absolute;
  right: 20px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;
// const ErrImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: ${({ theme }) => theme.bgColor};
  background: ${({ theme }) => theme.accentColor};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const isDark = useRecoilValue(isDarkAtom);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // // 나중에 값이 바뀐다면 coininterface의 배열의 형태로 coins에 들어갈꺼야
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     // console.log(json);
  //     // setCoins(json.slice(0, 30));
  //     setCoins(json);
  //     setLoading(false);
  //   })();
  //   // console.log(coins);
  //   // 원래는 data라는 함수를 선언해서 호출한건데,
  //   // 고차함수 형태로 선언부를 ()안에 싹 넣고 그 자체를 호출시켰다
  // }, []);
  const setterFn = useSetRecoilState(isDarkAtom);
  console.log(setterFn);
  // isdarkatom 을 set할거고 setternfn이 함수로서 작동할거임
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  // usequery는 객체 형태로 키와 function갖고오면 된다는거

  return (
    <Container>
      <Helmet>
        <title>Coins List</title>
      </Helmet>
      <Button onClick={() => setterFn((prev) => !prev)}>
        {isDark ? "LightMode" : "DarkMode"}
      </Button>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Link key={coin.id} to={`/${coin.id}`} state={`${coin.name}`}>
              <Coin>
                <Rank>🏆 Now Rank : {coin.rank}</Rank>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
                <Detail>Detail information</Detail>
              </Coin>
            </Link>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
