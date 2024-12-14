import React from "react";
import TrendingGamesCard from "../TrendingGamesCard/TrendingGamesCard";


const games = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Embark on an open-world adventure and uncover the mysteries of Hyrule.",
    image: "https://i.ibb.co.com/1GfYFgd/BOTW-Share-icon.jpg",
  },
  {
    title: "Elden Ring",
    description:
      "Explore a dark fantasy world with intricate lore and challenging battles.",
    image: "https://i.ibb.co.com/2YfGrYb/maxresdefault.jpg",
  },
  {
    title: "God of War: Ragnarok",
    description:
      "Join Kratos and Atreus as they face Norse gods and mythological challenges.",
    image: "https://i.ibb.co.com/WH3wgtx/reviewgodofwar.jpg",
  },
  {
    title: "PUBG",
    description:
      "Dive into a neon-lit dystopian future filled with intrigue and danger.",
    image: "https://i.ibb.co.com/ZfDhq2v/pubg-mobile-1.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    description:
      "Experience an epic tale of outlaws in the heart of the American frontier.",
    image:
      "https://i.ibb.co.com/dp71GXc/RDR2476298253-Epic-Games-Wishlist-RDR2-2560x1440-UE-V01-2560x1440-c539ce6125af9d99a0a225e024121f48.jpg",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description:
      "Step into Geralt's shoes as you navigate a vast and immersive fantasy world.",
    image: "https://i.ibb.co.com/DVpTnLr/TW3-NG-thumbnail-en.jpg",
  },
  {
    title: "Minecraft",
    description:
      "Build, explore, and survive in this endlessly creative sandbox game.",
    image: "https://i.ibb.co.com/2KBdhPm/2x1-NSwitch-Minecraft.jpg",
  },
  {
    title: "Assassin's Creed Valhalla",
    description:
      "Lead your Viking clan to glory in a richly detailed historical setting.",
    image: "https://i.ibb.co.com/XjsYTDF/maxresdefault-2.jpg",
  },
  {
    title: "Fortnite",
    description:
      "Join the ultimate battle royale experience and show off your building skills.",
    image:
      "https://i.ibb.co.com/bW7w1b4/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
  },
  {
    title: "Apex Legends",
    description:
      "Team up and compete in this fast-paced battle royale shooter.",
    image:
      "https://i.ibb.co.com/KL5g7NZ/apex-media-news-saviors-patch-keyart-jpg-adapt-crop16x9-431p.jpg",
  },
];

const TrendingGames = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <h2 className="text-center text-3xl font-bold mb-5">Trending Games</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {games.map((game, index) => (
          <TrendingGamesCard key={index} game={game}></TrendingGamesCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
