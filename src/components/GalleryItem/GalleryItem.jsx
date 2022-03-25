import axios from 'axios';

function GalleryItem({listItem}){
    return (
        <>
        <div>
            <img className="image" src={listItem.path}/>
            <p>{listItem.description}</p>
            <p>{listItem.like}</p>
            <button>LIKE</button>
        </div>
        </>
    )
}

export default GalleryItem;