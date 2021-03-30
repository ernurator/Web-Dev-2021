input()
a = list(map(int, input().split()))
cnt = 0

for i, el in enumerate(a[1:]):
    cnt += a[i + 1] > a[i]

print(cnt)
