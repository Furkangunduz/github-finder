import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="Hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">Oops!</h1>
                    <p className="text-5xl mb-8">Page Not Found</p>
                    <Link to="/" className="btn btn-primary ">
                        <FaHome className="mr-2 " />
                        Back to HOME
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Notfound;
