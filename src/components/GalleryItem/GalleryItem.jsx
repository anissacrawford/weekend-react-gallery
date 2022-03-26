import axios from 'axios';
import {useState} from 'react';

function GalleryItem({listItem, updateLike}){
    const [addCaption, setAddCaption] = useState(true)

    return (
        <>
        <div>
            
            <div onClick={() => setAddCaption(!addCaption)}>
                {addCaption ? <img className="image" src={listItem.path}/> :
                <div>
                <p>{listItem.description}</p>
                </div>
                }
            </div>

            <p>{listItem.like}</p>
            {updateLike(listItem.id)}
            
        </div>
        </>
    )
}

export default GalleryItem;