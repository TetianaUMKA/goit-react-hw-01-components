import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <FriendListItem
                    key={item.id}
                    isOnline={item.isOnline}
                    avatar={item.avatar}
                    name={item.name}
                />
            ))}
        </ul>
    );
};
