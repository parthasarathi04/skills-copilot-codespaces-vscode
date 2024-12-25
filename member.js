// Function to find members with a specific skill
function skillsMember(members, skill) {
    // Filter the members array to find members with the specified skill
    return members.filter(member => member.skills.includes(skill));
}

// Example usage:
const members = [
    { name: 'Alice', skills: ['JavaScript', 'React', 'Node.js'] },
    { name: 'Bob', skills: ['Python', 'Django', 'Machine Learning'] },
    { name: 'Charlie', skills: ['JavaScript', 'Angular', 'TypeScript'] },
    { name: 'Dave', skills: ['Java', 'Spring', 'Hibernate'] }
];

const skillToFind = 'JavaScript';
const membersWithSkill = skillsMember(members, skillToFind);

console.log('Members with skill', skillToFind, ':', membersWithSkill);