v = int(input())
t = int(input())
distance = v * t
result = (distance % 109 + 109) % 109
print(result)
