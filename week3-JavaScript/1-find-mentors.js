import { modules, students, mentors, classes } from "./hyf.js";

/**
 * A function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const possibleMentors = [];

  mentors.forEach((mentor) => {
    if (mentor.canTeach && mentor.canTeach.includes(moduleName)) {
      possibleMentors.push(mentor.name);
    }
  });

  return possibleMentors;
};

// Try the function
console.log(possibleMentorsForModule('using-apis'));

/**
 * A function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const mentorsForModule = mentors.filter((mentor) => {
    return mentor.canTeach && mentor.canTeach.includes(moduleName);
  });

  if (mentorsForModule.length === 0) {
    return "No mentors available for this module.";
  }

  const randomIndex = Math.floor(Math.random() * mentorsForModule.length);
  return mentorsForModule[randomIndex].name;
};

// Try the function
console.log(findMentorForModule('javascript'));