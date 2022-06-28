import React, { Component } from 'react';

import EvenAndOdd from '../topics/EvenAndOdd'
import FilterObject from '../TopicBrowser/FilterObject'
import FilterString from '../Topics/FilterString'
import Palendrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render() {
        return (
            <div className='puzzleFeed'>
            <EvenAndOdd/>
            <FilterObject />
            <FilterString />
            <Palendrome />
            <Sum />    
            </div>
        )
    }
}