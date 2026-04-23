import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import {
  ForbiddenWrapper,
  ContentBox,
  AnimatedIconWrapper,
  ErrorCode,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from './ForbiddenPage.styles';

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <ForbiddenWrapper>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ContentBox>
              <AnimatedIconWrapper>
                <div className="pulse-ring" />
                <ShieldAlert size={38} className="icon" />
              </AnimatedIconWrapper>
              
              <ErrorCode>403</ErrorCode>
              <Title>Access Forbidden</Title>
              <Description>
                You do not have the required permissions to access this page. 
                Please contact your administrator if you believe this is a mistake.
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
    </ForbiddenWrapper>
  );
};

export default ForbiddenPage;
