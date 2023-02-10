entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

def blefe(entrada):
    nums_clara = set(entrada['Clara']).difference(set(entrada['Marco']))
    nums_marco = set(entrada['Marco']).difference(set(entrada['Clara']))

    points_clara = max(nums_clara) - min(nums_clara)
    points_marco = max(nums_marco) - min(nums_marco)

    if points_clara > points_marco:
        print('Clara ganhou')
    elif points_clara < points_marco:
        print('Marco ganhou')
    else:
        print('Empate')
    
    

if __name__ == '__main__':
    blefe(entrada)
