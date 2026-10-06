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
- Copy 1 of `/home` done: `/media/islomar/Backup/home-islomar-2026-10-06.tar.zst` (52 GB). `zstd -t` passed.
  - tar exited with failure status because of skipped sockets, files changed during the run, and 3 root-owned files in an unused Firefox profile. No needed data skipped.
- Unused Firefox profile `wodubqpd.default` deleted and removed from `profiles.ini`. Active profile: `nx0r733b.default-release`.

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
- NTFS structures are damaged (`MFT: expect seq=…`, `Inode is not in use`). `ntfsfix -d` only cleared the dirty flag.
- 2026-10-06 18:26: a FreeFileSync scan wrote a lock file to the disk and the `ntfs3` driver crashed (`kernel BUG at fs/iomap/buffered-io.c:1061`). FreeFileSync hung in state `D`; only a reboot clears it. No files were deleted.
- From now on, mount it read-only and never write to it. The forced power-off left it dirty again; do not run `ntfsfix` (it writes). Use `sudo ntfs-3g -o ro /dev/sdX1 /mnt/oldbackup`. Device names change per boot (`sdd` before, `sdb` after the reboot); check with `lsblk`.
- Archive re-checked after the reboot (mounted read-only with `ntfs-3g`): `zstd -t` passed, 96 GB of data. Copy 1 is intact.

## Next steps

### 1. Back up `/home`

Copy 1 (external disk archive) is done and verified. Remaining: Copy 2.

```bash
# Copy 2: plain copy on the internal data partition
rsync -aHAX --info=progress2 \
  --exclude='.cache/' --exclude='.local/share/Trash/' \
  /home/islomar/ /media/islomar/<data-partition-uuid>/home-backup-2026-10-06/
du -sh /media/islomar/<data-partition-uuid>/home-backup-2026-10-06   # expect ~90 GB
```

Exit code 0 is expected now that the Firefox profile with root-owned files is gone. Code 23 means some files were unreadable; check which.

Copy 2 is on the same physical disk as the system. It protects against a failed upgrade, not against NVMe failure.

Restore Copy 1 if needed:

```bash
tar --zstd -xpf /media/islomar/Backup/home-islomar-2026-10-06.tar.zst -C /home/islomar
```

Eject the external disk before unplugging: `udisksctl unmount -b /dev/sdX1 && udisksctl power-off -b /dev/sdX` (check the name with `lsblk`). Keep it unplugged until the upgrade is done.

### 2. Timeshift snapshot of the system

Timeshift saves the system (`/usr`, `/etc`, `/var`, `/opt`), not `/home`. The "Backups" app (Déjà Dup) is a different tool for personal files.

Location: the root partition `nvme0n1p2` (98 GB free). The data partition `nvme0n1p3` has only 49 GB free after Copy 2. Both partitions are on the same NVMe disk, so neither location protects against disk failure.

Excluded: `/var/lib/docker` (26 GB, images can be pulled again) and `/usr/share/ollama` (32 GB of models; excluded paths are left untouched on restore).

Done 2026-10-06 19:05: snapshot `2026-10-06_19-05-27`, 65.4 GB, 36 GB left free on `/`. A first attempt without the Ollama exclusion took 94.5 GB and left 3.5 GB free; it was deleted. The 46 GB estimate missed folders readable only by root.

Reboot first (kernel crash on 2026-10-06, see the external disk section). Then:

```bash
sudo apt install timeshift
```

Open Timeshift from the app menu:

1. Snapshot type: RSYNC.
2. Location: the 320 GB ext4 partition (`nvme0n1p2`, where `/` lives).
3. Schedule: untick everything.
4. Users: "Exclude All" for `root` and `islomar`.
5. Settings → Filters → Add `/var/lib/docker/***` and `/usr/share/ollama/***`.
6. Create, comment "before 26.04 upgrade".

Verify:

```bash
sudo timeshift --list
df -h /   # expect about 36 GB free
```

**Delete this snapshot about 2 weeks after the upgrade** (Google Calendar reminder set for 2026-10-23). It uses about 65 GB of `/`.

