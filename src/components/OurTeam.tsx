import logo from "/logo/mainlogo.png"

const teamMembers = [
    { name: "Name of Person 1", position: "Position 1", bgColor: "bg-red-500" },
    { name: "Name of Person 2", position: "Position 2", bgColor: "bg-red-500" },
    { name: "Name of Person 3", position: "Position 3", bgColor: "bg-blue-500" },
    { name: "Name of Person 4", position: "Position 4", bgColor: "bg-green-500" },
    { name: "Name of Person 5", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 6", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 7", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 8", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 9", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 10", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 11", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 12", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 13", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 14", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 15", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 16", position: "Position 5", bgColor: "bg-purple-500" },
    { name: "Name of Person 17", position: "Position 5", bgColor: "bg-purple-500" },
]

function OurTeam() {
    return (
      <div className="my-6 self-start">
        <h2 className="mb-6">EQUIPO</h2>
        <div className="overflow-x-auto w-screen"> 
          <div className="flex w-max">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${member.bgColor} w-64 rounded-lg flex flex-col items-center justify-center text-white`}
              >
                <img src={logo} alt={`Logo for ${member.name}`} className="mb-2" />
                <p>{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default OurTeam;
  