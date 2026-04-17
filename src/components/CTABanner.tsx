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
      <button className="bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-black/20 text-sm">
        {btnText}
      </button>
      <p className="text-gray-400 text-sm mt-3 italic">{subText}</p>
    </div>
  )
}

export default CTABanner
