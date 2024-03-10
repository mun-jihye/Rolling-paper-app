import React from 'react';
import styled from 'styled-components';

/**
 *
 * @param {object} props
 * @param {string} props.message 롤링페이페 메세지 내용
 * @param {boolean} props.ismodal 모달 여부
 * @param {string} props.font 서버에서 받아온 폰트
 * @returns
 */
const CardMessage = ({ message, ismodal, font }) => {
  return (
    <Message $font={font} ismodal={ismodal}>
      {message}
    </Message>
  );
};

const Message = styled.div`
  font-family: ${props => props.$font};
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  color: #5a5a5a;
  height: ${({ ismodal }) => (ismodal ? '28rem' : '10.6rem')};
  overflow: ${({ ismodal }) => (ismodal ? 'scroll' : 'hidden')};
  text-overflow: ${({ ismodal }) => (ismodal ? 'initial' : 'ellipsis')};

  ${props =>
    !props.ismodal &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}

  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-height: ${({ ismodal }) => (ismodal ? '20.5rem' : '6.5rem')};
    -webkit-line-clamp: 3;
  }
`;
export default CardMessage;
