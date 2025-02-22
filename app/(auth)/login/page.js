'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function submitedHandeler() {
        console.log(username, password);
        //form submission logic here
    }

    // ✅ Update button state when username or password changes
    useEffect(() => {
        setIsButtonDisabled(!(password.length >= 8 && username.length > 0));
    }, [password, username]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-center mb-4">
                    <img src="/logo.png" alt="Logo" className="h-16" />
                </div>
                <h1 className="text-2xl font-semibold text-center mb-4 text-black">InnoAge Celebration Login</h1>

                {/* Username Field */}
                <label htmlFor="username" className="block text-sm text-gray-700 mb-1 font-black">Username</label>
                <input 
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Field */}
                <label htmlFor="password" className="block text-sm font-black text-gray-700 mb-1">Password</label>
                <input 
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Validation Message */}
                {password.length > 0 && password.length < 8 && (
                    <p className="text-red-500 text-sm mb-2">Password must be at least 8 characters</p>
                )}
                {password.length >= 8 && (
                    <p className="text-green-400 text-sm mb-2">✅ Good Password</p>
                )}

                {/* Submit Button */}
                <button 
                    onClick={submitedHandeler}
                    disabled={isButtonDisabled}
                    className={`w-full py-2 rounded-md font-medium transition 
                        ${isButtonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                >
                    Submit
                </button>

                <p className="text-center text-sm text-gray-600 mt-3">
                    Don't have an account? 
                    <Link href="/signup" className="text-blue-500 hover:underline ml-1">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
