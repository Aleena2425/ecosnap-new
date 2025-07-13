export function getEcoLevel(points) {
  if (points < 50) {
    return {
      name: "Green Leaf",
      emoji: "🌱",
      next: 50,
    };
  } else if (points < 100) {
    return {
      name: "Eco Warrior",
      emoji: "🦸‍♀️",
      next: 100,
    };
  } else if (points < 200) {
    return {
      name: "Planet Protector",
      emoji: "🛡️",
      next: 200,
    };
  } else {
    return {
      name: "Earth Hero",
      emoji: "🌍",
      next: null,
    };
  }
}
