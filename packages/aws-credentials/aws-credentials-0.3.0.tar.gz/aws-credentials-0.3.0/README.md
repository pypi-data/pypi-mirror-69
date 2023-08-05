# AWS Credentials

This tool lets you easily manage AWS IAM Credentials for a user.

## Usage
```
⇒  aws-credentials --help
usage: aws-credentials [-h]
                       {activate,create,deactivate,delete,list,rotate} ...

Utility for managing AWS access keys.

optional arguments:
  -h, --help            show this help message and exit

Commands:
  {activate,create,deactivate,delete,list,rotate}
    activate            Activate a specific access key.
    create              Create a new access key.
    deactivate          Deactivate a specific access key.
    delete              Delete a specific access key.
    list                List access keys.
    rotate              Rotate AWS credentials.
```

**activate**
```
⇒  aws-credentials activate --help
usage: aws-credentials activate [-h] [-v]
                                [--aws-access-key-id AWS_ACCESS_KEY_ID]
                                [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                                [--aws-session-token AWS_SESSION_TOKEN]
                                access_key_id

Activate a specific access key.

positional arguments:
  access_key_id         id of the key to activate.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```

**create**
```
⇒  aws-credentials create --help
usage: aws-credentials create [-h] [-v]
                              [--aws-access-key-id AWS_ACCESS_KEY_ID]
                              [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                              [--aws-session-token AWS_SESSION_TOKEN]

Create a new access key.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```

**deactivate**
```
⇒  aws-credentials deactivate --help
usage: aws-credentials deactivate [-h] [-v]
                                  [--aws-access-key-id AWS_ACCESS_KEY_ID]
                                  [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                                  [--aws-session-token AWS_SESSION_TOKEN]
                                  access_key_id

Deactivate a specific access key.

positional arguments:
  access_key_id         id of the key to deactivate.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```

**delete**
```
⇒  aws-credentials delete --help
usage: aws-credentials delete [-h] [-v]
                              [--aws-access-key-id AWS_ACCESS_KEY_ID]
                              [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                              [--aws-session-token AWS_SESSION_TOKEN]
                              access_key_id

Delete a specific access key.

positional arguments:
  access_key_id         id of the key to delete.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```

**list**
```
⇒  aws-credentials list --help
usage: aws-credentials list [-h] [-v] [--aws-access-key-id AWS_ACCESS_KEY_ID]
                            [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                            [--aws-session-token AWS_SESSION_TOKEN]

List access keys.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```

**rotate**
```
⇒  aws-credentials rotate --help
usage: aws-credentials rotate [-h] [-v]
                              [--aws-access-key-id AWS_ACCESS_KEY_ID]
                              [--aws-secret-access-key AWS_SECRET_ACCESS_KEY]
                              [--aws-session-token AWS_SESSION_TOKEN]

Rotate AWS credentials. This will delete inactive keys before creating the new
key. It will then deactivate the old key.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         Increase the verbosity of messages. "-v" for normal
                        output, and "-vv" for more verbose output.
  --aws-access-key-id AWS_ACCESS_KEY_ID
                        AWS_ACCESS_KEY_ID to use.
  --aws-secret-access-key AWS_SECRET_ACCESS_KEY
                        AWS_SECRET_ACCESS_KEY to use.
  --aws-session-token AWS_SESSION_TOKEN
                        AWS_SESSION_TOKEN to use.
```
