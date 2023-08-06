"""
    Slixmpp: The Slick XMPP Library
    Copyright (C) 2011 Nathanael C. Fritz, Lance J.T. Stout
    This file is part of Slixmpp.

    See the file LICENSE for copying permission.
"""

import logging

from slixmpp.plugins.base import BasePlugin
from slixmpp.plugins.xep_0118 import stanza, UserTune


log = logging.getLogger(__name__)


class XEP_0118(BasePlugin):

    """
    XEP-0118: User Tune
    """

    name = 'xep_0118'
    description = 'XEP-0118: User Tune'
    dependencies = {'xep_0163'}
    stanza = stanza

    def plugin_end(self):
        self.xmpp['xep_0030'].del_feature(feature=UserTune.namespace)
        self.xmpp['xep_0163'].remove_interest(UserTune.namespace)

    def session_bind(self, jid):
        self.xmpp['xep_0163'].register_pep('user_tune', UserTune)

    def publish_tune(self, artist=None, length=None, rating=None, source=None,
                     title=None, track=None, uri=None, options=None,
                     ifrom=None, callback=None, timeout=None, timeout_callback=None):
        """
        Publish the user's current tune.

        Arguments:
            artist   -- The artist or performer of the song.
            length   -- The length of the song in seconds.
            rating   -- The user's rating of the song (from 1 to 10)
            source   -- The album name, website, or other source of the song.
            title    -- The title of the song.
            track    -- The song's track number, or other unique identifier.
            uri      -- A URL to more information about the song.
            options  -- Optional form of publish options.
            ifrom    -- Specify the sender's JID.
            timeout  -- The length of time (in seconds) to wait for a response
                        before exiting the send call if blocking is used.
                        Defaults to slixmpp.xmlstream.RESPONSE_TIMEOUT
            callback -- Optional reference to a stream handler function. Will
                        be executed when a reply stanza is received.
        """
        tune = UserTune()
        tune['artist'] = artist
        tune['length'] = length
        tune['rating'] = rating
        tune['source'] = source
        tune['title'] = title
        tune['track'] = track
        tune['uri'] = uri
        return self.xmpp['xep_0163'].publish(tune,
                node=UserTune.namespace,
                options=options,
                ifrom=ifrom,
                callback=callback,
                timeout=timeout,
                timeout_callback=timeout_callback)

    def stop(self, ifrom=None, callback=None, timeout=None, timeout_callback=None):
        """
        Clear existing user tune information to stop notifications.

        Arguments:
            ifrom    -- Specify the sender's JID.
            timeout  -- The length of time (in seconds) to wait for a response
                        before exiting the send call if blocking is used.
                        Defaults to slixmpp.xmlstream.RESPONSE_TIMEOUT
            callback -- Optional reference to a stream handler function. Will
                        be executed when a reply stanza is received.
        """
        tune = UserTune()
        return self.xmpp['xep_0163'].publish(tune,
                node=UserTune.namespace,
                ifrom=ifrom,
                callback=callback,
                timeout=timeout,
                timeout_callback=timeout_callback)
