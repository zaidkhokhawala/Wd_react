<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Adminheader from '../adminpanel/component/Adminheader'
import Contact from './Contact'
import Properties from './Properties'
import Property_details from './Property_details'

function Main() {
    return (
        <div>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Home /></>}></Route>
                    <Route path='/Contact' element={<><Contact /></>}></Route>
                    <Route path='/Properties' element={<><Properties/></>}></Route>
                    <Route path='/Property_details' element={<><Property_details /></>}></Route>
                    <Route path='/Adminheader' element={<><Adminheader /></>}></Route>
                   
                </Routes>
            </BrowserRouter>




        </div>
    )
}

=======
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Adminheader from '../adminpanel/component/Adminheader'
import Contact from './Contact'
import Properties from './Properties'
import Property_details from './Property_details'

function Main() {
    return (
        <div>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Home /></>}></Route>
                    <Route path='/Contact' element={<><Contact /></>}></Route>
                    <Route path='/Properties' element={<><Properties/></>}></Route>
                    <Route path='/Property_details' element={<><Property_details /></>}></Route>
                    <Route path='/Adminheader' element={<><Adminheader /></>}></Route>
                   
                </Routes>
            </BrowserRouter>




        </div>
    )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Main