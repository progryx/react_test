import React, {Component} from 'react';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="container card">
            <div className="card-body row">

                <div className="col-4"><img className="card-img" src={props.profile.photos.large ? props.profile.photos.large : 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png'} alt=""/></div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <ProfileStatus status={"Hello Bitch"} {...props} />
                        </li>
                        <li className="list-group-item">
                            {props.profile.fullName}
                        </li>
                        <li className="list-group-item">
                            {props.profile.aboutMe}
                        </li>
                        <li className="list-group-item">
                            My VK: <a href={props.profile.contacts.vk}>VK LINK</a>
                        </li>
                        <li className="list-group-item">
                            Looking for a JOB: {props.profile.lookingForAJob}
                            I look for a job, because: {props.profile.lookingForAJobDescription}
                        </li>
                        <li className="list-group-item">
                            {props.profile.aboutMe}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;