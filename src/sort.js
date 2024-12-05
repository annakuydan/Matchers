export default function sorting(users) {
   return users.sort((a, b) => b.health - a.health);
}