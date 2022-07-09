from Maple_bot_functions import *


class HentaiCommands(nextcord.ext.commands.Cog):

    def __init__(self, client) -> None:
        self.client = client

    @nextcord.slash_command(guild_ids=[954299107881660456, 981995559944605736])
    async def hentaihaven(self, interaction: nextcord.Interaction):
        await interaction.response.send_message(embed=nextcord.Embed(title="Hentai Haven", color = 0xAAF0D1,
                                                description="Horny nigga detected"
                                   ).set_footer(icon_url=interaction.user.avatar.url, text="You requested it"))

        class myView(View):
            index = 0
            def __init__(self, *, timeout: float = 120, auto_defer: bool = True, item=None):
                super().__init__(timeout=timeout, auto_defer=auto_defer, item=item)
            
            @nextcord.ui.button(label="<<", style=nextcord.ButtonStyle.gray, row=1)    
            async def button1(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                myView.index -= 1
                await interaction.response.edit_message(content='', view=myView(item=HavenSelect(index=myView.index)))
                
            @nextcord.ui.button(label=">>", style=nextcord.ButtonStyle.gray, row=1)    
            async def button2(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                myView.index += 1
                await interaction.response.edit_message(content='', view=myView(item=HavenSelect(index=myView.index)))
            

        view = myView(item=HavenSelect())
        await interaction.edit_original_message(view=view)


def setup(self):
    self.add_cog(HentaiCommands(self))
