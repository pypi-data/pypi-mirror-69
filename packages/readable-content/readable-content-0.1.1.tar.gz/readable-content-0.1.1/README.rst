readable-content
============================
Collects actual content of any article, blog, news, etc.


Installation
------------
::

    pip install readable-content

Usage
-----

After installing you need to do just add following two variables in settings.py of your Scrapy project ::


    from readable_content.parser import ContentParser
    parser = ContentParser("https://ideas.ted.com/how-do-animals-learn-how-to-be-well-animals-through-a-shared-culture/")
    content = parser.get_content()
    print(readable_content)



In case the website does not allow getting the content and throws 4XX or 3XX or any other error codes, we can first get the HTML using other techniques like using requests, using user-agent, applying proxies on your own, etc. Then the html content can be passed as following::


    parser = ContentParser("https://ideas.ted.com/how-do-animals-learn-how-to-be-well-animals-through-a-shared-culture/", html_content)


Here html_content variable is string representation of the HTML.


Thank you!
