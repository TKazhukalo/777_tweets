import { Link } from "react-router-dom"
import HomePicture from "../../img/home_picture.png"
import { ImageHome, SectionHome, TextHome, TextHomeLink} from "./Home.styled"
export const Home = () => {
    return (
        <div>
            <SectionHome>
                <ImageHome src={HomePicture} alt="HomePicture" />
           
                <TextHome>Hello, {' '}
                    
                 <TextHomeLink to="/tweets">
            follow the link
          </TextHomeLink>
          
                </TextHome>
                 </SectionHome>
        </div>
    )
}