export const getAiResponse = (personaId: number, userMessage: string) => {
  console.log('Generating AI response for persona:', personaId);
  
  const responses = {
    1: [
      "Based on current market trends, I'd recommend...",
      "The crypto market is showing interesting patterns...",
      "From a trading perspective, we should consider...",
      "Looking at the technical analysis...",
    ],
    2: [
      "The NFT marketplace is evolving rapidly...",
      "This collection shows promising potential...",
      "Current NFT trends indicate...",
      "From a collector's perspective...",
    ],
    3: [
      "The smart contract implementation should...",
      "From a blockchain architecture standpoint...",
      "The gas optimization techniques suggest...",
      "When developing Web3 applications...",
    ],
  };

  const personaResponses = responses[personaId as keyof typeof responses] || [];
  const randomIndex = Math.floor(Math.random() * personaResponses.length);
  return personaResponses[randomIndex];
};