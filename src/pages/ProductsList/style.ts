import styled from '@emotion/styled';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1.5px solid #9ca3af;
  border-radius: 10px;
  padding: 8px;
  width: 50%;
`;

export const Button = styled.button`
  background-color: #10b981;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  width: 100px;
`;

export const ViewMore = styled.button`
  color: #10b981;
  cursor: pointer;
  font-weight: bold;
  border: none;
  font-size: large;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
`;
