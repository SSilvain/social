import React from "react";
import s from './Information.module.css';

const Information = (props) => {
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
                        src="https://cdn.vox-cdn.com/thumbor/CmMjXu8KUUpGp0nMRWCYtKBJURY=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19921093/mgidarccontentnick.comc008fa9d_d.png"
                        alt=""
                    />
                </div>
                <div>description</div>
            </div>
        </div>
    );
}
export default Information;
