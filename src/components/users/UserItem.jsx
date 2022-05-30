import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className="card shadow-lg compact side bg-base-300 mb-5">
            <div className="flex-row items-center space-x-4 card-body">
                <div className="flex items-center justify-between w-48 ">
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="" />
                        </div>
                    </div>
                    <div>
                        <Link
                            className="text-base-content text-opacity-30"
                            to={`/user/${login}`}
                        >
                            <div className="card-title"> {login}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
