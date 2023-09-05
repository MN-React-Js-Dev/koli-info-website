// components/LoadingButton.js
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const LoadingButton = ({ onClick, isLoading, children }) => {
    return (
      
        <ThreeDots
            height="25"
            width="82"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
};

export default LoadingButton;