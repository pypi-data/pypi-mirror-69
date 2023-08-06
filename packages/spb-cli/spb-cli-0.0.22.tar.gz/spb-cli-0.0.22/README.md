<!-- <p align="center">
  <a href="http://suite-api.superb-ai.com/" target="blank"><img src="logo/cool-tree.png" width="200" height="200" alt="Cool-Tree Logo" /></a>
</p> -->

# Cool-tree

![Unit Test](https://github.com/Superb-AI-Suite/cool-tree/workflows/Unit%20Test/badge.svg)
![CLI Integration Test](https://github.com/Superb-AI-Suite/cool-tree/workflows/CLI%20Integration%20Test/badge.svg)
![Build](https://github.com/Superb-AI-Suite/cool-tree/workflows/Build/badge.svg)

Official SDK for managing [Suite Platform](https://suite.superb-ai.com)

Cool-tree can both be used from the [command line](#usage-as-a-command-line-interface-cli) and as a [python library](#usage-as-a-python-library).

Main functions are:

- Manage projects
- Manage Datas
- Manage Labels

## Installation

```shell
$ pip install spb-cli
$ spb --version
0.0.1
```
After the installation, `spb` executable is available to you.

# Usage as a command line interface (CLI)

## Getting Started

### Authenticate
```shell
$ spb config
Profile Name [default if blank]: qux
Account Name: foo
Access Key: bar
Authentication failed. Please try again.
Account Name: foo
Access Key: baz
Profile 'qux' authenticated as account 'foo'
```

We need an *Access Key* to authorize each *profile*. You can register multiple profiles. For using a custom profile, you can give an additional option, `--profile <profile_name>`, for below commands.

After the authorization procedure, the below file is created.

[~/.spb/config]
```
[default]
access_key = <access_key>
account_name = <account_name>

[profile foo]
access_key = <access_key>
account_name = <account_name>
```


### List Projects
```shell
$ spb project # Lists all projects that belong to the current profile.
NAME          LABELS    PROGRESS
test            5837       14.3%
...
```

### Upload data
You can upload data and create labels for a project with this CLI. Before that, we need to initialize a workspace linked to the project.
```shell
$ spb init test-workspace
Project Name: yest
No such project. Try again.
Project Name: test
Workspace 'test-workspace' for project 'test' has created.
```

Place your image files (with extension of .jpg, .png, .gif) under the created workspace directory to upload using the following CLI command.

[Directory Structure]
```
└─ xyz
   ├─ 1.jpg
   └─ abcd
      ├─ 2.jpg
      └─ 3.jpg
```

[Upload]
```shell
$ cd test-workspace
$ spb upload xyz --log result.log
Upload 3 files to project 'test'. Proceed? [y/N] y
 33%|████████                | 1/3 [00:01<00:01,  1.13it/s]
'abcd/2.jpg' already exists in dataset 'xyz'. Use existing data? [y/N] y # use -f option for yes to all
100%|████████████████████████| 3/3 [00:03<00:00,  1.27it/s]
```


[result.log]
```
2000-01-01 00:00:00.000 xyz/1.jpg dataset xyz data_key 1.jpg label_id foo
2000-01-01 00:00:00.100 xyz/abcd/2.jpg dataset xyz data_key abcd/2.jpg label_id bar
2000-01-01 00:00:00.200 xyz/abcd/3.jpg dataset xyz data_key abcd/3.jpg label_id baz
```

### Pre-labeling for upload data
If you have JSON files placed as in the below structure and upload, the label is initialized with the content of the JSON file. To understand how to construct JSON file in the correct format, please refer to Superb Suite Manual.

```
└─ xyz
   ├─ 1.jpg
   ├─ 1.jpg.json
   └─ abcd
      ├─ 2.jpg
      ├─ 2.jpg.json
      ├─ 3.jpg
      └─ 3.jpg.json
```

### Download labels
You can download images and labels for the project in the workspace.

The result is exactly same to the directory structure of pre-labeling for uploading.
```shell
$ spb download
Download 3 files from project 'test'. Proceed? [y/N] y
100%|████████████████████████| 3/3 [00:03<00:00,  1.27it/s]
```

**Download된 라벨을 조작하여 다른 프로젝트의 초기값으로 사용할때, 이 파일 구조를 그대로 유지한 상태에서 upload할 수 있습니다.???????**


### Update labels

ex)
```shell
# The set-up is identical to the one of upload data.
$ spb upload xyz
Upload 3 files to project 'test'. Proceed? [y/N] y # This part is same to the upload command.
'1.jpg' already exists in project 'test'. Update label only? [y/N] y # Since label exists already, it requires confirmation to update. -f option for forceful update.
...
```

<!--

# Usage as a python library
### Client Authntication

To perform remote operations on Suite you first need to authenticate.
This requires a [Account-specific API-key].

To start the authentication process:

```
$ vim ~/.spb/config
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
    describe_project()

```
In this case, you can be seen Project list in your account


-->
