import React from 'react'
import { useState ,useEffect} from 'react'
import BookCard from '../component/BookCard'

const Books = () => {
//   const [bookList, setBookList] = useState([]);
//   const[query, setqeury] = useSearchParams();
//     const getBooks = async () => {
//         // let searchQuery = query.get("q")||("");
//         console.log("쿼리값",searchQuery)
//         let url = `https://openlibrary.org/search.json`
//         let response = await fetch(url);
//         let data = await response.json();
//         setproductList(data);
//       }

//       useEffect(() => {
//         getBooks();
//       }, [query])

  return (
    <div id='books'>
                  {/* (bookList.map((menu) => (
            <BookCard item={menu} />

          ))) */}
          <BookCard/>
    </div>
  )
}

export default Books
