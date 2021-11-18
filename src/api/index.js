import rewardImage from "../images/reward.jpg";
import welcomeImage from "../images/welcome.jpg";

export const getChallenges = (stage) => {
  return challenges[stage]
}

export const getReward = () => {
  return {
    text: `Happy engagement day my love`,
    image: rewardImage
  }
}
export const getWelcome = () => {
  return {
    text: `Here are some challenges that you should do in order to find your gift
     there are two types of challenges, the ones which you should answer the question and the ones which you should find a letter based on the text you see and type it in th text box blow.
     Good Luck`,
    image: welcomeImage
  }
}


const challenges = [{
  question: 'Your name ? ',
  desc: '7 letters',
  hint: 'you really dont need hint for this',
  answers: ['mahshid'],
  firstQuestion: true
}, {
  question: 'what was the song we listened the most in our first vacation',
  desc: '6 letter',
  hint: 'from me',
  answers: ['saveme'],
}, {
  question: 'what is your nickname for me ? ',
  desc: '8 letters',
  hint: 'you know it :D',
  answers: ['gholombe'],

}, {
  question: 'our first hotel ?',
  desc: '6 letters',
  hint: '',
  answers: ['marina'],

},{
  question: 'what did you get me for my second birthday ?',
  desc: '7 letters',
  hint: 'what hint are you looking for ? did you get me anything ?',
  answers: ['nothing'],

}, {
  question: 'where was our first outdoor sex?',
  desc: '4 letters',
  hint: 'shahrak',
  answers: ['omid', 'shahrakomid'],

},{
  question: 'what is my favorite position?',
  desc: '9 letters',
  hint: 'your legs will rich the skies',
  answers: ['forghooni'],

}, {
  question: 'where did I kiss you for the first time ? ',
  desc: '3 letters',
  hint: 'it was in my car in front of ....',
  answers: ['ava'],

}, {
  question: 'what was the first movie that we almost watch together ?',
  desc: '12 letters',
  hint: 'christopher nolan',
  answers: ['interstellar'],

}, {
  question: 'our last hotel ?',
  desc: '8 letters',
  hint: '',
  answers: ['granada'],

}, {
  question: 'what was our seat number in airplane coming back to tehran ',
  desc: 'you can find the ticket between the teas',
  hint: '',
  answers: ['12c'],

},{
  question: 'how many points did you get in only game you won ',
  desc: 'I have thrown it out',
  hint: 'it was garbage, two middle circle are ten points and each circuit decrease by one point',
  answers: ['46','47','48','49','45','44'],

}, {
  question: 'fill the blanks “love you from enghelab complex ------ call me ----” BUT first have a drink then find it',
  desc: 'find the letter inside of a drawer',
  hint: '',
  answers: ['ashghalibabei']
}, {
  question: 'im a note inside a big red container and there are 3 ways to get to the container',
  desc: 'find me inside that container',
  hint: 'you will need a key to get inside it',
  answers: ['letsgo'],

}, {
  question: 'waiting for you in india',
  desc: '5 letters',
  hint: '',
  answers: ['hello'],
}, {
  question: 'find me inside of the mountain climbing stuff',
  desc: '4 letters',
  hint: 'its so high',
  answers: ['beta']
}, {
  question: 'there are many plastics around me but im very special, keep the content it will be needed later',
  desc: 'its written on the content',
  hint: 'the plastic reminds you of a very good trip',
  answers: ['fire'],
}, {
  question: 'what was the birthday girl name in Antaliya',
  desc: '8 letters',
  hint: '',
  answers: ['fereshte']
},{
  question: 'tha captain name ?',
  desc: '7 letters',
  hint: 'tv serie',
  answers: ['reymond']
},{
  question: 'how many days has it been',
  desc: '',
  hint: 'last digit is 7',
  answers: ['427']
},{
  question: 'im behind a shy girl ',
  desc: '4 letters',
  hint: 'your last present to me',
  answers: ['gooz']
},{
  question: 'meet me in the park',
  desc: '5 letters',
  hint: '',
  answers: ['light']
}, {
  question: 'light it up see the question and answer me ',
  desc: '',
  hint: '',
  answers: ['yes'],
  lastQuestion: true
}]
