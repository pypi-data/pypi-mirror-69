#!/usr/bin/env python
# -*- coding: utf-8 -*-

#  !/usr/bin/env python
#   -*- coding: utf-8 -*-
#
#  property_format.py
"""Format Physical Properties for Chemicals"""

#
#  Copyright (c) 2019 Dominic Davis-Foster <dominic@davis-foster.co.uk>
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU Lesser General Public License as published by
#  the Free Software Foundation; either version 3 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU Lesser General Public License for more details.
#
#  You should have received a copy of the GNU Lesser General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#
#

import re
from decimal import Decimal


def degC(string):
	return string.replace(" deg C", "°C").replace("deg C", "°C").replace(" DEG C", "°C").replace("DEG C", "°C")


def equals(string):
	return string.replace("= ", " = ").replace("  = ", " = ")


def scientific(string):
	"""
	TODO: Finish

	:param string:
	:return:
	"""

	try:
		magnitude = re.findall("X10.[0-9]+", string)[0].replace("X10", '').replace("-", "−")
	except IndexError:  # no scientific notation to format
		return string
	# print(magnitude)
	return re.sub("X10.[0-9]+", f"×10<sup>{magnitude}</sup>", string)


def uscg1999(string):
	return string.replace("(USCG, 1999)", '')


def trailspace(string):
	return string.rstrip(" ")


def f2c(string):
	try:
		temperature = re.findall(r"\d*\.?\d+ *° *F", string)[0].replace("F", '').replace("°", '').replace(" ", '')
	except IndexError:
		return string

	# Convert to Censius and strip trailing 0s and decimal points
	temperature = str((Decimal(temperature) - 32) * (Decimal(5) / Decimal(9)))
	if "." in temperature:
		temperature = temperature.rstrip("0").rstrip(".")
	return re.sub(r"\d*\.?\d+ *° *F", f"{temperature}°C", string)


def property_format(string):
	return trailspace(f2c(uscg1999(scientific(degC(equals(string))))))
