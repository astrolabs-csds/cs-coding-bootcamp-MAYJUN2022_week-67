import { useState, useEffect } from 'react';
// import Card from './Card.js';
import MCard from './MCard.js';

function CardsScreen() {

  let [loadingState, setLoadingState] = useState(true);
  let [dataState, setDataState] = useState([])

  useEffect(

    // Event handler
    function(){
      
      fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(
        function(stringResponse) {
          return stringResponse.json()
        }
      )
      .then(
        function(jsonResponse) {

          setTimeout(
            function() {
              setLoadingState(false);
              setDataState(jsonResponse.slice(0,10))
            },2000
          );

        }
      )
      .catch(
        function(error) {
          console.log(error)
        }
      );

    },

    // List of events
    []
  )

  if (loadingState === true) {
    return (
      <center style={{marginTop: '200px'}}>
        <p style={{fontSize: '50px'}}>Loading...</p>
      </center>
    )
  }
  else {
    return (
      <div className='container'>

        <div className='row'>

          {
            dataState.map(
              function(obj) {
                return(
                  <div style={{marginBottom: '20px'}} className='col col-md-4 col-sm-12'>
                    <MCard 
                      imageSrc={obj.thumbnailUrl}
                      title={obj.title}
                    />
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    );
  }



}

export default CardsScreen;
