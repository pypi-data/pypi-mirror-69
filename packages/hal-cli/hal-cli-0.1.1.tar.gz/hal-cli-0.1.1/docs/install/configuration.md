HAL depends on a `config.json` file, stored in `~/.hal/`.

Once HAL is installed, run

```console
hal configure
```

You'll be prompted to enter the following information, which will be stored in the `config.json` file:

| parameter name       | description                                             |
| -------------------- | ------------------------------------------------------- |
| username             | The name to tag your instances with                     |
| region               | The region in which instances will be created           |
| volume-id            | The EBS volume where data and code will be stored       |
| image-id             | The default AMI used when instances start up            |
| subnet-id            | The subnet in which instances should be created         |
| security-group       | The security group in which instances should be created |
| role-arn             | The ARN of the role used to manage instances            |
| instance-profile-arn | The ARN of the instance profile                         |
| ssh-key-path         | The ssh key used to communicate with instances          |
| ssh-password         | The password for the ssh key                            |

## Updating configuration

You can reconfigure HAL at any time by running `hal configure`. The values from your existing configuration will be suggested by default to make individual value changes easier.

## Security

The details in your `config.json` are sensitive - with them, anyone can take control of your AWS account. They're stored in an entirely separate directory for this reason. You should treat them the same way as your AWS config in `~/.aws` or ssh keys in `~/.ssh`.

For the benefit of the doubt:

**You should never commit your `config.json` to version control or make it otherwise public.**
