Build-A-Bot
===========

Build a Dicord bot with ease and flexibility


For editing module repo: _Before replacing *anything* with modules from elsewhere, and I can't stress this enough, you **MUST** read the new and old files carefully to verify that you indeed have the latest version of the module. Check every file, every method, *every line* that you are not overriding things so that they are lost forever and you have to spend another 8 hours recreating it._


## Some nitpicky things

- All files are lowercase and snake case
- module names start with an uppercase letter (except for cases like jQuery) and are CamelCase
  - With acronyms, only capitilize the first letter if longer than 2 characters (ie. Url, DB, Http, AV)
- Descriptions are required, but don't need to be detailed
- All modules must have a README
  - For modules in a folder, or foldered modules, name it `README.md` and put it alongside the `module.json`
  - For single file modules, put the readme in `__READMES__` with the same name as the module file (ie. `./my_module.py` => `./__READMES__/my_module.md`)
- For single file modules make sure your meta is in the following format
  ```python
  meta = {
    ...
  } ## BuildABot -- end
  ```
  this is so the automated bot maker can properly identify the module depencencies, but is not nessesary for non-public modules
- Verify all dependencies, soft dependencies, and requirements are there, none are missing, and there are none extra
- If nessesary have `defaultConfig` is in the module meta
- Change nothing without doing what it says at the top
- modules should be independent and should not throw errors on_load, on_enable, and on_disable
- The more config options, the better

## Creating a module

### Setting up

To start, you have two options; create a single file module or a folder. You should use a folder if you plan to have, commands, locale, many classes, or complex logic.

#### Single File

1. Create your file in `src/modules` (`echo "" > src/modules/my_module.py`)
2. import buildabot module (`from buildabot import module`)
3. create a var called `meta` and assign a dict, more info about module metas below (`meta = {}`)
    - End the dict with `} ## BuildABot -- end` if it is a public module
4. create a class that extends `module` (`class Mymodule(module):`)

#### Folder

1. Create a folder, choose a folder name close to your modules' (`mkdir src/modules/my_module`)
2. Change to that folder (`cd src/modules/my_module`)
3. Create `module.json` and create an object inside, more info about module metas below (`echo "{}" > module.json`)
4. Create a python file with whatever name, I'd reccomend the same as your folder (`echo "" > my_module.py`)
5. import buildabot module (`from buildabot import module`)
6. create a class that extends `module` (`class Mymodule(module):`)

Now that you have the basic setup done, it's time to setup your module meta

### Meta

module Meta is something that tells BuildABot what your module does and how to get things rolling. The meta is an object (or dict), here is a list of all properties you can use, some are required

| Key | Type | Default | Info |
|---|---|---|---|
| class | string | n/a | Starting class of the module, more info below |
| name | string | n/a | Name of the module |
| description | string | n/a | What the module does, be as short or complex as you need |
| ?depends | string[] | [] | module dependencies |
| ?softDepends | string[] | [] | Optional module dependencies |
| ?defaultConfig | object | {} | Default config for the module |
| ?requirements | string[] | [] | Pypi requirements for the module |
| ?threaded | boolean | false | module uses threading. modules that have this true can not be disabled |
| ?disable | boolean | false | modules that have this true will not be enabled |
| ?experimental | boolean | false | Experimental modules should be used causiously as they might not behave as expected. |

Example Meta:

```json
{
  "class": "my_module.Mymodule",
  "name": "Mymodule",
  "description": "My module is an awesome module that enables the bot to do some really awesome stuff!",
  "depends": [],
  "softDepends": [
    "Commands"
  ],
  "defaultConfig": {
    "awesomeFactor": 1.42
  },
  "requirements": ["pytz"],
  "threaded": false,
  "disable": false,
  "experimental": false
}
```

If for some reason your module needs to access your or another feautres meta you can do `module#meta`

#### Class

- For single file modules, set `class` as the name of the class that extends `module`
- For folder modules, class should be set to the import of the class that extends `module` from the module folder (ie. `settings.SnowflakeSettings`, in the file `settings.py` with the class named `SnowflakeSettings`)

### module methods

- `def on_load(self)` - called when module is loaded, don't attempt to access other modules as they may not be loaded yet
- `async def on_enable(self)` - called when the module is enabled, now is when you can garentee you dependencies will be loaded
- `async def on_disable(self)` - called when module is disabled, more offten than not this won't be called when the bot stops

### Events

