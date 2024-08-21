export const items = [
  {
    "name": "Energy Potion",
    "description": "A potion that restores energy between 500 and 2500.",
    "imgUrl": "energy4.png"
  },
  {
    "name": "Convert to CSPN",
    "description": "A special card that can be used to convert your points to CSPN.",
    "imgUrl": "convertToCSPN.png"
  },
  {
    "name": "Airdrop",
    "description": "Having this card will give you a chance to receive airdrop rewards.",
    "imgUrl": "airdrop.png"
  },
  {
    "name": "Send Points",
    "description": "A special card that can be used to send points to other players.",
    "imgUrl": "sendPoints.png"
  },
  {
    "name": "Stake",
    "description": "A special card that can be used to stake your points with a certain APY.",
    "imgUrl": "stake.png"
  },
  {
    "name": "Tax Fee",
    "description": "A special card that can be used to charge a tax fee on point transfers and get a share from the pool.",
    "imgUrl": "taxFee.png"
  },
  {
    "name": "P2B",
    "description": "A special card that can be used to buy and sell points in the market.",
    "imgUrl": "p2b.png"
  },
  {
    "name": "Management Contribution",
    "description": "A special card that can be used to vote for game improvements.",
    "imgUrl": "managementContribution.png"
  },
  {
    "name": "Tournament Card",
    "description": "A special card that can be used to participate in prize tournaments.",
    "imgUrl": "tournamentCard.png"
  }
]

export const roadmap = [
  {
    id: 1,
    title: "Phase 1",
    content: [
      { name: "Level Up System", value: "Core progression mechanic, keeps players engaged" },
      { name: "Boosts for Click Power and Leveling", value: "Speeds up progression, enhances gameplay experience" },
      { name: "Autotap Feature", value: "Reduces player fatigue, increases engagement" },
      { name: "Referral System", value: "Expands player base, incentivizes community growth" },
      { name: "Daily and Weekly Task System", value: "Encourages daily engagement, offers regular rewards" },
      { name: "Avatar Customization with Unique Skins", value: "Personalizes gameplay, increases player investment in their avatar" },
      { name: "Watch Ads for Rewards", value: "Provides free rewards, increases ad revenue" },
      { name: "FOMO System (Energy/Stamina System)", value: "Manages playtime, encourages regular engagement" }
    ]
  },
  {
    id: 2,
    title: "Phase 2",
    content: [
      { name: "Points Sharing with Friends", value: "Enhances community interaction, supports collaborative gameplay" },
      { name: "Staking/Farm Feature", value: "Allows players to earn passive rewards, increases retention" },
      { name: "Daily Login Rewards", value: "Increases daily engagement, rewards consistent players" },
      { name: "Guilds or Clans", value: "Fosters community, encourages social play" },
      { name: "Leaderboards & Achievements", value: "Adds goals and recognition, encourages competitive and completionist play" },
      { name: "Push Notifications via Telegram", value: "Keeps players informed, drives re-engagement" },
    ]
  },
  {
    id: 3,
    title: "Phase 3",
    content: [
      { name: "Airdrop System (Halving Mechanism)", value: "Ensures long-term engagement, creates anticipation" },
      { name: "Whale’s Market (Trading Points)", value: "Enables in-game economy, adds depth to gameplay" },
      { name: "Weekly Leaderboard Clashes", value: "Competitive play, increases retention" },
    ]
  },
  {
    id: 4,
    title: "Phase 4",
    content: [
      { name: "Tournament Mode", value: "Competitive gameplay, drives engagement and excitement" },
      { name: "Voting System for Game Updates", value: "Involves players, enhances community feel" },
      { name: "Season Pass (Aligned with Halving Airdrop Season)", value: "Provides structured progression, encourages spending over time" },
    ]
  },
  {
    id: 5,
    title: "Phase 5",
    content: [
      { name: "NFT Integration for In-Game Items", value: "Allows players to trade in-game items, appeals to collectors" },
      { name: "Seasonal Events and Challenges", value: "Keeps gameplay fresh, encourages return engagement" },
      { name: "Exclusive Limited-Time Market Drops", value: "Drives urgency and excitement, offers exclusive content" }
    ]
  }
];

export const navbarLinks = [
  {
    route: "/#home",
    label: "Home",
  },
  {
    route: "/#features",
    label: "Features",
  },
  {
    route: "/#items",
    label: "Items",
  },
  {
    route: "https://cspn.io/whitepaper/",
    label: "Whitepaper",
  },
  {
    route: "/#faq",
    label: "FAQ",
  },
];