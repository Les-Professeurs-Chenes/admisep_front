import React from 'react'
import Club from '../../../models/Club';
import User from '../../../models/User'

export default function Clubs({
  user,
} : {
  user: User
}) {

  const [triggerEffect, setTriggerEffect] = React.useState(false);
  const [userClubs, setUserClubs] = React.useState<Club[]>([]);

  React.useEffect(() => {
    const fetchUserClubs = async () => {
      const clubs = await user.getClubs();
      setUserClubs(clubs);
    };
    fetchUserClubs();
  }, [triggerEffect]);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt">
        <div className="flex flex-col items-center justify-center w-full max-w-xl p-4 bg-base-200 rounded-lg mt-5">
          <h2 className="text-2xl font-bold mb-4">My clubs:</h2>
            <div className="grid grid-cols-3 gap-4">
              {userClubs.map((club) => (
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
  )
}
