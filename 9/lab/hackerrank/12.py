# https://www.hackerrank.com/challenges/python-time-delta/problem

import datetime

for _ in range(int(input())):
    t1 = datetime.datetime.strptime(input(), '%a %d %b %Y %H:%M:%S %z')
    t2 = datetime.datetime.strptime(input(), '%a %d %b %Y %H:%M:%S %z')
    # print(t1.strftime('%a %d %b %Y %H:%M:%S %z'), t2.strftime('%a %d %b %Y %H:%M:%S %z'))
    delta = max(t1, t2) - min(t1, t2)
    print(delta.seconds + delta.days * 24 * 3600)
