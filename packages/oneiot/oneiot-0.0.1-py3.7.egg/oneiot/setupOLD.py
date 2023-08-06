import os, sys, subprocess
import datetime
import configparser

def print_message(status, message, include_time = False):
	print('[' + status + ']\t' + message + ('\t' + str(datetime.datetime.now().strftime('%M:%S.%f')) if include_time else ''))

if not __name__ == '__main__':
	print_message('FATAL', 'Not executing as top level code')
	exit()

os.system("clear")
print("OneIoT setup")
print()
print("Please ensure that you are connected to the internet")
print("Press [ENTER] to continue")
input()

#Hotspot setup
print_message("INFO", "Setting up wireless hotspot")
network_name = input("Enter a name for the wireless network used to connect smart device (suggested: OneIoT): ")
network_password = input("Enter a secure password: ")

#Configure static ip
os.system("printf 'interface wlan0\n\tstatic ip_address=192.168.4.1/24\n\tnohook wpa_supplicant' | sudo tee -a /etc/dhcpcd.conf")
os.system("sudo systemctl restart dhcpcd")

#Configure hostapd
hostapd_config = "interface=wlan0\ndriver=nl80211\nssid=" + network_name + "\nhw_mode=g\nchannel=6\nieee80211n=1\nwmm_enabled=1\nht_capab=[HT40][SHORT-GI-20][DSSS_CCK-40]\nmacaddr_acl=0\nauth_algs=1\nignore_broadcast_ssid=0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_passphrase=" + network_password + "\nrsn_pairwise=CCMP"
os.system("printf '" + hostapd_config + "' | sudo tee /etc/hostapd/hostapd.conf")
os.system("printf 'DAEMON_CONF=\"/etc/hostapd/hostapd.conf\"' | sudo tee -a /etc/default/hostapd")

#Configure dnsmasq
dnsmasq_config = "interface=wlan0\nbind-interfaces\nserver=8.8.8.8\ndomain-needed\nbogus-priv\ndhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h"
os.system("sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig")
os.system("sudo touch /etc/dnsmasq.conf")
os.system("printf '" + dnsmasq_config + "' | sudo tee /etc/dnsmasq.conf")

#IPV4 forwarding
os.system("printf 'net.ipv4.ip_forward=1' | sudo tee -a /etc/sysctl.conf")
os.system("sudo sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'")

#Restart services
os.system("sudo systemctl unmask hostapd")
os.system("sudo systemctl enable hostapd")
os.system("sudo systemctl start hostapd")
os.system("sudo service dnsmasq start")
print_message("INFO", "Completed setting up wireless hotspot")
input()

config = configparser.ConfigParser()
config['wireless-info'] = {'ssid':network_name, 'psk':network_password}
config['assistant'] = {'model-id':model_id, 'project-id':project_id}

oneIot_path = os.path.expanduser("~/.oneIot")

if not os.path.exists(oneIot_path):
    os.makedirs(oneIot_path)

with open(oneIot_path + "/config.ini", 'w') as configfile:
	config.write(configfile)

os.system("clear")
print("Device setup complete! please reboot now")
