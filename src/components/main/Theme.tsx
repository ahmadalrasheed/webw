import styled from "styled-components";

export const MainContainer = styled.main`
overflow-x:hidden;
.paylogon-img-container{
    min-height:100vh;
    position:absolute;
    top:0;
}
.statistics-img{
  z-index:3;
}
.separator{
    height:5px;
}
.main-sections {
    margin:110px 0;
}
.section-3-description{
    display:flex;
    flex-direction: column;
    gap:15px;
    h2{
        color:black;
        font-size: 38px
    }
    p{
        color:#8F8F8F;
        font-size:14px;
    }
    .hint{
        display:flex;
        justify-content:space-between;
        width:60%;
        p{
            color:#FF6057;
            font-weight:600;
            font-size:16px;
        }
    }

}


.left-square-paylogon-container{
    position:relative;
    .square-paylogon{
        position:absolute;
        left: -950px;
        top:100px;
        img{
            width:90%;
            transform:rotate(-10deg);
            animation: flash 8s infinite;
        }
    }

    }
}
.right-square-paylogon-container{
    position:relative;
    .square-paylogon{
        position:absolute;
        right:-1100px;
        top:650px;
        img{
            width:90%;
            transform:rotate(-15deg);
            animation: flash 8s infinite;
        }
    }
}
@media only screen and (max-width:1100px){
  .main-sections{
    margin:60px 0;
  }
  .section-3-description{
    text-align:center;
    h2{
      font-size:26px;
    }
  }
  .section-3-description .hint-container{
    width:100%;
    display:flex;
    justify-content:center;
  }
  .section-3-description .hint{
    width:40%;
  }
  .primary-button-container{
    display:flex;
    justify-content:center;
  }
}

@keyframes flash {
  0% {
    filter:brightness(1);

  }
  5% {
    filter:brightness(1.2);
  }
  10% {
    filter:brightness(1);
  }
  15% {
    filter:brightness(0.9);
  }
  20% {
    filter:brightness(1);
  }
  30% {
    filter:brightness(0.9);
  }
  60% {
    filter:brightness(1);
  }
}

`;

export const FirstSectionDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-basis: 30%;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
  h2 {
    font-size: 58px;
  }
  div {
    font-size: 18px;
  }
  @media only screen and (max-width: 1100px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 32px;
    }
    div {
      font-size: 16px;
    }
  }
`;
export const FirstSection = styled.section`
  section {
    z-index: 3;
  }
  width: 100%;
  padding: 0 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 16px;
    height: 40px;
    color: #ff6057;
    border: none;
    width: 50%;
  }
  .statistics-img {
    width: 80%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    padding: 0 3vw;
    gap: 20px;
    .description-button-contanier {
      display: flex;
      justify-content: center;
      button {
        width: 30%;
      }
    }
    .statistics-img {
      width: 100%;
    }
  }
`;
export const SecondSection = styled.section`
  display: flex;
  padding: 0 10vw 0 10vw;
  gap: 2px;
  img {
    width: 20%;
    z-index: 3;
  }
  @media only screen and (max-width: 1100px) {
    padding: 0 3vw;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    img {
      width: 150px;
    }
  }
