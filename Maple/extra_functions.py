import asyncio, json, nextcord, os
import contextlib
from nextcord.ext import commands

def get_prefix(client, message):
    with open('./json/prefixes.json', 'r') as f:
        try:
            return json.load(f)[str(message.guild.id)]
        except Exception:
            return "."
        
class Maple_help(commands.HelpCommand):
    def __init__(self):
        super().__init__()

    async def send_bot_help(self, mapping):
        message, description, prefix = "", "", self.context.prefix
        embed = nextcord.Embed(title       =  'Command Modules',
                              description = f'use command `{prefix}help <module/command>` '
                                                      'for more info on the command/module',
                              color       =  0xAAF0D1
        )

        with contextlib.suppress(Exception):
            for cog in mapping:
                if mapping[cog]:
                    message += f'`{cog.qualified_name}`\n'
                    description += f'{cog.__doc__}\n'
                print(cog.qualified_name)

        embed.add_field(name    ='Assigned Modules', 
                        value   = message
        )

        embed.add_field(name    ='Module Description',
                        value   = description, 
                        inline  = True
        ) if description else None

        await self.get_destination().send(embed = embed)

    async def send_cog_help(self, cog):
        prefix = self.context.prefix
        message, message_content, description = (f'{cog.qualified_name} Module Commands',
                                    "".join(f'`{prefix}{command.name}`\n'
                                            for command in cog.get_commands()
            ), "".join(f'{command.help}\n' for command in cog.get_commands())
        )
        embed = nextcord.Embed(title         = message,  
                               color         = 0xAAF0D1
        ).add_field(name = "Commands", value = message_content)\
         .add_field(name = "Description", value= description)

        await self.get_destination().send(embed = embed)

    async def send_group_help(self, group):
        await self.get_destination().send(
            f'{group.name}: ', {[command.name for command in group.commands]}
        )

    async def send_command_help(self, command):
        prefix = self.context.prefix
        message, aliases = f'{prefix}{command.name} '+''.join([f'<{param}> ' for param in list(command.params)[2:]]
        ), ", ".join(f'`{i}`' for i in command.aliases)
        embed = nextcord.Embed(title         = f'{command.name} command syntax',
                              description   = f'`{message}` \nalso known as {aliases}',
                              color         = 0xAAF0D1
        ) if len(command.aliases) != 0 else nextcord.Embed(
                              title         = f'{command.name} command syntax', 
                              description   = f'`{message}`', 
                              color         = 0xAAF0D1)

        await self.get_destination().send(embed=embed)

class myClient(commands.Bot):
    def __init__(self, cp=get_prefix, description = None, **options):
        os.chdir("./Maple")
        super().__init__(cp, Maple_help(), description = description, **options)
        [self.load_extension(f"cogs.{j}.{i[:-3]}") for j in os.listdir("./cogs") for i in os.listdir(f"./cogs/{j}") if i.endswith(".py")]
        self.run("token")
        return self
    
    def reload_all(self):
        [self.reload_extension(f"cogs.{j}.{i[:-3]}") for j in os.listdir("./cogs") for i in os.listdir(f"./cogs/{j}") if i.endswith(".py")]


