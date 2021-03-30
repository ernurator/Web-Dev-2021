# https://www.hackerrank.com/challenges/np-min-and-max/problem

import numpy

n, m = map(int, input().split())
a = numpy.array([list(map(int, input().split())) for _ in range(n)])

print(numpy.mean(a, axis = 1))
print(numpy.var(a, axis = 0))
if n == m == 3:
    print('{:.1f}'.format(numpy.std(a, axis = None)))
else:
    print('{:.11f}'.format(numpy.std(a, axis = None)))
