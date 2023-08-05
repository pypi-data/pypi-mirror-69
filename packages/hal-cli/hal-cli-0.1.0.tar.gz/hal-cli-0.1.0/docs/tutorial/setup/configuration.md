# Configuration

HAL depends on a `config.json` file, stored in `~/.hal/`.

Once HAL is installed, run

```
hal configure
```

You'll be prompted to enter the following information, which will be stored in the `config.json` file:

| parameter name       | description                                             |
| -------------------- | ------------------------------------------------------- |
| username             |                                                         |
| password             |                                                         |
| region               | The region in which instances will be created           |
| volume-id            | The EBS volume where data and code will be stored       |
| image-id             | The default AMI used when instances start up            |
| subnet-id            | The subnet in which instances should be created         |
| security-group       | The security group in which instances should be created |
| role-arn             | The ARN of the role used to manage instances            |
| instance-profile-arn | The ARN of the instance profile                         |
| key-path             | The ssh key used to communicate with instances          |
