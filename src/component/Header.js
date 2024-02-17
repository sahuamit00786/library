import React, { useState } from 'react'
import axios from 'axios';
import Card from './Card';

const Header = () => {

  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    evt.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBCcY6LCFypsZgBz3MVmHn1dDGLLAYrCN0`)
      .then(data => {
        setData(data.data.items);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="card text-center w-80 border-0 mt-8">

        <div className="card-body card-body-pad m-auto w-50">
          <h5 className="card-title card-title-fs card-title-col ">find book of your choice</h5>
          <p className="card-text  fs-4 mt-4 mb-4 card-text-col">" You want weapons? We’re in a library. Books are the best weapon in the world. This room’s the greatest arsenal we could have. Arm yourself! "</p>
          <form className="d-flex justify-content-center" onSubmit={searchBook}>
            <input className="form-control me-2 w-50 " value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="The Lion King ..." aria-label="Search" />
            <button className="btn btn-outline-success mt-3" type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="container">
        {
          <Card book={bookData} />
        }
      </div>

    </div>
  )
}

export default Header