import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList, updateLike, getList}) {

    // loops through gallery list and renders items on the dom 
    return (
        <>
        <p>Gallery goes here</p>
        <div className="mainDiv">
        {galleryList.map(listItem => (
            <GalleryItem
            key={listItem.id}
            listItem = {listItem}
            updateLike={updateLike}
            getList={getList}
            />
        ))}
        </div>
        </>
    )
}

export default GalleryList;