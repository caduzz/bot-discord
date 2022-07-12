const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: 'Help Comand Menu',
    author: 'OPai',

    run: async(client, message, args) => {
        if(args != ''){
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('ban_yes')
                        .setLabel('Sim')
                        .setStyle('SUCCESS')
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('ban_now')
                        .setLabel('Não')
                        .setStyle('DANGER')
                )
                
            await message.reply({
                content: `Você quer banir ${args}?`,
                components: [row],
                ephemeral: true,
            })

            
            const filter = (btnInt = ButtonInteraction) => {
                return message.author.id === btnInt.user.id
            }

            const coletor = message.channel.createMessageComponentCollector({
                filter,
                max: 1,
                time: 1000 * 15,
            })

            coletor.on('collect', (i = ButtonInteraction) => {
                i.reply({
                    content: 'Concluído',
                    ephemeral: true
                })
            })

            coletor.on('end', async (collection) => {
                collection.forEach((click) => {
                    console.log(click.user.id, click.customId);                    
                });
                                
                if(collection.first()?.customId === 'ban_yes') {
                    console.log(args);
                }
                return;
            })
        }else {
            await message.reply({
                content: 'Pow meu rei quem krl tu quer banir'
            })
            return;
        }
    }
}