`;
export const ThirdSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 10vw 0 10vw;
  align-items: center;
  .section-3-description,
  .cards {
    flex-basis: 47%;
  }
  .cards {
    .row-1,
    .row-2 {
      display: flex;
      .single-card {
        flex-basis: 49%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .head-line {
          font-size: 14px;
        }
        .description {
          font-size: 14px;
          color: #8f8f8f;
        }
        .icon-container {
          position: relative;
          width: fit-content;
          .circle {
            height: 80px;
            width: 80px;
          }
          .icon {
            position: absolute;
            top: 33%;
            left: 31%;
            height: 25px;
            width: 30px;
          }
        }
      }
    }
    .row-1 {
      justify-content: end;
    }
    div {
      color: black;
    }
  }
  @media only screen and (max-width: 1100px) {
    padding: 0 3vw;
    flex-direction: column;
    gap: 20px;
    .cards .row-1 .single-card, .cards .row-2 .single-card{
      flex-basis:unset;
    }
    .cards {
      .row-1{
        justify-content:unset;
      }
    }
    .section-3-description, .cards {
      width: 100%;
    }
  }
`;
export const FourthSection = styled.section`
  display: flex;
  padding: 0 10vw 0 0;
  align-items: center;
  z-index: 3;
  justify-content: space-between;
  section {
    z-index: 3;
    flex-basis: 48%;
  }
  .statistics-img {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    padding: 0 3vw;
    gap: 20px;
  }
`;
export const FifthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  gap: 15px;
  .head-line,
  h2,
  .hint {
    width: 40%;
    text-align: center;
  }
  .head-line {
    font-size: 28px;
    color: #8f8f8f;
    font-weight: 600;
  }
  h2 {
    font-size: 60px;
    color: black;
  }
  .hint {
    color: #8f8f8f;
    font-size: 14px;
  }
  .statistics-img {
    width: 65%;
  }
  @media only screen and (max-width: 1100px) {
    gap: 20px;
    .head-line,
    h2,
    .hint {
      width: 80%;
    }
    .head-line {
      font-size: 22px;
    }
    h2 {
      font-size: 32px;
    }
    .statistics-img {
      width: 100%;
    }
  }
`;
export const SixthSection = styled.section`
  display: flex;
  padding: 0 0 0 10vw;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  section {
    z-index: 3;
    flex-basis: 48%;
  }
  .statistics-img {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    padding: 0 3vw;
    gap: 20px;
  }
`;
export const SeventhSection = styled.section`
  display: flex;
  padding: 0 10vw;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  section {
    z-index: 3;
    flex-basis: 48%;
  }
  .statistics-img {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    gap: 20px;
    flex-direction: column;
    padding: 0 3vw;
  }
`;
export const EightSection = styled.section`
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  .heading-container {
    width: 40%;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 38px;
    color: black;
    text-align: center;
  }
  .rating-row {
    display: flew;
    justify-content: space-between;
    width: 100%;
    .rating-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .number {
        color: #ff6057;
        font-size: 46px;
        font-weight: bold;
        text-align: center;
      }
      .text {
        font-weight: 600;
        color: black;
        font-size: 20px;
        text-align: center;
      }
    }
  }
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    section {
      width: 47%;
    }

    .review-card {
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
      .shadowed-card {
        display: flex;
        align-items: center;
        width: 100%;
        -webkit-box-shadow: 1px 1px 8px 5px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: 1px 1px 8px 5px #ccc; /* Firefox 3.5 - 3.6 */
        box-shadow: 1px 1px 8px 5px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
        .info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .stars-container {
          display: flex;
          gap: 10px;
        }
        .name {
          font-size: 24px;
          font-weight: 600;
          color: black;
          margin-bottom: 10px;
        }
        .img-container {
          display: flex;
          justify-content: center;
        }
        .head-line {
          color: #8f8f8f;
          font-size: 16px;
          font-weight: 600;
        }
        p {
          color: #8f8f8f;
          font-size: 18px;
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    padding: 0 3vw;
    gap: 20px;
    h2 {
      font-size: 32px;
    }
    .rating-row .rating-info .number {
      font-size: 32px;
    }
    .rating-row .rating-info .text {
      font-size: 16px;
    }
    .heading-container {
      width: 80%;
      margin-bottom: 0px;
    }
    .rating-row {
      display: flex;
      flex-direction: column;
    }
    .info-row {
      gap: 20px;
      flex-direction: column;
      section {
        width: auto;
      }
    }
    .info-row .review-card .shadowed-card {
      flex-direction: column;
    }
  }
`;
export const Section = styled.section`
  z-index: 3;
`;
