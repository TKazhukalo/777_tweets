import circle from "../../img/circle.png";
import { Avatar, AvatarCircle, AvatarImg, Button, CardLine, Followers, Tweets, UserCardContainer, UserName } from "./UserCard.styled";

export const UserCard = ({ person, toggleFollowing, userIsFollowed }) => {
  const { id, user, avatar } = person;
  const followers = person.followers ? new Intl.NumberFormat().format(person.followers) : 0;
  const tweets = person.tweets ? new Intl.NumberFormat().format(person.tweets) : 0;

  return (
    <>
    <UserCardContainer>
      <CardLine />
      <Avatar>
        <AvatarCircle src={circle} alt="user_circle" />
        <AvatarImg src={avatar} alt="avatar" />
      </Avatar>
      <UserName>{user}</UserName>
      <Tweets> {tweets} tweets </Tweets>
      <Followers>{followers} Followers</Followers>
      <Button
        style={{
          backgroundColor: userIsFollowed ? "#5CD3A8" : "#EBD8FF",
        }}
        onClick={() => toggleFollowing(id)}
      >
        {userIsFollowed ? "Following" : "Follow"}
      </Button>
      </UserCardContainer>
    </>
  );
};