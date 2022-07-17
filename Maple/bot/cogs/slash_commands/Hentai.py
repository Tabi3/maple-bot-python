from Maple_bot_functions import *


class HentaiCommands(nextcord.ext.commands.Cog):
    """The list of usable hentai commands"""
    
    def __init__(self, client) -> None:
        self.client = client
        self.__cog_name__ = "Hentai Commands"
        
    @nextcord.slash_command(name="hentaihaven", guild_ids=[954299107881660456, 981995559944605736, 710865327008776274])
    async def _(self, interaction: nextcord.Interaction):
        await interaction.response.send_message(embed=nextcord.Embed(title="Hentai Haven", color = 0x2D142C,
                                                description="Horny nigga detected"
                                                ).set_footer(icon_url=interaction.user.avatar.url, 
                                                             text="You requested it"),
                                                ephemeral=True)

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
    
    @nextcord.slash_command(name='rule34', guild_ids=[954299107881660456])
    async def __(self, interaction: nextcord.Interaction, tags: str = "straight", straight: bool = True):
        await interaction.response.send_message('Wait until we finish')
        class myView(View):
            page = 0
            def __init__(self, *, timeout: float = 120, auto_defer: bool = True, item=None):
                self.item = item 
                self.item.myview = self
                super().__init__(timeout=timeout, auto_defer=auto_defer, item=self.item)
                
            @nextcord.ui.button(label="-", style=nextcord.ButtonStyle.gray, row=1)
            async def button0(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                await interaction.response.edit_message(content='e')
                myView.page -= 1
                item = myView(item=Rule34Select(tags=tags, straight=straight, view=self, page=myView.page))
                await interaction.edit_original_message(content=None, view=item)
                
            @nextcord.ui.button(label="<<", style=nextcord.ButtonStyle.gray, row=1)    
            async def button1(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                self.item._selected_values = [self.item.images[self.item.image_index - 1][0]]
                self.item.image_index -= 1
                for i, j in zip([1, 2], [0, 24]):
                    self.children[i].disabled = self.item.image_index == j
                await self.item.callback(interaction=interaction, view=self)
                
                
            @nextcord.ui.button(label=">>", style=nextcord.ButtonStyle.gray, row=1)
            async def button2(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                self.item._selected_values = [self.item.images[self.item.image_index + 1][0]]
                self.item.image_index += 1
                for i, j in zip([1, 2], [0, 24]):
                    self.children[i].disabled = self.item.image_index == j
                await self.item.callback(interaction=interaction, view=self)
            
            @nextcord.ui.button(label="+", style=nextcord.ButtonStyle.gray, row=1)
            async def button3(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):
                await interaction.response.edit_message(content='e')
                myView.page += 1
                item = myView(item=Rule34Select(tags=tags, straight=straight, view=self, page=myView.page))
                await interaction.edit_original_message(content=None, view=item)            
            
        
        view = myView(item=Rule34Select(tags=tags, straight=straight, page = 0))
        
        await (await interaction.original_message()).edit(content=None, view=view)
    
    


def setup(self):
    self.add_cog(HentaiCommands(self))
