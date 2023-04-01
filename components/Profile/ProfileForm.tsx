import classes from './ProfileForm.module.css';
import { useRef } from "react";
import { ProfileFormProps } from "@/models/oauth/signup";


const ProfileForm : React.FC<ProfileFormProps> = (props) => {

  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  function changePasswordHandler(event: React.FormEvent) {
    event.preventDefault();
    const oldpassword = oldPasswordRef.current!.value;
    const newpassword = newPasswordRef.current!.value;
    props.OnChangePassword({
      oldpassword,
      newpassword
    });
  }

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
