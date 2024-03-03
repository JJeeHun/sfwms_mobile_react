import React from 'react'

const CellStyle = {
    flex: 1,
    border: '1px solid lightgray',
    boxSizing: 'border-box'
};

const Cell = ({style,text}) => <div className='flex-center' style={{...CellStyle,...style}}>{text}</div>;
const EmptySearch = () => (
    <div className='flex-center' style={{width: '100%' ,height: '100%'}}>
        {"조회X"}
    </div>
)


const Grid = ({data=[],config=[],style}) => {
  
  return (
    <div className='grid' style={style}>
        <div style={{display:'flex', justifyContent: 'space-around'}}>
            {config.map( cell => <Cell  key={cell.column+'_head'} 
                                        style={cell.style} 
                                        text={cell.text}/> )}
        </div>
        <div className="grid-data" style={{height: '100%'}}>
            { !data || data?.length < 1
            ? <EmptySearch />
            : data.map( (row,rowIndex) => {
                return <div key={rowIndex} 
                            style={{display:'flex', justifyContent: 'space-around'}}>
                        {config.map(cell => <Cell key={cell.column+'_body'+rowIndex} 
                                                    style={{...cell.style,...cell.bodyStyle}} 
                                                    text={row[cell.column]}/>)}
                </div>
            })}
        </div>
    </div>
  )
}

export default Grid