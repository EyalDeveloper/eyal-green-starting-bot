const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription(`test the bot`),
    async execute(interaction,client) {
        await interaction.reply({
            content: `**${client.user.username} is working.**`
        });
    },
};