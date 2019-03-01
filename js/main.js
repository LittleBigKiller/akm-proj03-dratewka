game = {
    vars : {
        screenId : 0,
        posY : 4,
        posX : 7,
        gossip : false,
        vocab : false,
    },
    objects : null,
    timeouts : {
        intro : null,
        label : null,
        delayed : null,
        delayed1 : null
    },
    goals : {
        legs : false,
        trunk : false,
        skin : false,
        head : false,
        solid : false,
        liquid : false,
        hasSheep : false,
        dead : false,
    },
    caps : true,
    backpack : null,
    initObjects : function () {
        this.objects = {
            cont: document.getElementById('cont')   
        }
        if (game.vars.screenId == 3) {
            this.objects.loc = document.getElementById('loc')
            this.objects.pic = document.getElementById('pic')
            this.objects.comp = document.getElementById('comp')
            this.objects.dir = document.getElementById('dir')
            this.objects.det = document.getElementById('det')
            this.objects.eq = document.getElementById('eq')
            this.objects.msg = document.getElementById('msg')
            this.objects.label = document.getElementById('label')
            this.objects.input = document.getElementById('input')
            game.goLoc(game.vars.posY, game.vars.posX)
        }
    },
    createScreen : function (id) {
        game.vars.screenId = id
        let cont = document.getElementById('cont')
        let img = new Image ()
        let skip = null
        cont.innerHTML = ''
        switch (id) {
            default:
                console.error('Incorrect screenId [screenId = ' + id + ']')
                game.vars.screenId = 0
            case 0: // Press-Start Screen
                img.src = 'assets/intro/1.jpg'
                img.className = 'introImg'
                cont.append(img)

                skip = document.createElement('div')
                skip.className = 'uiSkipButton'
                skip.innerHTML = 'Start'
                cont.append(skip)
                skip.addEventListener('click', function () {
                    clearTimeout(game.timeouts.intro)
                    game.timeouts.intro = null
                    game.createScreen(3)
                    document.getElementById('intro-audio').pause();
                    document.getElementById('intro-audio').loop = false;
                })
            break
            case 1: // Intro Screen 1
                img.src = 'assets/intro/2.jpg'
                img.className = 'introImg'
                cont.append(img)
                game.timeouts.intro = setTimeout(function () {
                    game.createScreen(2)
                }, 15000)

                skip = document.createElement('div')
                skip.className = 'uiSkipButton'
                skip.innerHTML = 'Skip'
                cont.append(skip)
                skip.addEventListener('click', function () {
                    clearTimeout(game.timeouts.intro)
                    game.timeouts.intro = null
                    game.createScreen(0)
                })
            break
            case 2: // Intro Screen 2
                img.src = 'assets/intro/3.jpg'
                img.className = 'introImg'
                cont.append(img)
                game.timeouts.intro = setTimeout(function () {
                    game.createScreen(0)
                }, 10000)

                skip = document.createElement('div')
                skip.className = 'uiSkipButton'
                skip.innerHTML = 'Skip'
                cont.append(skip)
                skip.addEventListener('click', function () {
                    clearTimeout(game.timeouts.intro)
                    game.timeouts.intro = null
                    game.createScreen(0)
                })
            break
            case 3: // Game Screen
                let loc = document.createElement('div')
                loc.id = 'loc'
                loc.className = 'gameLine'
                loc.innerHTML = 'You are in (unchanged)'
                cont.append(loc)

                let picbox = document.createElement('div')
                picbox.id = 'picbox'
                cont.append(picbox)

                let pic = document.createElement('img')
                pic.id = 'pic'
                picbox.append(pic)

                let comp = document.createElement('img')
                comp.id = 'comp'
                picbox.append(comp)

                let dir = document.createElement('div')
                dir.className = 'gameLine'
                dir.id = 'dir'
                dir.innerHTML = 'You can go (unchanged)'
                cont.append(dir)

                let det = document.createElement('div')
                det.className = 'gameLine'
                det.id = 'det'
                det.innerHTML = 'You can see (unchanged)'
                cont.append(det)

                let eq = document.createElement('div')
                eq.className = 'gameLine'
                eq.id = 'eq'
                eq.innerHTML = 'You have (unchanged)'
                cont.append(eq)

                let msg = document.createElement('div')
                msg.className = 'gameLine msgLine'
                msg.id = 'msg'
                msg.innerHTML = ''
                cont.append(msg)

                let inputbox = document.createElement('div')
                inputbox.id = 'inputbox'
                cont.append(inputbox)

                let label = document.createElement('div')
                label.id = 'label'
                label.className = 'msgLine'
                label.innerHTML = 'What now?'
                inputbox.append(label)

                let input = document.createElement('input')
                input.id = 'input'
                inputbox.append(input)
                input.focus()
                input.addEventListener('keydown', function (e) {
                    if (e.keyCode == 20 || e.keyCode == 16) {
                        game.caps = !game.caps
                    }
                    if (e.keyCode >= 65 && e.keyCode <= 90) {
                        e.preventDefault()
                        if (game.caps) {
                            this.value += String.fromCharCode(e.which).toUpperCase()
                        } else {
                            this.value += String.fromCharCode(e.which).toLowerCase()
                        }
                    }
                    let data = game.map[game.vars.posY - 1][game.vars.posX - 1]
                    if (game.vars.gossip || game.vars.vocab) {
                        game.vars.gossip = false
                        game.vars.vocab = false
                        game.goLoc(game.vars.posY, game.vars.posX)
                        setTimeout( function() { game.objects.input.value = null }, 1 )
                    } else if (game.timeouts.label != null) {
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
                    } else {
                        if (e.key === 'Enter') {
                            let input = this
                            switch (input.value.split(' ')[0]) {
                                case 'N': case 'NORTH':
                                    if (data.dirs.n) {
                                        game.goNorth()
                                        game.addMessage('You went NORTH', 1000)
                                    } else
                                        game.addMessage('You can\'t go that way', 1000)
                                break
                                case 'S': case 'SOUTH':
                                    if (data.dirs.s) {
                                        game.goSouth()
                                        game.addMessage('You went SOUTH', 1000)
                                    } else
                                        game.addMessage('You can\'t go that way', 1000)
                                break
                                case 'E': case 'EAST':
                                    if (data.dirs.e) {
                                        game.goEast()
                                        game.addMessage('You went EAST', 1000)
                                    } else
                                        game.addMessage('You can\'t go that way', 1000)
                                break
                                case 'W': case 'WEST':
                                    if (game.vars.posY == 4 && game.vars.posX == 2) {
                                        if (!game.goals.dead) {
                                            game.addMessage('You can\'t go that way...', 1000)
                                            game.timeouts.delayed = setTimeout(function () {
                                                game.addMessage('The dragon sleeps in a cave!', 1000)
                                                game.timeouts.delayed = null
                                            }, 1001)
                                        } else {
                                            game.goWest()
                                            game.addMessage('You went WEST', 1000)
                                        }
                                    } else {
                                        if (data.dirs.w) {
                                            game.goWest()
                                            game.addMessage('You went WEST', 1000)
                                        } else
                                            game.addMessage('You can\'t go that way', 1000)
                                    }
                                break
                                case 'V': case 'VOCAB':
                                    game.vars.vocab = true
                                    game.goLoc(game.vars.posY, game.vars.posX)
                                break
                                case 'G': case 'GOSSIP':
                                    game.vars.gossip = true
                                    game.goLoc(game.vars.posY, game.vars.posX)
                                break
                                case 'T': case 'TAKE':
                                    if (input.value.split(' ')[1] == null)
                                        game.addMessage('TAKE (object) or T (object)' ,1000)
                                    else {
                                        if (game.backpack != null) {
                                            game.addMessage('You are carrying something already', 1000)
                                        } else {
                                            let here = game.map[game.vars.posY - 1][game.vars.posX - 1]
                                            let isHere = false
                                            let canCarry = false
                                            let id = 0
                                            for (let i in here.items) {
                                                if (game.searchItemsName(input.value.split(' ')[1]) == here.items[i]) {
                                                    isHere = true
                                                    id = i
                                                    canCarry = true
                                                    break
                                                }
                                            }
                                            for (let i in here.storyItems) {
                                                if (game.searchItemsName(input.value.split(' ')[1]) == here.storyItems[i]) {
                                                    isHere = true
                                                    id = i
                                                    canCarry = false
                                                    break
                                                }
                                            }
                                            if (isHere) {
                                                if (canCarry) {
                                                    game.backpack = here.items[id]
                                                    here.items.splice(id, 1)
                                                    game.goLoc(game.vars.posY, game.vars.posX)
                                                    game.addMessage('You took ' + game.getItemDispname(game.backpack), 1000)
                                                } else {
                                                    game.addMessage('You can\'t carry it', 1000)
                                                }
                                            } else {
                                                game.addMessage('There isn\'t anything like that here', 1000)
                                            }
                                        }
                                    }
                                break
                                case 'U': case 'USE':
                                    if (game.backpack == null) {
                                        game.addMessage('You are not carrying anything', 1000)
                                    } else {
                                        let gv = game.vars
                                        let here = game.map[game.vars.posY - 1][game.vars.posX - 1]
                                        if (game.searchItemsId(game.backpack) == input.value.split(' ')[1]) {
                                            if (game.backpack == 10 && gv.posY == 5 && gv.posX == 6) {
                                                game.backpack = 11
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You opened a tool shed and took an axe', 1000)
                                            } else if (game.backpack == 11 && gv.posY == 6 && gv.posX == 7) {
                                                game.backpack = 12
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You cut sticks for sheeplegs', 1000)
                                            } else if (game.backpack == 12 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(13)
                                                game.goals.legs = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You prepared legs for your fake sheep, OK', 1000)
                                            } else if (game.backpack == 14 && gv.posY == 3 && gv.posX == 4) {
                                                game.backpack = 15
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('The tavern owner paid you money', 1000)
                                            } else if (game.backpack == 15 && gv.posY == 3 && gv.posX == 7) {
                                                game.backpack = 16
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('The cooper sold you a new barrel', 1000)
                                            } else if (game.backpack == 16 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(17)
                                                game.goals.trunk = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You made a nice sheeptrunk, OK', 1000)
                                            } else if (game.backpack == 18 && gv.posY == 3 && gv.posX == 6) {
                                                game.backpack = 19
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('The butcher gave you wool', 1000)
                                            } else if (game.backpack == 19 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(20)
                                                game.goals.skin = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You prepared skin for your fake sheep, OK', 1000)
                                            } else if (game.backpack == 21 && gv.posY == 5 && gv.posX == 7) {
                                                game.backpack = 22
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You used your tools to make a rag', 1000)
                                            } else if (game.backpack == 22 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(23)
                                                game.goals.head = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You made a fake sheephead, OK', 1000)
                                            } else if (game.backpack == 24 && gv.posY == 1 && gv.posX == 1) {
                                                game.addMessage('You are digging...', 1000)
                                                game.timeouts.delayed = setTimeout( function () {
                                                    game.addMessage('and digging...', 1000)
                                                    game.timeouts.delayed1 = setTimeout( function () {
                                                        game.backpack = 25
                                                        game.goLoc(gv.posY, gv.posX)
                                                        game.addMessage('That\'s enough sulphur for you', 1000)
                                                    }, 1001 )
                                                }, 1001 )
                                            } else if (game.backpack == 25 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(26)
                                                game.goals.solid = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You prepared a solid poison, OK', 1000)
                                            } else if (game.backpack == 27 && gv.posY == 2 && gv.posX == 1) {
                                                game.backpack = 28
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You got a bucket full of tar', 1000)
                                            } else if (game.backpack == 28 && gv.posY == 4 && gv.posX == 3) {
                                                game.backpack = null
                                                here.storyItems.push(29)
                                                game.goals.liquid = true
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You prepared a liquid poison, OK', 1000)
                                            } else if (game.backpack == 37 && gv.posY == 4 && gv.posX == 3) {
                                                game.addMessage('The dragon noticed your gift...', 2000)
                                                game.timeouts.delayed = setTimeout( function () {
                                                    game.backpack = null
                                                    here.storyItems.push(30)
                                                    game.goals.dead = true
                                                    game.goLoc(gv.posY, gv.posX)
                                                    game.addMessage('The dragon ate your sheep and died!', 1000)
                                                }, 2001 )
                                            } else if (game.backpack == 33 && gv.posY == 4 && gv.posX == 3 && game.goals.dead) {
                                                game.backpack = 34
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You cut a piece of dragon\'s skin', 1000)
                                            } else if (game.backpack == 34 && gv.posY == 5 && gv.posX == 7) {
                                                game.backpack = 35
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('You used your tools to make shoes', 1000)
                                            } else if (game.backpack == 35 && gv.posY == 4 && gv.posX == 1) {
                                                game.backpack = 36
                                                game.goLoc(gv.posY, gv.posX)
                                                game.addMessage('The King is impressed by your shoes', 1000)
                                            } else if (game.backpack == 36) {
                                                game.createScreen(4)
                                            } else {
                                                game.addMessage('Nothing happened', 1000)
                                            }
                                        } else {
                                            game.addMessage('You aren\'t carrying anything like that', 1000)
                                        }
                                    }
                                break
                                case 'D': case 'DROP':
                                    if (input.value.split(' ')[1] == null)
                                        game.addMessage('DROP (object) or D (object)', 1000)
                                    else {
                                        if (game.backpack == null) {
                                            game.addMessage('You are not carrying anything', 1000)
                                        } else {
                                            let here = game.map[game.vars.posY - 1][game.vars.posX - 1]
                                            if (here.items.length < 3) {
                                                if (game.searchItemsId(game.backpack) == input.value.split(' ')[1]) {
                                                    here.items.push(game.backpack)
                                                    game.backpack = null
                                                    game.goLoc(game.vars.posY, game.vars.posX)
                                                    game.addMessage('You dropped ' + game.getItemDispname(here.items[here.items.length - 1]), 1000)
                                                } else {
                                                    game.addMessage('You are not carrying it', 1000)
                                                }
                                            } else {
                                                game.addMessage('You can\'t store any more here', 1000)
                                            }
                                        }
                                    }
                                break
                                default:
                                    game.addMessage('Try another word or V for vocabulary', 1000)
                                break
                            }
                            this.value = null
                        }
                    }
                })
                input.addEventListener('blur', function () {
                    let elem = this
                    setTimeout( function() { elem.focus() }, 1 )
                })
            break
            case 4:
                img.src = 'assets/intro/win.gif'
                img.className = 'winImg'
                cont.append(img)

                winText = document.createElement('div')
                winText.className = 'winText'
                winText.innerHTML = 'YOU WON!'
                cont.append(winText)

                restart = document.createElement('div')
                restart.className = 'uiSkipButton'
                restart.innerHTML = 'Restart'
                cont.append(restart)
                restart.addEventListener('click', function () {
                    location.reload()
                })
            break
        }
        game.initObjects()
    },
    addMessage : function (cont, time) {
        game.objects.label.innerHTML = cont
        game.objects.label.className = 'labelMsg'
        game.timeouts.label = setTimeout(function() {
            game.objects.label.innerHTML = 'What now? '
            game.objects.label.className = ''
            game.timeouts.label = null
        }, time)
    }
}





document.addEventListener('DOMContentLoaded', () => {
    game.createScreen(1)
})