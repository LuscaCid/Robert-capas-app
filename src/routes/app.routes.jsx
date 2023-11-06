import {Routes, Route} from 'react-router-dom'
import { New } from '../pages/New'
import { Menu } from '../pages/menu'
import { Profile } from '../pages/profile'
import { ClientRegister } from '../pages/clientRegister'

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element = {<Menu />} />
            <Route path='/new' element = {<New />} />
            <Route path='/profile' element = {<Profile />} />
            <Route path='/clientregister' element ={<ClientRegister />} />
        </Routes>
    )

}