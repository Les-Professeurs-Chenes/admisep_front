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
    <div>
      <h2>Create Club</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={clubData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={clubData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={clubData.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Creation:
          <input
            type="text"
            name="creation"
            value={clubData.creation}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo URL:
          <input
            type="text"
            name="logoUrl"
            value={clubData.logoUrl}
            onChange={handleChange}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={clubData.website}
            onChange={handleChange}
          />
        </label>
        <label>
          Facebook:
          <input
            type="text"
            name="facebook"
            value={clubData.facebook}
            onChange={handleChange}
          />
        </label>
        <label>
          Instagram:
          <input
            type="text"
            name="instagram"
            value={clubData.instagram}
            onChange={handleChange}
          />
        </label>
        <label>
          Twitter:
          <input
            type="text"
            name="twitter"
            value={clubData.twitter}
            onChange={handleChange}
          />
        </label>
        <label>
          Viewable:
          <input
            type="checkbox"
            name="viewable"
            checked={clubData.viewable}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit">Create Club</button>
      </form>
    </div>
  );
};

export default CreateClub;
