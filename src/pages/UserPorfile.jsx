import React from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { actionLogoutAsync } from '../redux/actions/useActions';
import { ImageAvatar, ButtonsPorfile, ContinerButtons, NameUser } from '../components/userPorfile/UserPorfile';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const UserPorfile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((store)=> store.user)
  console.log(user)
  const porfileUser = user?.porfileUser;
  const name = user?.name;
  return (
    <main>
      <figure>
        <ImageAvatar src={porfileUser} />
      </figure>
      <div>
        <NameUser>{name}</NameUser>
        </div>
      <ContinerButtons>
        <ButtonsPorfile><PermIdentityIcon/>Account edit<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><NotificationsNoneIcon/>Account edit<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><CreditScoreIcon/>Payment<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><LanguageIcon/>Language<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><LocationOnIcon/>Location<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><HelpIcon/>FAQ<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile><PhoneIcon/>Support<KeyboardArrowRightIcon/></ButtonsPorfile>
        <ButtonsPorfile onClick={()=> dispatch(actionLogoutAsync())}><ExitToAppIcon/>Cerrar sesion<KeyboardArrowRightIcon/></ButtonsPorfile>
      </ContinerButtons>
    
    
    </main>
  )
}

export default UserPorfile