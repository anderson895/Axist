import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'

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
  tagline?: string
  steps: Step[]
}

const isNumericStep = (s: string) => /^[0-9]+$/.test(s)

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, subtitle, tagline, steps }) => {
  return (
    <section className="relative section-dark-tint py-20 px-6 section-ambient-dark overflow-hidden">
      {/* Ambient color glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(126, 196, 190, 0.50), transparent 70%)' }} />
        <div className="absolute top-40 right-20 w-[28rem] h-[28rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(196, 154, 181, 0.45), transparent 70%)' }} />
        <div className="absolute bottom-10 left-1/3 w-[32rem] h-[32rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(168, 143, 173, 0.35), transparent 70%)' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(126, 196, 190, 0.30), transparent 70%)' }} />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">
            {title}
          </h2>
          {tagline && (
            <p className="text-white text-center text-sm sm:text-base font-bold mb-3">
              {tagline}
            </p>
          )}
          <p className="text-white/55 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1
            return (
              <AnimateOnScroll key={i} variant="fade-up" delay={i * 80} duration={550} threshold={0.08}>
                <div
                  className={`rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full ${
                    isLast
                      ? 'glass-card text-white'
                      : 'glass-card-dark text-white'
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold mb-3 backdrop-blur-md ${
                      isLast ? 'bg-white/30 border border-white/40 text-white' : 'bg-white/20 border border-white/30 text-white'
                    }`}
                  >
                    {isNumericStep(step.num) ? (
                      step.num
                    ) : (
                      <span className="material-icons" style={{ fontSize: '15px' }}>
                        {step.num}
                      </span>
                    )}
                  </span>
                  <h3 className="text-base font-bold mb-2 leading-tight">{step.title}</h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isLast ? 'text-white/75' : 'text-white/65'
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.note && (
                    <p
                      className={`text-[11px] mt-3 italic ${
                        isLast ? 'text-white/55' : 'text-white/40'
                      }`}
                    >
                      {step.note}
                    </p>
                  )}
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
