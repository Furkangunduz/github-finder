import { useState, useContext } from "react";
import Alert from "./Alert";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
    const [text, setText] = useState("");
    const { users, searchUser, clearUsers } = useContext(GithubContext);
    const { setAlert, alertState } = useContext(AlertContext);
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") {
            setAlert("Please enter something", "err");
            return;
        }
        //@todo - search user
        searchUser(text);
        setText("");
    };

    const handleClear = () => {
        clearUsers();
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8 transition-all">
            <div>
                <form>
                    <div className="form-control">
                        {alertState.message != "" && (
                            <div className="mx-4 mb-3 text-red-500">
                                <Alert />
                            </div>
                        )}
                        <div className="relative">
                            <input
                                type="text"
                                value={text}
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search"
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                                onClick={handleSubmit}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button
                        onClick={handleClear}
                        className="btn btn-ghost btn-lg"
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;
