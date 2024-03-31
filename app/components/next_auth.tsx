import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'


const clientId = process.env.DISCORD_CLIENT_ID;
const clientSecret = process.env.DISCORD_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error('DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET must be defined');
}

export default NextAuth({
    providers: [
        // Providers.Discord({
        //     clientId: process.env.DISCORD_CLIENT_ID,
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET,
        // }),
        DiscordProvider({
            clientId: clientId,
            clientSecret: clientSecret,
        }),
    ],
})
