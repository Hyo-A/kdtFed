import { useState, useEffect } from "react";
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const Tab = styled.div<IsActive>`
  width: 295px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 20px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.textColor};
  color: ${({ isActive, theme }) => (isActive ? theme.bgColor : theme.bgColor)};
  padding: 12px 20px;
  border-radius: 20px;
  cursor: ${({ isActive }) => (isActive ? "auto" : "pointer")};
  transition: all 0.2s;
  &:hover {
    background: ${({ isActive, theme }) =>
      isActive ? theme.accentColor : theme.accentbColor};
    color: ${({ isActive, theme }) =>
      isActive ? theme.bgColor : theme.accentColor};
  }
`;

interface IsActive {
  isActive: boolean;
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

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<IRouteParams | any>();
  // coinId 자체가 존재하지 않을 수 있음, undefined는 안되어서 any타입을 썼더니 됐음
  // console.log(coinId);
  const { state } = useLocation() as IRocationState;
  // console.log(location);
  // 우리가 coins에서 Link to={`/${coin.id}`} state={`${coin.name}` 이케 state를 통해 보냈음
  const [info, setInfo] = useState<InfoData | any>({});
  const [priceInfo, setPriceInfo] = useState<PriceData | any>({});
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");
  // usematch는 인자값으로 판달할 페이지가 들어가야함

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      // console.log(infoData, priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
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
              <span>{info?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>➰ Symbol</span>
              <span>{info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>❔ isActive</span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            Information of {info?.type} type :
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
              <span>
                {priceInfo.total_supply ? priceInfo.total_supply : "no_data"}
              </span>
            </OverViewItem>
            <OverViewItem>
              <span>⭐ Max Supply</span>
              <span>
                {priceInfo.max_supply ? priceInfo.max_supply : "no_data"}
              </span>
            </OverViewItem>
          </OverView>
          <Tabs>
            <Link to={`/${coinId}/chart`}>
              <Tab isActive={chartMatch !== null}>Chart</Tab>
            </Link>
            <Link to={`/${coinId}/price`}>
              <Tab isActive={priceMatch !== null}>Price</Tab>
            </Link>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
