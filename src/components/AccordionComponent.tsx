import { useState } from 'react';
import { Faqs } from '../data/dataFaqs';

interface Props {
    data: Faqs[];
}

export const AccordionComponent = ({ data: faqs }: Props) => {

    const [clicked, setclicked] = useState<number | null>(null);

    const toggle = (index: number | null) => {
        if (clicked === index) {
            return setclicked(null);
        }
        setclicked(index);
    }

    return (
        <div className='accordion' >
            <div className='accordion__ilustration'>
                <div className="accordion__woman-online" />
                <div className="accordion__ilustration-pattern" />
            </div>
            <section className='accordion__section' >
                <h1 className='accordion__h1' >FAQ</h1>
                {
                    faqs.map((faq, index) => {
                        return (
                            <div className="accordion__item" key={index}>
                                <div
                                    className={ clicked === index ? 'active accordion__header ' : 'accordion__header'}
                                    onClick={() => toggle(index)}
                                >
                                    <h2>{faq.question}</h2>
                                    <div
                                        className={clicked === index ? 'arrow rotate' : 'arrow'}
                                    />
                                </div>
                                {
                                    clicked === index ? (
                                        <div className="accordion__content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                        );
                    })
                }
            </section>
        </div>
    )
}
