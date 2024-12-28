---
title: Dual Boot Windows and Ubuntu with Secure Boot and Full Disk Encryption
tags:
  [
    { label: "Dual Boot", permalink: "dual-boot" },
    { label: "Ubuntu", permalink: "ubuntu" },
    { label: "Computers", permalink: "computers" },
  ]
toc_min_heading_level: 2
toc_max_heading_level: 3
authors: ethan
---

A few months ago, I finally took the time to set up dual boot on my laptop. I
would love to try Ubuntu as my daily driver again, while keeping the Windows OS
just in case. I treated this as a learning opportunity and configured dual boot
with secure boot still enabled and have full disk encryption configured for both
operating systems.

I wrote this blog because I could not find a single guide explains all steps for
secure boot and full disk encryption sequentially, and these steps interleave
each other. So, I made some notes before the installation to ensure I am doing
the right thing at the right time. For example, I won't accidentally skip a step
about configuring secure boot when I am focused on following another guide about
full disk encryption. This guide is a cleaned up version of the notes that I
compiled for my dual boot set up.

I organized the whole flow into 6 general steps:

1. Preparing in Windows: set boot mode, partition disk, etc.
2. Configure BIOS: boot mode and other BIOS settings
3. Configure Ubuntu Partition: boot and data partition
4. Install Ubuntu: configure dual boot and mounting volumes correctly
5. Set up `crypttab` for full disk encryption
6. Reboot and fix some other issues

<!-- truncate -->

You can do step 1 and 2 separately. From step 3 onwards, I suggest doing in 1
sitting, which might take an hour or more.

What I have is a Lenovo ThinkPad X1 Carbon 7th Gen laptop, running Windows 11
home and I would like it to dual boot into Ubuntu 22.04. And, as mentioned, with
secure boot enabled in the boot process and full disk encryption for both
operating systems.

Now the system has been running for a few months and things work fine. No issue
with booting or decrypting the disk. It's a good time to document the steps and
share the resources that I found helpful. Hopefully this is helpful to others
and maybe one day my future self.

**Dual boot is stressful and it has risk. This guide by no means is complete.**
I have dual boot a few times before, so I kind of know how things look like. To
me, it's helpful to watch YouTube video of people dual booting before doing it
to understand what to expect. Also, check a few more guides, compare and
understand which part is common and which part is custom.

**Make sure you have access to guides and notes on mobile or another device.**
You won't be able to access notes in the device during dual boot. Things might
break after dual booting. Maybe the Wi-Fi card driver is not working, or
graphics card config is wrong, or the pointer device is unusable. You will need
another device to access your notes or search the Internet for answers.

## Preparation in Windows

Let's start!

The first step is to prepare for dual boot. All the steps in this stage are done
within the Windows. There is no specific order for these steps and no need to do
it in 1 sitting. I had my laptop running on Windows, so all the preparation are
done in Windows.

- UEFI, not BIOS
  - On Windows: `System Information` → `BIOS Mode` = `UEFI` instead of `Legacy`
  - `UEFI` is required for secure boot, GUID partition table (GPT) t's faster,
    and many other features
  - Read more here: https://itsfoss.com/check-uefi-or-bios/
- GPT, not MBR
  - On Windows: `Disk management` → `Create and format hard disk partitions` →
    right-click disk → `Properties` → `Volume` → `Partition style` =
    `GUID Partition Table (GPT)`
  - Read more here: https://itsfoss.com/check-mbr-or-gpt/
