import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../cardComponent';

function BrowserMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44302/api/category')
            .then(response => response.json())
            .then(
                (result) => {
                    setCategories(result)
                });
    })

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {categories.map((category) =>
                        <div key={category.name + 1} className='col-sm-7 col-md-6 col-lg-3'>
                            <Link key={category.name} to={'/' + category.name} >
                                <CardComponent key={category.description} name={category.name} description={category.description} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default BrowserMenu;