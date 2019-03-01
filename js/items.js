game.Item = class {
    constructor (id, dispname, flag, name) {
        this.id = id
        this.dispname = dispname
        this.flag = flag
        this.name = name
    }
}

game.items = [
    new game.Item (10, 'a KEY', true, 'KEY'),
    new game.Item (11, 'an AXE', true, 'AXE'),
    new game.Item (12, 'STICKS', true, 'STICKS'),
    new game.Item (13, 'sheeplegs', false, 'sheeplegs'),
    new game.Item (14, 'MUSHROOMS', true, 'MUSHROOMS'),
    new game.Item (15, 'MONEY', true, 'MONEY'),
    new game.Item (16, 'a BARREL', true, 'BARREL'),
    new game.Item (17, 'a sheeptrunk', false, 'sheeptrunk'),
    new game.Item (18, 'BERRIES', true, 'BERRIES'),
    new game.Item (19, 'WOOL', true, 'WOOL'),
    new game.Item (20, 'a sheepskin', false, 'sheepskin'),
    new game.Item (21, 'a BAG', true, 'BAG'),
    new game.Item (22, 'a RAG', true, 'RAG'),
    new game.Item (23, 'a sheephead', false, 'sheephead'),
    new game.Item (24, 'a SPADE', true, 'SPADE'),
    new game.Item (25, 'SULPHUR', true, 'SULPHUR'),
    new game.Item (26, 'a solid poison', false, 'solid poison'),
    new game.Item (27, 'a BUCKET', true, 'BUCKET'),
    new game.Item (28, 'TAR', true, 'TAR'),
    new game.Item (29, 'a liquid poison', false, 'liquid poison'),
    new game.Item (30, 'a dead dragon', false, 'a dead dragon'),
    new game.Item (31, 'a STONE', true, 'STONE'),
    new game.Item (32, 'a FISH', true, 'FISH'),
    new game.Item (33, 'a KNIFE', true, 'KNIFE'),
    new game.Item (34, 'a DRAGONSKIN', true, 'DRAGONSKIN'),
    new game.Item (35, 'a dragonskin SHOES', true, 'SHOES'),
    new game.Item (36, 'a PRIZE', true, 'PRIZE'),
    new game.Item (37, 'a SHEEP', true, 'SHEEP'),
]

game.searchItemsName = function(input) {
    let id = -1
    for (let i in game.items) {
        if (game.items[i].name == input) {
            id = game.items[i].id
            break
        }
    }
    return id
}
game.searchItemsId = function(input) {
    let name = 'nothing.'
    for (let i in game.items) {
        if (game.items[i].id == input) {
            name = game.items[i].name
            break
        }
    }
    return name
}
game.getItemDispname = function(input) {
    let name = 'nothing.'
    for (let i in game.items) {
        if (game.items[i].id == input) {
            name = game.items[i].dispname
            break
        }
    }
    return name
}
game.getItemFlag = function(input) {
    let flag = false
    for (let i in game.items) {
        if (game.items[i].id == input) {
            flag = game.items[i].flag
            break
        }
    }
    return flag
}