"""
@author: Roman Matusevich
"""
import base64

import rlp
from mintersdk import MinterHelper


class MinterDeeplink(object):
    """ Create deeplink for Minter transaction """

    BASE_URL = 'https://bip.to/tx'

    def __init__(self, tx, data_only=False, base_url=BASE_URL):
        """
        Create deeplink object
        Args:
            tx (MinterTx): MinterTx object
            data_only (bool): Generate deeplink only with tx data
            base_url (str): Base URL for generated deeplink
        """
        super(MinterDeeplink, self).__init__()

        self.base_url = base_url

        # Generate deeplink structure attributes
        self.__type = tx.TYPE
        self.__data = self.__get_tx_data(tx=tx)
        self.nonce = tx.nonce if not data_only else ''
        self.gas_price = tx.gas_price if not data_only else ''
        self.gas_coin = tx.gas_coin if not data_only else ''
        self.payload = tx.payload if not data_only else ''

    @staticmethod
    def __get_tx_data(tx):
        """ Get data from transaction """
        structure = tx._structure_from_instance()
        return rlp.encode(list(structure['data'].values()))

    def generate(self, password=None):
        """
        Generate deeplink
        Args:
            password (str): Check password
        Returns:
            deeplink (str)
        """

        # Create deeplink structure
        gas_coin = MinterHelper.encode_coin_name(
            self.gas_coin
        ) if self.gas_coin else ''
        deep_structure = [self.__type, self.__data, self.payload, self.nonce,
                          self.gas_price, gas_coin]

        # Create deephash base64 urlsafe
        deephash = rlp.encode(deep_structure)
        deephash = base64.urlsafe_b64encode(deephash)
        deephash = deephash.decode().rstrip('=')

        # Create deeplink URL
        deeplink = self.base_url + '/' + deephash

        # If password check needed, add (`p` URL param)
        if password:
            password = base64.urlsafe_b64encode(password.encode())
            password = password.decode().rstrip('=')

            deeplink += '?p=' + password

        return deeplink
