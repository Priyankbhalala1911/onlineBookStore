import React from 'react';
import "./category.css"
const Category = ({ filterItem, BookList }) => {
    return (
        <div>
            <nav className='bookCategory'>            {
                BookList.map((curElem) => {
                    return (
                        <>

                            <ul>
                                <li><button
                                    onClick={() => { filterItem(curElem) }}>{curElem}</button></li>
                            </ul>

                        </>
                    )
                })
            }
            </nav>
        </div>
    )
}

export default Category