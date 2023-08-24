'use client'

import { useState } from 'react'

import { Grid } from '@/components/Grid'
import { PageHeader } from '@/components/PageHeader'

import { useTheme } from '@/contexts/ThemeContext'

import { QUESTIONS } from './mock'

import './styles.scss'
import { BiMinus, BiPlus } from 'react-icons/bi'

const Faq = () => {
  const { palette } = useTheme()

  const [openedQuestionIndexes, setOpenedQuestionIndexes] = useState<
    { index: number; height: number }[]
  >([])

  const onQuestionClick = (idx: number) => {
    const isOpen = openedQuestionIndexes.some((item) => item.index === idx)

    const updatedIndexes = isOpen
      ? openedQuestionIndexes.filter((item) => item.index !== idx)
      : [...openedQuestionIndexes, { index: idx, height: 0 }]

    setOpenedQuestionIndexes(updatedIndexes)
  }

  const handleAnswerRef = (
    element: HTMLParagraphElement | null,
    idx: number,
  ) => {
    const isOpen = openedQuestionIndexes.some((item) => item.index === idx)
    const item = openedQuestionIndexes.find((item) => item.index === idx)

    if (!element || !isOpen) return

    const height = element.clientHeight

    if (item && item.height !== height) {
      setOpenedQuestionIndexes((prev) =>
        prev.map((prevItem) =>
          prevItem.index === idx ? { ...prevItem, height } : prevItem,
        ),
      )
    }
  }

  return (
    <div className="container faq">
      <div className="faq__sticky">
        <div className="faq__sticky__content">
          <PageHeader subtitle="faq" title="Perguntas Frequentes" />
        </div>
      </div>

      <div className="faq__questions">
        {QUESTIONS.map(({ question, answer }, idx) => {
          const isOpen = openedQuestionIndexes.some(
            (item) => item.index === idx,
          )

          const item = openedQuestionIndexes.find((item) => item.index === idx)

          return (
            <div
              key={question}
              className="faq__questions__question"
              role="button"
              onClick={() => onQuestionClick(idx)}
            >
              <div className="faq__questions__question__card">
                <h4 className="question" style={{ opacity: isOpen ? 1 : 0.6 }}>
                  {question}
                </h4>

                {isOpen ? (
                  <BiMinus size={32} color={palette.primary} />
                ) : (
                  <BiPlus size={32} color={palette.primary} />
                )}
              </div>

              <div
                className="faq__questions__question__answer"
                style={{ maxHeight: isOpen ? `${item?.height}px` : '0' }}
              >
                <p
                  className="answer"
                  ref={(element) => handleAnswerRef(element, idx)}
                >
                  {answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <Grid />
    </div>
  )
}

export { Faq }
