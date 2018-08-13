import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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
//glue between react and redux
function mapStateToProps(state) {
    //whatever is returned here will show up as props inside of Booklist
    return {
        books: state.books
    };
}

//container - component aware of state
export default connect(mapStateToProps)(BookList);