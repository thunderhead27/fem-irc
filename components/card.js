import tw, { styled } from 'twin.macro'
import Star from '../public/images/icon-star.svg'
import ThankYou from '../public/images/illustration-thank-you.svg'
import React, { useState } from 'react'

export default function Card() {
  const numbers = [1, 2, 3, 4, 5]
  const [visible, setVisible] = useState(true)
  const [active, setActive] = useState(false)

  const CardContainer = styled.div(() => [
    `
    background: radial-gradient(
      98.96% 98.96% at 50% 0%,
      #232a34 0%,
      #181e27 100%
    );
    border-radius: 30px;`,

    tw`h-[23rem] w-[23rem] lg:h-[26rem] lg:w-[26rem] py-8 pl-8 pr-10`,
  ])

  const FirstCard = () => {
    const Button = styled.button(({ active }) => [
      tw`h-11 w-11 rounded-full bg-dBlue items-center justify-center text-mGrey text-sm hover:bg-cOrange hover:text-white`,

      active && tw`bg-mGrey text-white`,
    ])

    const SelectButton = () => {
      return (
        <div tw="flex flex-row justify-between mb-8">
          {numbers.map(number => (
            <Button
              active={active === number}
              onClick={() => {
                setActive(number)
              }}
              key={number}
            >
              {number}
            </Button>
          ))}
        </div>
      )
    }

    console.log(active)

    return (
      <>
        <div tw="h-10 w-10 rounded-full bg-dBlue flex items-center justify-center mb-[30px]">
          <Star />
        </div>
        <h1 tw="font-sans text-[28px] text-white font-bold">How did we do?</h1>
        <p tw="text-lGrey mb-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <SelectButton />
        <button
          tw="bg-cOrange w-full h-[45px] rounded-full text-white font-sans font-bold uppercase"
          onClick={() => setVisible(!visible)}
        >
          Submit
        </button>
      </>
    )
  }

  const SecondCard = () => (
    <div tw="flex flex-col items-center">
      <ThankYou tw="mb-6" />
      <div tw="w-[193px] h-8 bg-dBlue rounded-full text-cOrange flex justify-center items-center mb-8">
        You selected {active} out of 5
      </div>
      <h1 tw="font-sans font-bold text-white text-[28px] mb-2">Thank You!</h1>
      <p tw="text-center text-lGrey text-[15px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  )

  return (
    /* Card Container */
    <CardContainer>{visible ? <FirstCard /> : <SecondCard />}</CardContainer>
  )
}
