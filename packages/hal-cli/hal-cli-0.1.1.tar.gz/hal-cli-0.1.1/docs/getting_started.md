## Installation

Install HAL with pip:

`pip install hal-cli`

## AWS setup

If you have an existing platform which you want to use with HAL, see [Existing platforms](install/existing_platforms.md).

If you're setting up an AWS account for the first time, see [Basic concepts](install/basic_concepts.md) instead.

## Configuration

When you've set up your AWS account, see [configuration](install/configuration.md) for instructions on configuring HAL.
## Using HAL

See the [CLI reference](/cli_reference) for more detailed documentation.

### Create a new instance

```console
hal start p2.xlarge
```

replacing `p2.xlarge` with the instance you want.

See the full list of instance types in your region [here](https://aws.amazon.com/ec2/spot/pricing/).

### Describe your running instances

```console
hal describe
```

### Connect to your instance via ssh

Open a new shell on your instance by running

```console
hal connect
```

Alternatively, you can open `localhost:8888` in a browser and interact with your instance through jupyterlab.

### Move files between your local machine and the remote instance

```console
hal put \
  --local-path /path/to/file/to/send \
  --remote-path /path/on/instance
```

```console
hal get \
  --local-path /path/to/save/file/at \
  --remote-path /path/on/instance
```

### Shut down your instance

```console
hal stop
```
