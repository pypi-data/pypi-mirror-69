# Standard library imports...
from unittest import TestCase
from unittest.mock import Mock, patch

from tauros_api.request import TaurosAPI, Response


class RequestPost(TestCase):
    api_key = 'cae5fb9186b7f940d2a9031e79f0d58043ebf114'
    api_secret = 'eada71676b6a9c1189f120160288bfed6610c87ea352a7c61ae6406ac64bb58f'

    def setUp(self):
        pass

    @patch.object(TaurosAPI, '_request')
    def test_post_response_is_ok(self, mock_get):
        tauros = TaurosAPI(api_key=self.api_key, api_secret=self.api_secret)

        # simulate response
        exam_body = {
            'side': 'buy',
            'market': 'BTC-MXN',
            'amount': '0.01',
            'price': '100000',
            'type': 'limit',
            'is_amount_value': True
        }

        exam_res = Response()
        exam_res.status_code = 200
        exam_res.body = exam_body

        mock_get.return_value = exam_res

        # Call the service, which will send a request to the server.
        path = '/api/v1/trading/placeorder/'

        data = {
            "market": "BTC-MXN",
            "amount": "0.001",
            "side": "SELL",
            "type": "LIMIT",
            "price": "250000"
        }
        response = tauros.post(path, data)

        # If the request is sent successfully, then I expect a response to be returned.
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.body, exam_body)


    @patch.object(TaurosAPI, '_request')
    def test_get_method(self, mock_get):
        tauros = TaurosAPI(api_key=self.api_key, api_secret=self.api_secret)

        # simulate response
        exam_body = {
            'biometric_verified': False,
            'birthdate': '1996-09-06',
            'can_request_card': False,
            'email': 'Foo@tauros.io',
            'first_name': 'Foo',
            'has_cacao_kyc': False,
            'has_kyc': True,
            'has_nip': True,
            'has_signature': False,
            'is_active': True,
            'is_developer': True,
            'is_referred': False,
            'is_staff': True,
            'is_superuser': True,
            'last_name': 'Bar',
            'level': 1,
            'number': '23872674',
            'phone_number': '+52*******330',
            'phone_verified': False,
            'pk': 1,
            'preference': {'coin_symbol': '\u20ac', 'default_coin': 'MXN'},
            'reference_link': 'bW9pc2VzQHThdXdvcy5pbw==',
            'require_password_change': False,
            'second_last_name': '1',
            'two_factor': False,
            'verification_in_process': False
        }

        exam_res = Response()
        exam_res.status_code = 200
        exam_res.body = exam_body

        mock_get.return_value = exam_res

        path = '/api/v1/perofile/'

        response = tauros.get(path)

        # If the request is sent successfully, then I expect a response to be returned.
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.body, exam_body)
