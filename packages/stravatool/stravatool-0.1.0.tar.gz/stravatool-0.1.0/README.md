# stravatool

The Strava API authentication was a little rough to use, so I developed this module to help.

There are two parts:

- stravatool.StravaTool: A class to help manage rotating access tokens.  A config file is needed to help store the api access information.
- stravatool-helper.py: A script written to help populate the config file.

More might be added later, but for now, this was all I needed.

## StravaTool

```python
from stravatool import StravaTool

# init the class with the path of the config file
strava = StravaTool("myconfig.ini")

# get the current auth token
# if the current one is still valid, it is returned, else, it is refreshed first.
access_token = strava.access_token()

# to get the auth headers
# this is a shortcut wrapper to format the access token in a dictionary that can be passed as the header in a requests call
headers = strava.auth_headers()
```

By default, the strava api config is pulled from the config section labeled "strava".  To override this, set the conf_section parameter when initializing the class.

## stravatool-helper.py

First, create a Strava API app: https://developers.strava.com/
You will need both a client_id and a client_secret.

Then, run the script, you will need to specify the location of the config file. You can choose to either pre-populate the client id and secret, or fill them in at the prompt.

```
$ stravatool-helper.py test.ini
```

After reading in the client id and secret, the script will spawn a simple http server.  You will be prompted for a hostname and port.  You may choose any port that is open on your system, but currently, only 127.0.0.1 is an acceptable redirect url from the strava api.

You will be given a url.  Just open it in your browser, where you can authorize the app you created.  You will then be redirected back to the simple http server you are running via the script.  Copy the code that is shown in the browser, then return to the terminal.

Ctrl-C out of the simple http server, where you will see more prompts.  First, it will ask for the code out of the browser.

Finally, the access token, refresh token, and expiration date are retrieved, and written to the config file.

By default, the strava api config is pulled from the config section labeled "strava".
To override this, use the `--section` argument when launching the script.
