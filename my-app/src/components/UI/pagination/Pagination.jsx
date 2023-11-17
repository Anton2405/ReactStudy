import React from 'react'
import {getPageCount, getPagesArray} from '../../../utils/pages';

export default function Pagination({totalPages,page,changePage}) {
  let pageArr = getPagesArray(totalPages) 
  return (
    <div className='page__wrapper' >
        {pageArr.map(p =>
          <span
            onClick={()=>changePage(p)} 
            key={p} 
            className={page === p ? 'page page__current' : 'page'}>
            {p}
          </span>
          )}
      </div>  
  )
}
