import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actionType from '../store/actions';
import CounterLabel
from '../components/CounterLabel/CounterLabel';
import CounterButton from '../components/CounterButton/CounterButton';

import './Counter.css'

const Counter=()=>{
    return(
        <div>
            <CounterLabel />
            <CounterButton />
        </div>
    )
}