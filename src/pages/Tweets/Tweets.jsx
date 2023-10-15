import React, { useEffect, useState } from "react";
import { SectionTweets } from "./Tweets.styled";
import Loader from "components/Loader/Loader";
import { BackLinkButton } from "components/BackLinkButton/BackLinkButton";
import { UsersList } from "components/UsersList/UsersList";
import { fetchUsers, updateUser } from "services/api";
import { LoadMore } from "components/LoadMore/LoadMore";

export const Tweets = () => {
  const [showBtn, setShowBtn] = useState([]);
  const [page, setPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [followings, setFollowings] = useState(() => {
    return JSON.parse(window.localStorage.getItem("followings")) ?? [];
  });
  // const [filter, setFilter] = useState('show all'); 
  const loadMore = () => {
    setPage(page + 3);
  };

  const toggleFollowing = (userId) => {
    const userIsFollowed = followings.includes(userId);
    const userToChange = users.find((user) => user.id === userId);

    if (userIsFollowed) {
      setFollowings(followings.filter((followingId) => followingId !== userId));
      userToChange.followers = userToChange.followers - 1;
    } else {
      setFollowings(followings.concat(userId));
      userToChange.followers = userToChange.followers + 1;
    }

    // Оголошення функції прямо в `useEffect`
    (async () => {
      try {
        await updateUser(userId, userToChange);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("followings", JSON.stringify(followings));
    setShowBtn(users.slice(0, page));
  }, [followings, users, page]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <SectionTweets>
          <BackLinkButton />
          {/*<Dropdown onChange={(selectedFilter) => setFilter(selectedFilter)} />*/}
          <UsersList
            followings={followings}
            showBtn={showBtn}
            toggleFollowing={toggleFollowing}
          />
          {page < users.length && <LoadMore loadMore={loadMore} />}
        </SectionTweets>
      )}
    </div>
  );
};