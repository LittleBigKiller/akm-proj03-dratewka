game.Location = class {
    constructor (desc, filename, color, dirs, items, storyItems) {
        this.desc = desc
        this.filename = filename
        this.color = color
        this.dirs = dirs
        this.items = items
        this.storyItems = storyItems
    }
    gibInfo () {
        console.log('desc: ' + this.desc)
        console.log('filename: ' + this.filename)
        console.log('color: ' + this.color)
    }
}

game.map = [
    [
        new game.Location('You are inside a brimstone mine', '11.gif', 'rgb(235,211,64)', {n: false, e: true, s: false, w: false}, [], []),
        new game.Location('You are at the entrance to the mine', '12.gif', 'rgb(89,93,87)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('A hill', '13.gif', 'rgb(117,237,243)', {n: false, e: true, s: true, w: true}, [31], []),
        new game.Location('Some bushes', '14.gif', 'rgb(202,230,51)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('An old deserted hut', '15.gif', 'rgb(220,204,61)', {n: false, e: true, s: false, w: true}, [27], []),
        new game.Location('The edge of a forest', '16.gif', 'rgb(167,245,63)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('A dark forest', '17.gif', 'rgb(140,253,99)', {n: false, e: false, s: true, w: true}, [14], []),
    ],
    [
        new game.Location('A man nearby making tar', '21.gif', 'rgb(255,190,99)', {n: false, e: true, s: true, w: false}, [], []),
        new game.Location('A timber yard', '22.gif', 'rgb(255,190,99)', {n: false, e: true, s: true, w: true}, [], []),
        new game.Location('You are by a roadside shrine', '23.gif', 'rgb(167,245,63)', {n: true, e: true, s: true, w: true}, [10], []),
        new game.Location('You are by a small chapel', '24.gif', 'rgb(212,229,36)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('You are on a road leading to a wood', '25.gif', 'rgb(167,245,63)', {n: false, e: true, s: true, w: true}, [], []),
        new game.Location('You are in a forest', '26 i 65.gif', 'rgb(167,245,63)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('You are in a deep forest', '27 i 67.gif', 'rgb(140,253,99)', {n: true, e: false, s: false, w: true}, [18], []),
    ],
    [
        new game.Location('You are by the Vistula River', '31.gif', 'rgb(122,232,252)', {n: true, e: true, s: false, w: false}, [], []),
        new game.Location('You are by the Vistula River', '32.gif', 'rgb(140,214,255)', {n: true, e: false, s: false, w: true}, [32], []),
        new game.Location('You are on a bridge over river', '33.gif', 'rgb(108,181,242)', {n: true, e: false, s: true, w: false}, [], []),
        new game.Location('You are by the old tavern', '34.gif', 'rgb(255,189,117)', {n: false, e: true, s: false, w: false}, [], []),
        new game.Location('You are at the town\'s end', '35.gif', 'rgb(255,190,99)', {n: true, e: false, s: true, w: true}, [], []),
        new game.Location('You are in a butcher\'s shop', '36.gif', 'rgb(255,188,102)', {n: false, e: false, s: true, w: false}, [], []),
        new game.Location('You are in a cooper\'s house', '37.gif', 'rgb(255,188,102)', {n: false, e: false, s: true, w: false}, [], []),
    ],
    [
        new game.Location('You are in the Wawel Castle', '41.gif', 'rgb(255,176,141)', {n: false, e: true, s: false, w: false}, [], []),
        new game.Location('You are inside a dragon\'s cave', '42.gif', 'rgb(198,205,193)', {n: false, e: true, s: false, w: true}, [], []),
        new game.Location('A perfect place to set a trap', '43.gif', 'rgb(255,176,141)', {n: true, e: false, s: false, w: true}, [], []),
        new game.Location('You are by the water mill', '44.gif', 'rgb(255,190,99)', {n: false, e: true, s: false, w: false}, [21], []),
        new game.Location('You are at a main crossroad', '45.gif', 'rgb(255,190,99)', {n: true, e: true, s: true, w: true}, [], []),
        new game.Location('You are on a town street', '46.gif', 'rgb(255,190,99)', {n: true, e: true, s: false, w: true}, [], []),
        new game.Location('You are in a frontyard of your house', '47.gif', 'rgb(255,190,99)', {n: true, e: false, s: true, w: true}, [], []),
    ],
    [
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(255,0,0)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(0,255,0)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(0,0,255)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('You are by a swift stream', '54.gif', 'rgb(108,181,242)', {n: false, e: true, s: false, w: false}, [], []),
        new game.Location('You are on a street leading forest', '55.gif', 'rgb(255,190,99)', {n: true, e: false, s: true, w: true}, [33], []),
        new game.Location('You are in a woodcutter\'s backyard', '56.gif', 'rgb(255,190,99)', {n: false, e: false, s: true, w: false}, [], []),
        new game.Location('You are in a shoemaker\'s house', '57.gif', 'rgb(254,194,97)', {n: true, e: false, s: false, w: false}, [], []),
    ],
    [
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(255,255,0)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(0,255,255)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('Congrats, you are out of bounds...... Now what?', 'dead.gif', 'rgb(255,0,255)', {n: false, e: false, s: false, w: false}, [], []),
        new game.Location('You are in a bleak funeral house', '64.gif', 'rgb(254,194,97)', {n: false, e: true, s: false, w: false}, [24], []),
        new game.Location('You are on a path leading to the wood', '26 i 65.gif', 'rgb(255,190,99)', {n: true, e: true, s: false, w: true}, [], []),
        new game.Location('You are at the edge of a forest', '66.gif', 'rgb(255,190,99)', {n: true, e: true, s: false, w: true}, [], []),
        new game.Location('You are in a deep forest', '27 i 67.gif', 'rgb(254,194,97)', {n: false, e: false, s: false, w: true}, [], []),
    ],
]

//#region goFunctions
game.goLoc = function (y, x) {
    if (this.vars.screenId == 3) { 
        game.vars.posY = y
        game.vars.posX = x
        let data = game.map[y-1][x-1]
        game.objects.loc.innerHTML = data.desc
        game.objects.label.innerHTML = 'What now? '
        game.objects.label.className = ''
        if (game.vars.gossip) {
            game.objects.label.innerHTML = 'Press any key'
            game.objects.label.className = 'msgLine'
            game.objects.dir.style.display = 'none'
            game.objects.det.style.display = 'none'
            game.objects.eq.style.display = 'none'

            game.objects.msg.innerHTML = 'The  woodcutter lost  his home key...<br>The butcher likes fruit... The cooper<br>is greedy... Dratewka plans to make a<br>poisoned  bait for the dragon...  The<br>tavern owner is buying food  from the<br>pickers... Making a rag from a bag...'
        } else if (game.vars.vocab) {
            game.objects.label.innerHTML = 'Press any key'
            game.objects.label.className = 'msgLine'
            game.objects.dir.style.display = 'none'
            game.objects.det.style.display = 'none'
            game.objects.eq.style.display = 'none'
            
            game.objects.msg.innerHTML = 'NORTH or N, SOUTH or S<br>WEST or W, EAST or E<br>TAKE (object) or T (object)<br>DROP (object) or D (object)<br>USE (object) or U (object)<br>GOSSIPS or G, VOCABULARY or V'
        } else {
            game.objects.dir.style.display = 'block'
            game.objects.det.style.display = 'block'
            game.objects.eq.style.display = 'block'

            game.objects.pic.src = 'assets/img/' + data.filename
            if (game.goals.dead && y == 4 && x == 3) {
                game.objects.pic.src = 'assets/img/dead.gif'
            }
            game.objects.pic.style.backgroundColor = data.color
            game.objects.comp.style.backgroundColor = '#000000'
            game.objects.msg.innerHTML = ''

            game.objects.det.innerHTML = 'You see '
            if (data.items.length == 0 && data.storyItems.length == 0) {
                game.objects.det.innerHTML += 'nothing. '
            } else {
                for (let i in data.storyItems) {
                    game.objects.det.innerHTML += game.getItemDispname(data.storyItems[i]) + ', '
                }
                for (let i in data.items) {
                    game.objects.det.innerHTML += game.getItemDispname(data.items[i]) + ', '
                }
            }
            game.objects.det.innerHTML = game.objects.det.innerHTML.slice(0, -2) + '.'

            game.objects.eq.innerHTML = 'You have '
            if (game.backpack == null) {
                game.objects.eq.innerHTML += 'nothing.'
            } else {
                game.objects.eq.innerHTML += game.getItemDispname(game.backpack) + '.'
            }

            let dirText = 'You can go '
            let comPath = 'assets/compass/'
            if (data.dirs.n || data.dirs.e || data.dirs.s || data.dirs.w) {
                if (data.dirs.w) {
                    dirText += 'WEST, '
                    comPath += 'W'
                }
                if (data.dirs.e) {
                    dirText += 'EAST, '
                    comPath += 'E'
                }
                if (data.dirs.n) {
                    dirText += 'NORTH, '
                    comPath += 'N'
                }
                if (data.dirs.s) {
                    dirText += 'SOUTH, '
                    comPath += 'S'
                }
                comPath += '.png'
            } else {
                dirText += 'nowhere. '
                comPath = 'assets/compass.png'
            }
            game.objects.comp.src = comPath
            game.objects.dir.innerHTML = dirText.slice(0, -2) + '.'

            let gg = game.goals
            if (gg.legs && gg.trunk && gg.skin && gg.head && gg.solid && gg.liquid && y == 4 && x == 3 && !gg.hasSheep) {
                game.backpack = 37
                gg.hasSheep = true
                data.storyItems = []
                game.goLoc(y, x)

                clearTimeout(game.timeouts.label)
                clearTimeout(game.timeouts.delayed)
                clearTimeout(game.timeouts.delayed1)
                clearTimeout(game.timeouts.label)
                game.objects.label.innerHTML = 'What now? '
                game.objects.label.className = ''
                game.timeouts.label = null
                game.timeouts.delayed = null
                game.timeouts.delayed1 = null
                setTimeout( function() { game.objects.input.value = null }, 1 )

                setTimeout( function() { game.addMessage('Your fake sheep is full of poison and ready to be eaten by the dragon', 3000) }, 10 )
            }
        }
    } else {
        console.error('game.goLoc cannot be called when screenId != 3 '
        + '[screenId = ' + game.vars.screenId + ']')
    }
}

game.goNorth = function () {
    game.vars.posY -= 1
    if (game.vars.posY == 0) {
        game.vars.posY = 1
        console.error('You went OoB, can\'t go more north from (' + game.vars.posX + ', ' + game.vars.posY + ')')
    }
    game.goLoc(game.vars.posY, game.vars.posX)
    //game.whereAmI()
}

game.goSouth = function () {
    game.vars.posY += 1
    if (game.vars.posY > game.map.length) {
        game.vars.posY = game.map.length
        console.error('You went OoB, can\'t go more south from (' + game.vars.posX + ', ' + game.vars.posY + ')')
    }
    game.goLoc(game.vars.posY, game.vars.posX)
    //game.whereAmI()
}

game.goWest = function () {
    game.vars.posX -= 1
    if (game.vars.posX == 0) {
        game.vars.posX = 1
        console.error('You went OoB, can\'t go more west from (' + game.vars.posX + ', ' + game.vars.posY + ')')
    }
    game.goLoc(game.vars.posY, game.vars.posX)
    //game.whereAmI()
}

game.goEast = function () {
    game.vars.posX += 1
    if (game.vars.posX > game.map[0].length) {
        game.vars.posX = game.map[0].length
        console.error('You went OoB, can\'t go more east from (' + game.vars.posX + ', ' + game.vars.posY + ')')
    }
    game.goLoc(game.vars.posY, game.vars.posX)
    //game.whereAmI()
}

game.whereAmI = function () {
    console.log('You are on (' + game.vars.posY + ', ' + game.vars.posX + ') - goLoc format')
}
//#endregion