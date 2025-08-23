import React from 'react'

type ButtonProps = {
  value: string
}

function Button({ value }: ButtonProps) {
  return (
    <div>
        <button className='lg:w-[400px] cursor-pointer w-full py-5 rounded-xl bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] text-white Inter-bold'>{ value }</button>
    </div>
  )
}

export default Button