### 3. Bootable live USB

Ubuntu 24.04 or 26.04. Needed to restore Timeshift if the system does not boot.

- Write the ISO with GNOME Disks ("Restore Disk Image") or balenaEtcher.
- Test that the laptop boots from it (boot menu key at power-on, usually F7 or F12).

Steps 2 and 3 can run during the Wayland test.

### 4. Wayland test (1–2 days)

Log out, gear icon, choose "Ubuntu" (not "Ubuntu on Xorg"). Check:

- External monitors and fractional scaling
- Screen sharing in Meet and Zoom, OBS capture
- Stream Deck
- Touchpad gestures (`libinput-gestures` depends on X11 tools)
- Slimbook hotkeys and fan or performance controls
- Ulauncher autostart entry (package not installed; remove `~/.config/autostart/ulauncher.desktop` or use GNOME search)

Do not upgrade if a blocker has no workaround.

Findings (test started 2026-10-06, after the reboot logged into Wayland):

| Test | Result |
|---|---|
| Screen sharing (Meet, Zoom) | Tested |
| OBS | Works with a "Screen Capture (PipeWire)" source |
| NVIDIA GPU | Works (`switcherooctl launch glxgears`, resize OK) |
| Touchpad gestures | Work (GNOME built-in) |
| Moving windows between screens | Works |
| `pbcopy` / `pbpaste` (xclip aliases) | Work |
| Emote | Works via GNOME shortcut, then `Ctrl+V` |
| 1Password Quick Access | Works via GNOME shortcut |
| Stream Deck | Works after autostart fix; X11-only buttons still to replace |
| Screenshots with annotation | Gradia replaces ksnip |
| Slimbook keys (brightness, volume, Fn lock, Super lock, silent mode, Intel Controller) | Work |
| Fractional scaling | 150% on the built-in display; Chrome sharp (native Wayland). XWayland apps (Steam, Zoom, JetBrains Toolbox, Emote) may look soft |
| Unplugging and replugging a screen | Layout lost: see issue 8 |
| Touchpad lock | Replaced by a shortcut: see issue 9 |

Issues and fixes:

1. Saved monitor layouts did not apply. Cause: X11 and Wayland name outputs differently (`HDMI-1` vs `HDMI-A-1`, `DP-3-1` vs `DP-5`). Fixed by arranging once in Settings → Displays; GNOME keeps both layouts in `~/.config/monitors.xml`.
2. GNOME Terminal 3.52 crashed on the layout change and closed every window. Workaround: tmux for long tasks. 26.04 ships Ptyxis as the default terminal; recheck after the upgrade.
3. Baba Is You (old Chowdren engine) crashes on window resize when run on the NVIDIA GPU. Works on Intel. Do not launch the whole Steam client with "Launch using Discrete Graphics Card"; set NVIDIA per game in Properties → Launch Options:
   `__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia __VK_LAYER_NV_optimus=NVIDIA_only %command%`
4. Emote cannot catch its global shortcut or type into other windows. Fix: GNOME custom shortcut `Ctrl+Alt+E` → `/snap/bin/emote`, then paste with `Ctrl+V`.
5. 1Password cannot register its global shortcut. Fix: GNOME custom shortcut `Ctrl+Shift+Space` → `/usr/bin/1password --quick-access`.
6. Stream Deck (`streamdeck-linux-gui`, pipx) did not start. The autostart entry had `Exec=streamdeck &` (no full path, invalid `&`). Fixed to `Exec=/home/islomar/.local/bin/streamdeck`; launcher added to the app grid (`~/.local/share/applications/streamdeck.desktop`). Only one instance can run; a second launch exits silently. Reopen the window from the top-bar icon → Configure.
   - Still to replace: buttons using `wmctrl -xa obs` (X11-only).
7. ksnip cannot capture on GNOME Wayland. Replaced by Gradia (Flathub `be.alexandervanhee.gradia`):
   - Command: `/usr/bin/flatpak run be.alexandervanhee.gradia --screenshot=INTERACTIVE`
   - GNOME shortcut `Super+Shift+S`, and the Stream Deck "Annotate" button (page 2) with the Gradia logo.
   - ksnip removed: `sudo snap remove --purge ksnip`; its Stream Deck button cleared.
   - After the upgrade, consider the Gradia Capture extension (GNOME 49/50 only, not yet on extensions.gnome.org; review its build script first).

