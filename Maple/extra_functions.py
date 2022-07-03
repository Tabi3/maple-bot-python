import asyncio, json, nextcord, os
from nextcord.ext import commands
os.chdir("./Maple")

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
        message, unassigned, prefix = "", "", self.context.prefix
        embed = nextcord.Embed(title       =  'Command Modules',
                              description = f'use command `{prefix}help <module/command>` '
                                                      'for more info on the command/module',
                              color       =  0xAAF0D1
        )

        try:
            for cog in mapping:
                if mapping[cog]:
                    message += [f'`{cog.qualified_name}`: '
                                f'{cog.__doc__}\n'][0]
                print(cog.qualified_name)

        except Exception:
            for cog in mapping:
                for command in mapping[cog]:
                    if cog is None:
                        unassigned += [f'`{prefix}{command.name}`: '
                                       f'{command.help}\n'][0]

        embed.add_field(name    ='Assigned Modules', 
                        value   = message
        )

        embed.add_field(name    ='Unassigned to a Module',
                        value   = unassigned, 
                        inline  = True
        )

        await self.get_destination().send(embed = embed)

    async def send_cog_help(self, cog):
        prefix = self.context.prefix
        message, message_content = (f'{cog.qualified_name} Module Commands',
                                    "".join([f'`{prefix}{command.name}`\n'
                                             f'{command.help}\n'
                                             for command in cog.get_commands()
                ]
            )
        )
        embed = nextcord.Embed(title         = message, 
                              description   = message_content, 
                              color         = 0xAAF0D1
        )

        await self.get_destination().send(embed = embed)

    async def send_group_help(self, group):
        await self.get_destination().send(
            f'{group.name}: ', {[command.name for command in group.commands]}
        )

    async def send_command_help(self, command):
        prefix = self.context.prefix
        message = f'{prefix}{command.name} '+''.join([f'<{param}> ' for param in command.params 
                      if param not in ["ctx", "self"]]
        )
        embed = nextcord.Embed(title         = f'{command.name} command syntax',
                              description   = f'`{message}` \nalso known as `{command.aliases}`',
                              color         = 0xAAF0D1
        ) if len(command.aliases) != 0 else nextcord.Embed(
                              title         = f'{command.name} command syntax', 
                              description   = f'`{message}`', 
                              color         = 0xAAF0D1)

        await self.get_destination().send(embed=embed)

class myClient(commands.Bot):
    def __init__(self, cp=get_prefix, description = None, **options):
        super().__init__(cp, Maple_help(), description = description, **options)
        [self.load_extension(f"cogs.{j}.{i[:-3]}") for j in os.listdir("./cogs") for i in os.listdir(f"./cogs/{j}") if i.endswith(".py")]
        self.run("token")
        return self


