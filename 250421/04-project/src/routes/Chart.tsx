import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ApexChart from "react-apexcharts";
// 기본 속성으로 type series options등을 써야하는듯? width heigth 도 가능
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

// interface IsDark {
//   isDark: boolean;
// }

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistory>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval:5000
  });

  const isDark = useRecoilValue(isDarkAtom);
  // const { isDark } = useOutletContext<IsDark>();

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];
  // console.log(chartData);

  return (
    <Container>
      {isLoading ? (
        <div>Loading start</div>
      ) : chartData.length > 0 ? (
        <ApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Hello",
              data: chartData.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
              // mode: "dark",
            },
            stroke: {
              width: 3,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "none",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
              },
            },
            colors: ["#fff"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#daff96"],
              },
            },
          }}
        />
      ) : (
        "No_Data Available to display chart."
      )}
    </Container>
  );
};

export default Chart;
