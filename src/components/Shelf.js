import React, {Component} from 'react'
import Book from './Book.js'

class Shelf extends Component {
    state = {  }
    
    render() { 
      console.log(this.props.books)
        return ( <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {this.props.books && this.props.books.map(book => <Book key={book.id} {...book} />)}
            </li>
            
          </ol>
        </div>
      </div> );
    }
}
 
export default Shelf;