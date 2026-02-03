import type { User } from '../types/user';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="col">
      <div className="card h-100 border border-1 border-secondary rounded overflow-hidden shadow-sm user-card">
        <div className="user-card-img-wrapper">
          <img
            src={user.image}
            alt={user.username}
            className="card-img-top user-card-img"
          />
        </div>

        <div className="card-body text-center py-4 px-3">
          <h5 className="card-title mb-2">{user.username}</h5>
          <p className="card-text text-muted small mb-3">{user.email}</p>
          <div className="d-flex justify-content-center">
            <span className="badge bg-secondary text-capitalize">{user.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
