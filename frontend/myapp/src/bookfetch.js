import React, { useEffect, useState } from "react";
import './style.css'; 

function Booktable(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/bookfetch')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="booktable-container">
            <table className="booktable-table">
                <thead>
                    <tr>
                        <th>Book Id:</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Publish year</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, idx) => (
                        <tr key={idx}>
                            <td>{book.bookid}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.publish_year}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button >Edit</button>
                            </td>
                            <td>
                                <button >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Booktable;
