import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ id, avatar, name, isOnline }) {
    return (<li className={css.item} key={id}>
        <span className={isOnline ? css.status__online : css.status__offline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>)
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline:PropTypes.bool.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}