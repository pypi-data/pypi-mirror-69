import socket
import json
import mimetypes
from .socketutils import ServerSocket
##from .extensions import Protocol_HTTP

class Hook:
    def __init__(self,name,controller=None):
        self.name=name
        self.controller=controller or self._call
        self.functions=[]
        self.topfunctions=[] ## Top functions override all the others. These are sorted by priority, and must return "True" or "False" (determining whether or not to continue)
    def _call(self,*args,**kwargs):
        continu=True
        for x in self.topfunctions:
            if continu:
                continu=x(*args,**kwargs)
        if continu:
            for x in self.functions:
                x(*args,**kwargs)
    def call(self,*args,**kwargs):
        self.controller(*args,**kwargs)
    def addFunction(self,function):
        self.functions.append(function)
    def addTopFunction(self,function,p=None):
        priority=p or len(self.topfunctions)+1000
        self.topfunctions.insert(priority,function)
        ## Lower numbers = higher priority. No priority value = minimum priority.
        ## It is likely that this will mainly be used for security protocols, such as blocking 
        ## the continuation of an HTTP request if the username and password are invalid.
    def delTopFunction(self,function):
        self.topfunctions.remove(function)
    def delFunction(self,function):
        self.functions.remove(function)


class TCPServer:
    def __init__(self,host,port,blocking=True):
        self.server=ServerSocket(host,port)
        self.blocking=blocking
        self.host=host
        self.port=port
        self.extensions=[]
        self.protocols=[]
        self.hooks={}
        init=self.addHook('init')
        init.addFunction(self.listen)
        main=self.addHook("mainloop")
        main.addFunction(self.run)
        handle=self.addHook("handle")
        handle.addFunction(self.handle)
    def inittasks(self):
        pass
    def listen(self,lst=5):
        self.server.listen(lst)
    def addExtension(self,extensionobject):
        self.extensions.append(extensionobject)
        extensionobject.extend(self)
    def addProtocol(self,protocolObject):
        self.protocols.append(protocolObject)
        protocolObject.addToServer(self)
    def run(self):
        if self.blocking:
            connection=self.server.wait_until_connection()
            self.getHook("handle").call(connection,connection.recieveall())
        else:
            connection=self.server.get_connection_nonblocking()
            if connection:
                self.getHook("handle").call(connection,connection.recieveall())
    def getHook(self,hook):
        return self.hooks[hook]
    def addHook(self,hook):
        h=Hook(hook)
        self.hooks[hook]=h
        return h
    def delHook(self,hook):
        del self.hooks[hook]
    def handle(self,connection,data):
        print(data)
    def start(self,*args,**kwargs):
        self.getHook("init").call(*args,**kwargs)
        while 1:
            self.getHook("mainloop").call() ## Mainloop functions must not have args
