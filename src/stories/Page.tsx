import styled from '@emotion/styled';
import React, { useState } from 'react';
import bg_mobile from "./images/bg-main-mobile.png";
import bg_desktop from "./images/bg-main-desktop.png";
import icon_complete from "./images/icon-complete.svg";

import { Card, CardBack } from './Card';
import { Input } from './Input';
import { Button } from './Button';

const Point = '800px'

const Top = styled.div`
  padding-top: calc((239 / 375) * 100%);
  position: relative;
  @media screen and (min-width: ${Point}){
    height: 100%;
    padding: 0;
  }
`

const Outer = styled.div`
  width: 100%;
  * {box-sizing: border-box;}
  @media screen and (min-width: ${Point}){
    height: 100vh;
    display: grid;
    grid-template-columns: 30% auto 55%;
    grid-template-row: auto;
  }
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  background-image: url('${bg_mobile}');
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${Point}){
    background-image: url('${bg_desktop}');
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`

const Back = styled.div`
  width: 85%;
  align-self: flex-end;
  filter: drop-shadow(0 0 10px #333);
  @media screen and (min-width: ${Point}){
    width: 80%;
    position: relative;
    /* width: 300px; */
    right: -50%;
  }
`
const Front = styled.div`
  width: 85%;
  position: relative;
  margin-top: -20%;
  filter: drop-shadow(0 0 10px #333);
  @media screen and (min-width: ${Point}){
    width: 80%;
    /* width: 300px; */
    margin-top: 0;
    right: -30%;
  }
`


const Bottom = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  font-family: 'Space Grotesk', sans-serif;
  .thanks {
    text-transform: uppercase;
    letter-spacing: .25rem;
    font-size: 1.5rem;
  }
  .subtitle{
    color: hsl(279, 6%, 55%);
  }
  @media screen and (min-width: ${Point}){
    grid-column: 3;
    margin-top: 0;
    align-content: center;
    max-width: 500px;
    margin: auto;
    img {
      width: 5rem;
      height: auto;
    }
    button {
      font-size: 14px;
    }
  }
`

const Label = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  label {
    color: hsl(278, 68%, 11%);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    padding: .25rem;
  }
`

const Container = styled.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
`

const Container2 = styled.div`
  display: flex;
  max-width: 100%;
  gap: .25rem;
`

const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: ${Point}){
    width: 100%;
  }
  button {
    width: 90%;
  }
`

export const Page: React.FC = () => {
  const [holder, setHolder] = useState("")
  const [number, setNumber] = useState("")
  const [mm, setMm] = useState("")
  const [yy, setYy] = useState("")
  const [cvc, setCvc] = useState("")
  const [ok, setOk] = useState(false)
  const [blank, setBlank] = useState<Record<string,string>>({
    holder: '',
    number: '',
    mm: '',
    yy: '',
    cvc: ''
  })
  const FNs:Record<string,string> = {
    'holder': holder,
    'number': number,
    'mm': mm,
    'yy': yy,
    'cvc': cvc,
  }
  const Check:Record<string,(k:string)=>boolean> = {
    'holder': ()=>true,
    'number': k =>/^(\d{4}\s*){4}$/.test(k),
    'mm': k => {
      let i = parseInt(k)
      return (i > 0 && i < 13)
    },
    'yy': k => /^\d{2}$/.test(k),
    'cvc': k => /^\d{3}$/.test(k),
  }
  function handler() {
    let isBlank = false;
    let newBlank:Record<string,string> = {
      holder: '',
      number: '',
      mm: '',
      yy: '',
      cvc: ''
    }
    for (const key in FNs) {
      if (Object.prototype.hasOwnProperty.call(FNs, key)) {
        const el = FNs[key]
        if(el === ""){
          newBlank[key] = BLANK
          isBlank = true
        }else if(!Check[key](el)){
          newBlank[key] = "Wrong format"
          isBlank = true
        }
      }
    }
    setBlank(newBlank)
    if(!isBlank){
      setOk(true)
    }
  }
  const BLANK = "Can't be blank"
  return (
    <Outer>
      <Top>
        <Inner>
          <Back>
            <CardBack cvc={cvc} />
          </Back>
          <Front>
            <Card number={number} holder={holder} mm={mm} yy={yy}/>
          </Front>
        </Inner>
      </Top>
      {ok
      ?<Bottom>
        <Thanks>
          <img src={icon_complete} alt="icon_complete" />
          <p style={{textAlign: "center", lineHeight: 2}}>
            <div className='thanks'>Thank You!</div>
            <div className='subtitle'>We've added your card details</div>
          </p>
          <Button label='Continue'/>
        </Thanks>
      </Bottom>
      :<Bottom>
        <Label>
          <label htmlFor="holder">Cardholder Name</label>
          <Input id="holder" value={holder} invalid={blank.holder} placeholder="e.g. Jane Appleseed" onChange={e => setHolder(e.target.value)}/>
        </Label>
        <Label>
          <label htmlFor="number">Card Number</label>
          <Input id="number" value={number} invalid={blank.number} pattern='(\d{0,4}\s?){0,4}' placeholder="e.g. 1234 5678 9123 0000" onChange={e => {if(e.target.checkValidity())setNumber(e.target.value)}}/>
        </Label>
        <Container>
          <Label>
            <label>Exp. Date (MM/YY)</label>
            <Container2>
              <Input aria-label='Exp. Month' value={mm} invalid={blank.mm} pattern='\d{1,2}' placeholder='MM' onChange={e => {if(e.target.checkValidity())setMm(e.target.value)}}/>
              <Input aria-label='Exp. Year' value={yy} invalid={blank.yy} pattern='\d{1,2}' placeholder='YY' onChange={e => {if(e.target.checkValidity())setYy(e.target.value)}}/>  
            </Container2>
          </Label>
          <Label>
            <label htmlFor="cvc">CVC</label>
            <Input id="cvc" value={cvc} invalid={blank.cvc} pattern='\d{1,3}' placeholder="e.g. CVC" onChange={e => {if(e.target.checkValidity())setCvc(e.target.value)}}/>
          </Label>
        </Container>
          <Button onClick={handler} label='Confirm'/>
      </Bottom>}
    </Outer>
  );
};
