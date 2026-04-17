import React from 'react'

export interface Step {
  /** Either a step number ("1", "2", …) or a Material Icon name (e.g. "check"). */
  num: string
  title: string
  desc: string
  note?: string
}

interface ProcessStepsProps {
  title: string
  subtitle: string
  steps: Step[]
}

const isNumericStep = (s: string) => /^[0-9]+$/.test(s)

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, subtitle, steps }) => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-4 font-display">
          {title}
        </h2>
        <p className="text-white/55 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1
            return (
              <div
                key={i}
                className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isLast
                    ? 'bg-white text-gray-900 shadow-xl'
                    : 'border border-white/15 bg-white/5 text-white backdrop-blur-sm'
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold mb-5 ${
                    isLast ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {isNumericStep(step.num) ? (
                    step.num
                  ) : (
                    <span className="material-icons" style={{ fontSize: '18px' }}>
                      {step.num}
                    </span>
                  )}
                </span>
                <h3 className="text-lg font-bold mb-3 leading-tight">{step.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isLast ? 'text-gray-600' : 'text-white/65'
                  }`}
                >
                  {step.desc}
                </p>
                {step.note && (
                  <p
                    className={`text-xs mt-4 italic ${
                      isLast ? 'text-gray-400' : 'text-white/40'
                    }`}
                  >
                    {step.note}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
