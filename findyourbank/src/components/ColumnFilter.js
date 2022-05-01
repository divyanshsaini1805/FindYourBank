import React from 'react'

export default function ColumnFilter({column}) {
    
    const { filterValue, SetFilter} = column;
    return (
        <span>
            Search : {' '}
            <input 
             value={filterValue || ' '}
             onChange={(e) => SetFilter(e.target.value)}     
            />
        </span>
        )
}


