import json
import time
import schedule
from ipservice import Service
from ipcloud import Cloud
from common import log

class Scheduler:

    def __init__(self, upservice, downservice, upinstance, downinstance, recorence):
        self.upservice = upservice
        self.downservice = downservice
        self.upinstance = upinstance
        self.downinstance = downinstance
        self.recorence = recorence
        
        
    def get_upservice(self):
        return self.upservice

    def get_downservice(self):
        return self.downservice

    def get_upinstance(self):
        return self.upinstance
    
    def get_downinstance(self):
        return self.downinstance

    def get_recorence(self):
        return self.recorence

    def set_upservice(self, upservice):
        self.upservice = upservice

    def set_downservice(self, downservice):
        self.downservice = downservice

    def set_upinstance(self, upinstance):
        self.upinstance = upinstance
    
    def set_downinstance(self, downinstance):
        self.downinstance = downinstance
    
    def set_recorence(self, recorence):
        self.recorence = recorence

    
    def get_config(self):
        conf = {}
        with open('settings.json') as json_file:
            conf = json.load(json_file)
        return conf


    def set_config(self, key, value):
        conf = {}

        with open('settings.json') as json_file:
            conf = json.load(json_file)
            conf.update(dict({key:value}))

        with open('settings.json', 'w') as json_read:
            json.dump(conf, json_read,indent=4)

        log(f'Arquivo de configuração alterado | chave: {key} , valor: {value}')
        return conf

    def load(self):
        data = self.get_config()
        self.upservice = data.get('upservice','')
        self.downservice = data.get('downservice','')
        self.upinstance = data.get('upinstance','')
        self.downinstance = data.get('downinstance','')
        self.recorence = data.get('recorence','')


    def enable_service(self, serv:Service):
        self.load()
        print(f'Serivço programado para habilitar às {self.get_upservice()}')
        log(f'Serivço programado para habilitar às {self.get_upservice()}')
        schedule.every().day.at(self.get_upservice()).do(serv.enable_auto)

    def disable_service(self, serv:Service):
        self.load()
        print(f'Serivço programado para desabilitar às {self.get_downservice()}')
        log(f'Serivço programado para desabilitar às {self.get_downservice()}')
        schedule.every().day.at(self.get_downservice()).do(serv.disable_auto)
    
    def enable_instance(self, clo:Cloud):
        print(f'Instância programada para ligar às {self.get_upinstance()}')
        log(f'Instância programada para ligar às {self.get_upinstance()}')
        schedule.every().day.at(self.get_upinstance()).do(clo.enable_instance)

    def disable_instance(self, clo:Cloud):
        print(f'Instância programada para desligar às {self.get_downinstance()}')
        log(f'Instância programada para desligar às {self.get_downinstance()}')
        schedule.every().day.at(self.get_downinstance()).do(clo.disable_instance)

