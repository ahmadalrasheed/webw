import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10vw 0 10vw;
  align-items:center;
.nav-list{
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        padding:0 7px;
        text-decoration:none;
        font-size:14px;
    }
}
.button-container{
    position:relative;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100%;
    }
    span{
        position:absolute;
        font-size:16;
        font-weight:600;
    }
}
@media only screen and (max-width:1100px){
    flex-direction: column;
    .nav-list{
        width:100%;
        a{
            text-align:center;
        }
    }
    .button-container{
        display:none;
    }
    gap:20px;
    padding: 0 3vw;
  }
`;
