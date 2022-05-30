// import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const initialState = {
        users: [],
        user: {},
        loading: true,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    async function fetchAllUsers() {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        let data = await response.json();
        // setUsers(data);
        // setIsLoading(false);

        dispatch({ type: "GET_USER", payload: data });
    }

    async function searchUser(text) {
        const params = new URLSearchParams({ q: text });

        let response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        let { items } = await response.json();

        dispatch({ type: "GET_USERS", payload: items });
    }

    function clearUsers() {
        dispatch({ type: "CLEAR_USERS" });
    }

    async function getUser(login) {
        let response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        if (response.status === 404) {
            window.location = "/notfound";
            return;
        }

        let data = await response.json();

        dispatch({ type: "GET_USER", payload: { user: data } });
    }
    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                fetchAllUsers,
                searchUser,
                clearUsers,
                getUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
