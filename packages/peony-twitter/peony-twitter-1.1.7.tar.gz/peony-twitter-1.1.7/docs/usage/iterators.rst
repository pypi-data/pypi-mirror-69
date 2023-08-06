===========
 Iterators
===========

Sometimes you need to make several requests to the same API endpoint in order
to get all the data you want (e.g. getting more than 200 tweets of an user).
Some iterators are included in Peony and usable through the peony.iterators
module that deals with the actual iteration, getting all the responses you
need.

Cursor iterators
----------------

This is an iterator for endpoints using the `cursor` parameter
(e.g. followers/ids.json). The first argument given to the iterator is the
coroutine function that will make the request.

.. code-block:: python

    from peony import PeonyClient

    # creds being a dictionnary containing your api keys
    client = PeonyClient(**creds)

    async def get_followers(user_id, **additional_params):
        request = client.api.followers.ids.get(id=user_id, count=5000,
                                               **additional_params)
        followers_ids = request.iterator.with_cursor()

        followers = []
        async for data in followers_ids:
            followers.extend(data.ids)

        return followers

Max_id iterators
----------------

An iterator for endpoints using the `max_id` parameter
(e.g. statuses/user_timeline.json):

.. code-block:: python

    from peony import PeonyClient

    client = PeonyClient(**creds)

    async def get_tweets(user_id, n_tweets=1600, **additional_params):
        request = client.api.statuses.user_timeline.get(user_id=user_id,
                                                        count=200,
                                                        **additional_params)
        responses = request.iterator.with_max_id()

        user_tweets = []

        async for tweets in responses:
            user_tweets.extend(tweets)

            if len(user_tweets) >= n_tweets:
                user_tweets = user_tweets[:n_tweets]
                break

        return user_tweets

Since_id iterators
------------------

An iterator for endpoints using the ``since_id`` parameter
(e.g. `GET statuses/home_timeline.json <https://dev.twitter.com/rest/reference/get/statuses/home_timeline>`_):

.. code-block:: python

    import asyncio
    import html

    from peony import PeonyClient

    client = peony.PeonyClient(**creds)

    async def get_home(since_id=None, **params):
        request = client.api.statuses.home_timeline.get(count=200, **params)
        responses = request.iterator.with_since_id()

        home = []
        async for tweets in responses:
            for tweet in reversed(tweets):
                text = html.unescape(tweet.text)
                print("@{user.screen_name}: {text}".format(user=tweet.user,
                                                           text=text))
                print("-"*10)

            await asyncio.sleep(120)

        return sorted(home, key=lambda tweet: tweet.id)


.. note::
    :func:`~peony.iterators.with_since_id` has a fill_gaps parameter that will
    try to find all the tweets that were sent between 2 iterations if it cannot
    be found in a single request (more than 200 tweets were sent)

    .. code-block:: python

        responses = request.iterator.with_since_id(fill_gaps=True)

.. note::
    Both :func:`~peony.iterators.with_since_id` and
    :func:`~peony.iterators.with_max_id` have a ``force`` parameter that can
    be used in case you need to keep making requests after a request returned
    no content. Set ``force`` to ``True`` if this is the case.
