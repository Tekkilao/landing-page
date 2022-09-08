import React from 'react'

//todo need to take some time later to fix the color change on the button once you hover over it

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[12px]`}>
      Get Started
    </button>
  )
}

export default Button