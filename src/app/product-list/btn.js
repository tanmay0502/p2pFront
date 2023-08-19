"use client"
import React, { useState } from 'react';
import Link from "next/link";



const PaginationButtons = ({ currentPage }) => {
    const currentPageNumber = parseInt(currentPage);
    const [visibleButtons, setVisibleButtons] = useState([
      currentPageNumber - 1,
      currentPageNumber,
      currentPageNumber + 1,
    ]);
  
    const handleClick = (pageNumber) => {
      if (pageNumber === currentPageNumber) return;
  
      if (pageNumber > currentPageNumber) {
        setVisibleButtons([pageNumber - 1, pageNumber, pageNumber + 1]);
      } else {
        if (pageNumber > 1) {
          setVisibleButtons([pageNumber - 2, pageNumber - 1, pageNumber]);
        } else {
          setVisibleButtons([1, 2, 3]);
        }
      }
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {visibleButtons.map((pageNumber) => (
          <Link
            href={`/product-list/${pageNumber}`}
            key={pageNumber}
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              margin: '0 5px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              color: pageNumber === currentPageNumber ? '#333' : '#333',
              backgroundColor: pageNumber === currentPageNumber ? '#99CDFF' : 'transparent',
              cursor: 'pointer',
              display: pageNumber >= 1 ? 'block' : 'none',
            }}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    );
  };
  
  export default PaginationButtons;