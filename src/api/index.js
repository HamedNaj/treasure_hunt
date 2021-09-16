import ananasImage from "../images/ananas.jpg";
import rewardImage from "../images/reward.jpg";
import welcomeImage from "../images/welcome.jpg";
import sexImage from "../images/sex.jpg";
import downTownImage from "../images/downtown.jpg";
import valentineImage from "../images/valentine.jpg";
import behindImage from "../images/behind.jpg";
import hookImage from "../images/hook.jpg";

export const getChallenges = (stage) => {
  return challenges[stage]
}

export const getReward = () => {
  return {
    text: `Happy Anniversary my love.
    lets have a 7 days trip to Crystal Waterworld Resort & Spa in Antalya.`,
    image: rewardImage
  }
}
export const getWelcome = () => {
  return {
    text: `Here are some challenges that you should do in order to find your gift (you already know whats your gift)
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
  question: 'window on your right',
  desc: '2 letters',
  hint: 'in my room there is a ticket on the window type what you see on that ticket',
  answers: ['hi'],
}, {
  question: 'Day of the week that we went on our first date',
  desc: '7 letters',
  hint: 'shame on you, it was the fourth day',
  answers: ['tuesday'],

}, {
  question: 'what do i call you in this picture (finglish)',
  desc: '6 letters',
  hint: 'its a fruit',
  image: ananasImage,
  answers: ['ananas', 'aananas'],

}, {
  question: 'you brought light in to my house, find it in that',
  desc: '5 letters',
  hint: 'some thing you bought for me',
  answers: ['jooon'],

},{
  question: 'what were we doing before this picture',
  desc: '3 letters',
  hint: 'you know what were we doing :D',
  image: sexImage,
  answers: ['sex'],

}, {
  question: 'lets play Eldorado and the have some ....',
  desc: '4 letters',
  hint: 'there is a ticket on the game',
  answers: ['beer'],

}, {
  question: 'when is this ?',
  desc: '9 letters',
  hint: 'love day',
  image: valentineImage,
  answers: ['valentine', 'valentineday'],

}, {
  question: 'what does the smallest plant say ?',
  desc: '4 letters',
  hint: 'go to Terrace',
  answers: ['hug'],

},{
  question: 'whats behind this photo? ',
  desc: '2 letters',
  hint: 'not this photo the physical photo',
  image: behindImage,
  answers: ['hm'],

}, {
  question: 'find it in the most useful item in the kitchen',
  desc: '4 letters',
  hint: 'it does everything',
  answers: ['boos']
}, {
  question: 'where did we celebrate your birthday ?',
  desc: '4 letters',
  hint: 'in Kish, reverse of kooh',
  image: hookImage,
  answers: ['hook', 'hooklounge'],

}, {
  question: 'where is this ? ',
  desc: '8 letters',
  hint: 'very close to balcafe',
  answers: ['downtown'],
  image: downTownImage,
}, {
  question: 'find a box between glasses and see what does it say ?  ',
  desc: '8 letters',
  hint: 'look at the bottom of the box',
  answers: ['loveyou'],
  lastQuestion: true
}]
