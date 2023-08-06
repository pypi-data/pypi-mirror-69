#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
==================
kxy.api.decorators
==================
"""

from functools import wraps
import os


def requires_api_key(method):
	"""
	Decorator used to make functions and methods calls fail
	when they require an API key and the environment variable
	'KXY_API_KEY' is not set. The decorated function or method 
	is otherwise not affected.

	Raises
	------
	AssertionError
		If the environment variable 'KXY_API_KEY' is not set.
	"""
	@wraps(method)
	def wrapper(*args, **kw):
		api_key = os.getenv('KXY_API_KEY')			
		assert api_key is not None, 'An API key should be provided by setting the environment' \
			'variable KXY_API_KEY'
		return method(*args, **kw)

	return wrapper