import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/actions/getProfile'
import Card from './Card'
import styles from './userCard.module.css'
import UserNotFound from './UserNotFound'

const UserCard = ({ inputValue }) => {
  const { userData, userDataLoading, userDataError } = useSelector(
    (state) => state.getProfileReducer
  )
  // console.log(userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(inputValue))
  }, [inputValue])

  const { avatar_url, name, followers, following, public_repos, html_url } = userData;

  return (
    <>
      <div className={styles.mainBox}>
        {userDataLoading ? (
          <div className="text-center">
            <div className="spinner-border"
              style={{
                width: "3rem",
                height: "3rem",
                fontSize: "20em",
                color: "#0DCAF0"
              }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : userDataError ? (
          <UserNotFound />
        ) : (
          <Card
            avatar_url={avatar_url}
            bandaKaName={name}
            followers={followers}
            following={following}
            public_repos={public_repos}
            html_url={html_url}
          />
        )}
      </div>
    </>
  )
}

export default UserCard;
