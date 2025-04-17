import React from 'react'
import { useState ,useEffect} from 'react'
import BookCard from '../component/BookCard'

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?q=the&limit=50');
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (error) {
      console.error('도서 불러오기 실패:', error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div id='books'>
                  {bookList.map((book) => (
            <BookCard key={book.key} item={book} />

          ))}
          {/* <BookCard/> */}
    </div>
  )
}

export default Books
