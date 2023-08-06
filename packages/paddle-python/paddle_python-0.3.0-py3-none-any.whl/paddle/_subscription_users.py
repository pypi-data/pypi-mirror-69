import logging
from typing import List
from urllib.parse import urljoin

from .types import PaddleJsonType

log = logging.getLogger(__name__)


def list_subscription_users(
    self,
    subscription_id: int = None,
    plan_id: int = None,
    state: int = None,
    page: int = None,
    results_per_page: int = None,
) -> List[dict]:
    """
    https://developer.paddle.com/api-reference/subscription-api/subscription-users/listusers
    """
    url = urljoin(self.vendors_v2, 'subscription/users')

    states = ['active', 'past due', 'trialling', 'paused']
    if state is not None and state not in states:
        raise ValueError('state must be one of {0}'.format(', '.join(states)))

    json: PaddleJsonType = {
        'subscription_id': subscription_id,
        'plan_id': plan_id,
        'state': state,
        'page': page,
        'results_per_page': results_per_page,
    }
    return self.post(url=url, json=json)
