# `hal`

HAL manages your machine learning research environment in AWS

**Usage**:

```console
$ hal [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--config TEXT`: The name of the config file to use  [default: config]
* `--install-completion`: Install completion for the current shell.
* `--show-completion`: Show completion for the current shell, to copy it or customize the installation.
* `--help`: Show this message and exit.

**Commands**:

* `configure`: Configure profiles used to run HAL.
* `connect`: Open an ssh connection to your instance.
* `describe`: Describes any currently running instances
* `get`: Fetch a file from the remote instance via...
* `open`: Open the pod bay doors
* `put`: Send a file to the remote instance via sftp
* `start`: Create a new instance of a specified type.
* `stop`: Shut down a running instance

## `hal configure`

Configure profiles used to run HAL.
See help at `docs/install/configuration.md`

**Usage**:

```console
$ hal configure [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

## `hal connect`

Open an ssh connection to your instance. Replaces the current process with
a new shell running on the remote machine.

**Usage**:

```console
$ hal connect [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

## `hal describe`

Describes any currently running instances

**Usage**:

```console
$ hal describe [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

## `hal get`

Fetch a file from the remote instance via sftp

**Usage**:

```console
$ hal get [OPTIONS]
```

**Options**:

* `--local-path PATH`: The path where the fetched file should be saved  [required]
* `--remote-path PATH`: The path of the file to fetch from the remote machine  [required]
* `--help`: Show this message and exit.

## `hal open`

Open the pod bay doors

**Usage**:

```console
$ hal open [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

## `hal put`

Send a file to the remote instance via sftp

**Usage**:

```console
$ hal put [OPTIONS]
```

**Options**:

* `--local-path PATH`: The path of the file to send on the local machine  [required]
* `--remote-path PATH`: The path where the file should be saved on the remote machine  [required]
* `--help`: Show this message and exit.

## `hal start`

Create a new instance of a specified type.
Valid options are listed [here](https://aws.amazon.com/ec2/spot/pricing/).
If --spot-price is not specified, a bid will be automatically calculated at
1.1x the best available price.

**Usage**:

```console
$ hal start [OPTIONS] INSTANCE_TYPE
```

**Options**:

* `--spot-price FLOAT`: The price you're willing to pay per hour
* `--connect / --no-connect`: If True, opens an new shell on the instance on startup
* `--help`: Show this message and exit.

## `hal stop`

Shut down a running instance

**Usage**:

```console
$ hal stop [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.
