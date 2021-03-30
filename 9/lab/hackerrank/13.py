# https://www.hackerrank.com/challenges/np-sum-and-prod/problem

import numpy

n, m = map(int, input().split())
a = numpy.array([list(map(int, input().split())) for _ in range(n)])

print(numpy.prod(numpy.sum(a, axis = 0)))
