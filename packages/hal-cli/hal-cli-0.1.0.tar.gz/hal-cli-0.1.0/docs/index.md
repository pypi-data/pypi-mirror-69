# HAL 🤖

**HAL manages your machine learning research environment in AWS.**

Using HAL, you can dynamically provision your perfect machine in AWS - small instances for tinkering with code all the way up to massive GPU instances for training deep learning models. Instance creation and termination is fast, so mode switching is relatively painless, and the costs are kept low by automatically calculating spot instance bids.

When they're created, instances attach themselves to your own persistent, floating EBS volume (defined in terraform), where you can store data, notebooks, git repos, etc.

Users can access instances via ssh, or through a tunnelled jupyterlab session.

HAL also works for teams! Multiple users can collaborate on a shared storage volume, or set up their own volumes in the same account.

HAL is loosely based on fast.ai's [fastEC2](https://github.com/fastai/fastec2).

## Installation

I'm almost at the point where you can run

```
pip install hal-cli
```

## Features

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
