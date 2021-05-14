import { AccordionComponent } from "../components/AccordionComponent"
import { dataFaqs } from "../data/dataFaqs"

export const AccordionPage = () => {
    return (
        <main className='main'>
            <AccordionComponent data={dataFaqs} />
            <div className='accordion__box' />
        </main>
    )
}
