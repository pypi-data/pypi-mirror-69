import os
import sys


def install():
    from context_menu import menus

    pyLoc = sys.executable  # .replace('python.exe', 'pythonw.exe')
    scriptLoc = os.path.join(os.path.dirname(
        os.path.realpath(__file__)), 'main.py') # Location of parser to be called
    menu = menus.ContextMenu('Sort Files', type='DIRECTORY_BACKGROUND')

    extractCommand = menus.ContextCommand('Extract Files', command=f'{pyLoc} {scriptLoc} -x')
    extensionCommand = menus.ContextCommand('Sort by Extension', command=f'{pyLoc} {scriptLoc} -e')
    typeCommand = menus.ContextCommand('Sort by Type', command=f'{pyLoc} {scriptLoc} -t')

    dateMenu = menus.ContextMenu('Sort By Date')
    dateMenu.add_items([
        menus.ContextCommand('Day', command=f'{pyLoc} {scriptLoc} -d D'),
        menus.ContextCommand('Month', command=f'{pyLoc} {scriptLoc} -d M'),
        menus.ContextCommand('Year', command=f'{pyLoc} {scriptLoc} -d Y')

    ])

    menu.add_items([
        extractCommand,
        extensionCommand,
        typeCommand,
        dateMenu
    ])

    menu.compile()


def uninstall():
    from context_menu import windows_menus
    windows_menus.run_admin()

    windows_menus.delete_key(os.path.join(windows_menus.context_registry_format('DIRECTORY_BACKGROUND'), 'Sort Files'))


# import winreg
# import os
# import sys
# import ctypes
# # Ok, so we have to make a windows registry install for cascading menus
#
#
# # Takes the registry path, creates it if it doesn't exist, then sets the value
# rootPath = 'Directory\\Background\\shell\\FileSorter'
# pyLoc = sys.executable  # .replace('python.exe', 'pythonw.exe')
# scriptLoc = os.path.join(os.path.dirname(
#     os.path.realpath(__file__)), 'main.py') # Location of parser to be called
#
#
# def is_admin():
#     try:
#         return ctypes.windll.shell32.IsUserAnAdmin()
#     except:
#         return False
#
#
# def formatCommand(param):
#     global pyLoc, scriptLoc
#     return '"{}" "{}" {}'.format(pyLoc, scriptLoc, param)
#
#
# def setValue(path, variable, value):
#     registry_key = winreg.OpenKey(winreg.HKEY_CLASSES_ROOT, path, 0,
#                                   winreg.KEY_WRITE)
#     winreg.SetValueEx(registry_key, variable, 0, winreg.REG_SZ, value)
#     winreg.CloseKey(registry_key)
#
#
# def createMenu(path, caption):
#     winreg.CreateKey(winreg.HKEY_CLASSES_ROOT, path)
#     setValue(path, 'MUIVerb', caption)
#     setValue(path, 'subcommands', '')
#     path = os.path.join(path, 'shell')
#     winreg.CreateKey(winreg.HKEY_CLASSES_ROOT, path)
#     return path
#
#
# def createCommand(path, name, command):
#     path = os.path.join(path, name.replace(' ', '_'))
#     winreg.CreateKey(winreg.HKEY_CLASSES_ROOT, path)
#     setValue(path, '', name)
#     path = os.path.join(path, 'command')
#     winreg.CreateKey(winreg.HKEY_CLASSES_ROOT, path)
#     setValue(path, '', command)
#
#
# def createOptionCommand(path, names, values, command):
#     for name, value in zip(names, values):
#         createCommand(path, name, formatCommand(
#             '--{} {}'.format(command, value)))
#
#
# def install():
#     global rootPath, typeCommand
#
#     # Creating the original entry
#     rootPath = createMenu(rootPath, 'Sort Files')
#
#     # Adding each option to the context menu
#
#     # Sort by Type
#     typeCommand = formatCommand('--type')
#     createCommand(rootPath, 'Sort by File Type', typeCommand)
#     # Extract files
#     extractCommand = formatCommand('--extract')
#     createCommand(rootPath, 'Uproot files', extractCommand)
#
#     # Sort by extension
#     extensionCommand = formatCommand('--extension')
#     createCommand(rootPath, 'Sort by File Extension', extensionCommand)
#
#     datePath = os.path.join(rootPath, 'Sort_By_Date')
#     datePath = createMenu(datePath, 'Sort By Date')
#
#     createOptionCommand(datePath, ['Day', 'Month', 'Year'], [
#                         'D', 'M', 'Y'], 'date')
#
#     # alphaPath = os.path.join(rootPath, 'Sort_alpha')
#     # alphaPath = createMenu(alphaPath, 'Sort Alphabetically')
#     #
#     # nums = list(map(str, range(1, 11)))
#     # createOptionCommand(alphaPath, nums, nums, 'alphabetically')
#
#
# if __name__ == "__main__":
#     if is_admin():
#         install()
#     else:
#         ctypes.windll.shell32.ShellExecuteW(
#             None, "runas", sys.executable, __file__, None, 1)
#
