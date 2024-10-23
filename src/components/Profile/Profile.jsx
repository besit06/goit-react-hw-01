import s from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profile_details}>
        <img src={image} alt="User ava" className={s.profile_ava} />
        <p className={s.profile_name}>{name}</p>
        <p className={s.profile_tag}>@{tag}</p>
        <p className={s.profile_location}>{location}</p>
      </div>

      <ul className={s.profile_stats}>
        <li className={s.profile_stat}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.profile_stat}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.profile_stat}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;