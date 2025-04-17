import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const BookCard = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const getBook = async () => {
    let url = `https://openlibrary.org/search.json`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data)
    setProduct(data)
  }
  useEffect(() => {
    getBook();
  }, [])
  return (
    <div>
      <img src="" alt="" />
      <h3>title</h3>
      <h4>저자</h4>
    </div>
  )
}

export default BookCard
