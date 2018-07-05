class Socks {
    constructor(el){
        if (el.indexOf('.') > -1)
        {
            this.elements = document.getElementsByClassName(el.replace('.',""));
        }
        else if (el.indexOf('#') > -1)
        {
            this.elements = [document.getElementById(el.replace('#',""))];
        }
        else
        {
            this.elements = document;
        }
    }
    addClass(cl){
        var count = 0;
        while (count  < this.elements.length){
            if (this.elements[count].className)
            {
                this.elements[count].className += " " + cl;
            }
            else
            {
                this.elements[count] = cl;
            }
            count++;
        }
    }
}

function socks(el)
{
    return new Socks(el);
}