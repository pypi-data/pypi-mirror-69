# ssh-get-sysinfo

Get system information via ssh channel.

## Install

```
pip install ssh-get-sysinfo
```

## Installed Commands

- ssh-get-sysinfo

## Usage

```
C:\Workspace\ssh-get-sysinfo>ssh-get-sysinfo --help
Usage: ssh-get-sysinfo [OPTIONS]

Options:
  -h, --host TEXT         default to localhsot.
  -P, --port INTEGER      default to 22.
  -u, --user TEXT         default to root.
  -i, --private-key TEXT  default to ~/.ssh/id_rsa
  -p, --password TEXT     NO password means using public key auth.
  --help                  Show this message and exit.
```

## Example

1. get localhost sysinfo by connect to root@localhost with public key auth.

```
ssh-get-sysinfo
```

2. get SERVER's sysinfo by connect to root@SERVER with public key auth.

```
ssh-get-sysinfo -h SERVER
```

3. get SERVER's sysinfo by connect to root@SERVER with PASSWORD auth.

```
ssh-get-sysinfo -h SERVER -p PASSWORD
```

## Release

### v0.1.0 2020/05/22

- First release.
