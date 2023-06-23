import styled from "styled-components";


export const StyleRestaurantDetails = styled.div`
div{
    .restaurantContainer{
        display: flex;
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
    display: flex;
    flex-direction: column;
    .stars{
        width: 15px;
        height: 15px;
        margin: 2px;
    }
 }
}

.categoryContainer{
    display: flex;
    font-family:'Roboto', sans-serif;
    align-items: center;
    justify-content: center;

}
}


main{
    font-family:'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    .platoCard{
        width: 170px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .platoImage{
           width: 160px;
           height: 160px;
           object-fit: cover;
           border-radius: 10px;
        }
    }
}

`