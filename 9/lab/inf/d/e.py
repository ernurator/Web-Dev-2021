input()
a = list(map(int, input().split()))
cnt = 0
sign = lambda x: 1 if x > 0 else -1 if x < 0 else 0
for i, el in enumerate(a[1:]):
    cnt += sign(a[i + 1]) == sign(a[i])

print('YES' if cnt else 'NO')
