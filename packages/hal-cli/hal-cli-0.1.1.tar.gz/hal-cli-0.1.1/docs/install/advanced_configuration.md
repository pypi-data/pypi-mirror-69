There are some configuration features which most users won't need to worry about, but are included for those with more complex requirements.

## Multiple profiles/configurations

By default, HAL uses the `config.json` file in `~/.hal`.

Multiple config files can be created and used with the `--config-file` flag. To create a new config file with the name `"alt_config"`, run

```console
hal --config-file "alt_config" configure
```

You can then use the `--config-file` flag to specify that HAL should use these details instead of the ones in `config.json`. For example:

```console
hal --config-file "alt_config" start p2.xlarge
```

This enables users to work with multiple AWS accounts; for example, one for work and one for personal projects.

## Multiple users in one account

There's nothing stopping users on a team from running multiple machines in the same account, or connecting multiple EC2 instances to the same volume. As long as the `username`s, `ssh_key_path`s and `ssh_password`s in your config are distinct, the rest can be shared (_securely_) between users.

This enables teams of users to collaborate on analysis or development with the same shared data.
