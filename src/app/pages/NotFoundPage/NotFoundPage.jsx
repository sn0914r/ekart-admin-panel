import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';
import {
  NotFoundWrapper,
  ContentBox,
  AnimatedIconWrapper,
  ErrorCode,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from './NotFoundPage.styles';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ContentBox>
              <AnimatedIconWrapper>
                <div className="pulse-ring" />
                <Compass size={38} className="icon" />
              </AnimatedIconWrapper>
              
              <ErrorCode>404</ErrorCode>
              <Title>Page not found</Title>
              <Description>
                Sorry, but we couldn't find the page you are looking for. 
                It may have been moved, deleted, or you might have mistyped the URL.
              </Description>
              
              <ButtonGroup>
                <SecondaryButton onClick={() => navigate(-1)}>
                  <ArrowLeft size={16} />
                  Go Back
                </SecondaryButton>
                <PrimaryButton onClick={() => navigate('/')}>
                  <Home size={16} />
                  Dashboard
                </PrimaryButton>
              </ButtonGroup>
            </ContentBox>
          </div>
        </div>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
