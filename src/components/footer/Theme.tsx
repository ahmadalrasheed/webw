import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap:20px;
  padding: 3vw 10vw;
  background-color: #333333;
  position: sticky;
  min-height: 100px;
  z-inedx: 3;
  .main-sections{
    width:33%
  }
  @media only screen and (max-width:1100px){
    flex-direction:column;
    padding: 2vw 3vw;
    .main-sections{
      width:100%;
    }
    button{
      width: 150px !important;
    }
  }
`;
export const ButtonInputContainer = styled.section`
  position: relative;
  height: 50px;
  button {
    position: absolute;
    right: 0;
    top: 3px;
    width: 200px;
    height: 45px;
  }
`;
export const Section = styled.section`
  h2 {
    font-size: 16px;
    margin-bottom: 32px;
  }
  h1 {
    font-size: 48px;
    font-family: "Nueva Std";
  }
`;
export const VerticalNav = styled.section`
  display: flex;
  flex-direction: column;
  a {
    font-size: 14px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;
