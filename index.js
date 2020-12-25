require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

var checkWord = require('check-word'),
words     = checkWord('en'); // setup the language for check, default is en

bot.login(TOKEN);
var users = []; //array for usernames
var usercounter = 0; //number of users 
var k = 0; // var for leaving list will reset to 0 at end of leave
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);


  
}); //bot login

//words.check('word') returns true or false, useful for word game.


function remainingtimer(){ //function call timer 60 seconds
 
  var count = 60;

  counter = setInterval(() => {
    if (count > 0) {
      console.log(count)
      count--
    } else {
      clearInterval(counter)
    }
  }, 1000)


};




bot.on('message', msg => {
  if (msg.content === 'gay') {
    msg.channel.send(`${msg.author.username} is Gay`);
  } // end of gay if 

  
  
  if (msg.content === '+join') 
  {
    users[usercounter] = msg.author.username;
    usercounter++;
    msg.channel.send(`${msg.author.username} has joined Shiritori`);
  } //end of join

  

  if (msg.author.username === checkeruser) //broken will not search for user fix.
  {
    var stringcheck = msg.content;
    stringcheck = stringcheck.replace(/\s+/g, '');
    if(words.check(stringcheck) === true)
      {    
        
        msg.channel.send(`${stringcheck} is a valid word`);
      }
    else
    {
      msg.channel.send(`${stringcheck} is a not valid word`);
    }

    checkeruser = 'jd102nd01n2d0n1d'; //set to totally random set of letters and numbers so won't trigger again.
  } // end of check end

  if (msg.content === '+check')
  {
      var checkeruser = msg.author.username;
    msg.channel.send('Shiritori will check next user inputed word');
    



  }// end of check start

  if (msg.content === '+list')
  {
    if(usercounter==0)
    {
      msg.channel.send('No Players in Shiritori');

    }
    for(j=0;j<usercounter;j++) //list check players
    {
      msg.channel.send(`${users[j]} is in Shiritoti and is in player postion ${j+1}`);

    }; //end of for loop
  } //end of list

  
  
  if (msg.content === '+leave')
{

usercounter--; //lowers number of users

for(j = 0; j < usercounter; j++)
{

  if(msg.author.username === users[j])
  {
  var k = j;


  } // if user matches array index


}; // end of loop 

for(k;k<usercounter;k++)
{

if(k != usercounter) // shifts users for lost space
{
users[k] = users[k+1]
} // end of if statement



} // end of second for loop

k = 0;
msg.channel.send(`${msg.author.username} is a bitch and has left Shiritori`)
} // end of leave
  



} // end of bot on
) // end of bot on 

