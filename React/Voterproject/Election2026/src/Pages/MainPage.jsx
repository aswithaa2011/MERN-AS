import {  useState } from "react";
import Countdown from "../components/Countdown";

const MainPage = () => {
  const parties = [
    {
      name: "TVK",
      candidate: "C. Joseph Vijay",
      description:
        "The party is aimed at contesting the 2026 Tamil Nadu Assembly elections.",
      partyLogo:
        "https://m.media-amazon.com/images/I/615pLxcn6lL.jpg",
      candidateImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rQdFE5MzJMlvR4Mc1g9tyVVg_xM_lFO2Rg&s",
    },
    {
      name: "DMK",
      candidate: "J. Karunanithi",
      description:
        "Current MLA of T. Nagar. Focuses on welfare schemes and development.",
      partyLogo:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/Dravida_Munnetra_Kazhagam_logo.png",
      candidateImg:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/J_Karunanithi_MLA.jpg",
    },
    {
      name: "AIADMK",
      candidate: "B. Sathyanarayanan",
      description:
        "Strong competitor in T. Nagar with close results in previous elections.",
      partyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/AIADMK_Two_Leaves.png",
      candidateImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKP-5wv7wv3o-CSkFfuFlu7XFClFXKrsl7Zg&s",
    },
    {
      name: "BJP",
      candidate: "Not Announced",
      description:
        "National party focusing on development and governance.",
      partyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Logo_of_the_Bharatiya_Janata_Party.svg",
      candidateImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkt7_CyjXRD0bnj2omp3oxhmfDEBl3p1h3Q&s",
    },
    {
      name: "NTK",
      candidate: "To Be Confirmed",
      description:
        "Promotes Tamil identity and environmental policies.",
      partyLogo:
        "https://play-lh.googleusercontent.com/uy99UF2pvEEg64qrxWNkt3QNOdlMWPTruWTZRvsdU21ulHJ86OoRmfQs4CYkCNTXuWI",
      candidateImg:
        "https://i.pinimg.com/736x/0e/e2/71/0ee271dd9853e1f92663bec0e5f91e4e.jpg",
    },
    {
      name: "MNM",
      candidate: "To Be Confirmed",
      description:
        "Focused on governance reform and anti-corruption.",
      partyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Makkal_Needhi_Maiam_Party_Logo.png",
      candidateImg:
        "https://image-timescontent.timesgroup.com/thumb/569637.webp",
    },
  ];


const [vote, setVote] = useState(null);

const VOTECLICK = (name) => {
  if (vote !== null) return;
  setVote(name);
  alert(`VOTED FOR ${name}`)
};


  return (
   <div className="bg-gray-100 min-h-screen p-5">

   <div className="flex flex-col md:flex-row justify-between items-center mb-6">
  

  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
    🗳️ T Nagar Election Candidates 2026
  </h1>

  
  <div className="mt-2 md:mt-0">
    <Countdown passvote={vote}/>
  </div>

</div>

  <div className="flex flex-wrap justify-center items-center p-5 gap-10 place-items-center">
    {parties.map((e, i) => (
      <div
        key={i}
        className="bg-white w-92 flex flex-col rounded-2xl shadow-md p-4 hover:scale-105 transition duration-300"
      >
        <img
          src={e.candidateImg}
          alt={e.candidate}
          className="w-35 h-35 rounded-full mx-auto object-cover border-2"
        />

        <h2 className="text-center font-semibold mt-3 text-lg">
          {e.candidate}
        </h2>

        <p className="text-center font-medium mt-1">{e.name}</p>

        <img
          src={e.partyLogo}
          alt={e.name}
          className="w-14 h-14 mx-auto mt-2 object-contain"
        />

        <p className="text-gray-600 text-center text-sm mt-2">
          {e.description}
        </p>


<button onClick={()=>VOTECLICK(e.name)} disabled={vote!==null} className={vote!==null?"bg-gray-400 cursor-not-allowed mt-2 p-2 rounded text-white ":"bg-black mt-2 p-2 rounded text-white "}>
    {vote===e.name?"Voted":"Click here to vote"}
</button>


      </div>
    ))}
  </div>
</div>
  );
};

export default MainPage;