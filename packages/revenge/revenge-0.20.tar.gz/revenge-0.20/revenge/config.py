
import appdirs

def init():
    global app_dirs
    global recursion

    app_dirs = appdirs.AppDirs(appname='revenge', appauthor='bannsec')

    # Help watch for recursive loading
    recursion = set()

try:
    app_dirs
except NameError:
    init()
