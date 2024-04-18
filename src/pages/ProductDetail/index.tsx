import { useNavigate, useParams } from 'react-router-dom';
import useProductMore from '@/hooks/useProductMore';
import * as S from './style';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useProductMore(id!);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Button onClick={() => navigate(-1)}>목록으로 돌아가기</S.Button>
      {data && (
        <S.DetailBox>
          <S.Img src={data.images[0]} />
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
