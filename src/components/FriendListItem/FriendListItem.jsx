import PropTypes from 'prop-types';
import { Friend, Avatar, Name, StatusOnline, StatusOffline } from './FriendListItem.styled';

export function FriendListItem({ id, avatar, name, isOnline }) {
    return (<Friend key={id}>
        {isOnline ? <StatusOnline/> : <StatusOffline/>}
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Friend>)
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline:PropTypes.bool.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}