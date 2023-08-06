import requests

class BandoriLoader:
    '''
    Represents a class that makes api calls to bandori.party
    and bandori database
    '''
    def __init__(self, region = 'en/'):
        self.URL_PARTY = "https://bandori.party/api/"
        self.URL_GA = "https://api.bandori.ga/v1/" + region # english server default
        self.URL_GA_RES = "https://res.bandori.ga/assets/"


    def _retrieve_response(self, url) -> dict:
        '''
        Gets a response from the url and returns the result
        as a dict.
        '''
        res = requests.get(url)
        return res.json()

    def _retrieve_responses(self, url) -> list:
        '''
        ### FOR BANDORI.PARTY API CALLS

        Gets responses from provided url and returns the 
        result as a list of dictionaries. 
        
        This is intended to get all pages.
        '''
        res = []
        page = url
        while(True):
            response = requests.get(page)
            data = response.json()

            if data["next"] is None:
                break
            else:
                res.extend(data["results"])
                page = data["next"]
        
        return res
    
    def _api_get(self, id : list = [], url='', party=True) -> list:
        '''
        Handles getting responses from the APIs.
        The result is always returned as a list.
        '''
        if party:
            if not id:
                return self._retrieve_responses(url)
            
            else:
                res = []
                for i in id:
                    res.append(self._retrieve_response(url + str(i)))

                return res
        
        else:
            if not id:
                return self._retrieve_response(url)
            else:
                res = []
                for i in id:
                    res.append(self._retrieve_response(url + str(i)))
                
                return res