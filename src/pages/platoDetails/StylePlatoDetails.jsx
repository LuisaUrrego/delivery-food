import styled from "styled-components";


export const StylePlatoDetails = styled.div`
padding: 0;
font-family:'Roboto', sans-serif;
.platoImage{
    position: relative;
    top: -8px;
    left: -8px;
    width: 100vw;
}
.amountFood{
    display: flex;
    position: absolute;
    bottom: 5px;
    button{
        border: none;
        img{
            width: 25px;
        }
    }

    h3{
        font-size: 25px;
        margin: 10px;
    }
}

.priceButton{
    width: 210px;
    border: none;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 40px;
    background-color: #E7D521;
    position: absolute;
    bottom: 5px;
    right: 5px;
    p{
        margin: 15px;
        font-weight: 600;
    }
}
`