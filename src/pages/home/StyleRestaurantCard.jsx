import styled from "styled-components";


export const StyleDiv = styled.div`
display: flex;
padding: 0;
font-family:'Roboto', sans-serif;
 figure{
    padding: 0;
    margin-left: 0;
    img{
        width: 150px;
        height: 130px;
        clip-path: polygon(0 0, 100% 0%, 67% 100%, 0% 100%);
        border-radius: 15px;
        margin-left: 0;
    }
 }
 div{
    .stars{
        width: 17px;
        margin: 2px;
    }
 }
`