import { UserCard } from "components/UserCard/UserCard";
import { UserListStyled } from "./UsersList.styled";

export const UsersList = ({followings,toggleFollowing,showBtn}) => {
    return (
        <>
                 <UserListStyled>
            {showBtn.map((person) => {
                const userIsFollowed = followings.includes(person.id);
                if (followings.includes(person.id)) {
                    
                }
                return (
               
                    <li key={person.id}>
                        <UserCard
                            person={person}
                            toggleFollowing={toggleFollowing}
                            userIsFollowed={userIsFollowed}
                        />
                    </li>
                       
                );
            })}
                     </UserListStyled>
                    
</>
    );
};