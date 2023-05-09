import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('https://www.apple.com/vn/iphone/home/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
`;

export default function ImageContainer() {
  return (
    <Container/>
  );
}
