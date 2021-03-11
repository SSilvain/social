import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.imageWrapper}>
                <img className={s.image}
                    src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
                    alt=""
                />
            </div>
            <div>
                <div>
                    <img
                        className={s.ava}
                        src={props.profile.photos.large}
                        alt=""
                    />
                </div>
                <div>description</div>
            </div>
        </div>
    );
}
export default ProfileInfo;