8. Replugging the HDMI screen reset the layout. Cause: the DisplayPort screen came back as `DP-6` instead of `DP-5`, and GNOME only restores a saved layout when every connector name matches. Not Wayland-specific (X11 layouts show the same `DP-3-1` / `DP-3-2` swap). Fix: save the layout once per connector name in Settings → Displays; GNOME keeps all variants.
9. The touchpad corner lock (top-right, LED) does not lock on Wayland. The tap never reaches the OS (`libinput debug-events` shows no key), and the touchpad keeps sending motion on `event5`, only degraded. On X11 the Slimbook script used `xinput`, which has no effect on Wayland; the `xbindkeys` entries listen for a Ctrl+Super combination this touchpad never sends. Replacement:
   - Script `~/.local/bin/touchpad-toggle`: toggles `org.gnome.desktop.peripherals.touchpad send-events` with `/usr/bin/gsettings` and shows a notification.
   - GNOME custom shortcut `Super+Ctrl+T` → `/home/islomar/.local/bin/touchpad-toggle`.
   - Recovery if it stays off: `/usr/bin/gsettings set org.gnome.desktop.peripherals.touchpad send-events enabled`.
   - `xbindkeys` is now unused; remove its autostart after the upgrade.

The Wayland test is complete. No blocker found.

Gotcha found on the way: `gsettings` resolved to Homebrew's copy, which writes to `~/.config/glib-2.0/settings/keyfile` and never reaches GNOME. Fixed with `alias gsettings=/usr/bin/gsettings` in `~/.zshrc`. Set shortcuts in Settings → Keyboard, or verify with `dconf read`.

### 5. Upgrade

On mains power and a stable connection. Run it inside tmux, so a terminal crash does not cut the upgrade in half:

```bash
tmux new -s upgrade
sudo do-release-upgrade
```

If the terminal window closes, open a new one and reattach:

```bash
tmux attach -t upgrade
```

Why: on 2026-10-06 GNOME Terminal 3.52 crashed (`SEGV`) on Wayland right after a display layout change, and all terminal windows closed at once. An interrupted `do-release-upgrade` leaves a mix of old and new packages.

During the upgrade:

- Do not plug or unplug monitors, and do not change display settings.
- Read the summary of disabled repos and removed packages before confirming.

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

Configuration file prompts answered during the upgrade:

- `/etc/adduser.conf`: kept (N). Custom `EXTRA_GROUPS` / `ADD_EXTRA_GROUPS=1` only affect future accounts.
- `/etc/bash.bashrc`: replaced (Y). The only customisation was the Nix block, and Nix is unused.
- `/etc/default/grub`: kept. Contains the Slimbook panel fix `drm.edid_firmware=eDP-1:edid/edid.bin` (file in `/lib/firmware/edid/`), the Slimbook GRUB theme and `GRUB_GFXMODE`.
- `/etc/gdm3/custom.conf`: replaced (Y). Only a disabled auto-login for the unused `beibi` account.

Obsolete packages: 323 removed (answered y). Checked before confirming:

- Third-party apps not affected (1Password, Chrome, VS Code, Docker, Claude Desktop, ChatGPT, Obsidian, DBeaver, Zoom, LM Studio, Slimbook tools).
- Kernel safe: 26.04 `linux-generic 7.0.0-38` with headers installed; only 24.04 HWE metapackages and kernel 6.8.0-146 removed.
- Removed: X.org, Python 3.12, old LLVM, GNOME apps replaced in 26.04 (Evince, Eog, Totem, Cheese, System Monitor).

Reinstall after the upgrade:

- `pipx reinstall-all`: all pipx venvs (streamdeck-linux-gui, poetry, uv, black) were built for Python 3.12 and now point to 3.14. Stream Deck will not start until this runs.
- `sudo apt install pass` (`~/.password-store` is intact).
- If needed: `wl-clipboard`, `graphviz`, `tldr`, `fastfetch` (replaces `neofetch`), newer Ruby or g++.

