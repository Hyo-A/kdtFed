//theme 타입 선언
import styled from "styled-components"; //모듈

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
  }
}
