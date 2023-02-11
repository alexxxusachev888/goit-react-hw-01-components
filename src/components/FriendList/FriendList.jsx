import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList ({friends}) {
    return (<FriendsList> 
    {friends.map(({id, avatar, name, isOnline}) => {
        return <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline}/>
    })}
    </FriendsList>)
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}