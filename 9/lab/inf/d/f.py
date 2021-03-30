n = int(input())
a = [2 ** 32] + list(map(int, input().split())) + [2**32]
cnt = 0

for i in range(1, n + 1):
    cnt += a[i - 1] < a[i] and a[i] > a[i + 1]

print(cnt)
