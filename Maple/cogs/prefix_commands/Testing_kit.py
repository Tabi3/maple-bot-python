import nextcord
from nextcord.ext import commands

class dev(commands.Cog):
    """Loads certain Modules"""

    def __init__(self, client):
        self.client = client

    @commands.command(aliases=['lp'])
    async def load_prefixed(self, extension):
        self.client.load_extension(  f'cogs.prefix_commands.{extension}')

    @commands.command(aliases=['ulp'])
    async def unload_prefixed(self, extension):
        self.client.unload_extension(f'cogs.prefix_commands.{extension}')

    @commands.command(aliases=['rlp'])
    async def reload_prefixed(self, extension):
        self.client.unload_extension(f'cogs.prefix_commands.{extension}')
        self.client.load_extension(  f'cogs.prefix_commands.{extension}')
        
    @commands.command()
    async def test(self, ctx):
        await ctx.reply("Testing Success")
        
def setup(self):
    self.add_cog(dev(self))