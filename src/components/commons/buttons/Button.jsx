import React from 'react';
import styled, { css } from 'styled-components';

/**
 *
 * @param {object} props primary, secondary, outline 버튼 불러오기
 * @param {string} props.width 버튼 가로 길이
 * @param {string} props.heigth 버튼 세로 길이
 * @param {string} props.fontSize 버튼 폰트 사이즈
 * @param {string} props.fontWeight 버튼 폰트 굵기
 * @param {React.ReactNode} props.children
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick 버튼 클릭시 동작 함수
 * @returns
 */

function Button({
  width,
  height,
  fontSize,
  fontWeight,
  children,
  onClick,
  disabled,
  className,
  type = 'button',
  ...props
}) {
  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2.4rem;
  width: ${width => (width ? width.width : '20rem')};
  height: ${height => (height ? height.height : '5.6rem')};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.purple600};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: ${fontSize => (fontSize ? fontSize.fontSize : '1.8rem')};
  font-weight: ${fontWeight => (fontWeight ? fontWeight.fontWeight : '700')};
  &:hover {
    background: ${({ theme }) => theme.purple700};
  }
  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.purple900};
    background: ${({ theme }) => theme.purple600};
  }
  &:disabled {
    background: ${({ theme }) => theme.gray300};
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 93vw;
    position: fixed;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 88vw;
    position: fixed;
  }
  ${props =>
    props.outline &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.gray300};
      color: ${({ theme }) => theme.gray900};
      background: ${({ theme }) => theme.white};

      &:hover {
        background: ${({ theme }) => theme.gray100};
        border: 0.1rem solid ${({ theme }) => theme.gray300};
      }
      &:focus {
        background: ${({ theme }) => theme.white};
        border: 0.1rem solid ${({ theme }) => theme.gray500};
      }
      @media ${({ theme }) => theme.breakpoint.tablet} {
        width: 12rem;
        height: 3.6rem;
      }
      @media ${({ theme }) => theme.breakpoint.mobile} {
        width: 12rem;
        height: 2.8rem;
      }
    `}
  ${props =>
    props.secondary &&
    css`
      width: ${width => (width ? width.width : '12.2rem')};
      height: ${height => (height ? height.height : '4rem')};
      padding: 0.7rem 1.6rem;
      border-radius: 0.6rem;
      border: 0.1rem solid ${({ theme }) => theme.purple600};
      background: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.purple700};
      font-size: ${fontSize => (fontSize ? fontSize.fontSize : '1.6rem')};
      font-weight: ${fontWeight =>
        fontWeight ? fontWeight.fontWeight : '400'};

      &:hover {
        background: ${({ theme }) => theme.purple100};
      }
      &:focus {
        border: 0.1rem solid ${({ theme }) => theme.purple800};
        background: ${({ theme }) => theme.white};
      }
    `}
`;

export default Button;
