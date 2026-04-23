import React from 'react';
import { LoaderWrapper, SpinnerContainer, SpinnerSvg } from './Loader.styles';

const Loader = ({ fullScreen = false, size = 42, text = "Loading..." }) => {
  return (
    <LoaderWrapper $fullScreen={fullScreen}>
      <SpinnerContainer>
        <SpinnerSvg 
          width={size} 
          height={size} 
          viewBox="0 0 50 50"
        >
          <circle 
            className="path"
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            strokeWidth="3.5" 
          />
        </SpinnerSvg>
        {text && <div className="loader-text">{text}</div>}
      </SpinnerContainer>
    </LoaderWrapper>
  );
};

export default Loader;
