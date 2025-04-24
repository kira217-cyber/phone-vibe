import React from 'react';

const Loader = () => {
    return (
        <div className='mt-24 text-center'>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loader;