var Discord = require('discord.js');
var bot = new Discord.Client();


var Token = "";

var frogfacts = [
    "Frogs don't need to drink the way we do: they absorb water through their permeable skin!",
    "The world's tiniest frogs are smaller than a dime, and the largest frog can grow to be longer than a foot and weigh more than 7 pounds!",
     "There are approximately 4,740 species of frogs around the entire world.",
     "Unfortunately, about 120 amphibian species, including frogs, toads and salamanders, have disappeared since 1980.",
     "Historically, one species of amphibian would disappear every 250 years.",
     "Frogs can be found on every continent in the world except Antarctica. However, the highest concentration of frogs is found in warmer tropical climes.",
     "Frogs are known as indicator species and can give scientists valuable insight into how an ecosystem is functioning.",
     "Many frogs can jump 20 times their own height.",
     "The colourful skin of many tropical frogs acts as a warning to predators that these frogs are poisonous.",
     "The study of amphibians and reptiles is called Herpetology, and those who study them are called Herpetologists.",
     "One of the ways you can tell a male frog from a female is by looking at their ears.",
     "Most frogs moult (shed their skin) once a week but some will do it every day! Once the old skin has been pulled off, the frog usually eats it!",
     "Croaking is used by male frogs as a way to attract females.",
     "Frogs have teeth on their upper jaw, which they use to keep their prey in one place until they can swallow it.",
     "Frogs swallow using their eyes; its eyes retract into its head and help push the food down its throat.",
     "Frogs are at risk of absorbing whatever pollutions are in the water and air, and they can easily get dehydrated if they are away from water for too long.",
     "There is no scientific distinction between frogs and toads, according to the University of Michigan Museum of Zoology. Frog and toads both belong to the Anura order, but are found in different families. 'True toads' make up the Bufonidae family, which includes 580 species.",
     "Some frogs have toxic skin. Some South American frogs are so toxic that one drop of their skin secretions can kill an adult human.",
     "The largest frog is the Goliath frog, which is 13.5 inches long (30 centimeters) and weighs 6.6 lbs. (3 kilograms)."
];


bot.on('message', message => {

        //Variables
        var sender = message.author;
        var msg = message.content.toUpperCase();
        var prefix = '+';

            //Check if it's Bot and break
        if (bot.user.id === message.author.id){
            return;
        }

        //Ping Command for testing
        if(msg === prefix +  'PING'){
            message.channel.send('Pong!');
        }

        if(msg === prefix +  'FACT'){
           var rand = frogfacts[Math.floor(Math.random() * frogfacts.length)];
           message.reply({embed: {
            title: "Your Frog Fact",
            color: 0x03c11b,
            description: rand
        }})
        }


}); //End of .onMessage

//Listener for when bot Launches
bot.on('ready', () => {
console.log("Frog Facts is Online...");
bot.user.setStatus('Online');
bot.user.setGame('with frogs...');
});

bot.login(Token);
