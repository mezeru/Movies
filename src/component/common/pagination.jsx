import React, { Component } from 'react';
import _ from 'lodash';
import { faHandsWash } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {

    const  {onPageChange,len,pageSize,currPage} = props;
    const pageNo = Math.ceil((len)/(pageSize))

    const pages = _.range(1,pageNo + 1)


    if (pageNo === 1){
        return null;
    }

    return ( 
        <nav>
            <ul class="pagination">
                {pages.map(page => <li onClick={() => props.onPageChange(page)} className={page === currPage ? "page-item active": "page-item" } key={page} >
                    <a class="page-link">{page}</a>
                                   </li>)}
             </ul>
        </nav>

     );
}
 
export default Pagination;