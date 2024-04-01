import { useEffect, useState } from "react";
function Booktable(){
    const[books,setbooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/bookfetch')
        .then(response => response.json())
        .then(data => setbooks(data))
        .catch(error=> console.error(error));
    },[]);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Book Id:</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>publish year</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, idx)=>(
                        <tr key={idx}>
                            <td>{book.bookid}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.publish_year}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Booktable;