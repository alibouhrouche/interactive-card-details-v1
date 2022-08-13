import React from 'react';
import card_front from "./images/bg-card-front.png";
import card_back from "./images/bg-card-back.png";
import styled from '@emotion/styled';

const Outer = styled.div`
    max-width: 500px;
`

const Div = styled.div<{
    bg: string
}>`
  background: url('${props => props.bg}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: calc((245 / 447) * 100%);
  position: relative;
`

const Inner = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const SvgText = styled.text`
    white-space: pre;
    fill: white;
`

const UpperCase = styled.tspan`
    text-transform: uppercase;
`

interface CardProps {
    number?: string,
    holder?: string,
    mm?:string,
    yy?:string
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
    number = "0000 0000 0000 0000",
    holder = "Jane Appleseed",
    mm = "00",
    yy = "00",
  ...props
}: CardProps) => {
  const card = number.match(/[0-9]{1,4}/g) ?? []
  return (
    <Outer>
        <Div bg={card_front}>
            <Inner viewBox="0 0 447 245" fill="none">
                <path d="M55.478 75C68.4445 75 78.956 64.4787 78.956 51.5C78.956 38.5213 68.4445 28 55.478 28C42.5115 28 32 38.5213 32 51.5C32 64.4787 42.5115 75 55.478 75Z" fill="white"/>
                <path d="M115.5 51.5C115.5 57.065 110.993 61.575 105.435 61.575C99.876 61.575 95.37 57.065 95.37 51.5C95.37 45.935 99.876 41.425 105.435 41.425C110.993 41.425 115.5 45.935 115.5 51.5V51.5Z" stroke="white"/>
                <SvgText fontFamily="Space Grotesk" fontSize="32" fontWeight="500" letterSpacing="0.05em"><tspan x="32" y="168.572">{(card[0] ?? '0000').padEnd(4,'0')}</tspan></SvgText>
                <SvgText fontFamily="Space Grotesk" fontSize="32" fontWeight="500" letterSpacing="0.05em"><tspan x="129" y="168.572">{(card[1] ?? '0000').padEnd(4,'0')}</tspan></SvgText>
                <SvgText fontFamily="Space Grotesk" fontSize="32" fontWeight="500" letterSpacing="0.05em"><tspan x="226" y="168.572">{(card[2] ?? '0000').padEnd(4,'0')}</tspan></SvgText>
                <SvgText fontFamily="Space Grotesk" fontSize="32" fontWeight="500" letterSpacing="0.05em"><tspan x="323" y="168.572">{(card[3] ?? '0000').padEnd(4,'0')}</tspan></SvgText>
                <SvgText fontFamily="Space Grotesk" fontSize="16" fontWeight="500" letterSpacing="0.05em"><UpperCase x="32" y="215.536">{holder}</UpperCase></SvgText>
                <SvgText fontFamily="Space Grotesk" fontSize="16" fontWeight="500" letterSpacing="0.05em"><tspan x="363" y="215.536">{mm.padStart(2,'0')}/{yy.padStart(2,'0')}</tspan></SvgText>
            </Inner>
        </Div>
    </Outer>
  );
};

export const CardBack = ({
    cvc = "000"
}:{
    cvc?: string
}) => (
    <Outer>
        <Div bg={card_back}>
            <Inner viewBox="0 0 447 245" fill="none">
                <SvgText fontFamily="Space Grotesk" fontSize="16" fontWeight="500" letterSpacing="0.05em"><tspan x="357" y="125.536">{cvc}</tspan></SvgText>
            </Inner>
        </Div>
    </Outer>
)