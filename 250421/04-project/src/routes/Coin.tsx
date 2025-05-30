import {
  Link,
  Outlet,
  useMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { Helmet } from "react-helmet";

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

const Loader = styled.div`
  font-size: 2rem;
  margin-top: 200px;
  font-weight: 200;
  color: ${({ theme }) => theme.grayColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  font-weight: bold;
`;

const OverView = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};

  @media (max-width: 640px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const OverViewItem = styled.div`
  background: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 8px;
  span:first-child {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.bgColor};
    text-transform: uppercase;
  }
`;

const Description = styled.div`
  width: 600px;
  padding: 20px 20px;
  line-height: 150%;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 600;
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.bgColor};

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Desc = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 130%;
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;

  @media (max-width: 620px) {
    width: 100%;
    padding: 20px;
  }
`;

const Tab = styled.div<IsActive>`
  width: 295px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 20px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.accentColor : theme.textColor};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.bgColor : theme.bgColor};
  padding: 12px 20px;
  border-radius: 20px;
  cursor: ${({ $isActive }) => ($isActive ? "auto" : "pointer")};
  transition: all 0.2s;
  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.accentColor : theme.accentbColor};
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.bgColor : theme.accentColor};
  }
`;

interface IsActive {
  $isActive: boolean;
}

interface IRouteParams {
  coinId: string;
}

interface IRocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

// interface IsDark {
//   isDark: boolean;
// }

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // coinId 자체가 존재하지 않을 수 있음, undefined는 안되어서 any타입을 썼더니 됐음
  // // console.log(coinId);
  // console.log(location);
  // 우리가 coins에서 Link to={`/${coin.id}`} state={`${coin.name}` 이케 state를 통해 보냈음
  // const [info, setInfo] = useState<InfoData | any>({});
  // const [priceInfo, setPriceInfo] = useState<PriceData | any>({});
  const { coinId } = useParams<IRouteParams | any>();
  const { state } = useLocation() as IRocationState;
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");
  // usematch는 인자값으로 판달할 페이지가 들어가야함

  // const { isDark } = useOutletContext<IsDark>();

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     // console.log(infoData, priceData);
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["coinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  // console.log(infoData, priceData);

  const loading = infoLoading || priceLoading;
  // 이건 boolean값을 반환

  // const isPricedata = priceData ? priceData?.max_supply : "no_data";

  return (
    <Container>
      <Helmet>
        <title>{state ? state : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>
        <Link to={"/"}>
          <Title>
            Coin : {state ? state : loading ? "Loading..." : coinId}
          </Title>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>🏆 Rank</span>
              <span>{infoData?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>➰ Symbol</span>
              <span>{infoData?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>❔ isActive</span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            Information of {infoData?.type} type :
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              non consequuntur earum reiciendis facere, excepturi repellendus
              omnis ipsum assumenda natus iure officia adipisci qui officiis?
              Possimus, officia perspiciatis? Nemo, maiores. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Soluta non consequuntur
              earum reiciendis facere, excepturi repellendus omnis ipsum
              assumenda natus iure officia adipisci qui officiis? Possimus,
              officia perspiciatis? Nemo, maiores.
            </Desc>
          </Description>
          <OverView>
            <OverViewItem>
              <span>💲 Total Supply</span>
              {/* {priceData ? (
                <span>{priceData?.total_supply}</span>
              ) : (
                <span>no-data</span>
              )} */}
              <span>
                {priceData?.total_supply?.toLocaleString("ko-KR") ?? "No_Data"}
              </span>
            </OverViewItem>
            <OverViewItem>
              <span>⭐ Max Supply</span>
              <span>
                {priceData?.max_supply?.toLocaleString("ko-KR") ?? "No_Data"}
              </span>
            </OverViewItem>
          </OverView>
          <Tabs>
            <Link to={`/${coinId}/chart`}>
              <Tab $isActive={chartMatch !== null}>Chart</Tab>
            </Link>
            <Link to={`/${coinId}/price`}>
              <Tab $isActive={priceMatch !== null}>Price</Tab>
            </Link>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
