from __future__ import absolute_import
import fire


def hello(name="World"):
    return "Hello %s!" % name


if __name__ == '__main__':
    fire.Fire(hello)
