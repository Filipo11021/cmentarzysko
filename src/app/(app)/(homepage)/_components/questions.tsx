import { Homepage } from 'payload-types'
import { FC } from 'react'
import { Container } from '../../_components/ui/container'
import { Button } from '../../_components/ui/button'
import { CmsLink } from '../../_components/cms-link'
import { sanitize } from 'isomorphic-dompurify'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../_components/ui/accordion'

type Props = {
  data: Homepage['questions']
}

export const Questions: FC<Props> = ({ data }) => {
  return (
    <Container asChild>
      <section
        className="flex flex-col lg:flex-row py-32 flex-wrap justify-between gap-16"
        aria-labelledby="questions"
      >
        <div className="flex-1 flex flex-col gap-6">
          <h2 id="questions" className="opacity-25 uppercase">
            {data.heading}
          </h2>
          <h3 className="font-pirateOne text-9xl text-balance">{data.title}</h3>
          <p className="opacity-65">{data.description}</p>
          <div className="flex flex-wrap">
            {data.buttons?.map(({ label, link }, i) => (
              <Button key={i} asChild>
                <CmsLink data={link}>{label}</CmsLink>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
            {data.items?.map(({ answerHtml, question }, i) => {
              const sanitizedAnswerHtml = sanitize(answerHtml ?? '')
              console.log(sanitizedAnswerHtml)

              return (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    <div dangerouslySetInnerHTML={{ __html: sanitizedAnswerHtml }} />
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </section>
    </Container>
  )
}
