import Image from 'next/image';
import React from 'react';
import nextImage from '../../assets/next-js-image.png'

const GalleryPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Image Optimizations</h2>
            <h2 className='text-center text-2xl'>Regular Image Tag</h2>
            <img src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E" alt="next-image" className='mx-auto mb-2' width={500} height={500} />
            <h2 className='text-center text-2xl'>Next Js Image Component</h2>
            <Image src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E" alt="next-image" className='mx-auto' width={500} height={500} />
            <h2 className='text-center text-2xl'>Local Image</h2>
            <Image src={nextImage} alt="next-image" className='mx-auto' width={500} height={500} />
        </div>
    );
};

export default GalleryPage;