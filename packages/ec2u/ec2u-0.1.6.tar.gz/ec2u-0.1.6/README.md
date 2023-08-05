# EC2 Utils CLI

## Install:
Before you can begin using **ec2u**, you must set up authentication credentials. 
If you have the AWS CLI installed, then you can use it to configure your credentials file:
```
aws configure 
```
Alternatively, you can create the credential file yourself. By default, its location is at `~/.aws/credentials`:
```
[default]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```
You may also want to set a default region. This can be done in the configuration file. By default, its location is at ~/.aws/config:
```
[default]
region=us-east-1
```

This sets up credentials for the default profile as well as a default region to use when creating connections. 
See [Credentials](https://boto3.readthedocs.io/en/latest/guide/configuration.html#guide-configuration) for in-depth configuration sources and options.

Install: `pip install ec2u`

## Feature:
  ```bash
  Usage: ec2u [OPTIONS] COMMAND [ARGS]...

  Options:
    --verbose
    --version  Show the version and exit.
    --help     Show this message and exit.

  Commands:
    gen-config    Generate AWS configuration file
    has-tag       Check whether or not instance has given tag
    private-ipv4  Get private IPv4 of the instance
  ```

## Changelog

### **0.1.6 - 2020-05-21**
#### Added
- Add subcommand `private-ipv4`
