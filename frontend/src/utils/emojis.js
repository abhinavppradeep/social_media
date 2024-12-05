export const aviationEmojis = [
  "✈️", // Airplane
  "🛩️", // Small Airplane
  "🛫", // Airplane Departure
  "🛬", // Airplane Arrival
  "🚁", // Helicopter
  "🛸", // Flying Saucer
  "🚀", // Rocket
  "🛰️", // Satellite
  "🌌", // Milky Way (Sky-related)
  "🎖️", // Military Medal
  "🏅", // Medal
  "🏆", // Trophy
  "🌍", // Earth (Aviation connects the world)
  "🌎", // Earth (Western Hemisphere)
  "🌏", // Earth (Eastern Hemisphere)
  "🛠️", // Wrench and Hammer (Aircraft Maintenance)
  "⛽", // Fuel Pump (Refueling Aircraft)
  "📡", // Satellite Antenna (Air Traffic Communication)
  "🧭", // Compass (Navigation)
  "🧳", // Luggage (Travel)
  "💺", // Seat (Passenger Seat)
  "🎛️", // Control Knobs (Cockpit Controls)
  "🌠", // Shooting Star (Flight at Night)
  "🌟", // Star (Pilot Excellence)
  "☁️", // Cloud (Sky)
  "🌤️", // Partly Sunny (Flying Weather)
  "⚡", // Lightning (Storms)
  "🌈", // Rainbow (Scenic Flight)
  "🌀", // Cyclone (Turbulence)
  "🛟", // Safety Ring (Aviation Safety)
  "🔧", // Wrench (Aircraft Repair)
];

export const getRandomAviationEmoji = () => {
  return aviationEmojis[Math.floor(Math.random() * aviationEmojis.length)];
};
