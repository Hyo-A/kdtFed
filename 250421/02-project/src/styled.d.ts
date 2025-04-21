import "styled-components";

declare module "styled-components" {
  // "" 이걸 모듈로 선언할거야
  export interface DefaultTheme {
    // defaulttheme이라는 interface 타입을 모듈과 그 밖에서 쓸 수 있게 선언
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
