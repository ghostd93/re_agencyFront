import React from 'react';
import { Link, Redirect, Route } from 'react-router';
import SearchResult from '../../SearchResult';
import { connect } from 'react-redux';
import { logout, getUser, getQuery } from '../../../actions/index';

  class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
        this.handleClick = this.handleClick.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
    }
    handleClick(){
        this.props.getQuery(this.state.term);
    }
 


    render() {
        return (
            <div class="col-sm-3 col-md-3">
            <form class="navbar-form" role="search">
            <div class="input-group search">
                <input type="text" class="form-control" placeholder="Search for..." onChange={event => this.onInputChange(event.target.value)}/>
                <div class="input-group-btn">
                <Link to="advertisements" query={{ query: this.state.term }}>
                    <button class="btn btn-default" type="submit" onClick={this.handleClick} ><i class="glyphicon glyphicon-search"></i></button>
                    </Link>
                </div>
            </div>
            </form>
          
        </div>
        );
    }
  }


export default connect(null, { getQuery })(SearchBar);

