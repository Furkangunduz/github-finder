import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
    const { users, isLoading } = useContext(GithubContext);

    // useEffect(() => {
    //     fetchAllUsers();
    // });

    if (!isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center ">
                {users.map((user) => {
                    return <UserItem key={user.id} user={user} />;
                })}
            </div>
        );
    } else {
        <h3>Loading . . .</h3>;
    }
}

export default UserResults;
