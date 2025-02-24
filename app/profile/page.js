"use client";
import React, { useState } from "react";

const PersonalInfoForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userDOB, setUserDOB] = useState("");
  const [userCity, setUserCity] = useState("");
  const [Image, setImage] =useState("./logo.png")


//Write function for take data from user for store in useState state
//also called this function after executed

  //This submiteHandler Button Is used for save data in database
  const submiteHandler=()=>{

  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6 gap-y-6">
      {/* Profile Section 1 */}
      <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <div className="flex justify-center">
         { (isEditing)? 
         <input
         type="file"
         accept="image/*"
         placeholder="Image"
         
         onChange={(e) => {
          const file = e.target.files[0];
          setImage(file);  //set image
          if (file) {
            const reader = new FileReader();  //FileReader is a built-in JavaScript API that allows reading file contents (like images, text, etc.). 
            reader.onloadend = () => setImage(reader.result); //reader.onloadend is an event handler triggered after the file is fully loaded.
            //reader.result contains the Base64 encoded string of the file.
            //setImage(reader.result) updates the state with this Base64 URL, so it can be used as an image src.
            reader.readAsDataURL(file);
          }
        }}
          className="w-24 h-24 rounded-full border-2 border-gray-500"
         />
         :<img
            src={Image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-500"
          />}
        </div>
        <h2 className="text-xl font-semibold mt-4">Alexander Thompson</h2>
        <p className="text-gray-400">ID: EMP-2025-0122</p>
        <p className="mt-2 text-gray-300">Senior Product Designer</p>
        <p className="text-gray-300">Design Department</p>
      </div>
  
      {/* Personal Information Form Section 2 */}
      <div className="max-w-3xl w-full bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
  
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "fullName", type: "text", valStore: userName, setStore: setUserName },
            { label: "Email", name: "email", type: "email", valStore: userEmail, setStore: setUserEmail },
            { label: "Phone Number", name: "phone", type: "tel", valStore: userPhone, setStore: setUserPhone },
            { label: "Date of Birth", name: "dob", type: "date", valStore: userDOB, setStore: setUserDOB },
            { label: "City", name: "city", type: "text", valStore: userCity, setStore: setUserCity },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium">{field.label} <span className="text-red-500">*</span></label>
              <input
                type={field.type}
                name={field.name}
                value={field.valStore}
                onChange={(e) => field.setStore(e.target.value)}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                className="mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>
          ))}
  
          {/* Gender Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Gender <span className="text-red-500">*</span></label>
            <select
              className="mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