Later cleanup: many stale folders in `/lib/modules/` from kernels removed years ago (5.15 to 6.8). Check with `dpkg -S` before deleting.

#### Uninstall Nix (unused)

Multi-user install from 2023-09-19 (official installer, no `/nix/receipt.json`). The user profile has no packages. Pieces found:

- systemd: `nix-daemon.service`, `nix-daemon.socket`; `/etc/tmpfiles.d/nix-daemon.conf`
- `/nix`, `/etc/nix`, `/etc/profile.d/nix.sh`
- Shell hooks: `/etc/zsh/zshrc` (backup `/etc/zsh/zshrc.backup-before-nix`), `/etc/bashrc`, `/etc/zshrc` (5-line files created by the installer), `/etc/bash.bashrc.backup-before-nix`
- Build users `nixbld1…` and group `nixbld`
- User files: `~/.nix-profile`, `~/.nix-defexpr`, `~/.local/state/nix`

Steps (follow the official multi-user uninstall in the Nix manual; back up every `/etc` file first):

```bash
sudo systemctl stop nix-daemon.service nix-daemon.socket
sudo systemctl disable nix-daemon.service nix-daemon.socket
sudo rm /etc/systemd/system/nix-daemon.service /etc/systemd/system/nix-daemon.socket
sudo systemctl daemon-reload
# shell hooks: restore zshrc from its backup if the upgrade did not replace it; drop the installer-only files
sudo cp /etc/zsh/zshrc /etc/zsh/zshrc.with-nix && sudo mv /etc/zsh/zshrc.backup-before-nix /etc/zsh/zshrc
sudo rm /etc/bashrc /etc/zshrc /etc/profile.d/nix.sh /etc/tmpfiles.d/nix-daemon.conf /etc/bash.bashrc.backup-before-nix
sudo rm -rf /etc/nix /nix /root/.nix-channels /root/.nix-defexpr /root/.nix-profile /root/.cache/nix
for i in $(seq 1 32); do sudo userdel nixbld$i 2>/dev/null; done; sudo groupdel nixbld
rm -rf ~/.nix-profile ~/.nix-defexpr ~/.nix-channels ~/.local/state/nix ~/.cache/nix
```

Check the `/etc/zsh/zshrc` step against the upgrade first: if 26.04 shipped a new zshrc, remove only the Nix block instead of restoring the 2023 backup. Verify: `systemctl status nix-daemon` (not found), `ls /nix` (missing), new zsh and bash shells start without errors.

## Post-upgrade results (2026-10-06)

Upgrade to 26.04.1 completed on 2026-10-06 (about 22:15). Live USB: the existing 22.04.4 pendrive (1.9 GB) is the rescue system; a 26.04 image does not fit on it.

| Check | Result |
|---|---|
| System | Ubuntu 26.04.1 LTS, GNOME 50.1, Wayland, kernel 7.0.0-38 |
| NVIDIA | RTX 3050 Ti, driver 580.178.04, on-demand |
| DKMS | `nvidia` and `slimbook-qc71` built for 7.0.0-38 |
| Docker | 29.8.2, running |
| Dropbox | Up to date |
| Free space on `/` | 39 GB (with the Timeshift snapshot) |

Done after the reboot:

