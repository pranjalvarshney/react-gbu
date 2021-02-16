import React from 'react'
import { Base } from '../../Base/Base'
import { HomeSection1 } from './components/HomeSection1'
import { HomeSection2 } from './components/HomeSection2'
import "./Home.css"
export const Home = () => {
    return (
        <Base>
            <div className="home">
                <HomeSection1/>
                <HomeSection2/>
            </div>
        </Base>
    )
}
