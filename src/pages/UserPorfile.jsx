import React from 'react'
import { useDispatch } from 'react-redux'
import { actionLogoutAsync } from '../redux/actions/useActions';

const UserPorfile = () => {
    const dispatch = useDispatch()
  return (
    <div>UserPorfile
        <button onClick={()=> dispatch(actionLogoutAsync())}>Cerrar sesion</button>
    </div>
  )
}

export default UserPorfile