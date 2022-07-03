from nextcord.ext import commands
import extra_functions, os

def main():
    
    bot = commands.Bot(command_prefix=extra_functions.get_prefix,
                       ) # placeholder for now
    
    bot.run("token")
    
    return 0

if __name__ == '__main__':
    main()