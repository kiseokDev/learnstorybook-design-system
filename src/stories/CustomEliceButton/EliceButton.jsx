import { typography } from '../../shared/styles';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
  /* 폰트 & 텍스트 */
  font-family: ${typography.type.primary};
  font-weight: 600;
  letter-spacing: 0.15008px;
  line-height: 24.5px;
  text-decoration: none solid rgb(25, 31, 40);
  text-align: center;
  text-indent: 0px;
  text-transform: none;
  word-spacing: 0px;

  /* 레이아웃 & 박스 */
  display: inline-block;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;

  /* 색깔 & 배경 */
  background-color: ${(props) =>
    props.type === 'primary' ? '#F8F9FA' : '#6700e6'};
  color: ${(props) => (props.type === 'primary' ? '#191F28' : '#FFFFFF')};

  /* Other */
  cursor: pointer;
  white-space: normal;
  vertical-align: middle;

  transition: filter 0.5s ease;
  &:hover {
    filter: brightness(80%);
  }

  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '14px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px 16px';
      case 'medium':
        return '11px 20px';
      case 'large':
        return '12px 24px';
      default:
        return '6px 16px';
    }
  }};
  /* ... 나머지 ... */
`;

/**
 * # 커스텀 엘리스 버튼
 */
export const CustomEliceButton = ({ type, size, children }) => {
  return (
    <Button type={type} size={size}>
      {children}
    </Button>
  );
};
CustomEliceButton.defaultProps = {
  type: 'primary',
  size: 'medium',
};
/**
 * Test
 */
CustomEliceButton.propTypes = {
  /**
   * 버튼의 색상을 정합니다.
   */
  type: PropTypes.oneOf(['primary', 'elice-violet']),
  /**
   * 버튼의 크기를 정합니다.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 버튼 안에 들어갈 내용을 정합니다.
   */
  children: PropTypes.node,
};

export default CustomEliceButton;
