import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 90%;
  width: 700px;
  margin: 0 auto;
`;
export const Button = styled.button`
  background-color: #10b981;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  width: 100%;
`;

export const DetailBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  margin-top: 1rem;
`;

export const Img = styled.img`
  border-radius: 10px 10px 60px 10px;
  height: 500px;
  background-color: white;
  margin-bottom: 15px;
  object-fit: fill;
  object-position: center;
`;

export const Brand = styled.h2`
  font-weight: bold;
  background-color: white;
`;

export const Title = styled.h2`
  font-weight: normal;
  background-color: white;
`;

export const Price = styled.p`
  padding-top: 3px;
  padding-bottom: 20px;
  background-color: white;
  color: #4a4949;
`;

export const Description = styled.p`
  background-color: white;
  color: #4a4949;
`;

export const Flex = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  gap: 10px;
  padding-bottom: 3px;
`;
