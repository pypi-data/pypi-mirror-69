import os
import datetime
import time
import json

from .version import __version__
from . import generic

class alexa(generic.generic):
        
    def __init__(self,apiKey,debug=False,printErrors=False):
        
        if 'DASHBOT_SERVER_ROOT' in os.environ:
            serverRoot = os.environ['DASHBOT_SERVER_ROOT']
        else:
            serverRoot = 'https://tracker.dashbot.io'        
        self.urlRoot = serverRoot + '/track'        
        self.apiKey=apiKey
        self.debug=debug
        self.printErrors=printErrors
        self.platform='alexa'
        self.version = __version__
        self.source = 'pip'        
        self.outgoingIntent=''
        
    def setOutgoingIntent(self,intent):
        self.outgoingIntent=intent
        
    def logIncoming(self,event):
        url = self.urlRoot + '?apiKey=' + self.apiKey + '&type=incoming&platform='+ self.platform + '&v=' + self.version + '-' + self.source
                    
        now = datetime.datetime.now()
        timestamp = int(1000*(time.mktime(now.timetuple()) + now.microsecond * 1e-6))
        
        try:
            event = json.loads(event)
        except Exception as e:
            if self.debug:
                print(e)     
                
        data={
            'dashbot_timestamp':timestamp,
            'event':event,
            }
        
        if self.debug:
            print('Dashbot Incoming:'+url)
            print(json.dumps(data))
            
        self.makeRequest(url,'POST',data)
            
    def logOutgoing(self,event,response):
        url = self.urlRoot + '?apiKey=' + self.apiKey + '&type=outgoing&platform='+ self.platform + '&v=' + self.version + '-' + self.source
                    
        now = datetime.datetime.now()
        timestamp = int(1000*(time.mktime(now.timetuple()) + now.microsecond * 1e-6))
        
        try:
            event = json.loads(event)
        except Exception as e:
            if self.debug:
                print(e)           
        
        try:
            response = json.loads(response)
        except Exception as e:
            if self.debug:
                print(e) 
        
        if 'response' not in response:
            response={"version":"1.0","intent":self.outgoingIntent,"response":response}        
        
        data={
            'dashbot_timestamp':timestamp,            
            'event':event,
            'response':response            
        }
        
        if self.debug:
            print('Dashbot Outgoing:'+url)
            print(json.dumps(data))
                    
        self.makeRequest(url,'POST',data)