import json, nextcord
from nextcord.ext import commands

def get_prefix(client, message):
    with open('json/prefixes.json', 'r') as f:
        return json.load(f)[str(message.guild.id)]

