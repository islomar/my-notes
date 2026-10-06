# Ubuntu 24.04 → 26.04.1 LTS upgrade

Session date: 2026-10-06. Laptop: Slimbook.

## Resume the Claude Code session

Session ID: `1029b552-f07b-4082-b9c8-078858fbcf5f`

```bash
cd ~/workspace/my-notes/AI/local-llm-models   # the session belongs to this directory
claude --resume 1029b552-f07b-4082-b9c8-078858fbcf5f
```

- `claude --continue` in the same directory resumes the most recent session there.
- `claude --resume` with no ID opens a picker.
- Transcript file: `~/.claude/projects/-home-islomar-workspace-my-notes-AI-local-llm-models/1029b552-f07b-4082-b9c8-078858fbcf5f.jsonl`

## System facts

| Item | Value |
|---|---|
| Release | Ubuntu 24.04.5 LTS, upgrade policy `Prompt=lts` |
| Kernel | 7.0 (HWE), same major version as 26.04 |
| GPU | Intel Iris Xe + NVIDIA RTX 3050 Ti Mobile (4 GB), driver 580.178.04 |
| Session | X11 (26.04 GNOME has no Xorg session) |
| Disk | NVMe 1 TB: `p2` = `/` and `/home` (ext4, 320 GB), `p3` = data (ext4, 611 GB, mounted at `/media/islomar/<data-partition-uuid>`) |
| Home size | 117 GB, about 92 GB without `.cache` and Trash |
| DKMS modules | `nvidia`, `slimbook-qc71` (both build on kernel 7.0) |

## Why upgrade

- GNOME 46 → 50, newer Mesa, systemd, Python, compilers.
- Support until 2031 (24.04 ends standard support in 2029).
- Post-quantum OpenSSL, TPM-backed encryption, Security Center.
- 26.04.1 fixed several 24.04 → 26.04 upgrade failures.

## Risks

- GNOME runs on Wayland only. Tools that need a real X session may break.
- sudo-rs and Rust coreutils replace GNU sudo and coreutils. Scripts using GNU-only flags may behave differently.
- Howdy (face login) is in PAM for `common-auth`, `sudo`, `polkit`. Its 22.04 build may not work with the new Python.

## Done

- Backups: `/etc/apt/sources.list.d.bak-2026-10-06/`, `/etc/pam.d.bak-2026-10-06/`.
- Deleted dead repo files: archivebox, azlux, dropbox, heroku, skype, teams, cdrom, mozillateam, ulauncher, obsproject, nordvpn, `disabled/` (kubernetes, tor), all `.save` and `.distUpgrade` files.
- 1Password repo restored; the package migrated it to `1password.sources`.
- All pending updates installed (0 upgradable).
- OBS switched from the jammy PPA build to `30.2.3+dfsg-3~bpo24.04.1` (noble-backports).
- Purged: `libssl1.1`, adobereader-enu (i386), skypeforlinux, teams, deb.torproject.org-keyring, nordvpn, nordvpn-release, heroku, kubectl 1.28, gnome-encfs-manager, stremio, lmstudio-bionic, dropbox package, `libmpv1`, `libpango1.0-0`, and orphaned 22.04 libraries.
- `uidmap`, `libsubid4`, `slirp4netns` marked manual (needed for rootless Docker).
- Howdy disabled: `sudo howdy disable 1`.
- Dropbox launcher restored with `nautilus-dropbox` (Ubuntu universe). `~/Dropbox` and `~/.dropbox` untouched.
- LM Studio 0.4.25 installed from the official `.deb` (`lm-studio`, `/opt/LM-Studio`, AppArmor profile). Models in `~/.lmstudio` kept.
- kubectl 1.37.1 installed from `pkgs.k8s.io/core:/stable:/v1.37`. Dead `~/.kube/config` removed.
- k3d updated to v5.9.0 (default k3s 1.35). Create clusters with `--image rancher/k3s:v1.37.1-k3s1` to match kubectl.
- External backup disk fixed: NTFS volume was dirty, cleared with `ntfsfix -d`.

### Side effects to know

- Ubuntu's `nodejs` 18 and `npm` were autoremoved. `node` comes from nvm (v22.14.0) and Homebrew. Restore with `sudo apt install nodejs npm` if something needs `/usr/bin/node`.
- Dropbox package was purged by mistake. Fixed with `nautilus-dropbox`.

## Remaining obsolete packages (expected)

