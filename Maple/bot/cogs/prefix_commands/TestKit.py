from email import header
from operator import index
from pydoc import pager
from wsgiref import headers
from nextcord.ext import commands
from Maple_bot_functions.MapleWebScraper import WolframQuery
from Maple_bot_functions.MapleUi import *


class TestKit(commands.Cog):
    """Testing Kit For Maple (Developer tools)"""

    def __init__(self, client):
        self.client = client

    @commands.command(aliases=["lp"])
    async def load_prefixed(self, _, extension: str):
        "Loads prefixed extension"
        self.client.load_extension(f"cogs.prefix_commands.{extension}")

    @commands.command(aliases=["ulp"])
    async def unload_prefixed(self, _, extension: str):
        "Unloads prefixed extension"
        self.client.unload_extension(f"cogs.prefix_commands.{extension}")

    @commands.command(aliases=["rlp"])
    async def reload_prefixed(self, _, extension: str):
        "Reloads prefixed extension"
        self.client.reload_extension(f"cogs.prefix_commands.{extension}")

    @commands.command(aliases=["rla"])
    async def reload_all(self, _):
        "Reloads all extensions"
        self.client.reload_all()

    @nextcord.slash_command(guild_ids=[954299107881660456])
    async def test(self, interaction: nextcord.Interaction, tags: str = "straight", straight: bool = True):
        await interaction.response.send_message(content='Testing Success')

    @nextcord.slash_command(guild_ids=[954299107881660456])
    async def test2(self, interaction: nextcord.Interaction, url: str, body: str):
        await interaction.response.send_message(content='Testing')
        await interaction.followup.send(content=__import__("requests").post(url, json=json.loads(body), headers={"Content-Type": "application/json"}).text)


def setup(self):
    self.add_cog(TestKit(self))
