import styled from '@emotion/styled';
import React from 'react';
import './button.css';

const ConfirmButton = styled.button`
  background-color: hsl(278, 68%, 11%);
  border-radius: 10px;
  border: none;
  width: 100%;
  color: white;
  padding: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: all .5s;
  :hover{
    background-color: hsl(279, 6%, 55%);
  }
`

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <ConfirmButton type="button" {...props}>
      {label}
    </ConfirmButton>
  );
};
