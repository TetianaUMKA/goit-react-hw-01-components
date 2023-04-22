import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <FriendListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
      })  
    ).isRequired,
}