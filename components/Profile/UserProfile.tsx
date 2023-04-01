import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile: React.FC = () => {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
