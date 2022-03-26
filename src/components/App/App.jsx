import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';

import GalleryList from "../GalleryList/GalleryList";

function App() {

    // state variable for gallery list 
    const [galleryList, setGalleryList] = useState([])
    
    // runs get on ready
    useEffect(() => {
      getList()
    }, [] )

    // gets gallery data from array
    const getList = () => {
      console.log('in GET');

      axios.get('/gallery').then(response => {
        setGalleryList(response.data);
      }).catch(err => {
        console.log(err);
      })
    }

    //adds header and gallery to dom 
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <GalleryList
        galleryList={galleryList}
        getList={getList}
        />
      </div>
    );
}

export default App;
