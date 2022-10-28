import React from 'react'
import { useEffect, useState, useContext } from 'react';
import ApiContext from '../context/ApiContext'
import ReactPaginate from 'react-paginate';


function Users() {
    const { loading, fetchApiData, user} = useContext(ApiContext);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    // Random user api call
    useEffect(() => {
        fetchApiData()
    }, [])
    
    // Pagination 
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(user?.slice(itemOffset, endOffset));
        setPageCount((Math.ceil(user?.length / itemsPerPage)));
      }, [itemOffset, itemsPerPage, user]);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % user?.length;
        setItemOffset(newOffset);
      };

    if( loading )  {
        return (<div className='loading'>Loading...</div>
        )
    } else {
        return(
            <>
             <div className='user-container'>{currentItems.map((user, index) => (
                <div key={index} className='user-wrapper'> 
                 <div><img src={user.picture.medium} alt='image' className='image'/></div>
                 <div className='user-info'>
                    <div><span className='user-detail'>Name</span>: {user.name.last} {user.name.first}</div>
                    <div><span className='user-detail'>Gender</span>: {user.gender}</div>
                    <div><span className='user-detail'>Country</span>: {user.location.country}</div>
                    <div><span className='user-detail'>Age:</span> {user.dob.age}</div>
                 </div>
                 
                </div>
             ))}
             </div>

             <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page"
                nextLinkClassName="page"
                activeLinkClassName="active"
             />

            </>
        )
    }
}

export default Users