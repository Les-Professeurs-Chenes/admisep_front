import React, { useState, ChangeEvent, FormEvent } from "react";
import { createClub } from "../../../helpers/Club";
import Club, { ClubData } from "../../../models/Club";
import User from "../../../models/User";
import './Club.css'

export default function CreateClub({ 
} : {
}) {
  const [clubData, setClubData] = useState<ClubData>({
    name: "",
    description: "",
    type: "",
    creation: "",
    logoUrl: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    viewable: false,
    presId: null,
  });

  const [allClubs, setAllClubs] = useState<Club[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [triggerEffect, setTriggerEffect] = useState(false);

  React.useEffect(() => {
    const fetchClubs = async () => {
      const clubs = await Club.getAll();
      setAllClubs(clubs);
    };
    fetchClubs();
  }, [triggerEffect]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await User.getAll();
      setAllUsers(users);
    };
    fetchUsers();
  }, [triggerEffect]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClubData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setClubData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setClubData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdClub = await createClub(clubData);
      console.log("Club created:", createdClub);
      setClubData({
        name: "",
        description: "",
        type: "",
        creation: "",
        logoUrl: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter: "",
        viewable: false,
        presId: null,
      });
      setTriggerEffect(!triggerEffect);
    } catch (error) {
      console.error("Error creating club:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8">
        <h2 className="text-2xl font-bold">Create Club</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full max-w-xl p-4 bg-base-300 rounded-md mt-5"
        >
          <div className="grid grid-cols-3 gap-4">
            <label className="flex flex-col items-center justify-center">
              Name:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="name"
                value={clubData.name}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Description:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="description"
                value={clubData.description}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Type:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="type"
                value={clubData.type}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Creation:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="creation"
                value={clubData.creation}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Logo URL:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="logoUrl"
                value={clubData.logoUrl}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Website:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="website"
                value={clubData.website}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Facebook:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="facebook"
                value={clubData.facebook}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Instagram:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="instagram"
                value={clubData.instagram}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Twitter:
              <input
                className="border border-gray-300 rounded-md"
                type="text"
                name="twitter"
                value={clubData.twitter}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              President:
              <select
                className="border border-gray-300 rounded-md select-input"
                name="presId"
                onChange={handleSelectChange}
              >
                <option defaultValue={''}>Select a president</option>
                {allUsers.map((user) => (
                  (user.firstName!="Admin" && <option key={user.id} value={user.id} defaultValue={user.id == clubData.presId}>
                    {user.firstName} {user.lastName}
                  </option>
                  )
                ))}
              </select>
            </label>
            <label className="flex flex-col items-center justify-center">
              Viewable:
              <input
                className="border border-gray-300 rounded-md"
                type="checkbox"
                name="viewable"
                checked={clubData.viewable}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Create Club
          </button>
        </form>

        <br />

        <div className="flex flex-col items-center justify-center w-full max-w-xl p-4 bg-base-200 rounded-md mt-5">
          <h2 className="text-2xl font-bold mb-4">Clubs Created:</h2>
          <div className="grid grid-cols-3 gap-4">
            {allClubs.map((club) => (
              <div
                key={club.id}
                className="card flex flex-col items-center justify-center p-4 bg-base-300 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img src={club.logoUrl} alt={club.name} className="w-20 h-20 rounded-full avatar" />
                <h3 className="text-xl font-bold">{club.name}</h3>
                <p>Type: {club.type}</p>
                <p>Creation: {club.creation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
