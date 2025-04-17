import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const BookCard = () => {
  const [books, setBooks] = useState([]);

  const getBook = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?q=the&limit=50');
      const data = await response.json();
      setBooks(data.docs || []);
      console.log("data",data)
    } catch (error) {
      console.error('도서 불러오기 실패:', error);
    }
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
