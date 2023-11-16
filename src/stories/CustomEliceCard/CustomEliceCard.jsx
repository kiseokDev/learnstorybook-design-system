import styled from 'styled-components';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const CustomEliceCard = ({ cards }) => {
  return (
    <RootContainer>
      {cards.map(({ src, size, tags, date, title, postId }) => (
        <li key={postId}>
          <ContentWrapper>
            <CardWrapper size={size}>
              <CardImage src={src}></CardImage>
            </CardWrapper>
            <TextWrapper>
              <Title>{title}</Title>
              <HashTagComponent tags={tags}></HashTagComponent>
              <Date>{date}</Date>
            </TextWrapper>
          </ContentWrapper>
        </li>
      ))}
    </RootContainer>
  );
};

const SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large',
};
const RootContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(45%, 50%));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-items: center;
`;

const HashContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

const HashTagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 4px;
`;
const HashTag = styled.li`
  margin: 0;

  div {
    display: flex;
    align-items: center;
    border-radius: 6px;
    background-color: #e0f7fa;
    padding: 0.3em 0.6em;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    span {
      font-size: 0.8em;
      color: #00796b;
    }
  }
`;

const HashTagComponent = ({ tags }) => {
  return (
    <HashContainer>
      <HashTagsWrapper>
        {tags.map((tag, index) => (
          <HashTag key={index}>
            <div tabIndex='0'>
              <span>#{tag}</span>
            </div>
          </HashTag>
        ))}
      </HashTagsWrapper>
    </HashContainer>
  );
};

const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 16px;
  isolation: isolate;
  ${({ size }) =>
    size === SIZES.LARGE
      ? css`
          width: 37.75em;
          height: 21.235em;
        `
      : css`
          width: 24.66em;
          height: 13.874em;
        `}
`;

const ContentWrapper = styled.div`
  color: #191f28;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: none;
  background: transparent;
`;

const CardImage = styled.img`
  display: block;
  width: 100%; // 이미지가 CardWrapper를 꽉 채우도록
  height: auto; // 이미지 비율 유지
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 24px;
  padding-top: 16px;
`;
const Date = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;

  color: #9e9e9e;
  font-weight: 500;
`;

const Title = styled.h6`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
`;

CustomEliceCard.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['medium', 'large']),
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  title: PropTypes.string,
  postId: PropTypes.number,
};
CustomEliceCard.defaultProps = {
  src: null,
  size: 'large',
  tags: null,
  date: null,
  title: null,
  postId: null,
};

export default CustomEliceCard;
