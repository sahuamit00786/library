import React from 'react'

const Card = ({ book }) => {
  console.log(book);
  return (
    <div className='amit'>
      {
        book && book.map((item) => {
          let imageLink = item.volumeInfo.imageLinks;
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          if (thumbnail != undefined || imageLink != undefined) {
            return (
              <>
                <div className='cardFlex'>
                  <div className="card BookCard ">
                    <img src={imageLink.smallThumbnail} className="card-img-top" alt="cover_img" />
                    <div className="card-body card-p">
                      <h5 className="card-title">{item.volumeInfo.title}</h5>
                      <p className="card-text">{item.volumeInfo.description}</p>
                    </div>
                    <a href={item.volumeInfo.infoLink} className="btn btn-primary">More ..</a>
                  </div>
                </div>
              </>
            )
          }
        })
      }
    </div>
  )
}

export default Card;