import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <WrapperHeader>
      {/* <ButtonAddDashboard>addDashboard</ButtonAddDashboard> */}
    </WrapperHeader>
  );
};

const ButtonAddDashboard = styled.button``;
const WrapperHeader = styled.div`
  width: 100%;
  background-color: lightcyan;
  height: 10vh;
`;
