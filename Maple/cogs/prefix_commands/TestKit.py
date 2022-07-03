import nextcord
from nextcord.ext import commands

    
class TestKit(commands.Cog):
    """Testing Kit For Maple (Developer tools)"""

    def __init__(   self, client):
        self.client = client

    @commands.command(aliases=['lp'])
    async def load_prefixed(self, _, extension: str):
        "Loads prefixed extension"
        self.client.load_extension(  f'cogs.prefix_commands.{extension}')

    @commands.command(aliases=['ulp'])
    async def unload_prefixed(self, _, extension: str):
        "Unloads prefixed extension"
        self.client.unload_extension(f'cogs.prefix_commands.{extension}')

    @commands.command(aliases=['rlp'])
    async def reload_prefixed(self, _, extension: str):
        "Reloads prefixed extension"
        self.client.reload_extension(f'cogs.prefix_commands.{extension}')
        
    @commands.command(aliases=["rla"])
    async def reload_all(self, _,):
        "Reloads all extensions"
        self.client.reload_all()
        
    @commands.command()
    async def test(self, ctx):
        await ctx.reply("Testing Success")
        
def setup(client):
    client.add_cog(TestKit(client))