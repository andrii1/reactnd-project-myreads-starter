import React, {Component} from 'react'
import Shelf from '../components/Shelf.js'
import Button from '../components/Button.js'
import { getAll } from '../BooksAPI.js'

class Home extends Component {

  async componentDidMount(){
    try {
      const books = await getAll();
      this.props.addBooks(books);
      console.log(this.props.addBooks(books));
    } catch (error) {
      console.log(error);
    }
  }
    state = {  }
    render() { 
        return ( <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
           <Shelf title="Currently Reading" books={this.props.currentlyReading} />
           <Shelf title="Want To Read" books={this.props.wantToRead} />
           <Shelf title="Read" books={this.props.read} />
          </div>
        </div>
        <Button />
      </div> );
    }
}
 
export default Home;