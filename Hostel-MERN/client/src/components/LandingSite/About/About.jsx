import { TeamCard } from "./TeamMember";

function About() {
  const lead = {
    name: "Ramalakshmi Devatha",
    designation: "Team Lead",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  const member1 = {
    name: "Trisha Kolla",
    designation: "Front-end Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  const member2 = {
    name: "Deekshitha Mede",
    designation: "Backend Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center items-center">
        <TeamCard member={lead} />
        <TeamCard member={member1} />
        <TeamCard member={member2} />
      </div>
    </>
  );
}

export { About };
