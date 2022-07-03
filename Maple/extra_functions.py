import asyncio, json, nextcord, os
from nextcord.ext import commands
os.chdir("./Maple")

def get_prefix(client, message):
    with open('./json/prefixes.json', 'r') as f:
        try:
            return json.load(f)[str(message.guild.id)]
        except Exception:
            return "."

class myClient(commands.Bot):
    def __init__(self, cp=get_prefix, description = None, **options):
        super().__init__(cp, description = description, **options)
        [self.load_extension(f"cogs.{j}.{i[:-3]}") for j in os.listdir("./cogs") for i in os.listdir(f"./cogs/{j}") if i.endswith(".py")]
        self.run("token")
        return self