- **Ubuntu Pro**: the first-login wizard failed because the machine was already attached (free personal subscription, attach survived the upgrade). `pro status` lists every service as `n/a` on 26.04 for now, although the `resolute-apps` and `resolute-infra` ESM repos respond. Recheck in a few weeks: `sudo pro refresh && pro status`. Never paste the Pro token in notes.
- **pipx**: `pipx reinstall-all` rebuilt streamdeck-linux-gui, poetry, uv and black on Python 3.14. Stream Deck launcher icon path updated from `python3.12` to `python3.14` in `~/.local/share/applications/streamdeck.desktop`. Repeat both after any Python version change.
- **Third-party repos re-enabled** (backup `/etc/apt/sources.list.d.bak-post-upgrade`):
  - `.sources` switched to `Enabled: yes`: 1Password, ChatGPT, Google Chrome, VS Code.
  - `.list.disabled` restored to `.list` (uncommented `deb` line): Claude Desktop, Kubernetes v1.37, NVIDIA container toolkit, Docker (`noble` changed to `resolute`; Docker publishes for 26.04).
  - Leftover `1password.list` files removed (1Password uses `1password.sources`).
  - Still disabled, no 26.04 build: Slimbook PPA (latest is noble), gencfsm PPA.
  - `sudo apt full-upgrade`: Docker packages rebuilt for 26.04 (same 29.8.2), Chrome 154 → 155.
- **pass** reinstalled (`~/.password-store` and GPG key intact).
- **Howdy removed**. The upgrade removed `libpam-python` and `dlib` has no Python 3.14 build, so every `sudo`/`pkexec` logged `PAM unable to dlopen(pam_python.so)`. Steps: PAM backup `/etc/pam.d.bak-howdy-2026-10-06/`, root shell kept open, Howdy lines deleted from `sudo`, `polkit-1`, `common-auth`, `apt purge howdy dlib-models`, PPA file deleted, `sudo -k; sudo true` and `pkexec true` verified.
- **Nix removed** (backup `/root/nix-uninstall-backup/`, kept with `cp --parents` because `/etc/zsh/zshrc` and `/etc/zshrc` share a name). `systemctl disable --now` already deleted the unit links, so the separate `rm` was skipped. Verified: no Nix lines in `/etc/zsh/zshrc`, no `/nix`, no `nixbld` users or group, zsh and bash start cleanly.
- **GNOME Software "failed" unit**: started twice at first login (autostart + service), the second instance could not take the bus name. Harmless; cleared with `systemctl --user reset-failed gnome-software.service`.
- **NVIDIA transitional packages**: `nvidia-driver-515` (22.04) pointed to 535, which in 26.04 points to 580. Both 535 and 580 were marked auto, so removing 515 would have let `autoremove` delete the real driver. Fixed with `sudo apt-mark manual nvidia-driver-580` before `apt purge nvidia-driver-515`.
- **autoremove** (52 packages): old Qt5/QML, Clutter, 32-bit codec libraries, ImageMagick 6 (ImageMagick 7 still provides `convert`/`magick`), `postgresql-client-16` (`psql` now from client 18), `nvidia-driver-535`, and the neofetch leftovers `chafa`, `jp2a`, `toilet`, `caca-utils`.

Still to do:

- Stream Deck buttons using `wmctrl -xa obs` (X11-only): replace with OBS global hotkeys or OBS WebSocket.
- Old 24.04 libraries still listed by `apt list '?obsolete'`, and stale folders in `/lib/modules/`.
- After Wayland settles: remove `xbindkeys` autostart, decide on Gradia Capture extension, retest `Ctrl+Shift+Space` and GNOME Terminal vs Ptyxis.
- Backup folders to delete once stable: `/etc/apt/sources.list.d.bak-*`, `/etc/pam.d.bak-*`, `/root/nix-uninstall-backup`.
- Timeshift snapshot and Copy 2: delete per "When to delete the backups" (calendar reminder 2026-10-23).

## When to delete the backups

### Copy 2 and the Timeshift snapshot: about 2 weeks after the upgrade

Delete both when all of these are true:

- Post-upgrade checks pass (NVIDIA, DKMS, Docker, Dropbox, Howdy).
- 1–2 weeks of normal use without problems.
- Opened at least once: SSH keys, browser profiles, LM Studio models, Obsidian vault, DBeaver connections.

```bash
rm -rf /media/islomar/<data-partition-uuid>/home-backup-2026-10-06
sudo timeshift --list
sudo timeshift --delete --snapshot '<name from list>'
df -h /   # expect about 65 GB more free
```

Copy 2 uses 89 GB of the data partition. The snapshot uses about 65 GB of `/`. After two weeks, a Timeshift rollback would undo too much.

