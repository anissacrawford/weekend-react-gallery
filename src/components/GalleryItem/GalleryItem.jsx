import axios from 'axios';
import {useState} from 'react';


function GalleryItem({listItem, getList}){

    // state variable for caption
    const [addCaption, setAddCaption] = useState(true)

    // adds like button 
    const updateLike = (id) => {
        return( 
         <>
             <button onClick={(event) => handleLike(id)}>LIKE</button> 
         </>
        )
     }
 
    // put route to handle likes
    const handleLike = (id) => {
        console.log('in PUT');
        
        axios.put(`/gallery/like/${id}`)
        .then(response => {
          console.log('liked!', response.data);
          getList();
        }).catch(err => {
          console.log(err);
        })
      }

    return (
        <>
        <div className="imageContainer" >

            {/* conditional rendering for image click */}
            <div onClick={() => setAddCaption(!addCaption)}>
                {addCaption ? <img className="image" src={listItem.path}/> :
                <div>
                <p>{listItem.description}</p>
                </div>
                }
            </div>

            {/* Runs updateLike function which adds like button  */}
            {updateLike(listItem.id, listItem.likes)}

             {/* Shows likes on DOM */}
             <p>{listItem.likes} people like this</p>
            
        </div>
        </>
    )
}

export default GalleryItem;