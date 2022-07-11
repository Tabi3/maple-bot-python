from Maple_bot_functions import *

class Help(nextcord.ext.commands.Cog):
    def __init__(self, client) -> None:
        self.client = client
        super().__init__()
    
    @nextcord.ext.commands.command(aliases=['help'])
    async def _help(self, ctx):
        prefix = self.client.command_prefix(..., ctx)
        embed = nextcord.Embed(title="Bot Help", 
                               description="Hello there, I'm Maple, developed by Tafí🍃#1290 in 2022 Around April.\n"
                                           "Welcome to the help page, for more info on a command\n"
                ).add_field(name="Command execution syntax", value=f"`{prefix}<command name> <args>` or\n"
                                                                    "`/<command name> <args>`")
        await ctx.send(embed=embed, view=View(item=HelpSelect(self.client)))
    
    @nextcord.slash_command(guild_ids=[954299107881660456])
    async def help(self, interaction: nextcord.Interaction) -> None:
        prefix = self.client.command_prefix(..., interaction)
        embed = nextcord.Embed(title="Bot Help", 
                               description="Hello there, I'm Maple, developed by Tafí🍃#1290 in 2022 Around April.\n"
                                           "Welcome to the help page, for more info on a command",
                               color = 0xF1828D
                ).add_field(name="Command execution syntax", value=f"`{prefix}<command name> <args>` or\n"
                                                                    "`/<command name> <args>`")
        await interaction.response.send_message(embed=embed, view=View(item=HelpSelect(self.client)))

def setup(self):
    self.add_cog(Help(self))
    