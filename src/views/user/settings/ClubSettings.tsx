import { nanoid } from 'nanoid';
import React from 'react'
import Club from '../../../models/Club';
import User from '../../../models/User'
import * as clubHelper from '../../../helpers/Club';

export default function ClubSettings({
  user
} : {
  user: User,
}) {

    const [triggerEffect, setTriggerEffect] = React.useState(false);
    const [userClubs, setUserClubs] = React.useState<Club[]>([]);
    const [allUsers, setAllUsers] = React.useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null);

    React.useEffect(() => {
      const fetchAllUsers = async () => {
        const users = await User.getAll();
        setAllUsers(users);
      };
      fetchAllUsers();
    }, []);


    React.useEffect(() => {
      const fetchUserClubs = async () => {
        const clubs = await user.getClubs();
        setUserClubs(clubs);
        userClubs.forEach(async (club:Club) => {
          await clubHelper.getClubMembers(club.id).then((members) => {
              club.members = members ?? [];
          });
          console.log(club.members);
        });
      };
      fetchUserClubs();
    }, [triggerEffect]);

    const handleAddMember = async (clubId:number) => {
      if(selectedUserId === null) return;
      const club = userClubs.find((club:Club) => club.id === clubId);
      if(club) {
        await clubHelper.addClubMember(club.id, selectedUserId);
      }
      setTriggerEffect(!triggerEffect);
    }


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const userId = parseInt(e.target.value);
      setSelectedUserId(userId);
    }

    // to manage the members of the club
    return (
      <>
        <div className="flex flex-col items-center justify-center pt">
          {userClubs.map((club:Club) => (
            <div className="flex flex-col items-center justify-center w-full max-w-xl p-4 bg-base-200 rounded-lg mt-5" key={nanoid()}>
              <img src={club.logoUrl} alt={club.name} className="w-20 h-20 rounded-full avatar my-2" />
              <h2 className="text-2xl font-bold mb-4 mt-2">{club.name}'s members:</h2>
              <div className="grid grid-cols-3 gap-4">
                {club.members && club.members.map((member:User) => (
                  <div
                    key={member.id}
                    className="card flex flex-col items-center justify-center p-4 bg-base-300 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    <div className="w-20 h-20 rounded-full avatar">
                      
                    </div>
                    <h3 className="text-xl font-bold">{member.firstName} {member.lastName}</h3>
                    <p>Promo: {member.promo}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row space-x-4 mt-8">
                <div className="flex-1">
                  <select name="member" id="member" className="form-select rounded-xl p-4 mt-0" onChange={handleSelectChange}>
                    {allUsers.map((user:User) => {
                      return !(user.firstName=="Admin" && user.lastName=="Admin") && (
                        <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)
                      }
                    )}
                  </select>
                </div>
                <div className="flex-1 pt-1">
                  <button onClick={() => handleAddMember(club.id)} className="btn btn-primary">Add a member</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}
