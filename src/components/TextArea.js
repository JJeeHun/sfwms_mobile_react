import React from 'react'

const TextArea = ({text,labelStyle ,style}) => {
    const titleStyle = {...{paddingRight: '1rem',}, ...labelStyle};
    const textAreaStyle = {...{flex:'1' ,height: '5rem'}, ...style};

  return (
    <div style={{display:'flex',gap:'.2rem'}}>
        {text === '' || text ? <span className='title-text' style={titleStyle}>{text}</span> : ''}
        <textarea style={textAreaStyle} />
    </div>
  )
}

export default TextArea