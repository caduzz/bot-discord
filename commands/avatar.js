const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js")


module.exports = {
    name: "avatar",
    author: "cadu",
    
    run: async(client, message, args) => {
    
        let cor_da_embed = "#8B35DE";
    
        let embed_1 = new Discord.MessageEmbed()
            .setColor(cor_da_embed)
            .setAuthor(`Avatar de ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setFooter(`essa porra aqui`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }));
    
        let command_avatar = await message.reply({ content: `${message.author}`, embeds: [embed_1] }).then();
    }
}