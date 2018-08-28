import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                onClick = {() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
//glue between react and redux - container
function mapStateToProps(state) {
    //whatever is returned here will show up as props inside of Booklist
    return {
        books: state.books
    };
}
//Anything returned from this function would end up 
//as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of our reducers

    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote BoolList from component to container - component aware of state
// it is also aware of dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);