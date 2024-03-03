
import React from 'react'

const SearchInput = ({text,labelStyle}) => {

    const titleStyle = {...{paddingRight: '1rem'},...labelStyle};
    const inputStyle = {flex:'1'};

  return (
    <div style={{display:'flex',alignItems:'center',gap:'.2rem'}}>
        {text === '' || text ? <span className='title-text' style={titleStyle}>{text}</span> : ''}
        <input type="text" style={inputStyle}/>
        <button style={{padding: '.5rem'}}>☞</button>
    </div>
  )
}

export default SearchInput
