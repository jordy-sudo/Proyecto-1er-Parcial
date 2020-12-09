import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>PSP 5</h1>
            <HeroList
                publisher='Marvel Comics'
             />
        </div>
    )
}
