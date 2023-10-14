import { Link } from "react-router-dom"
import NotFoundImg from "../../img/not_found.jpg"
import { ErrorHomeLink, NotFoundImage, Section } from "./NotFound.styled"

export const NotFound = () => {
    return (
        <Section>
            <ErrorHomeLink to="/">
                Home?
            <NotFoundImage src={NotFoundImg} alt="NotFound" loading="lazy" />
        
            </ErrorHomeLink>
        </Section>
    )
}