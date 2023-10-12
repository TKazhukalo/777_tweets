import NotFoundImg from "../../img/not_found.jpg"
import { NotFoundImage, Section } from "./NotFound.styled"

export const NotFound = () => {
    return (
        <Section>
            <NotFoundImage src={NotFoundImg} alt="NotFound" loading="lazy" />
        </Section>
    )
}