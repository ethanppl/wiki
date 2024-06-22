"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[2431],{9950:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);const o={title:"Dual Boot Windows and Ubuntu with Secure Boot and Full Disk Encryption",tags:[{label:"Dual Boot",permalink:"dual-boot"},{label:"Ubuntu",permalink:"ubuntu"},{label:"Windows",permalink:"windows"}],toc_min_heading_level:2,toc_max_heading_level:3,authors:"ethan"},r=void 0,l={permalink:"/wiki/blog/2024/02/29/dual-boot-guide",source:"@site/blog/2024-02-29-dual-boot-guide.md",title:"Dual Boot Windows and Ubuntu with Secure Boot and Full Disk Encryption",description:"A few months ago, I finally took the time to set up dual boot on my laptop. I",date:"2024-02-29T00:00:00.000Z",tags:[{inline:!0,label:"Dual Boot",permalink:"/wiki/blog/tags/dual-boot"},{inline:!0,label:"Ubuntu",permalink:"/wiki/blog/tags/ubuntu"},{inline:!0,label:"Windows",permalink:"/wiki/blog/tags/windows"}],readingTime:11.49,hasTruncateMarker:!0,authors:[{name:"Ethan Pang",url:"https://github.com/ethanppl",imageURL:"https://github.com/ethanppl.png",key:"ethan"}],frontMatter:{title:"Dual Boot Windows and Ubuntu with Secure Boot and Full Disk Encryption",tags:[{label:"Dual Boot",permalink:"dual-boot"},{label:"Ubuntu",permalink:"ubuntu"},{label:"Windows",permalink:"windows"}],toc_min_heading_level:2,toc_max_heading_level:3,authors:"ethan"},unlisted:!1,prevItem:{title:"Don't say it's a weird bug, because it makes you look stupid",permalink:"/wiki/blog/2024/06/19/weird-issue"}},a={authorsImageUrls:[void 0]},d=[{value:"Preparation in Windows",id:"preparation-in-windows",level:2},{value:"Configure BIOS in the BIOS Menu",id:"configure-bios-in-the-bios-menu",level:2},{value:"Configure Ubuntu Partition",id:"configure-ubuntu-partition",level:2},{value:"Install Ubuntu",id:"install-ubuntu",level:2},{value:"Set up <code>crypttab</code>",id:"set-up-crypttab",level:2},{value:"Reboot and some remaining issues",id:"reboot-and-some-remaining-issues",level:2},{value:"Blue screen MOK management",id:"blue-screen-mok-management",level:3},{value:"Windows BitLocker Issue",id:"windows-bitlocker-issue",level:3},{value:"Wrong timezone after dual boot",id:"wrong-timezone-after-dual-boot",level:3},{value:"References",id:"references",level:2},{value:"About full disk encryption:",id:"about-full-disk-encryption",level:3},{value:"About secure boot:",id:"about-secure-boot",level:3},{value:"About partition and BitLocker:",id:"about-partition-and-bitlocker",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A few months ago, I finally took the time to set up dual boot on my laptop. I\nwould love to try Ubuntu as my daily driver again, while keeping the Windows OS\njust in case. I treated this as a learning opportunity and configured dual boot\nwith secure boot still enabled and have full disk encryption configured for both\noperating systems."}),"\n",(0,t.jsx)(n.p,{children:"I wrote this blog because I could not find a single guide explains all steps for\nsecure boot and full disk encryption sequentially, and these steps interleave\neach other. So, I made some notes before the installation to ensure I am doing\nthe right thing at the right time. For example, I won't accidentally skip a step\nabout configuring secure boot when I am focused on following another guide about\nfull disk encryption. This guide is a cleaned up version of the notes that I\ncompiled for my dual boot set up."}),"\n",(0,t.jsx)(n.p,{children:"I organized the whole flow into 6 general steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Preparing in Windows: set boot mode, partition disk, etc."}),"\n",(0,t.jsx)(n.li,{children:"Configure BIOS: boot mode and other BIOS settings"}),"\n",(0,t.jsx)(n.li,{children:"Configure Ubuntu Partition: boot and data partition"}),"\n",(0,t.jsx)(n.li,{children:"Install Ubuntu: configure dual boot and mounting volumes correctly"}),"\n",(0,t.jsxs)(n.li,{children:["Set up ",(0,t.jsx)(n.code,{children:"crypttab"})," for full disk encryption"]}),"\n",(0,t.jsx)(n.li,{children:"Reboot and fix some other issues"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can do step 1 and 2 separately. From step 3 onwards, I suggest doing in 1\nsitting, which might take an hour or more."}),"\n",(0,t.jsx)(n.p,{children:"What I have is a Lenovo ThinkPad X1 Carbon 7th Gen laptop, running Windows 11\nhome and I would like it to dual boot into Ubuntu 22.04. And, as mentioned, with\nsecure boot enabled in the boot process and full disk encryption for both\noperating systems."}),"\n",(0,t.jsx)(n.p,{children:"Now the system has been running for a few months and things work fine. No issue\nwith booting or decrypting the disk. It's a good time to document the steps and\nshare the resources that I found helpful. Hopefully this is helpful to others\nand maybe one day my future self."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dual boot is stressful and it has risk. This guide by no means is complete."}),"\nI have dual boot a few times before, so I kind of know how things look like. To\nme, it's helpful to watch YouTube video of people dual booting before doing it\nto understand what to expect. Also, check a few more guides, compare and\nunderstand which part is common and which part is custom."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Make sure you have access to guides and notes on mobile or another device."}),"\nYou won't be able to access notes in the device during dual boot. Things might\nbreak after dual booting. Maybe the Wi-Fi card driver is not working, or\ngraphics card config is wrong, or the pointer device is unusable. You will need\nanother device to access your notes or search the Internet for answers."]}),"\n",(0,t.jsx)(n.h2,{id:"preparation-in-windows",children:"Preparation in Windows"}),"\n",(0,t.jsx)(n.p,{children:"Let's start!"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to prepare for dual boot. All the steps in this stage are done\nwithin the Windows. There is no specific order for these steps and no need to do\nit in 1 sitting. I had my laptop running on Windows, so all the preparation are\ndone in Windows."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["UEFI, not BIOS","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On Windows: ",(0,t.jsx)(n.code,{children:"System Information"})," \u2192 ",(0,t.jsx)(n.code,{children:"BIOS Mode"})," = ",(0,t.jsx)(n.code,{children:"UEFI"})," instead of ",(0,t.jsx)(n.code,{children:"Legacy"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UEFI"})," is required for secure boot, GUID partition table (GPT) t's faster,\nand many other features"]}),"\n",(0,t.jsxs)(n.li,{children:["Read more here: ",(0,t.jsx)(n.a,{href:"https://itsfoss.com/check-uefi-or-bios/",children:"https://itsfoss.com/check-uefi-or-bios/"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["GPT, not MBR","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On Windows: ",(0,t.jsx)(n.code,{children:"Disk management"})," \u2192 ",(0,t.jsx)(n.code,{children:"Create and format hard disk partitions"})," \u2192\nright-click disk \u2192 ",(0,t.jsx)(n.code,{children:"Properties"})," \u2192 ",(0,t.jsx)(n.code,{children:"Volume"})," \u2192 ",(0,t.jsx)(n.code,{children:"Partition style"})," =\n",(0,t.jsx)(n.code,{children:"GUID Partition Table (GPT)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Read more here: ",(0,t.jsx)(n.a,{href:"https://itsfoss.com/check-mbr-or-gpt/",children:"https://itsfoss.com/check-mbr-or-gpt/"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.a,{href:"https://rufus.ie/en/",children:"Rufus"})," to create the bootable USB","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get the ",(0,t.jsx)(n.a,{href:"https://ubuntu.com/download/desktop",children:"Ubuntu Desktop Image"})]}),"\n",(0,t.jsxs)(n.li,{children:["Partition scheme: Select ",(0,t.jsx)(n.code,{children:"GPT"})]}),"\n",(0,t.jsxs)(n.li,{children:["Target System: Select ",(0,t.jsx)(n.code,{children:"UEFI"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Backup BitLocker recovery key","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure your BitLocker recovery key is saved to your Microsoft account, or\nany other ways of backing it up"}),"\n",(0,t.jsxs)(n.li,{children:["Read more on how to back up in\n",(0,t.jsx)(n.a,{href:"https://support.microsoft.com/en-us/windows/back-up-your-bitlocker-recovery-key-e63607b4-77fb-4ad3-8022-d6dc428fbd0d",children:"Microsoft official guide"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Partition your disk","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Assuming Windows now taking up the full disk, you will need to shrink the\nvolume available to Windows and create space for Linux"}),"\n",(0,t.jsxs)(n.li,{children:["Disable BitLocker","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I had to disable BitLocker to shrink the Windows volume"}),"\n",(0,t.jsx)(n.li,{children:"Follow the on-screen instructions for each to decrypt and reboot, it will\ntake some time"}),"\n",(0,t.jsxs)(n.li,{children:["Read more on\n",(0,t.jsx)(n.a,{href:"https://www.diskpart.com/articles/resize-bitlocker-partition-windows-10-0725.html",children:"this guide about resize BitLocker partition"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Partition","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["I used ",(0,t.jsx)(n.a,{href:"https://www.diskpart.com/download.html",children:"AOMEI Partition Assistant"})]}),"\n",(0,t.jsxs)(n.li,{children:["Read their\n",(0,t.jsx)(n.a,{href:"https://www.diskpart.com/safely-partition.html",children:"How to safely partition"}),"\ntutorial"]}),"\n",(0,t.jsxs)(n.li,{children:["Other guides I found useful:\n",(0,t.jsx)(n.a,{href:"https://www.diskpart.com/help/align-partition.html",children:"Align partition"}),",\n",(0,t.jsx)(n.a,{href:"https://www.diskpart.com/lib/PreOS-mode.html",children:"PreOS Mode"})]}),"\n",(0,t.jsxs)(n.li,{children:["If you want to use the Disk Management tool from Windows but failed,\n",(0,t.jsx)(n.a,{href:"https://answers.microsoft.com/en-us/windows/forum/all/windows-disk-management-unable-to-shrink-c-drive/217c3521-b254-4662-bac9-bc90dc633fab",children:"this post"}),"\nmight be helpful"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Move ",(0,t.jsx)(n.code,{children:"WinRe"})," partition after the Windows partition","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This is the recovery partition for Windows to support failover"}),"\n",(0,t.jsx)(n.li,{children:"It is recommended to keep this as a separate partition and put it right\nafter the Windows partition"}),"\n",(0,t.jsxs)(n.li,{children:["Read more on\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/answers/questions/1354739/the-recovery-partition-is-typically-created-at-the",children:"this post"})]}),"\n",(0,t.jsx)(n.li,{children:"So what I had is [Windows | WinRe | Unused space (for Ubuntu later)]"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-bios-in-the-bios-menu",children:"Configure BIOS in the BIOS Menu"}),"\n",(0,t.jsx)(n.p,{children:"Just to make sure a few things are set in the BIOS menu. Knowing how to get into\nthe BIOS menu is also helpful in case of bad things happened."}),"\n",(0,t.jsx)(n.p,{children:'Reboot the computer and enter the BIOS menu before the OS load. Search online\nhow to do it for your computer. It\'s usually F2 or F12. For me is pressing Enter\nwhen it says something like "Press Enter to interrupt".'}),"\n",(0,t.jsx)(n.p,{children:"Things to check:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure the UEFI BIOS is up-to-date"}),"\n",(0,t.jsxs)(n.li,{children:["SATA mode is ",(0,t.jsx)(n.code,{children:"AHCI"}),", as Ubuntu doesn't support other operations"]}),"\n",(0,t.jsxs)(n.li,{children:["Secure boot is enabled and CSM is disabled","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It is required to install Ubuntu with secure boot enabled for secure boot to\nwork with Ubuntu"}),"\n",(0,t.jsx)(n.li,{children:"CSM is to support non-UEFI OS. It should already be disabled with secure\nboot enabled"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Boot mode is UEFI only"}),"\n",(0,t.jsx)(n.li,{children:"TPM security has to be enabled for BitLocker in Windows"}),"\n",(0,t.jsx)(n.li,{children:"You can check the Boot order in the BIOS menu as well"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-ubuntu-partition",children:"Configure Ubuntu Partition"}),"\n",(0,t.jsx)(n.p,{children:"The important bits start here! From now on, it's better to do all remaining\nsteps in one go."}),"\n",(0,t.jsx)(n.p,{children:"This stage is to boot into Ubuntu with the live USB and configure the Ubuntu\npartition that is encrypted."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Boot the USB stick and select ",(0,t.jsx)(n.code,{children:"Try without installing"})," when prompted"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You should see the default Ubuntu desktop, open a terminal"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the terminal, change to root with"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo su\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the partition table again"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Check with ",(0,t.jsx)(n.code,{children:"sgdisk"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sgdisk --print /dev/nvme0n1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If your disk is not ",(0,t.jsx)(n.code,{children:"/dev/nvme0n1"}),", then you will have to replace all the\nfollowing commands to your disk name, e.g. ",(0,t.jsx)(n.code,{children:"/dev/sda"})]}),"\n",(0,t.jsxs)(n.li,{children:["Look for the disk name (e.g. ",(0,t.jsx)(n.code,{children:"/dev/sda"})," or ",(0,t.jsx)(n.code,{children:"/dev/nvme0n1"}),") not the\npartition name (e.g. ",(0,t.jsx)(n.code,{children:"/dev/sda1"})," or ",(0,t.jsx)(n.code,{children:"/dev/nvme0n1p1"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create 2 partitions in the empty space in your disk, one for boot and the\nrest for root"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["New 1800M partition for boot","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sgdisk --new=5:0:+1800M /dev/nvme0n1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["New partition using the rest for root","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sgdisk --new=6:0:0 /dev/nvme0n1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Name the partitions","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sgdisk --change-name=5:/boot --change-name=6:rootfs /dev/nvme0n1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Choose 8300 as the type code for the file system (Linux filesystem)","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sgdisk --typecode=5:8300 --typecode=6:8300 /dev/nvme0n1\n"})}),"\n","(you can find all typecode with ",(0,t.jsx)(n.code,{children:"sgdisk -L"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Make EXT4 file system (notice that here is the partition name)","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkfs.ext4 -L boot /dev/nvme0n1p5\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Encrypt the Linux data partition with LUKS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the following codeblock, I am showing the output as well"}),"\n",(0,t.jsxs)(n.li,{children:["Lines after ",(0,t.jsx)(n.code,{children:"#"})," are what needed to be inputted to the terminal"]}),"\n",(0,t.jsx)(n.li,{children:"The passphrase you chose at this step is what you needed to decrypt the\ndisk when booting"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# cryptsetup luksFormat --type=luks2 /dev/nvme0n1p6\nWARNING!\n========\nThis will overwrite data on /dev/nvme0n1p6 irrevocably.\n\nAre you sure? (Type uppercase yes): YES\nEnter passphrase for /dev/nvme0n1p6:\nVerify passphrase:\n\n# cryptsetup open /dev/nvme0n1p6 nvme0n1p6_crypt\nEnter passphrase for /dev/nvme0n1p6:\n\n# ls /dev/mapper/\ncontrol nvme0n1p6_crypt\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up logical volume manager (LVM), with root, swap and home partition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# pvcreate /dev/mapper/nvme0n1p6_crypt\nPhysical volume "/dev/mapper/nvme0n1p6_crypt" successfully created.\n# vgcreate ubuntu-vg /dev/mapper/nvme0n1p6_crypt\nVolume group "ubuntu-vg" successfully created\n# lvcreate -L 64G -n root ubuntu-vg\nLogical volume "root" created.\n# lvcreate -L 16G -n swap ubuntu-vg\nLogical volume "swap" created.\n# lvcreate -l 100%FREE -n home ubuntu-vg\nLogical volume "home" created.\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now all the Ubuntu partitions are prepared. Without exiting the live\nenvironment, use the GUI to continue the installation."}),"\n",(0,t.jsx)(n.h2,{id:"install-ubuntu",children:"Install Ubuntu"}),"\n",(0,t.jsx)(n.p,{children:"We will install Ubuntu on the encrypted disk and configure things to make sure\nsecure boot also works."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the graphical installer"}),"\n",(0,t.jsx)(n.li,{children:"Connect to your Wi-Fi network"}),"\n",(0,t.jsxs)(n.li,{children:['On the software step, for "Other options" (This step is important for secure\nboot to work)',"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Check the "Download updates" option'}),"\n",(0,t.jsx)(n.li,{children:'Check the "Install third-party software for graphics and Wi-Fi hardware"'}),"\n",(0,t.jsx)(n.li,{children:'Check the "Configure Secure Boot" option and enter a password, remember\nthis password. Useful for the MOK management step explained below.'}),"\n",(0,t.jsx)(n.li,{children:"Save and continue"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['When asked what to do with the disk, pick "Something else", or the option\nthat allows you to manually assign disk partition',"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ~1800MB partition as ",(0,t.jsx)(n.code,{children:"ext4"})," with mount point as ",(0,t.jsx)(n.code,{children:"/boot"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"/dev/mapper/ubuntu-vg-root"})," as ",(0,t.jsx)(n.code,{children:"ext4"})," FS and mount it to ",(0,t.jsx)(n.code,{children:"/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"/dev/mapper/ubuntu-vg-home"})," as ",(0,t.jsx)(n.code,{children:"ext4"})," FS and mount it to ",(0,t.jsx)(n.code,{children:"/home"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"/dev/mapper/ubuntu-vg-swap"})," as ",(0,t.jsx)(n.code,{children:"swap"})]}),"\n",(0,t.jsx)(n.li,{children:"Do the same as above if you have more or less partitions"}),"\n",(0,t.jsxs)(n.li,{children:["The bootloader device should be ",(0,t.jsx)(n.code,{children:"/dev/nvme0n1"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Proceed with the installation"}),"\n",(0,t.jsxs)(n.li,{children:["When finished, select ",(0,t.jsx)(n.code,{children:"Continue Testing"}),", and it should bring you back to the\nUbuntu Desktop environment"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Do not leave the live environment just yet."}),"\n",(0,t.jsxs)(n.h2,{id:"set-up-crypttab",children:["Set up ",(0,t.jsx)(n.code,{children:"crypttab"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"crypttab"})," is used to decrypt the disk on boot."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the terminal and find the UUID of the partition with LUKS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo blkid /dev/nvme0n1p6\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'/dev/nvme0n1p6: UUID="abcdefgh-1234-5678-9012-abcdefghijklm" TYPE="crypto_LUKS"\n'})}),"\n",(0,t.jsx)(n.p,{children:"I suggest writing the UUID down somewhere"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Mount the drives and chroot into the mount:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mount /dev/mapper/ubuntu-vg-root /target\nmount /dev/nvme0n1p5 /target/boot\nfor n in proc sys dev etc/resolv.conf; do mount --rbind /$n /target/$n; done\nchroot /target\n\nmount -a\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"/etc/crypttab"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# <target name> <source device> <key file> <options>\n# options used:\n#     luks    - specifies that this is a LUKS encrypted device\n#     tries=0 - allows to re-enter password unlimited number of times\n#     discard - allows SSD TRIM command, WARNING: potential security risk (more: "man crypttab")\n#     loud    - display all warnings\nnvme0n1p6_crypt UUID=abcdefgh-1234-5678-9012-abcdefghijklm none luks,discard\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Apply the changes (still inside chroot)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"update-initramfs -k all -c\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reboot-and-some-remaining-issues",children:"Reboot and some remaining issues"}),"\n",(0,t.jsx)(n.h3,{id:"blue-screen-mok-management",children:"Blue screen MOK management"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"When reboot, because of the secure boot, you will see a blue screen and ask\nto perform MOK management"}),"\n",(0,t.jsx)(n.li,{children:"Choose Enroll MOK, continue, yes"}),"\n",(0,t.jsxs)(n.li,{children:["Input the password that you inputted on the step for software install during\nthe installation for third party drivers","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It won't show what you typed, trust that it's there"}),"\n",(0,t.jsx)(n.li,{children:"This is only a one time thing so no worries"}),"\n",(0,t.jsx)(n.li,{children:"Once successful you don't need the password anymore"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"windows-bitlocker-issue",children:"Windows BitLocker Issue"}),"\n",(0,t.jsx)(n.p,{children:"You might need to input the BitLocker recovery key when booting into Windows.\nFind your recovery key in where ever you saved (e.g. Microsoft account) and\ninput it. This is also one time thing, so no worries."}),"\n",(0,t.jsx)(n.p,{children:"If you have disabled BitLocker before to partition the disk, you will need to\nre-enable it and encrypt the Windows partition again."}),"\n",(0,t.jsx)(n.p,{children:"To encrypt again, you need to make sure you meet the pre-requisites to enable\nBitLocker:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check that the partition table is GPT"}),"\n",(0,t.jsx)(n.li,{children:"BIOS is set to UEFI"}),"\n",(0,t.jsx)(n.li,{children:"Secure boot is enabled"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"System information"})," \u2192 scroll down and see device encryption support needs\nto be ",(0,t.jsx)(n.code,{children:"meets prerequisites"}),". If not, check the above again and maybe reboot and\nsee."]}),"\n",(0,t.jsx)(n.p,{children:"Once the prerequisites are met, go to Settings \u2192 privacy & security \u2192 device\nencryption and enable BitLocker."}),"\n",(0,t.jsx)(n.p,{children:"To check the progress:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open admin command prompt and input ",(0,t.jsx)(n.code,{children:"manage-bde -status C:"})]}),"\n",(0,t.jsxs)(n.li,{children:["If the status stuck, not updating, try ",(0,t.jsx)(n.code,{children:"manage-bde -pause C:"})," and then\n",(0,t.jsx)(n.code,{children:"manage-bde -resume C:"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"With BitLocker re-enabled, this means both Ubuntu and Windows have full disk\nencryption and secure boot enabled!"}),"\n",(0,t.jsx)(n.h3,{id:"wrong-timezone-after-dual-boot",children:"Wrong timezone after dual boot"}),"\n",(0,t.jsx)(n.p,{children:"You might notice one of the OS show the wrong time before resyncing their time.\nThis is because they store time into the computer hardware clock differently.\nLinux assumes that the time on the hardware clock is stored in UTC and Windows\nassumes it is local time. One solution is to ask Linux to store the hardware\nclock as local time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"timedatectl set-local-rtc 1\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://itsfoss.com/wrong-time-dual-boot/",children:"Read more in this guide from It's Foss"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsx)(n.h3,{id:"about-full-disk-encryption",children:"About full disk encryption:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.mikekasberg.com/blog/2020/04/08/dual-boot-ubuntu-and-windows-with-encryption.html",children:"How to Dual-Boot Ubuntu 20.04 (or 22.04) and Windows 10 (or 11) with Encryption | Mike Kasberg"})," -\nrecommend reading"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gist.github.com/luispabon/db2c9e5f6cc73bb37812a19a40e137bc",children:"Dual boot with encryption nodes | GitHub Gist from @luispabon"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"about-secure-boot",children:"About secure boot:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.reddit.com/r/linux4noobs/comments/osotp3/ubuntu_dual_boot_with_windows_10_can_i_enable/",children:"Can I enable secure boot again? | Reddit"})," -\nAns: no"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/GqJBniwj1Mg",children:"A Clean Install of Linux Ubuntu 20.04 (Lenovo UEFI BIOS with Secure Boot and MOK) | YouTube"})," -\nworth watching parts about the secure boot and MOK step"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://askubuntu.com/questions/880240/it-is-possible-to-dual-boot-linux-and-windows-10-with-secure-boot-enabled",children:"It is possible to dual boot Linux and Windows 10 with secure boot enabled? | Ask Ubuntu"})," -\nAns: yes"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"about-partition-and-bitlocker",children:"About partition and BitLocker:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://answers.microsoft.com/en-us/windows/forum/all/windows-disk-management-unable-to-shrink-c-drive/217c3521-b254-4662-bac9-bc90dc633fab",children:"Windows Disk Management unable to shrink C: drive volume"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.diskpart.com/articles/resize-bitlocker-partition-windows-10-0725.html",children:"How can I resize BitLocker partition in Windows 10/11"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://itsfoss.com/dual-boot-ubuntu-windows-bitlocker/",children:"Dual Booting Ubuntu with Windows 10 Pro with BitLocker Encryption"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"That's it and I hope you can set up dual boot without issues!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);