import styled from '@emotion/styled'
import React from 'react'

interface InputProps {
    invalid: string;
}

const Inp = styled.input<{invalid: string}>`
    width: 100%;
    border-radius: 10px;
    border: 2px solid ${props => (props.invalid === "")?'hsl(270, 3%, 87%)':'hsl(0, 100%, 66%)'};
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    outline: none;
    ::placeholder{
        color: hsl(279, 6%, 55%);
        opacity: .5;
        font-size: 15px;
    }
    :focus{
        border: double 2px transparent;
    }
    
    &.invalid{
        border: 2px solid hsl(0, 100%, 66%);
    }
    +span {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 12px;
        color: hsl(0, 100%, 66%);
        padding-top: 5px;
        padding-left: 5px;
    }
    transition: all .25s;
    padding: 0.5rem;
    border-radius: 6px;
    background-image: linear-gradient(white, white), 
                        linear-gradient(to left,hsl(249, 99%, 64%),hsl(278, 94%, 30%));
    background-origin: border-box;
    background-clip: padding-box, border-box;
`

const Div = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
`

export const Input = ({
    invalid = "",
    ...props
}:InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <Div><Inp type="text" invalid={invalid} {...props} /><span>{invalid}</span></Div>
  )
}
