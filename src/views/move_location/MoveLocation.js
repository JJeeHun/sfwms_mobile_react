

import React from 'react'
import SearchInput from '../../components/SearchInput'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import Input from '../../components/Input'

const textWidth = 30;
const div2Style = {display: 'flex',justifyContent:'space-between'};
const footerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    display:'flex',
    gap: '.3rem'
}
const buttonStyle = {
    height: '4rem',
    flex: 1,
}

const MoveLocation = () => {
    
    
  return (
    <div className='container'>
        
        <SearchInput text={'Pallet'} labelStyle={{width: textWidth}}/>

        <TextArea text={'Item'} labelStyle={{width: textWidth}}/> 

        <div style={div2Style}>
            <Select text={''} labelStyle={{width: textWidth}} style={{width: '15rem'}}/>
            <Input style={{width: '5rem'}}/>
        </div>

        <Input text={'Loc'} labelStyle={{width: textWidth}}/>

        <div style={div2Style}>
            <Input text={'Stock'} labelStyle={{width: textWidth}} style={{width: '7rem'}}/>
            <Input text={'PSBL'} labelStyle={{width: textWidth}}  style={{width: '7rem'}}/>
        </div>

        <div style={div2Style}>
            <Input text={'UOM'} labelStyle={{width: textWidth}} style={{width: '7rem'}}/>
            <Input text={''}    labelStyle={{width: textWidth}} style={{width: '7rem'}}/>
        </div>
        
        <div style={footerStyle}>
            <button style={buttonStyle}>Move</button>
            <button style={buttonStyle}>Clear</button>
        </div>
    </div>
  )
}

export default MoveLocation