pyrunnable
==========

why?
----

i just can't be bothered to write the same boilerplate code over and
over again. so i wrote it into a little library. it has the 'android'
lifecycle in mind:

-  on_start (before the loop gets called)
-  work (in the loop)
-  on_stop (when the loop has finished)

also it has a useful function called 'stop'

.. _how-to:

how to...
---------

.. _-install:

... install
~~~~~~~~~~~

.. code:: shell

   pip3 install git+https://github.com/smthnspcl/pyrunnable

.. _-use-it:

... use it
~~~~~~~~~~

.. code:: python

   from runnable import Runnable
   from time import sleep

   class ThreadedObject(Runnable):
       def __init__(self, **kwargs):  # not necessary but included for the sake of completeness
           Runnable.__init__(self, **kwargs)  # gotta super to Runnable as you would with Thread

       def on_start(self):
           print("we are going to run in a loop")

       def work(self):
           print("working")
           sleep(0.42)  # be nice to the cpu

       def on_stop(self):
           print("we finished working. time for beer")

   o = ThreadedObject()
   try:
       o.start()
       o.join()  # Runnable inherits threading.Thread
   except KeyboardInterrupt:
       o.stop()