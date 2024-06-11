import React, { useState, ChangeEvent, FormEvent } from "react";
import { createClub } from "../../../helpers/Club";

interface ClubData {
  name: string;
  description: string;
  type: string;
  creation: string;
  logoUrl: string;
  website: string;
  facebook: string;
  instagram: string;
  twitter: string;
  viewable: boolean;
}

interface Props {
  onCreateClub: (clubData: ClubData) => void;
}

const CreateClub: React.FC<Props> = ({ onCreateClub }) => {
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
  });

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdClub = await createClub(clubData);
      console.log("Club created:", createdClub);
      onCreateClub(clubData);
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
      });
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
      </div>
    </>
  );
};

export default CreateClub;
