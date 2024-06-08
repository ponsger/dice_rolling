import React from 'react'

export default function ShowDice({number}) {
    const numbers =['one','two','three','four','five','six'];

    const getTextNumber = () =>{
        return numbers[number-1];
    }
  return (
    <div>
        <img width='50%' srcSet={'img/'+getTextNumber()+'.png'} alt={'dice'+getTextNumber()} />
    </div>
  )
}
