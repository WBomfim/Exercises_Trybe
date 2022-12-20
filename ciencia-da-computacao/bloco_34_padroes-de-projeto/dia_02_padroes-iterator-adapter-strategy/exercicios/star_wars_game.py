class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


# Implementado o adapter para que o Jedi possa ser usado no jogo
# com o mesmo método de ataque
class Adapter():
    def __init__(self, character):
        self.character = character

    def attack(self):
        return self.character.attackWithSaber()


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Adapter(Jedi(20))).fight_enemy()
