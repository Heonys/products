import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 400px;
  background-color: white;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #1b57cf;
  }
`;

export const Img = styled.img`
  border-radius: 10px 10px 60px 10px;
  height: 300px;
  background-color: lightgray;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: left;
`;

export const Brand = styled.p`
  font-weight: bold;
  font-size: large;
  background-color: white;
`;

export const Title = styled.p`
  font-weight: normal;
  background-color: white;
`;

export const Price = styled.p`
  color: gray;
  padding-top: 3px;
  padding-bottom: 10px;
  background-color: white;
  font-weight: bold;
`;

export const Flex = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  gap: 10px;
`;
