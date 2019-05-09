import React from 'react';
import GotCard from '../GotCard';
import './style.css';

function Main({ images, handler, clickLost }) {
    console.log(images);
    const className = clickLost ? 'character animate shake' : 'character'
  
    return (
        <main>
            <div id="image-wrapper">
                {images.map(image => (
                    <GotCard 
                      className={className}
                      key={image.id} 
                      id={image.id}
                      name={image.name}
                      image={image.image} 
                      handler={handler}
                      clickLost={clickLost}
                      ></GotCard>
                ))}
            </div>
        </main>
    );
}

export default Main;