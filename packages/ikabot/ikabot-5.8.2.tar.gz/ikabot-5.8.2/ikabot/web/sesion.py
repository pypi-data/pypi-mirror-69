#! /usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import os
import sys
import json
import time
import random
import getpass
import gettext
import requests
from ikabot.config import *
from ikabot.helpers.botComm import *
from ikabot.helpers.gui import banner
from ikabot.helpers.aesCipher import *
from ikabot.helpers.pedirInfo import read
from ikabot.helpers.getJson import getCiudad

t = gettext.translation('sesion', 
                        localedir, 
                        languages=idiomas,
                        fallback=True)
_ = t.gettext


class Sesion:
	def __init__(self):
		self.padre = True
		self.logged = False
		self.__login()

	def __genRand(self):
		return hex(random.randint(0, 65535))[2:]

	def __genCookie(self):
		return self.__genRand() + self.__genRand() + hex(int(round(time.time() * 1000)))[2:] + self.__genRand() + self.__genRand()

	def __fp_eval_id(self):
		return self.__genRand() + self.__genRand() + '-' + self.__genRand() + '-' + self.__genRand() + '-' + self.__genRand() + '-' + self.__genRand() + self.__genRand() + self.__genRand()

	def __getGameforgeCookie(self):
		headers = {'Host': 'pixelzirkus.gameforge.com', 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'Accept-Encoding': 'gzip, deflate', 'Content-Type': 'application/x-www-form-urlencoded', 'DNT': '1', 'Connection': 'close', 'Upgrade-Insecure-Requests': '1'}
		cookies = {'__asc': self.alexaCook, '__auc': self.alexaCook}
		fp_eval_id = __fp_eval_id()
		page = self.urlBase.replace(self.mundo + '-', '').replace('index.php?', '')
		data = {'location': 'VISIT', 'product': 'ikariam', 'language': self.servidor, 'server-id': '1', 'replacement_kid': '', 'fp_eval_id': fp_eval_id, 'page': page,'referrer': '', 'fingerprint': '1820081159', 'fp_exec_time': '3.00'}
		r = requests.post('https://pixelzirkus.gameforge.com/do/simple', headers=headers, cookies=cookies, data=data)
		return r.cookies['pc_idt']

	def __logout(self, html):
		if html is not None:
			idCiudad = getCiudad(html)['id']
			token = re.search(r'actionRequest"?:\s*"(.*?)"', html).group(1)
			urlLogout = 'action=logoutAvatar&function=logout&sideBarExt=undefined&startPageShown=1&detectedDevice=1&cityId={0}&backgroundView=city&currentCityId={0}&actionRequest={1}'.format(idCiudad, token)
			self.s.get(self.urlBase + urlLogout)

	def __isInVacation(self, html):
		return 'nologin_umod' in html

	def __isExpired(self, html):
		return 'index.php?logout' in html

	def __updateCookieFile(self, primero=False, nuevo=False, salida=False):
		msg = _('Actualizo el archivo de cookies:\n')
		if primero:
			msg += _('Primero')
		elif nuevo:
			msg += _('Nuevo')
		else:
			msg += _('Salida')
		sendToBotDebug(self, msg, debugON_session)

		fileData = self.getFileData()

		if primero is True:
			cookie_dict = dict(self.s.cookies.items())
			fileData['cookies'] = cookie_dict
			fileData['num_sesiones'] = 1

		elif nuevo is True:
			try:
				fileData['num_sesiones'] += 1
			except KeyError:
				fileData['num_sesiones'] = 1

		elif salida is True:
			try:
				if fileData['num_sesiones'] == 1:
					html = self.s.get(self.urlBase).text
					if self.__isExpired(html) is False:
						self.__logout(html)
			except KeyError:
				return
			fileData['num_sesiones'] -= 1

		self.setFileData(fileData)

	def __getCookie(self, fileData=None):
		if fileData is None:
			fileData = self.getFileData()
		try:
			assert fileData['num_sesiones'] > 0
			cookie_dict = fileData['cookies']
			self.s = requests.Session()
			self.s.proxies = proxyDict
			self.s.headers.clear()
			self.s.headers.update(self.headers)
			requests.cookies.cookiejar_from_dict(cookie_dict, cookiejar=self.s.cookies, overwrite=True)
			self.__updateCookieFile(nuevo=True)
		except (KeyError, AssertionError):
			msg = _('La sesión se venció, renovando sesión')
			sendToBotDebug(self, msg, debugON_session)
			self.__login(3)

	def __login(self, retries=0):
		if not self.logged:
			banner()

			self.mail = read(msg=_('Mail:'))
			self.password = getpass.getpass(_('Contraseña:'))

			banner()

		self.s = requests.Session()
		self.s.proxies = proxyDict

		self.headers = {'Host': 'pixelzirkus.gameforge.com', 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.5', 'Accept-Encoding': 'gzip, deflate', 'Content-Type': 'application/x-www-form-urlencoded', 'DNT': '1', 'Connection': 'close', 'Referer': 'https://lobby.ikariam.gameforge.com/es_ES/', 'Upgrade-Insecure-Requests': '1'}
		self.s.headers.clear()
		self.s.headers.update(self.headers)
		fp_eval_id = self.__fp_eval_id()
		data = {'product': 'ikariam', 'server_id': '1', 'language': 'es', 'location': 'fp_eval', 'replacement_kid': '', 'fp_eval_id': self.__fp_eval_id(), 'fingerprint': '1666238048', 'fp2_config_id': '1', 'page': 'https%3A%2F%2Flobby.ikariam.gameforge.com%2Fes_ES', 'referrer': '', 'fp2_value': '6b28817d7585d24cdd53bda231eb310f', 'fp2_exec_time': '264.00'}
		self.s.post('https://pixelzirkus.gameforge.com/do/simple', data=data)

		self.headers = {'Host': 'lobby.ikariam.gameforge.com', 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0', 'Accept-Language': 'en-US,en;q=0.5','Accept':'application/json', 'Accept-Encoding':'gzip, deflate, br', 'Content-Type': 'application/json', 'Referer': 'https://lobby.ikariam.gameforge.com/es_ES', 'Origin': 'https://lobby.ikariam.gameforge.com', 'DNT': '1', 'Connection': 'close'}
		self.s.headers.clear()
		self.s.headers.update(self.headers)
		data = '{{"credentials":{{"email":"{}","password":"{}"}},"language":"es","kid":"","autoLogin":"false"}}'.format(self.mail, self.password)
		r = self.s.post('https://lobby.ikariam.gameforge.com/api/users', data=data)
		if r.status_code == 400:
			exit(_('Mail o contraseña incorrecta\n'))

		if not self.logged:
			accounts = self.s.get('https://lobby.ikariam.gameforge.com/api/users/me/accounts').text
			accounts = json.loads(accounts, strict=False)
			servers = self.s.get('https://lobby.ikariam.gameforge.com/api/servers').text
			servers = json.loads(servers, strict=False)

			if len([ account for account in accounts if account['blocked'] is False ]) == 1:
				self.account  = [ account for account in accounts if account['blocked'] is False ][0]
			else:
				print(_('¿Con qué cuenta quiere iniciar sesión?\n'))

				max_name = max( [ len(account['name']) for account in accounts if account['blocked'] is False ] )
				i = 0
				for account in [ account for account in accounts if account['blocked'] is False ]:
					server = account['server']['language']
					mundo = account['server']['number']
					world = [ srv['name'] for srv in servers if srv['language'] == server and srv['number'] == mundo ][0]
					i += 1
					pad = ' ' * (max_name - len(account['name']))
					print('({:d}) {}{} [{} - {}]'.format(i, account['name'], pad, server, world))
				num = read(min=1, max=i)
				self.account  = [ account for account in accounts if account['blocked'] is False ][num - 1]
			self.username = self.account['name']
			self.servidor = self.account['server']['language']
			self.mundo    = str(self.account['server']['number'])
			self.word     = [ srv['name'] for srv in servers if srv['language'] == self.servidor and srv['number'] == int(self.mundo) ][0]
			config.infoUser = _('Servidor:{}').format(self.servidor)
			config.infoUser += _(', Mundo:{}').format(self.word)
			config.infoUser += _(', Jugador:{}').format(self.username)
			banner()

		resp = self.s.get('https://lobby.ikariam.gameforge.com/api/users/me/loginLink?id={}&server[language]={}&server[number]={}'.format(self.account['id'], self.servidor, self.mundo)).text
		self.s.cookies.__delitem__('PHPSESSID')
		resp = json.loads(resp, strict=False)
		if 'url' not in resp:
			if retries > 0:
				return self.__login(retries-1)
			else:
				msg = 'Login Error'
				if self.padre:
					print(msg)
					exit()
				else:
					exit(msg)

		url = resp['url']
		match = re.search(r'https://s\d+-\w{2}\.ikariam\.gameforge\.com/index\.php\?', url)
		if match is None:
			exit('Error')

		self.urlBase = match.group(0)
		self.host = self.urlBase.split('//')[1].split('/index')[0]
		self.headers = {'Host': self.host, 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'Accept-Encoding': 'gzip, deflate', 'DNT': '1', 'Connection': 'close', 'Referer': 'https://lobby.ikariam.gameforge.com/es_ES/accounts', 'DNT': '1', 'Connection': 'close', 'Upgrade-Insecure-Requests': '1'}
		self.s.headers.clear()
		self.s.headers.update(self.headers)
		html = self.s.get(url).text

		if self.__isInVacation(html):
			msg = _('La cuenta entró en modo vacaciones')
			if self.padre:
				print(msg)
			else:
				sendToBot(self, msg)
			os._exit(0)
		if self.__isExpired(html):
			if self.padre:
				msg = _('Mail o contraseña incorrecta')
				print(msg)
				os._exit(0)
			raise Exception('No se pudo iniciar sesión')
		self.cipher = AESCipher(self.mail, self.username, self.password)
		self.__updateCookieFile(primero=True)
		self.logged = True

	def __backoff(self):
		if self.padre is False:
			time.sleep(5 * random.randint(0, 10))

	def __expiroLaSesion(self):
		self.__backoff()

		fileData = self.getFileData()

		try:
			if fileData['num_sesiones'] > 0 and self.s.cookies['PHPSESSID'] != fileData['cookies']['PHPSESSID']:
				self.__getCookie(fileData)
			else:
				try:
					self.__login(3)
				except Exception:
					self.__expiroLaSesion()
		except KeyError:
			try:
				self.__login(3)
			except Exception:
				self.__expiroLaSesion()

	def __checkCookie(self):
		fileData = self.getFileData()

		try:
			if fileData['num_sesiones'] > 0:
				if self.s.cookies['PHPSESSID'] != fileData['cookies']['PHPSESSID']:
					self.__getCookie(fileData)
			else:
				try:
					self.__login(3)
				except Exception:
					self.__expiroLaSesion()
		except KeyError:
			try:
				self.__login(3)
			except Exception:
				self.__expiroLaSesion()

	def token(self):
		html = self.get()
		return re.search(r'actionRequest"?:\s*"(.*?)"', html).group(1)

	def get(self, url='', params={}, ignoreExpire=False, noIndex=False):
		self.__checkCookie()
		if noIndex:
			url = self.urlBase.replace('index.php', '') + url
		else:
			url = self.urlBase + url
		while True:
			try:
				html = self.s.get(url, params=params).text
				if ignoreExpire is False:
					assert self.__isExpired(html) is False
				return html
			except AssertionError:
				self.__expiroLaSesion()
			except requests.exceptions.ConnectionError:
				time.sleep(ConnectionError_wait)

	def post(self, url='', payloadPost={}, params={}, ignoreExpire=False, noIndex=False):
		self.__checkCookie()
		if noIndex:
			url = self.urlBase.replace('index.php', '') + url
		else:
			url = self.urlBase + url
		while True:
			try:
				html = self.s.post(url, data=payloadPost, params=params).text
				if ignoreExpire is False:
					assert self.__isExpired(html) is False
				return html
			except AssertionError:
				self.__expiroLaSesion()
			except requests.exceptions.ConnectionError:
				time.sleep(ConnectionError_wait)

	def login(self):
		self.__updateCookieFile(nuevo=True)

	def logout(self):
		self.__updateCookieFile(salida=True)
		if self.padre is False:
			os._exit(0)

	def setFileData(self, fileData):
		self.cipher.setFileData(self, fileData)

	def getFileData(self):
		return self.cipher.getFileData(self)

def normal_get(url, params={}):
	try:
		return requests.get(url, params=params)
	except requests.exceptions.ConnectionError:
		sys.exit(_('Fallo la conexion a internet'))
