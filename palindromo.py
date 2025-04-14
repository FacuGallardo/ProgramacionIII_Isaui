def es_palindromo(x):
    x_str = str(x)
    return x_str == x_str[::-1]

print(es_palindromo(-11))  
print(es_palindromo(123))  
