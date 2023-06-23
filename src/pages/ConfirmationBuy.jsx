import React from 'react'
import { ButtonFollowOrder, GifConfirmation, ImgConfirmation, GifConfirmation2  } from '../components/confirmationBuy/StyleConfirmationBuy';
import { useNavigate } from "react-router-dom";
import Gif from "../assets/confeti.gif"

const ConfirmationBuy = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
      e.preventDefault(); 
      navigate("/home");
    };
  return (
    <form onSubmit={onSubmit}>
    
      <figure>
        <ImgConfirmation src="https://sprint-final-23fa8.web.app/static/media/orderAccepted.f321ae4775bd7e4e9224.png"/>
      </figure>
      <div>
          <GifConfirmation src={Gif} />
        </div>
        <div>
          <GifConfirmation2 src={Gif} />
        </div>
      <div>
          <ButtonFollowOrder type="submit">Follw Order</ButtonFollowOrder>
        </div>
    </form>

  )
}

export default ConfirmationBuy