Apps from downloaded `.deb` files: e-signature tools, dbeaver-ce, httptoolkit, lm-studio, mongodb-compass, mongodb-mongosh, obsidian, pinokio, steam, warp-terminal, zoom, printer driver.

Slimbook stack and Howdy: slimbook*, libslimbook1, python3-slimbook, slimbook-qc71-dkms, howdy, dlib-models. Check after the upgrade.

## External backup disk warning

Verbatim portable drive, Samsung HM100UI 1 TB, NTFS, label `Backup`, about 12,400 power-on hours.

- `Current_Pending_Sector = 8`: the drive has unreadable sectors. Do not use it as the only backup.
- Contains an older home backup `BackupHomeSlimbook/` (July 2025). Do not delete.
- Buy a new external drive and format it ext4.

## Next steps

### 1. Back up `/home` (in progress)

Close Dropbox, browsers, Docker Desktop and LM Studio first.

```bash
# Copy 1: archive on the external disk
tar --zstd -cpf /media/islomar/Backup/home-islomar-2026-10-06.tar.zst \
  --exclude=./.cache --exclude=./.local/share/Trash \
  -C /home/islomar .
zstd -t /media/islomar/Backup/home-islomar-2026-10-06.tar.zst && echo "ARCHIVE OK"

# Copy 2: plain copy on the internal data partition
rsync -aHAX --info=progress2 \
  --exclude='.cache/' --exclude='.local/share/Trash/' \
  /home/islomar/ /media/islomar/<data-partition-uuid>/home-backup-2026-10-06/
```

If `zstd -t` fails, the bad sectors hit the archive. Rely on copy 2 and get a new disk.

Eject the external disk before unplugging: `udisksctl unmount -b /dev/sdd1 && udisksctl power-off -b /dev/sdd`.

### 2. Timeshift snapshot of the system

```bash
sudo apt install timeshift
sudo timeshift --create --snapshot-device /dev/nvme0n1p3 --comments "before 26.04 upgrade"
sudo timeshift --list --snapshot-device /dev/nvme0n1p3
```

### 3. Bootable live USB

Ubuntu 24.04 or 26.04. Needed to restore Timeshift if the system does not boot.

### 4. Wayland test (1–2 days)

Log out, gear icon, choose "Ubuntu" (not "Ubuntu on Xorg"). Check:

- External monitors and fractional scaling
- Screen sharing in Meet and Zoom, OBS capture
- Stream Deck
- Touchpad gestures (`libinput-gestures` depends on X11 tools)
- Slimbook hotkeys and fan or performance controls
- Ulauncher autostart entry (package not installed; remove `~/.config/autostart/ulauncher.desktop` or use GNOME search)

Do not upgrade if a blocker has no workaround.

### 5. Upgrade

On mains power and a stable connection:

```bash
sudo do-release-upgrade
```

Read the summary of disabled repos and removed packages before confirming.

### 6. After the reboot

```bash
lsb_release -d; echo $XDG_SESSION_TYPE
nvidia-smi --query-gpu=name,driver_version --format=csv
dkms status
docker info --format '{{.ServerVersion}}'
dropbox status
apt list '?obsolete' 2>/dev/null | grep -v Listing
```

Then:

- Change `noble` to `resolute` in `/etc/apt/sources.list.d/docker.list`.
- Check whether the Slimbook and Howdy PPAs publish packages for `resolute`.
- Re-enable Howdy with `sudo howdy disable 0`. Test with `sudo -k; sudo true` while a second terminal stays open.
- Check the NVIDIA container toolkit with a CUDA container.
- Optional cleanup: `rm -rf /etc/apt/sources.list.d.bak-2026-10-06 /etc/pam.d.bak-2026-10-06` once everything works.

## Sources

- [Has anyone upgraded from 24.04 LTS to 26.04.1? (Ubuntu Discourse)](https://discourse.ubuntu.com/t/has-anyone-upgraded-from-24-04-lts-to-26-04-1/86517)
- [Ubuntu 26.04.1 released (UbuntuHandbook)](https://ubuntuhandbook.org/index.php/2026/08/ubuntu-26-04-1-released/)
- [Ubuntu 26.04 new features (LinuxConfig)](https://linuxconfig.org/ubuntu-26-04-release-date-and-new-features-in-resolute-raccoon)
- [LM Studio download](https://lmstudio.ai/download?os=linux)
- [Kubernetes apt repository](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [k3d releases](https://github.com/k3d-io/k3d/releases)
