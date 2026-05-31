import React from "react";
import {
  LoaderWrapper,
  SpinnerContainer,
  SpinnerWrapper,
} from "./Loader.styles";
const Loader = ({ fullScreen = false, size = 48, text = "Loading..." }) => {
  return (
    <LoaderWrapper $fullScreen={fullScreen}>
      <SpinnerContainer>
        <SpinnerWrapper $size={size}>
          <div className="center-dot" />
        </SpinnerWrapper>
        {text && <div className="loader-text">{text}</div>}
      </SpinnerContainer>
    </LoaderWrapper>
  );
};

export default Loader;
