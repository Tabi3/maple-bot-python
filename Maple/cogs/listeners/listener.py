import asyncio
from nextcord.ext import commands


class Listeners(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("Bot Started")

    @commands.Cog.listener()
    async def on_message(self, message):
        print(f"[{message.guild.name}]<{message.author}>:"
              f" {message.content} ")


def setup(self):
    self.add_cog(Listeners(self))