import { getClans } from "@/server/queries/get-clans";

export default async function Home() {
  const clan = await getClans();
  const members = clan?.memberList ?? [];
  const totalDonations = members.reduce((total, member) => total + member.donations, 0);
  const mediaDonationsMembers = members?.donationsReceived / members?.donations ?? 0;

  return (
    <div className="flex flex-col m-20 space-y-4">
      <p>Total donaciones: {totalDonations}</p>
      <h1 className="text-2xl font-bold">Miembros del Clan</h1>
      {members.map((member) => (
        <div key={member.tag} className="p-4 border rounded-lg shadow-md 
        bg-gradient-to-br from-blue-500 to-indigo-500
          text-wrap ">
          <p><strong>Nombre:</strong> {member.name}</p>
          <p><strong>Rol:</strong> {member.role}</p>
          <p><strong>Tag:</strong> {member.tag}</p>
          <div>
            <p><strong>Liga:</strong> {member.league.name}</p>
            <p className="flex items-center space-x-2">
              <strong>Icono:</strong> 
              <img src={member.league.iconUrls.tiny} alt="" />
            </p>
          </div>
          <p><strong>Trofeos:</strong> 🏆 {member.trophies}</p>
          <p><strong>Donaciones:</strong> {member.donations}</p>
          <p><strong>Donaciones Recibidas:</strong> {member.donationsReceived}</p>
        </div>
      ))}
    </div>
  );
}
