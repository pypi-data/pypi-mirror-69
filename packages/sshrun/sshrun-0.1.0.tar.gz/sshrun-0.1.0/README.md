# sshrun

Run command on remote server via ssh channel.

## Install


```shell
pip install sshrun
```

## Installed Command

- sshrun

## Usage

```shell
C:\Workspace\sshrun>python sshrun.py --help
Usage: sshrun.py [OPTIONS] [COMMAND]...

  Run command on remote server via ssh channel.

  Example:

  1. Create ssh channel by user and password, and then run the command:

      sshrun -h SERVER -P port -u root -p PASSWORD -- ping -c 4 127.0.0.1

  2.  Create ssh channel by user test and the given private key, and then
  run the command:

      sshrun -h SERVER -P port -u test -i ~/.ssh/id_rsa -- echo hi

  3. Create ssh channel by user root and the default private key, and then
  run the command:

      sshrun -h SERVER -- echo hello

  Note:

  "--" means all arguments after "--" are options or arguments of the
  command

Options:
  -h, --host TEXT         required.
  -P, --port INTEGER      default to 22.
  -u, --user TEXT         default to root.
  -i, --private-key TEXT  default to ~/.ssh/id_rsa
  -p, --password TEXT     NO password means using public key auth.
  --help                  Show this message and exit.
```

## Releases

### v0.1.0 2020/05/22

- First Release
