from Maple_bot_functions import *

class WolframAlpha(nextcord.ext.commands.Cog):
    """Commands for using Wolfram Alpha"""
    
    def __init__(self, client) -> None:
        self.client = client
        self.__cog_name__ = "Wolfram Alpha"
    
    @nextcord.slash_command(name="askwolfram",guild_ids=[954299107881660456, 981995559944605736, 710865327008776274])
    async def aw(self, interaction: nextcord.Interaction, query: str):
        await interaction.response.send_message('Wait until we finish', ephemeral=True)
        myDict, site = WolframQuery(query)
        embed = nextcord.Embed(color=0xEE4540, title="Wolfram Description", url=site)
        images = []

        for i in myDict:
            try:
                value = "\n".join((lambda li: [f"`{i}`" for i in li if i != ""])(myDict[i]))
                images.extend(nextcord.Embed(url=site).set_image(
                    url="https://jonkuhrt.files.wordpress.com/2020/01/error-404-message.png" if j.startswith("data") else j)
                    for j in myDict[i]) if any(j.startswith("https:") or j.startswith("data") for j in myDict[i]) else embed.add_field(
                    name=i, value=value if value.strip() else "`None`", inline=False)
            except Exception:
                print(i)
        await (await interaction.original_message()).edit(
            content="", 
            embeds=[embed.set_footer(text="Powered by wolfram alpha")] + images
        )
    
    
def setup(self):
    self.add_cog(WolframAlpha(self))