Reminder: Google Calendar event on 2026-10-23. Move it if the upgrade happens later than 2026-10-09.

### Copy 1 (external archive): only after a replacement exists

It is the only copy outside the laptop. Keep it until a new, healthy disk holds a verified backup. After that, delete it or leave it on the old drive as a pre-upgrade snapshot.

### Ongoing backups

Both copies freeze the state of 2026-10-06. See the plan below.

## Periodic backup plan (after the upgrade)

Goal: 3-2-1. Three copies, two devices, one offsite.

### New external disk

10 Gbps USB-C SSD, 2 TB, formatted ext4. The laptop has 10 Gbps USB and Thunderbolt; 20 Gbps drives bring no gain.

| Option | Approx. price on Amazon.es (2026-10) | Warranty |
|---|---|---|
| Samsung T7 Shield 2TB (MU-PE2T0), preferred | €218–229 | 3 years |
| Crucial X9 Pro 2TB (CT2000X9PROSSD902) | €239–250 | 5 years |
| WD Elements Portable 4TB (HDD) | €158 | 2 years |

Avoid SanDisk Extreme (2023 data-loss firmware issue) and the WD HDD (same failure type as the current disk).

### Tool: restic

- Encrypted on the laptop before upload.
- Deduplicated: weekly runs store only changes.
- One tool and one restore process for both destinations.
- `restic mount` exposes snapshots as browsable folders.
- Install: `sudo apt install restic`.

### Destinations

1. External SSD. Backup runs when the disk is plugged in (systemd unit triggered by the mount).
2. Offsite, weekly. Verify current prices before choosing:
   - Hetzner Storage Box (Germany), about €4/month for 1 TB, SFTP.
   - Backblaze B2, EU region (Amsterdam), about $6–7 per TB per month.

### Schedule

systemd user timer with `OnCalendar=weekly` and `Persistent=true`, so a missed run (laptop asleep) runs on next wake.

### Keeping the external disk plugged in

The hardware tolerates it: an idle SSD does not wear, uses under 1 W, and regular power helps data retention.

The risk is exposure. An always-mounted disk shares the laptop's fate:

- Ransomware or malware running as the user can encrypt or delete it.
- A wrong `rm -rf` or a buggy script can reach it.
- Theft, fire or a spill takes laptop and disk together.
- Unplugging without ejecting leaves the filesystem dirty (what happened to the old disk).

Rules:

- Acceptable only while the offsite copy exists.
- The backup job mounts the disk, runs restic, then unmounts it. The disk stays attached but invisible the rest of the time.
- Eject before moving the laptop: `udisksctl unmount -b /dev/sdX && udisksctl power-off -b /dev/sdX`.
- Alternative: plug in only to back up, with the plug-in trigger running restic automatically.

### Rules

- Store the restic repository password in 1Password. Without it the backups cannot be read.
- Exclude caches, `node_modules`, Trash, and optionally `~/.lmstudio/models`.
- Restore one file every month to prove the backups work.

### Alternatives considered

- Pika Backup (Borg GUI): good if a GUI is preferred. Offsite needs a Borg-capable server (BorgBase, Hetzner over SSH).
- Déjà Dup: default backend keeps incremental chains that get slow and fragile to restore.
- rsync script: no encryption, no history.
- Dropbox: sync propagates deletions and corruption.
- Timeshift: system rollback only.

## Sources

- [Has anyone upgraded from 24.04 LTS to 26.04.1? (Ubuntu Discourse)](https://discourse.ubuntu.com/t/has-anyone-upgraded-from-24-04-lts-to-26-04-1/86517)
- [Ubuntu 26.04.1 released (UbuntuHandbook)](https://ubuntuhandbook.org/index.php/2026/08/ubuntu-26-04-1-released/)
- [Ubuntu 26.04 new features (LinuxConfig)](https://linuxconfig.org/ubuntu-26-04-release-date-and-new-features-in-resolute-raccoon)
- [LM Studio download](https://lmstudio.ai/download?os=linux)
- [Kubernetes apt repository](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [k3d releases](https://github.com/k3d-io/k3d/releases)
