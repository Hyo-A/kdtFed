import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    // 쿼리키는 임의로 이름을 지을수 있는데
    queryFn: () => {
      return axios.get(`http://localhost:3000/posts`);
    },
    retry: 1,
    // 이러면 호출 재시도가 1번이 되서 총 2번 에러 뜸
    select: (data) => {
      return data.data;
    },
    // 어떤것을 쓸건지
    gcTime: 20000,
    staleTime: 10000,
    enabled: false,
    // garbadge colloect time 쓰레기 수집 시간 캐시수명관리
    // staleTime: 10000,
    // refetchInterval: 3000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: true,
  });
};
