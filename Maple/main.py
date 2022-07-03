import nextcord
from nextcord.ext import commands
import extra_functions, os
os.chdir("./Maple")
commands.Bot(command_prefix=extra_functions.get_prefix, intents=nextcord.Intents.all()).load_extensions([f"cogs.{j}.{i[:-3]}" for j in os.listdir("./cogs") for i in os.listdir(f"./cogs/{j}") if i.endswith(".py")]).run("ODQxMzYyMDg2NjY2OTYwOTI2.YJlpgQ.4w3mHvPHOYxwMKJwCDQh3eg2WQ8") if __name__ == '__main__' else 0