Events are listened using `module#on_event(event_name, listener_func, [namespace="discord"], [priority=0], [ignore_canceled=False])`, event names can be found on the [discord.py](https://discordpy.readthedocs.io/en/latest/api.html#event-reference) documentation, in addition here are the built-in events, the namespace is `buildabot`:
- `on_ready` - Called when the module manager is setup
- `on_done` - Called after enable process is finished (after `on_all_enabled`)
- `on_all_load` - Called after all modules are loaded, useful to add or modify functions in each module
- `on_load` - Called once a module has been loaded, useful to add or modify a dependant module
- `on_all_enabled` - Called when all modules have been enabled
- `on_enabled` - Called once a module has been enabled
- `on_all_disabled` - Called when all modules have been disabled
- `on_disable` - Called once a module has been disabled

_**Important:** All listener functions must be a coroutine. In order to turn a function into a coroutine they must be `async def` functions_

Each module may have their own events, you can read about them in the modules' README

To create an event, it's pretty simple, in your `on_load` define the module with `self.module_manager.define_event(event_name)` then to call the event run either `await self.module_manager.emit_event(namespace, event_name, *args, **kwargs)` or `self.module_manager.emit_event_sync(namespace, event_name, *args, **kwargs)`


### Using other modules

Using other modules is pretty easy, it's as simple as doing `self.module_manager.get_module("SomeOthermodule")`. But before you use any module you should put the module in your dependiencies, this prevents any errors and garentees the module is there when your module is enabled. If you were to soft depend a module then you should always check if the module is enabled before using it, `self.module_manager.is_enabled("SomeOthermodule")`

#### Creating commands

Because commands are so common, I thought it'd be a good idea to tell you how to use the Commands module, but more detailed info will be in the Commands README. First of all, Commands requires EmbedUI and works best with SnowflakeSettings installed, and second your module should be in a folder to be the cleanest, the tutorial will be for foldered modules only. 

1. To get setup you first want to create a new directory in your module directory called anything you want, but it's common to call it `cmds` 
2. Now, hooking into Commands is easy, as ushal you want to put Commands into your soft dependencies. 
3. Next copy this code snippit into your on_enable

```python
if self.module_manager.is_enabled("Commands"):
    from modules.commands.command_manager import CommandManager # import CommandManager for type hinting
    cmd: CommandManager = self.module_manager.get_module("Commands") # Get the command manager
    cmd.add_command_dir('my_module/cmds', ftr_dir=True) # Tell the command manager where your commands are
    cmd.add_type("my", "My module", after='info') # More info in Commands README
```
This snippit will get the Commands command manager and tell it where to look for your commands, this isnt the only way to add commands, but it is the cleanest.

- Now in your modules' commands directory, create a new python file, the name of the file will be the name of the command (ie `my_command.py`)
- Inside the file put the following code (remove comments if you want)
```python
from modules.commands.command import Command
from modules.commands.command_context import CommandContext

meta = {
    'class': 'MyCommand',
    'description': "A command that does cool stuff",
    'usage': '',
    'pack': 'my_module', 
    'type': "my",
    'permissions': []
} # More info in Commands README


class MyCommand(Command):

    async def on_command(self, context: CommandContext): # Called when the user runs the command, more info in Commands README
        await context.ok("{}, my command is the coolest command!".format(context.author.mention)) # Replys to the channel using EmbedUI
```

## Example module

This is a foldered module

`src/modules/my_module/module.json`
```json
{
  "class": "my_module.Mymodule",
  "name": "Mymodule",
  "description": "My module is an awesome module that enables the bot to do some really awesome stuff!",
  "depends": [
    "MongoDB"
  ],
  "softDepends": [
    "Commands"
  ],
  "defaultConfig": {
    "awesomeFactor": 1.42
  },
}
```

`src/modules/my_module/my_module.py`
```python
from buildabot import module


class Mymodule(module):

    def __init__(self, fm, m):
        super().__init__(fm, m)

        self.collection = None

    async def on_enable(self):
        self.collection = self.module_manager.get_module("MongoDB").collection("my_module")

        if self.module_manager.is_enabled("Commands"):
            from modules.commands.command_manager import CommandManager
            cmd: CommandManager = self.module_manager.get_module("Commands")
            cmd.add_command_dir('my_module/cmds', ftr_dir=True)
            cmd.add_type("my", "My module", after='info')
            cmd.add_alias("add", "my")
            cmd.add_alias("count", "my")

```

`src/modules/my_module/cmds/my.py`
```python
import discord

from modules.commands.command import Command
from modules.commands.command_context import CommandContext

meta = {
    'class': 'My', # Class of the command
    'description': "A command that does cool stuff", # What the command does
    'usage': '<number>', # Tells the user the command usage in the help command
    'pack': 'my_module', # Used to disable specific module commands in the Commands config
    'type': "my", # In the "My module" category in the help command
    'permissions': ['administrator'] # WIll require the user to have the `administrator` permission
    # Alias support in command meta not avaliable, for now add aliases in your `on_enable`
}


class My(Command):

    async def on_command(self, context: CommandContext):
        # Verify the correct amount of arguments
        if len(context.args) < 1:
            raise context.MissingArgsException(context)

        # Test first argument for number
        try:
            add = int(context.args[0])
        except:
            # Make sure to tell users why a command failed
            await context.error("That's not a number")
            return

        # Add to users counter, if not exist insert it with `upsert`
        result = self.command_manager.get_module("Mymodule").collection.update_one(
            {"user": context.author.id}, {"$add": {"count": add}}, {"upsert": True})

        # Get count from document
        count = result.raw_result["count"]

        # Tell the user thier updated counter
        await context.ok(f"Your counter is now at {count}")
```