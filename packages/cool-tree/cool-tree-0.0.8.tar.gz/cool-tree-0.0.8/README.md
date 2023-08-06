<!-- <p align="center">
  <a href="http://suite-api.superb-ai.com/" target="blank"><img src="logo/cool-tree.png" width="200" height="200" alt="Cool-Tree Logo" /></a>
</p> -->

# Cool-tree
Official SDK for managing [Suite Platform](https://suite.superb-ai.com)

Cool-tree can both be used from the [command line](#usage-as-a-command-line-interface-cli) and as a [python library](#usage-as-a-python-library).

Main functions are:

- Manage projects
- Manage Datas
- Manage Labels

## Installation

```
$ pip install -i https://test.pypi.org/simple/ cool-tree
```


### Client Authntication

To perform remote operations on Suite you first need to authenticate.
This requires a [Account-specific API-key].

To start the authentication process:

```
$ vim ~/.spb/credentials
[YOUR_PROFILE_NAME(Default : default)]
access_key=YOUT_ACCESS_KEY
account_name = YOUR_ACCOUNT_NAME
```
You can also directly use Access key and Account name to SDK. (Check, how to use)


### How to use

First. you need to authenticate and get client from SDK
```
# Use default profile in credentials
spb.client()

# Use other profile in credentials
spb.client(profile='OTHER_PROFILE_NAME')

# and also you can directly use account_name and access_key
spb.client(account_name='YOUR_ACCOUNT_NAME', access_key='YOUR_ACCESS_KEY')
```

Now, you can use Suite SDK in your project

#### Example #1 - Describe Project
```
import spb
from spb.command import Command
from spb.models import Project

def describe_project():
    spb.client()
    command = Command(type='describe_project')
    projects = spb.run(command=command)

if __name__ == "__main__":
    test_describe_project()

```
In this case, you can be seen Project list in your account