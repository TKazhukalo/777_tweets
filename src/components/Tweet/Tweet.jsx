import { FollowButton } from "components/ButtonFollow/ButtonFollow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setFollow, unsetFollow } from "redux/followSlice";
import { follow, unfollow } from "redux/operations";
import { getIsFollow } from "redux/selectors";


export const Tweet = ({user}) => {
    const dispatch = useDispatch();
    const isFollow = useSelector(getIsFollow);
    const isFollowId = isFollow.map(({ user }) => Number(user.id));
    const [isActive, setIsActive] = useState(false);

      useEffect(() => {
    if (isFollowId.find(id => id === Number(user.id))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isFollowId, user]);

  const formatted = number => {
    const stringNumber = number.toString();

    let formattedNumber;

    if (stringNumber.length >= 4 && stringNumber.length <= 6) {
      formattedNumber =
        stringNumber.slice(0, stringNumber.length - 3) +
        ',' +
        stringNumber.slice(stringNumber.length - 3, stringNumber.length);
    }

    if (stringNumber.length >= 7 && stringNumber.length <= 9) {
      formattedNumber =
        stringNumber.slice(0, stringNumber.length - 6) +
        ',' +
        stringNumber.slice(stringNumber.length - 6, stringNumber.length - 3) +
        ',' +
        stringNumber.slice(stringNumber.length - 3, stringNumber.length);
    }

    return formattedNumber;
  };

  const handleClick = () => {
    if (!isActive) {
      dispatch(setFollow(user));
      dispatch(follow(user)).then(() => setIsActive(!isActive));
    } else {
      dispatch(unsetFollow(user));
      dispatch(unfollow(user)).then(() => setIsActive(!isActive));
    }
    };
    return (
        <>
            <h2>tweet</h2>
            <div>
                <div>
                    <img src="" alt="" width={80}
                        height={80}
                        viewBox="5 0 80 80" />
                    <img
                        src={user.avatar}
                        alt={user.name}
                        width={62}
                        height={62}
          />
                </div>
                <p>tweets</p>
                <p>followers</p>
                 <FollowButton isActive={isActive} onClick={handleClick} />
            </div>
    </>)
      
   
}