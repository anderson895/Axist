import React from 'react'

interface CTABannerProps {
  btnText?: string
  subText?: string
}

const CTABanner: React.FC<CTABannerProps> = ({
  btnText = 'Start Hiring',
  subText = 'Zero Risk: You pay nothing if you don\'t hire anyone.',
}) => {
  return (
    <div className="text-center py-8">
      <button className="glass-button text-white px-8 py-3.5 rounded-full font-semibold text-sm">
        {btnText}
      </button>
      <p className="text-white/55 text-sm mt-3 italic">{subText}</p>
    </div>
  )
}

export default CTABanner
