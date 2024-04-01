import { useEffect, useState } from "react";
const Bookinsert = () =>{
    // const [formData, setFormData] = useState({
    //     bookid: '',
    //     title: '',
    //     description: '', 
    //     publish_year: '',
    //     quantity:''
    //   });
    
    return( 
    <div>
        <form>
          <label>
            Title:
            <input type="text" name="title"/>
          </label>
          <br />
          <label>
            Body:
            <textarea name="body"/>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      
          <div>
            <h2>New Post:</h2>
            <p><strong>ID:</strong> </p>
            <p><strong>Title:</strong> </p>
            <p><strong>Body:</strong> </p>
            <p><strong>UserID:</strong> </p>
          </div>
       
        
      
            <h2>All Posts:</h2>
            <ul>
             
               
                  <strong>ID:</strong><br />
                  <strong>Title:</strong> <br />
                  <strong>Body:</strong> <br />
                  <strong>UserID:</strong>
              
            
            </ul>
       
     
      </div>)


     

            
}