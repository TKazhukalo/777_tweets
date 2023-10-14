import { Link, useNavigate } from "react-router-dom";
//import Loader from "components/Loader/Loader";
import { useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";
import { Button, SectionTweets } from "./Tweets.styled";
import { useDispatch, useSelector } from "react-redux";
import { getTweets } from "redux/selectors";
import { fetchTweets } from "redux/operations";
import { Tweet } from "components/Tweet/Tweet";
export const Tweets = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showBtn, setShowBtn] = useState(true);
        const BackLink=useRef(location.state?.from ?? '/');    
  //  const [loading, setLoading] = useState(false);
    const location = useLocation();
    const tweets = useSelector(getTweets);

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    // const handlerClick = evt => {
    //     navigate("/");
    // };

      const currentTweets = () => {
    if (showBtn) {
      return tweets.slice(0, 3);
    }
    return tweets;
  };
  const handlerLoadMore = () => {
    setShowBtn(!showBtn);
  };
   
    return (
        <div>
            <SectionTweets>
              <Link to={BackLink.current}>
                    <Button type="button">
                &larr; Go back 
                    </Button>
                </Link> 
                {/* {loading && <Loader />}*/}
                <div>
                    {currentTweets().map(user => {
                        return  <Tweet key={user.id} tweet={user} />;
                    })}
                </div>
                    {showBtn && (
          <button
            onClick={handlerLoadMore}
          >
            Load More
          </button>
        )}
                </SectionTweets>
        </div>
    )
}