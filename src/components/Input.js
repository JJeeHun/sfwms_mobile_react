
import React from 'react'

const Input = ({text,labelStyle ,style}) => {

    const titleStyle = {...{paddingRight: '1rem'},...labelStyle};
    const inputStyle = {...{flex:'1'},...style};

  return (
    <div style={{display:'flex',alignItems:'center',gap:'.2rem'}}>
        {text === '' || text ? <span className='title-text' style={titleStyle}>{text}</span> : ''}
        <input type='text' style={inputStyle} />
    </div>
  )
}

export default Input
