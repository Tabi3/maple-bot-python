import json, nextcord
from nextcord.ext import commands
import os

def get_prefix(client, message):
    with open('./json/prefixes.json', 'r') as f:
        try:
            return json.load(f)[str(message.guild.id)]
        except Exception:
            return "."
