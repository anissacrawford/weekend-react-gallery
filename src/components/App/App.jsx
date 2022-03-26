import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';

import GalleryList from "../GalleryList/GalleryList";

function App() {

    const [galleryList, setGalleryList] = useState([])
    
    useEffect(() => {
      getList()
    }, [] )

    const getList = () => {
      console.log('in GET');

      axios.get('/gallery').then(response => {
        setGalleryList(response.data);
      }).catch(err => {
        console.log(err);
      })
    }

    // const handleLike = () => {
    //   console.log('in PUT');
      
    //   axios.put(`/gallery/like/${id}`)
    //   .then(response => {
    //     console.log('liked!', response);
    //     getList();
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <GalleryList
        galleryList={galleryList}
        />
      </div>
    );
}

export default App;
