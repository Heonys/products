import { useNavigate, useParams } from 'react-router-dom';
import { useProductMore } from '@/hooks';
import * as S from './style';
import { useState } from 'react';
import { PrevButtonIcon, NextButtonIcon } from '@/icon';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useProductMore(id!);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <S.Container>
      <S.Button onClick={() => navigate(-1 as any, { replace: true })}>목록으로 돌아가기</S.Button>
      {data && (
        <S.DetailBox>
          {index > 0 && (
            <S.PrevButton onClick={() => setIndex((prev) => prev - 1)}>
              <PrevButtonIcon />
            </S.PrevButton>
          )}

          <S.Img src={data.images[index]} />
          {index < data.images.length - 1 && (
            <S.NextButton onClick={() => setIndex((prev) => prev + 1)}>
              <NextButtonIcon />
            </S.NextButton>
          )}
          <S.Flex>
            <S.Brand>{data.brand}</S.Brand>
            <S.Title>{data.title}</S.Title>
          </S.Flex>
          <S.Price>Price: {data.price}</S.Price>
          <S.Description>{data.description}</S.Description>
        </S.DetailBox>
      )}
    </S.Container>
  );
};

export default ProductDetail;
