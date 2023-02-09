import React from 'react';
import { Component } from 'react';
import loading from './spinner2.gif';

class Spinner extends Component{
    render(){
        return(
            <>
            <div className='text-center'>
            <img src={loading} alt="loading" />
            </div>
            </>
        )
    }
}

export default Spinner;
