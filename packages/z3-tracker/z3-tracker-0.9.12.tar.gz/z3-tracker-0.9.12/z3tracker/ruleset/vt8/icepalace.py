'''
Ice Palace
'''

__all__ = 'LOCATIONS',


LOCATIONS = {
    'Ice Palace Entrance (E)': {
        'type': 'entrance_dungeon', 'map': 'dark', 'coord': (523, 573),
        'link': {
            'Ice Palace Exterior': [],
            'Ice Palace Entrance (I)': []}
    },
    'Ice Palace Entrance (I)': {
        'type': 'interior',
        'link': {
            'Ice Palace Entrance (E)': [],
            'Ice Palace Floor 1 Room 1': []}
    },
    'Ice Palace Floor 1 Room 1': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Entrance (I)': [],
            'Ice Palace Floor 1 Room 2': [
                ('item', 'firerod'),
                ('and', [
                    ('item', 'bombos'),
                    ('or', [
                        ('settings', 'swordless'), ('item', 'sword')])])]}
    },
    'Ice Palace Floor 1 Room 2': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 1 Room 1': [],
            'Ice Palace First Bari Key': [],
            'Ice Palace Floor 2': [('smallkey', 'Ice Palace')]}
    },
    'Ice Palace First Bari Key': {
        'type': 'dungeonkey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 1 Room 2': []}
    },
    'Ice Palace Floor 2': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 1 Room 2': [],
            'Ice Palace Compass': [],
            'Ice Palace Floor 3': [('item', 'bombs')]}
    },
    'Ice Palace Compass': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 2': []}
    },
    'Ice Palace Floor 3': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 2': [],
            'Ice Palace Second Bari Key': [],
            'Ice Palace Floor 4': [('smallkey', 'Ice Palace')]}
    },
    'Ice Palace Second Bari Key': {
        'type': 'dungeonkey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 3': []}
    },
    'Ice Palace Floor 4': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 3': [],
            'Ice Palace Lower Ascent': [('smallkey', 'Ice Palace')],
            'Ice Palace Big Ice Floor': [],
            'Ice Palace Freezor Room': []}
    },
    'Ice Palace Lower Ascent': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 4': [],
            'Ice Palace Ascent Key': [],
            'Ice Palace Map': [],
            'Ice Palace Upper Ascent': [('and', [
                ('item', 'hammer'), ('item', 'powerglove'),
                ('item', 'bombs')])]}
    },
    'Ice Palace Ascent Key': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Lower Ascent': []}
    },
    'Ice Palace Map': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Lower Ascent': []}
    },
    'Ice Palace Upper Ascent': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Lower Ascent': [],
            'Ice Palace Upper Hidden Key': [],
            # Generally speaking, the bottom key can be reached without using a
            # small key via. But this is not what we're after, therefore this
            # 'virtual keydoor' is placed here.
            'Ice Palace Big Key': [('smallkey', 'Ice Palace')],
            'Ice Palace Floor 2': []}
    },
    'Ice Palace Upper Hidden Key': {
        'type': 'dungeonkey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Upper Ascent': []}
    },
    'Ice Palace Big Key': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Upper Ascent': []}
    },
    'Ice Palace Big Ice Floor': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Lower Ascent': [('item', 'hookshot')],
            'Ice Palace Bottom Key': [('smallkey', 'Ice Palace')],
            'Ice Palace Boss Puzzle': []},
    },
    'Ice Palace Freezor Room': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Floor 4': [],
            'Ice Palace Freezor Chest': [
                ('item', 'firerod'),
                ('and', [
                    ('item', 'bombos'),
                    ('or', [
                        ('item', 'sword'), ('settings', 'swordless')])])],
            'Ice Palace Treasure Drop': [('item', 'bombs')],
            'Ice Palace Boss Puzzle': []}
    },
    'Ice Palace Freezor Chest': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Freezor Room': []}
    },
    'Ice Palace Treasure Drop': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Treasure': [('bigkey', 'Ice Palace')],
            'Ice Palace Boss Puzzle': []}
    },
    'Ice Palace Treasure': {
        'type': 'dungeonchest_nokey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Treasure Drop': []}
    },
    'Ice Palace Boss Puzzle': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Boss Puzzle Solution': [('bigkey', 'Ice Palace')],
            'Ice Palace Babusu Room': []}
    },
    'Ice Palace Babusu Room': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Boss Puzzle': [],
            'Ice Palace Lower Hidden Key': [],
            'Ice Palace Ice Bridge': [('smallkey', 'Ice Palace')]}
    },
    'Ice Palace Lower Hidden Key': {
        'type': 'dungeonkey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Babusu Room': []}
    },
    'Ice Palace Ice Bridge': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Babusu Room': [],
            # Another 'virtual door'. Ice Palace sure is special.
            'Ice Palace Bottom Key': [('smallkey', 'Ice Palace')]}
    },
    'Ice Palace Bottom Key': {
        'type': 'dungeonchest', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Ice Bridge': [],
            'Ice Palace Big Ice Floor': []}
    },
    'Ice Palace Boss Puzzle Solution': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Above Boss': [('smallkey', 'Ice Palace')],
            'Ice Palace Somaria Puzzle': [
                ('settings', 'placement_basic'), ('item', 'somaria')],
            'Ice Palace Boss Puzzle': []}
    },
    'Ice Palace Somaria Puzzle': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Boss Puzzle Solution': [],
            'Ice Palace Above Boss': []}
    },
    'Ice Palace Above Boss': {
        'type': 'area', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Boss Puzzle Solution': [],
            'Ice Palace Boss': [('and', [
                ('item', 'hammer'), ('item', 'powerglove')])]}
    },
    'Ice Palace Boss': {
        'type': 'dungeonboss', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Boss Item': [('and', [
                ('or', [
                    ('item', 'firerod'),
                    ('and', [
                        ('item', 'bombos'),
                        ('or', [
                            ('settings', 'swordless'), ('item', 'sword')])])]),
                ('or', [
                    ('item', 'sword'), ('item', 'hammer'),
                    ('and', [
                        ('or', [
                            ('item', 'bottle'), ('item', 'halfmagic')]),
                        ('or', [
                            ('item', 'firerod'), ('item', 'bombos')])])]),
                ('or', [
                    ('settings', 'placement_advanced'),
                    ('item', 'mastersword'),
                    ('and', [
                        ('or', [
                            ('item', 'bottle'), ('item', 'halfmagic')]),
                        ('item', 'firerod')])])])]}
    },
    'Ice Palace Boss Item': {
        'type': 'dungeonchest_nokey', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Reward': []}
    },
    'Ice Palace Reward': {
        'type': 'dungeonreward', 'dungeon': 'Ice Palace',
        'link': {
            'Ice Palace Entrance (I)': []}
    },
}
