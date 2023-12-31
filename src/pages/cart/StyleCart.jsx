import styled from "styled-components";


export const StyleCart = styled.div`
font-family:'Roboto', sans-serif;
  nav{
    display: flex;
    justify-content: center;
    align-content: center;

    img{
        position: absolute;
        left: 3px;
        top: 28px;
    }
  }

  .addressInfo{
    div{
        display: flex;

        .location{
            margin: 10px;
        }
        .address{
            margin-left: 10px;
        }
    }
  }
  .paymentInfo{
    .pyamentMethods{
        display: flex;
        button{
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 10px;
            margin: 5px;
            p{
                font-size: 15px;
            }
            img{
                margin: 8px;
            }
        }
    }
  }

  main{
    div{
        .productList{
            display: flex;
            margin-bottom: 10px;
            
            align-items: center;
            img{
                width: 90px;
                border-radius: 10px;
            }
            h3{
                font-size: 20px;
            }
        }

    }
  }

  .paymentTotal{
    position: absolute;
    bottom: 80px;
    left: 90px;
  }
  .orderButton{
                border: none;
                background-color: #E7D521;
                font-size: 20px;
                position: absolute;
                bottom: 5px;
                width: 280px;
                height: 40px;
                left: 30px;
                border-radius: 15px;
                
            }
`