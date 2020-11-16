import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {
        console.log(book._id)

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({savedBooks:[...this.state.savedBooks, savedBook]}))
                .then(console.log(this.state.savedBooks))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="subtitle has-text-centered mb-6 pb-6">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map(result => (
                                <div className="card mb-3 py-5 px-5" key={result._id}>
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                        <h5 className="card-header-title">{result.title}  <span className="has-text-weight-light">: {result.authors}</span></h5>
                                        <p className="card-content">{result.description}</p>
                                        <div>
                                            <a href={result.link} className="button is-rounded is-outlined is-dark mt-3" target="_blank" >View</a>
                                            <button onClick={() => this.handleSave(result)} className="button is-rounded is-outlined is-success mt-3 ml-3" >
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Remove" : "Save"}
                                            </button>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;