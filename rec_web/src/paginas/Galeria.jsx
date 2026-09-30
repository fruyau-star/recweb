import React from 'react';

const Galeria = () => {
    const photos = [
        { id: 1, src: 'url_to_photo1.jpg', alt: 'Photo 1' },
        { id: 2, src: 'url_to_photo2.jpg', alt: 'Photo 2' },
        { id: 3, src: 'url_to_photo3.jpg', alt: 'Photo 3' },
        // Add more photos as needed
    ];

    return (
        <div className="galeria">
            <h1>Galeria de Fotos</h1>
            <div className="galeria-grid">
                {photos.map(photo => (
                    <div key={photo.id} className="galeria-item">
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;
<style jsx>{`
    .galeria-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
    .galeria-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`}</style>