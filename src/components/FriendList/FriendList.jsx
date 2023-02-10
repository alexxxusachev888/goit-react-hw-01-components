import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList ({friends}) {
    return (<ul className={css.friend__list}> 
    {friends.map(({id, avatar, name, isOnline}) => {
        return <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline}/>
    })}
    </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}