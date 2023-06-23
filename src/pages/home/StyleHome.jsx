import styled from "styled-components";


export const StyleDivHome = styled.div`

font-family:'Roboto', sans-serif;
nav{
    display: flex;
    .locationIcon{
        width: 40px;
        margin-right: 20px;
    }
    .userInfo{
        p{
            margin-bottom: 0;
            color: #E7D521;;
        }

        h4{
            margin-top: 0;
        }
      
    }
}

section{
    display: flex;
    .anouncement{
        border-radius: 10px;
        margin-left: 5px;
    }
}
  .filterList{
    padding: 0;
    margin-left: 0;

    ul{
        margin-left: 0 !important;
        list-style: none;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: auto;
        li{
margin-left: 0;
                .active{
                    background-color: #E7D521;
                    color: white;
                }
            button{
                height: 40px;
                width: 100px;
                border-radius: 10px;
                margin: 2px;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;

                

                .buttonImage{
                    width: 20px;
                    margin-right: 8px;
                }
            }
        }
    }
  }
`