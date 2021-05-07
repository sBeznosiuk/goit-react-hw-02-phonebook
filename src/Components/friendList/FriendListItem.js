import React from 'react'
import styles from'./FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item} >
        <span className={styles.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        </span>
        <img
          className="avatar"
          src={avatar}
          alt={name}
          width="48"
        />
        <p className="name">{name}</p>
    </li>
)

export default FriendListItem