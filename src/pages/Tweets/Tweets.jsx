import { Link } from "react-router-dom";
//import Loader from "components/Loader/Loader";
import { useRef} from "react";
import { useLocation } from "react-router-dom";
import { Button } from "./Tweets.styled";
export const Tweets = () => {
  //  const [loading, setLoading] = useState(false);
    const location = useLocation();
    const BackLink=useRef(location.state?.from ?? '/');    
   
    return (
        <div>
              <Link to={BackLink.current}>
                    <Button type="button">
                &larr; Go back 
                    </Button>
                </Link> 
            {/* {loading && <Loader />}*/}
        </div>
    )
}