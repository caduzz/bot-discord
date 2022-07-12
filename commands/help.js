const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js")


module.exports = {
    name: 'Help Comand Menu',
    author: 'OPai',

    run: async(client, message, args) => {
        let embed_1 = new Discord.MessageEmbed()
        .setColor('#8B35DE')
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Salve meu mano ${message.author}, veja meus comando com o menu abaixo:**`);

        let painel = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('menu')
            .setPlaceholder('tasdasddas')
            .addOptions([
                {
                    label: 'Teste1',
                    description: 'asdsads',
                    emoji: '🥱',
                    value: 'pega',
                },
                {
                    label: 'Teste1',
                    description: 'teste',
                    emoji: '😅',
                    value: 'teste',
                },
                {
                    label: 'Teste1',
                    description: 'lala',
                    emoji: '😎',
                    value: 'lala',
                }
            ])
        )

        message.reply({ embeds: [embed_1], components: [painel]}).then(drop => {
            const filtro = (interaction) =>
                interaction.isSelectMenu()
            const coletor = drop.createMessageComponentCollector({
                filtro
            });

            coletor.on('collect', async (collected) => {
                let valor = collected.values[0]
                collected.deferUpdate()
                if( valor === 'pega'){
                    let embed_2 = new Discord.MessageEmbed()
                    .setColor('#8B35DE')
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Meus comandos de pdsapdsa**`);
                    drop.edit({ content: `${message.author}`, embeds: [embed_2] });
                }
                if( valor === 'teste'){
                    let embed_2 = new Discord.MessageEmbed()
                    .setColor('#8B35DE')
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Meus comandos de sla**`);
                    drop.edit({ content: `${message.author}`, embeds: [embed_2] });
                }
                if( valor === 'lala'){
                    let embed_2 = new Discord.MessageEmbed()
                    .setColor('#8B35DE')
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Meus comandos de admin**`);
                    drop.edit({ content: `${message.author}`, embeds: [embed_2] });
                }
            });
        })
    }
}