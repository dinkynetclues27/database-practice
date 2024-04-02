import React, { useEffect, useState } from "react";
import './style.css'; 

function Booktable(){
    const [books, setBooks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editedBook, setEditedBook] = useState({
        title: "",
        description: "",
        publish_year: "",
        quantity: ""
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:4000/bookfetch');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    setBooks(data);
                } else {
                    console.error('Error fetching books:', xhr.statusText);
                }
            }
        };
        xhr.send();
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedBook({ ...books[index] });
    };
    const handleDelete = (id,idx) => {
        let response = window.confirm(`delete id : ${id}`);
        if(response){
            let book = [...books];
            book.splice(idx,1);
            setEditedBook(book);
        }
        else{
            alert("deleted successfully")
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCancelEdit = () => {
        setEditIndex(-1);
    };

    const handleSaveEdit = (bookid) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `http://localhost:4000/bookupdate/${bookid}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Book updated successfully');
                    fetchBooks();
                    setEditIndex(-1); 
                } else {
                    console.error('Error updating book:', xhr.statusText);
                }
            }
        };
        xhr.send(JSON.stringify(editedBook));
    };

    const editForm = (book, index) => (
        <div key={index} className="edit-form">
            <h2>Edit Book</h2>
            <input type="text" name="title" value={editedBook.title} onChange={handleInputChange} />
            <input type="text" name="description" value={editedBook.description} onChange={handleInputChange} />
            <input type="text" name="publish_year" value={editedBook.publish_year} onChange={handleInputChange} />
            <input type="text" name="quantity" value={editedBook.quantity} onChange={handleInputChange} />
            <button onClick={() => handleSaveEdit(book.bookid)}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
        </div>
    );

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
                                <button onClick={() => handleEdit(idx)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(idx)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editIndex !== -1 && editForm(books[editIndex], editIndex)}
        </div>
    );
}

export default Booktable;
