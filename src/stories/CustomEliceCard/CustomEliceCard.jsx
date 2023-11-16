import styled from 'styled-components';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
};

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
  margin: 0.5em;

  div {
    display: flex;
    align-items: center;
    border-radius: 6px;
    background-color: #e0f7fa; // 예시 색상
    padding: 0.3em 0.6em;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    span {
      font-size: 0.8em;
      color: #00796b; // 예시 색상
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

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(45%, 50%));
  gap: 1.5rem;
  list-style: none;

  > li {
    box-sizing: border-box;
    margin: 0;
  }
`;
const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 16px;
  isolation: isolate;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;

  ${({ size }) =>
    size === 'large'
      ? css`
          max-width: 604px;
          max-height: 339.75px;
        `
      : css`
          max-width: 394.663px;
          max-height: 221.988px;
        `}
`;

const TextWrapper = styled.div`
  padding-bottom: 24px;
  padding-top: 16px;
`;
const Date = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  font-family: Pretendard Variable, Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI,
    Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, sans-serif;
  color: #9e9e9e;
  font-weight: 500;
`;

const Title = styled.h6`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  font-family: Pretendard Variable, Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI,
    Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, sans-serif;
`;
// main .MuiBox-root css-akbe1r {
// 	/* Font & Text */
// 	font-family: Pretendard, "Noto Sans KR", "Malgun Gothic", Helvetica, "Myriad Pro", Arial;
// 	font-size: 16px;
// 	font-style: normal;
// 	font-variant: normal;
// 	font-weight: 400;
// 	letter-spacing: 0.15008px;
// 	line-height: 16px;
// 	text-decoration: none solid rgba(0, 0, 0, 0.87);
// 	text-align: start;
// 	text-indent: 0px;
// 	text-transform: none;
// 	vertical-align: baseline;
// 	white-space: normal;
// 	word-spacing: 0px;

// 	/* Color & Background */
// 	background-attachment: scroll;
// 	background-color: rgba(0, 0, 0, 0);
// 	background-image: none;
// 	background-position: 0% 0%;
// 	background-repeat: repeat;
// 	color: rgba(0, 0, 0, 0.87);

// 	/* Box */
// 	height: 4344.9px;
// 	width: 1519.2px;
// 	border: 0px none rgba(0, 0, 0, 0.87);
// 	border-top: 0px none rgba(0, 0, 0, 0.87);
// 	border-right: 0px none rgba(0, 0, 0, 0.87);
// 	border-bottom: 0px none rgba(0, 0, 0, 0.87);
// 	border-left: 0px none rgba(0, 0, 0, 0.87);
// 	margin: 0px;
// 	padding: 64px 0px 0px;
// 	max-height: none;
// 	min-height: 0px;
// 	max-width: none;
// 	min-width: 0px;

// 	/* Positioning */
// 	position: static;
// 	top: auto;
// 	bottom: auto;
// 	right: auto;
// 	left: auto;
// 	float: none;
// 	display: block;
// 	clear: none;
// 	z-index: auto;

// 	/* List */
// 	list-style-image: none;
// 	list-style-type: disc;
// 	list-style-position: outside;

// 	/* Table */
// 	border-collapse: separate;
// 	border-spacing: 0px 0px;
// 	caption-side: top;
// 	empty-cells: show;
// 	table-layout: auto;

// 	/* Miscellaneous */
// 	overflow: visible;
// 	cursor: auto;
// 	visibility: visible;

// 	/* Effects */
// 	transform: none;
// 	transition: all 0s ease 0s;
// 	outline: rgb(255, 0, 0) dashed 0.8px;
// 	outline-offset: 0px;
// 	box-sizing: border-box;
// 	resize: none;
// 	text-shadow: none;
// 	text-overflow: clip;
// 	word-wrap: normal;
// 	box-shadow: none;
// 	border-top-left-radius: 0px;
// 	border-top-right-radius: 0px;
// 	border-bottom-left-radius: 0px;
// 	border-bottom-right-radius: 0px;
// }
const ContentWrapper = styled.div`
  color: #191f28;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: none;
  background: transparent;
`;
export const CustomEliceCard = ({ src, size, tags, date, title }) => {
  return (
    <Wrapper>
      <li>
        <ContentWrapper>
          <CardWrapper>
            <CardImage size={size} src={src}></CardImage>
          </CardWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <HashTagComponent tags={tags}></HashTagComponent>
          </TextWrapper>
          <Date>{date}</Date>
        </ContentWrapper>
      </li>
    </Wrapper>
  );
};

CustomEliceCard.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['medium', 'large']),
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  title: PropTypes.string,
};

CustomEliceCard.defaultProps = {
  src: null,
  size: 'large',
  tags: ['LPL', 'T1', 'LCK'],
  date: '2023. 11. 16',
  title: '업무 효율을 위한 자동화 툴 추천 3가지',
};

export default CustomEliceCard;
