import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {
    return (
        <>
        <p>Gallery goes here</p>
        <div>
        {galleryList.map(listItem => (
            <GalleryItem
            key={listItem.id}
            listItem = {listItem}
            />
        ))}
        </div>
        </>
    )
}

export default GalleryList;