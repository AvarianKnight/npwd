import styled from 'styled-components';
import Banner from '../../../assets/bennys/bennys_banner.png';

const BannerBG = styled.div`
  background: url(${Banner});
  background-repeat: no-repeat;
  width: 100%;
  height: 100px;
  background-position: center;
`;

const BennysTitle = () => {
  return <BannerBG />;
};

export default BennysTitle;
