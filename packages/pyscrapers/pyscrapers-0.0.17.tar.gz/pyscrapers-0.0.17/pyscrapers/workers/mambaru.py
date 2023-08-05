import json
from typing import List

from pyscrapers.core.utils import get_http_status_string


def scrape_mambaru(user_id: str, session) -> List[str]:
    # raise ValueError("mamba still not implemented")
    # main_url = 'https://www.mamba.ru/{user_id}'.format(user_id=user_id)
    main_url = 'https://www.mamba.ru/mobile/api/v5.17.0.0/?reqType=json'
    request_obj = {"langId": "en", "dateType": "timestamp", "limit": 10000, "sysRequestsContainer": [
            {"uri": "/users/{}/albums/workers/".format(user_id), "method": "GET", "params":
                {"langId": "en", "dateType": "timestamp", "limit": -1}
             }
        ]
    }
    urls = []
    response = session.post(main_url, json=request_obj)
    assert response.status_code == 200, get_http_status_string(response.status_code)
    response_str = response.content.decode()
    response_obj = json.loads(response_str)
    response_obj = response_obj["sysResponsesContainer"][0]
    for album in response_obj["albums"]:
        for photo in album["workers"]:
            urls.append(photo["hugePhotoUrl"])
    return urls
