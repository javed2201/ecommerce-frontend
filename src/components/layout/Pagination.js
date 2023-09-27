import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (<>{currentItems &&
        currentItems.map((item) => (
          <div className='md:w-[49%] lg:w-[32%]'>
            <Product src='assets/p1.png' badge={true} />
          </div>
        ))}</>);
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='md:flex md:flex-wrap md:justify-between'>
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="mt-3"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border boreder-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm "
        pageLinkClassName="page-link"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-3.5  md:gap-y-0  mt-12 text-[#767676]"
        activeClassName="inline-block border boreder-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm bg-black text-white"
      />
      <p className='lg:absolute lg:bottom-0 lg:right-0 mt-2.5 lg:mt-0 font-dm font-regular text-sm text-[#767676]'>Products from {itemOffset+1} to {
      itemOffset+itemsPerPage<items.length? itemOffset+itemsPerPage: items.length
      } of {items.length}</p>
    </>
  );
}

export default Pagination