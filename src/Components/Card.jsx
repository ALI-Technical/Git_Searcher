import React from 'react'
import styles from './userCard.module.css'

const Card = ({ avatar_url, followers, following, public_repos, bandaKaName, html_url}) => {

  return (
    <>
      <div className="card mb-3">
        <div className={`row g-0 ${styles.userCard}`}>
          <div className="col-md-4">
            <img src={avatar_url} className={`img-fluid ${styles.img} rounded-start`} alt="..." />
          </div>
          <div className={`col-md-8 ${styles.userBox}`}>
            <div className="card-body">
              <h5 className="card-title">{bandaKaName}</h5>
              <p className="card-text">Followers: {followers}</p>
              <p className="card-text">Following: {following}</p>
              <p className="card-text">Public-Repositories: {public_repos}</p>
              <button className="btn btn-outline-info"><a className='text-decoration-none' href={html_url}>View Profile on Github</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
