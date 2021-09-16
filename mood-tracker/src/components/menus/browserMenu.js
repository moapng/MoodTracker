import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../cardComponent';

class BrowserMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44302/api/category")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({ categories: result })
                    console.log(this.state.categories);
                }
            );
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.state.categories.map((category) =>
                            <div className="col-6 col-md-3 offset-md-3">
                                <Link to={"/" + category.name} >
                                    <CardComponent src="" alt="" name={category.name} description={category.description} />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
export default BrowserMenu;