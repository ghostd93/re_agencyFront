import React from 'react';
import { Link } from 'react-router';
import SearchResult from '../../SearchResult';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        console.log(this.props);
        this.setState({term});
        this.props.onTermChange(term);
    }


    render() {
        return (
            <div class="col-sm-3 col-md-3">
            <form class="navbar-form" role="search">
            <div class="input-group search">
                <input type="text" class="form-control" placeholder="Search for..." onChange={event => this.onInputChange(event.target.value)}/>
                <div class="input-group-btn">
                    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                </div>
            </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;

