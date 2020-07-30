window.onload = function () {
    home = document.getElementById('home')
    SelfIntro = document.getElementById('SelfIntro')
    Education = document.getElementById('Education')
    MyWork = document.getElementById('MyWork')
    Experience = document.getElementById('Experience')
    Contact = document.getElementById('Contact')
    titles = document.getElementsByTagName('h3')
    nav = document.getElementById('nav')
    navItems = nav.getElementsByTagName('a')
    //SelfIntro Element
    SelfText = SelfIntro.getElementsByTagName('p')[0];
    SelfImg = SelfIntro.getElementsByTagName('img')[0];

    //Contact Element
    ContactLi = Contact.getElementsByTagName('li');

    document.onscroll = function () {
        position = document.documentElement.scrollTop
        setBackColor(navlist)
        if (position >=-10 && position < 500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==0) {
                    navItems[i].style.color = '#65bff4'
                    navlist[i].style.backgroundColor = '#65bff4'
                    move2(navlist[i],'top',0,1)
                }
                else {
                    navItems[i].style.color = '#999'
                    move2(navlist[i],'top',10,1)
                }
            }
        }
        else if  (position >=500 && position <1500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==1) {
                    navItems[i].style.color = '#65bff4'
                    navlist[1].style.backgroundColor = '#65bff4'
                    move2(navlist[i],'top',0,1)
                }
                else {
                    navItems[i].style.color = '#999'
                    move2(navlist[i],'top',10,1)
                }
            }
            if (position>=750 && position <=1000) {
                SelfImg.style.display = 'block'
                move2(SelfImg,'left',0,5)
                SelfText.style.display = 'block'
                move2(SelfText,'top',550,5)
            }
            else if (position >=500 && position <=700) {
                SelfImg.style.display = 'block'
                move2(SelfImg,'left',0,5)
            }
        }
        else if (position >= 1500 && position < 2500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==2) {
                    move2(navlist[i],'top',0,1)
                    navItems[i].style.color = '#65bff4'
                    navlist[2].style.backgroundColor = '#65bff4'         
                }
                else {
                    move2(navlist[i],'top',10,1)
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if  (position >=2500 && position < 3200) {
            for (var i=0;i<navItems.length;i++) {
                if (i==3) {
                    move2(navlist[i],'top',0,1)
                    navItems[i].style.color = '#65bff4'
                    navlist[3].style.backgroundColor = '#65bff4'
                }
                else  {
                    move2(navlist[i],'top',10,1)
                    navItems[i].style.color = '#999'
                }
            }
            if (position>2600 && position<=3200) {
                WorkNav.style.display = 'block';
                move2(WorkNav,'margin-left',0,10)
                works.style.display = 'block';
                move2(works,'left',0,10)
            }
            else if (position >=2500 && position <=2600) {
                WorkNav.style.display = 'block';
                move2(WorkNav,'margin-left',0,10)
            }

        }
        else if  (position >= 3200 && position < 4200) {
            for (var i=0;i<navItems.length;i++) {
                if (i==4) {
                    move2(navlist[i],'top',0,1)
                    navItems[i].style.color = '#65bff4';
                    navlist[4].style.backgroundColor = '#65bff4';
                }
                else  {
                    move2(navlist[i],'top',10,1)
                    navItems[i].style.color = '#999'
                }
            }
            if (position >=3460 && position <=3590) {
                move2(ContactLi[0],'left',0,5)
                move2(ContactLi[1],'left',0,5)
                move2(ContactLi[2],'left',0,5)
            }
            else if (position >=3330 && position <=3460) {
                move2(ContactLi[0],'left',0,5)
                move2(ContactLi[1],'left',0,5)
                
            }
            else if (position >=3200 && position <=3330) {
                move2(ContactLi[0],'left',0,5)
            }


        }
    }
    function setBackColor(obj) {
        for (var i = 0;i<obj.length;i++) {
            obj[i].style.backgroundColor = '#999'
        }
    }
    function setColor(obj) {
        for (var i = 0;i<obj.length;i++) {
            obj[i].style.color = '#999'
        }
    }
    //nav page
    move(nav,'marginLeft',0,4)
    navlist = document.getElementsByClassName('underline')
    for (var i=0;i<navItems.length;i++) {
        navItems[i].num = i;
        navItems[i].onmouseover = function() {
            move2(navlist[this.num],'top',0,1)
            navlist[this.num].style.backgroundColor = '#65bff4'
        }
        navItems[i].onmouseout = function() {
            move2(navlist[this.num],'top',10,1)
            navlist[this.num].style.backgroundColor = '#999'
        }
        navItems[i].onclick = function() {
            this.style.color = '#65bff4'
            scrollSlowly(20,10,1000*this.num)
        }
    }
    //Home Page
    focusImg = document.getElementById('focusImg')
    focusTxt = document.getElementById('focusTxt')
    move(focusImg,'left',0,2)
    move(focusTxt,'left',0,2)

    //MyWork Page

    //MyWork Element
    WorkNav = document.getElementById('workNav');
    WorkNavList = WorkNav.getElementsByTagName('li');
    WorkNavA = WorkNav.getElementsByTagName('a');
    works = document.getElementById('works');
    works1 = document.getElementById('works1');
    works2 = document.getElementById('works2');
    works3 = document.getElementById('works3');

    ems = document.getElementsByTagName("em")
    work1 = document.getElementById("work1")
    work2 = document.getElementById("work2")
    work1.onmouseover = function () {
        move(ems[0],'top',0,1)
        move(ems[1],'bottom',0,1)
    }
    work1.onmouseout = function () {
        move(ems[0],'top',-20,1)
        move(ems[1],'bottom',-20,1)
    }
    work2.onmouseover = function () {
        move(ems[2],'top',0,1)
        move(ems[3],'bottom',0,1)
    }
    work2.onmouseout = function () {
        move(ems[2],'top',-20,1)
        move(ems[3],'bottom',-20,1)
    }
    for(var i=0;i<WorkNavList.length;i++) {
        WorkNavList[i].num = i;
        WorkNavList[i].onmouseover = function () {
            setColor(WorkNavA)
            move2(works,'left',-800*this.num,20)
            WorkNavA[this.num].style.color = '#65bff4';
        }
    }
}
//get html element css style
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
        return obj.currentStyle[name];
    }
}        
//move to one direction and certain value
function move(obj, attr, value, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > value) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if (Math.abs(newValue-value)<=1) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style[attr] = newValue + "px";
    }, 15)
}
//move to a new target
function move2(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if ((newValue > target && speed > 0) || (newValue < target && speed < 0)) {
            newValue = target;
        };
        if (newValue === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style[attr] = newValue + "px";
    }, 15)
}
//make element scroll slowly
function scrollSlowly (speed,sec,target) {
    clearInterval(timer);
    var distance = window.pageYOffset
    speed = distance <= target ? speed : -speed;
    var timer = setInterval(function(){
        window.scrollBy(0,speed)
    },sec)

    window.onscroll = function() {
        var distance1 = window.pageYOffset;
        var y = distance1 - target;
        if (y>=-20 && y<=20) {
            clearInterval(timer);
        }
    }
}