- Use [Rufus](https://rufus.ie/en/) to create the bootable USB
  - Get the [Ubuntu Desktop Image](https://ubuntu.com/download/desktop)
  - Partition scheme: Select `GPT`
  - Target System: Select `UEFI`
- Backup BitLocker recovery key
  - Make sure your BitLocker recovery key is saved to your Microsoft account, or
    any other ways of backing it up
  - Read more on how to back up in
    [Microsoft official guide](https://support.microsoft.com/en-us/windows/back-up-your-bitlocker-recovery-key-e63607b4-77fb-4ad3-8022-d6dc428fbd0d)
- Partition your disk
  - Assuming Windows now taking up the full disk, you will need to shrink the
    volume available to Windows and create space for Linux
  - Disable BitLocker
    - I had to disable BitLocker to shrink the Windows volume
    - Follow the on-screen instructions for each to decrypt and reboot, it will
      take some time
    - Read more on
      [this guide about resize BitLocker partition](https://www.diskpart.com/articles/resize-bitlocker-partition-windows-10-0725.html)
  - Partition
    - I used [AOMEI Partition Assistant](https://www.diskpart.com/download.html)
    - Read their
      [How to safely partition](https://www.diskpart.com/safely-partition.html)
      tutorial
    - Other guides I found useful:
      [Align partition](https://www.diskpart.com/help/align-partition.html),
      [PreOS Mode](https://www.diskpart.com/lib/PreOS-mode.html)
    - If you want to use the Disk Management tool from Windows but failed,
      [this post](https://answers.microsoft.com/en-us/windows/forum/all/windows-disk-management-unable-to-shrink-c-drive/217c3521-b254-4662-bac9-bc90dc633fab)
      might be helpful
  - Move `WinRe` partition after the Windows partition
    - This is the recovery partition for Windows to support failover
    - It is recommended to keep this as a separate partition and put it right
      after the Windows partition
    - Read more on
      [this post](https://learn.microsoft.com/en-us/answers/questions/1354739/the-recovery-partition-is-typically-created-at-the)
    - So what I had is [Windows | WinRe | Unused space (for Ubuntu later)]

## Configure BIOS in the BIOS Menu

Just to make sure a few things are set in the BIOS menu. Knowing how to get into
the BIOS menu is also helpful in case of bad things happened.

Reboot the computer and enter the BIOS menu before the OS load. Search online
how to do it for your computer. It's usually F2 or F12. For me is pressing Enter
when it says something like "Press Enter to interrupt".

Things to check:

- Make sure the UEFI BIOS is up-to-date
- SATA mode is `AHCI`, as Ubuntu doesn't support other operations
- Secure boot is enabled and CSM is disabled
  - It is required to install Ubuntu with secure boot enabled for secure boot to
    work with Ubuntu
  - CSM is to support non-UEFI OS. It should already be disabled with secure
    boot enabled
- Boot mode is UEFI only
- TPM security has to be enabled for BitLocker in Windows
- You can check the Boot order in the BIOS menu as well

## Configure Ubuntu Partition

The important bits start here! From now on, it's better to do all remaining
steps in one go.

This stage is to boot into Ubuntu with the live USB and configure the Ubuntu
partition that is encrypted.

1. Boot the USB stick and select `Try without installing` when prompted
2. You should see the default Ubuntu desktop, open a terminal
3. In the terminal, change to root with
   ```bash
   sudo su
   ```
4. Check the partition table again
   1. Check with `sgdisk`
      ```bash
      sgdisk --print /dev/nvme0n1
      ```
   2. If your disk is not `/dev/nvme0n1`, then you will have to replace all the
      following commands to your disk name, e.g. `/dev/sda`
   3. Look for the disk name (e.g. `/dev/sda` or `/dev/nvme0n1`) not the
      partition name (e.g. `/dev/sda1` or `/dev/nvme0n1p1`)
5. Create 2 partitions in the empty space in your disk, one for boot and the
   rest for root
   1. New 1800M partition for boot
      ```bash
      sgdisk --new=5:0:+1800M /dev/nvme0n1
      ```
   2. New partition using the rest for root
      ```bash
      sgdisk --new=6:0:0 /dev/nvme0n1
      ```
   3. Name the partitions
      ```bash
      sgdisk --change-name=5:/boot --change-name=6:rootfs /dev/nvme0n1
      ```
   4. Choose 8300 as the type code for the file system (Linux filesystem)
      ```bash
      sgdisk --typecode=5:8300 --typecode=6:8300 /dev/nvme0n1
      ```
      (you can find all typecode with `sgdisk -L`)
   5. Make EXT4 file system (notice that here is the partition name)
      ```bash
      mkfs.ext4 -L boot /dev/nvme0n1p5
      ```
6. Encrypt the Linux data partition with LUKS

   - In the following codeblock, I am showing the output as well
   - Lines after `#` are what needed to be inputted to the terminal
   - The passphrase you chose at this step is what you needed to decrypt the
     disk when booting

   ```bash
   # cryptsetup luksFormat --type=luks2 /dev/nvme0n1p6
   WARNING!
   ========
   This will overwrite data on /dev/nvme0n1p6 irrevocably.

   Are you sure? (Type uppercase yes): YES
   Enter passphrase for /dev/nvme0n1p6:
   Verify passphrase:

   # cryptsetup open /dev/nvme0n1p6 nvme0n1p6_crypt
   Enter passphrase for /dev/nvme0n1p6:

   # ls /dev/mapper/
   control nvme0n1p6_crypt
   ```

7. Set up logical volume manager (LVM), with root, swap and home partition
   ```bash
   # pvcreate /dev/mapper/nvme0n1p6_crypt
   Physical volume "/dev/mapper/nvme0n1p6_crypt" successfully created.
   # vgcreate ubuntu-vg /dev/mapper/nvme0n1p6_crypt
   Volume group "ubuntu-vg" successfully created
   # lvcreate -L 64G -n root ubuntu-vg
   Logical volume "root" created.
   # lvcreate -L 16G -n swap ubuntu-vg
   Logical volume "swap" created.
   # lvcreate -l 100%FREE -n home ubuntu-vg
   Logical volume "home" created.
   ```

Now all the Ubuntu partitions are prepared. Without exiting the live
environment, use the GUI to continue the installation.

## Install Ubuntu

We will install Ubuntu on the encrypted disk and configure things to make sure
secure boot also works.

1. Run the graphical installer
2. Connect to your Wi-Fi network
3. On the software step, for "Other options" (This step is important for secure
   boot to work)
   1. Check the "Download updates" option
   2. Check the "Install third-party software for graphics and Wi-Fi hardware"
   3. Check the "Configure Secure Boot" option and enter a password, remember
      this password. Useful for the MOK management step explained below.
   4. Save and continue
4. When asked what to do with the disk, pick "Something else", or the option
   that allows you to manually assign disk partition
   1. Use the ~1800MB partition as `ext4` with mount point as `/boot`
   2. Use the `/dev/mapper/ubuntu-vg-root` as `ext4` FS and mount it to `/`
   3. Use the `/dev/mapper/ubuntu-vg-home` as `ext4` FS and mount it to `/home`
   4. Use the `/dev/mapper/ubuntu-vg-swap` as `swap`
   5. Do the same as above if you have more or less partitions
   6. The bootloader device should be `/dev/nvme0n1`
5. Proceed with the installation
6. When finished, select `Continue Testing`, and it should bring you back to the
   Ubuntu Desktop environment

Do not leave the live environment just yet.

## Set up `crypttab`

`crypttab` is used to decrypt the disk on boot.

1. Open the terminal and find the UUID of the partition with LUKS
   ```bash
   sudo blkid /dev/nvme0n1p6
   ```
   Example output:
   ```
   /dev/nvme0n1p6: UUID="abcdefgh-1234-5678-9012-abcdefghijklm" TYPE="crypto_LUKS"
   ```
   I suggest writing the UUID down somewhere
2. Mount the drives and chroot into the mount:

   ```bash
   mount /dev/mapper/ubuntu-vg-root /target
   mount /dev/nvme0n1p5 /target/boot
   for n in proc sys dev etc/resolv.conf; do mount --rbind /$n /target/$n; done
   chroot /target

   mount -a
   ```

3. Configure `/etc/crypttab`:

   ```
   # <target name> <source device> <key file> <options>
   # options used:
   #     luks    - specifies that this is a LUKS encrypted device
   #     tries=0 - allows to re-enter password unlimited number of times
   #     discard - allows SSD TRIM command, WARNING: potential security risk (more: "man crypttab")
   #     loud    - display all warnings
   nvme0n1p6_crypt UUID=abcdefgh-1234-5678-9012-abcdefghijklm none luks,discard
   ```

4. Apply the changes (still inside chroot)
   ```bash
   update-initramfs -k all -c
   ```

## Reboot and some remaining issues

### Blue screen MOK management

1. When reboot, because of the secure boot, you will see a blue screen and ask
   to perform MOK management
2. Choose Enroll MOK, continue, yes
3. Input the password that you inputted on the step for software install during
   the installation for third party drivers
   - It won't show what you typed, trust that it's there
   - This is only a one time thing so no worries
   - Once successful you don't need the password anymore

### Windows BitLocker Issue

You might need to input the BitLocker recovery key when booting into Windows.
Find your recovery key in where ever you saved (e.g. Microsoft account) and
input it. This is also one time thing, so no worries.

If you have disabled BitLocker before to partition the disk, you will need to
re-enable it and encrypt the Windows partition again.

To encrypt again, you need to make sure you meet the pre-requisites to enable
BitLocker:

- Check that the partition table is GPT
- BIOS is set to UEFI
- Secure boot is enabled

Go to `System information` → scroll down and see device encryption support needs
to be `meets prerequisites`. If not, check the above again and maybe reboot and
see.

Once the prerequisites are met, go to Settings → privacy & security → device
encryption and enable BitLocker.

To check the progress:

- Open admin command prompt and input `manage-bde -status C:`
- If the status stuck, not updating, try `manage-bde -pause C:` and then
  `manage-bde -resume C:`

With BitLocker re-enabled, this means both Ubuntu and Windows have full disk
encryption and secure boot enabled!

### Wrong timezone after dual boot

You might notice one of the OS show the wrong time before resyncing their time.
This is because they store time into the computer hardware clock differently.
Linux assumes that the time on the hardware clock is stored in UTC and Windows
assumes it is local time. One solution is to ask Linux to store the hardware
clock as local time:

```bash
timedatectl set-local-rtc 1
```

[Read more in this guide from It's Foss](https://itsfoss.com/wrong-time-dual-boot/)

## References

### About full disk encryption:

- [How to Dual-Boot Ubuntu 20.04 (or 22.04) and Windows 10 (or 11) with Encryption | Mike Kasberg](https://www.mikekasberg.com/blog/2020/04/08/dual-boot-ubuntu-and-windows-with-encryption.html) -
  recommend reading
- [Dual boot with encryption nodes | GitHub Gist from @luispabon](https://gist.github.com/luispabon/db2c9e5f6cc73bb37812a19a40e137bc)

### About secure boot:

- [Can I enable secure boot again? | Reddit](https://www.reddit.com/r/linux4noobs/comments/osotp3/ubuntu_dual_boot_with_windows_10_can_i_enable/) -
  Ans: no
- [A Clean Install of Linux Ubuntu 20.04 (Lenovo UEFI BIOS with Secure Boot and MOK) | YouTube](https://youtu.be/GqJBniwj1Mg) -
  worth watching parts about the secure boot and MOK step
- [It is possible to dual boot Linux and Windows 10 with secure boot enabled? | Ask Ubuntu](https://askubuntu.com/questions/880240/it-is-possible-to-dual-boot-linux-and-windows-10-with-secure-boot-enabled) -
  Ans: yes

### About partition and BitLocker:

- [Windows Disk Management unable to shrink C: drive volume](https://answers.microsoft.com/en-us/windows/forum/all/windows-disk-management-unable-to-shrink-c-drive/217c3521-b254-4662-bac9-bc90dc633fab)
- [How can I resize BitLocker partition in Windows 10/11](https://www.diskpart.com/articles/resize-bitlocker-partition-windows-10-0725.html)
- [Dual Booting Ubuntu with Windows 10 Pro with BitLocker Encryption](https://itsfoss.com/dual-boot-ubuntu-windows-bitlocker/)

That's it and I hope you can set up dual boot without issues!
