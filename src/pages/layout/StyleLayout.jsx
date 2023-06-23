import styled from "styled-components";

export const StyleFooter = styled.footer`
 height: 60px;
 width: 100%;
 position: fixed;
 z-index: 10;
 left: -2px;
 bottom: 0;
 background-color: white;

   figure{
    display: flex;
    align-items: center;
    justify-content: space-around;

    .active{
      svg{
       
       fill: #E7D521 ;
      }
    }
    .layoutIcon{
        width: 35px;
    }
   }
`