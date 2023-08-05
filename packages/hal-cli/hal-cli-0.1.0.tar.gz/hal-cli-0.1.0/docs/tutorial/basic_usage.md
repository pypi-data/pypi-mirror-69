# Basic usage

### Create a new instance

```
hal start p2.xlarge
```

replacing `p2.xlarge` with the instance you want.

See the full list of instance types in your region [here](https://aws.amazon.com/ec2/spot/pricing/).

### Describe your running instances

```
hal describe
```

### Move files between your local machine and the remote instance

```
hal put \
  --local-path /path/to/file/to/send \
  --remote-path /path/on/instance
```

```
hal put \
  --local-path /path/to/save/at \
  --remote-path /path/on/instance
```

### Shut down your instance

```
hal stop
```
