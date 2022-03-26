import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList, getList}) {

    const updateLike = (id) => {
       return( 
        <>
            <button onClick={(event) => handleLike(id)}>LIKE</button> 
        </>
       )
    }

    const handleLike = (id) => {
        console.log('in PUT');
        
        axios.put(`/gallery/like/${id}`)
        .then(response => {
          console.log('liked!', response);
          getList();
        }).catch(err => {
          console.log(err);
        })
      }

    return (
        <>
        <p>Gallery goes here</p>
        <div>
        {galleryList.map(listItem => (
            <GalleryItem
            key={listItem.id}
            listItem = {listItem}
            updateLike={updateLike}
            />
        ))}
        </div>
        </>
    )
}

export default GalleryList;