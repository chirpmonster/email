var a;
new Vue({
    el: '.main',
    data: {
        text: "",
        input: ""
    },
    watch: {
        text(val) {
            // if (this.text.substring(this.text.length - 1, this.text.length) == "@")
            //     this.input = this.text.substring(0, this.text.length - 1);
            // else if (this.text.substring(this.text.length - 2, this.text.length) == "@q")
            //     this.input = this.text.substring(0, this.text.length - 2);
            // else if (this.text.substring(this.text.length - 3, this.text.length) == "@qq")
            //     this.input = this.text.substring(0, this.text.length - 3);
            // else if (this.text.substring(this.text.length - 4, this.text.length) == "@qq.")
            //     this.input = this.text.substring(0, this.text.length - 4);
            // else if (this.text.substring(this.text.length - 5, this.text.length) == "@qq.c")
            //     this.input = this.text.substring(0, this.text.length - 5);
            // else if (this.text.substring(this.text.length - 6, this.text.length) == "@qq.co")
            //     this.input = this.text.substring(0, this.text.length - 6);
            // else if (this.text.substring(this.text.length - 7, this.text.length) == "@qq.com")
            //     this.input = this.text.substring(0, this.text.length - 7);
            // else if (this.text.substring(this.text.length - 2, this.text.length) == "@1")
            //     this.input = this.text.substring(0, this.text.length - 2);
            // else if (this.text.substring(this.text.length - 3, this.text.length) == "@16")
            //     this.input = this.text.substring(0, this.text.length - 3);
            // else if (this.text.substring(this.text.length - 4, this.text.length) == "@163")
            //     this.input = this.text.substring(0, this.text.length - 4);
            // else if (this.text.substring(this.text.length - 5, this.text.length) == "@163.")
            //     this.input = this.text.substring(0, this.text.length - 5);
            // else if (this.text.substring(this.text.length - 6, this.text.length) == "@163.c")
            //     this.input = this.text.substring(0, this.text.length - 6);
            // else if (this.text.substring(this.text.length - 7, this.text.length) == "@163.co")
            //     this.input = this.text.substring(0, this.text.length - 7);
            // else if (this.text.substring(this.text.length - 7, this.text.length) == "@163.com")
            //     this.input = this.text.substring(0, this.text.length - 8);
            // else if (this.text.substring(this.text.length - 2, this.text.length) == "@g")
            //     this.input = this.text.substring(0, this.text.length - 2);
            // else if (this.text.substring(this.text.length - 3, this.text.length) == "@gm")
            //     this.input = this.text.substring(0, this.text.length - 3);
            // else if (this.text.substring(this.text.length - 4, this.text.length) == "@gma")
            //     this.input = this.text.substring(0, this.text.length - 4);
            // else if (this.text.substring(this.text.length - 5, this.text.length) == "@gmai")
            //     this.input = this.text.substring(0, this.text.length - 5);
            // else if (this.text.substring(this.text.length - 6, this.text.length) == "@gmail")
            //     this.input = this.text.substring(0, this.text.length - 6);
            // else if (this.text.substring(this.text.length - 7, this.text.length) == "@gmail.")
            //     this.input = this.text.substring(0, this.text.length - 7);
            // else if (this.text.substring(this.text.length - 8, this.text.length) == "@gmail.c")
            //     this.input = this.text.substring(0, this.text.length - 8);
            // else if (this.text.substring(this.text.length -9, this.text.length) == "@gmail.co")
            //     this.input = this.text.substring(0, this.text.length - 9);
            // else if (this.text.substring(this.text.length - 10, this.text.length) == "@gmail.com")
            //     this.input = this.text.substring(0, this.text.length - 10);
            // else if (this.text.substring(this.text.length - 2, this.text.length) == "@1")
            //     this.input = this.text.substring(0, this.text.length - 2);
            // else if (this.text.substring(this.text.length - 3, this.text.length) == "@12")
            //     this.input = this.text.substring(0, this.text.length - 3);
            // else if (this.text.substring(this.text.length - 4, this.text.length) == "@126")
            //     this.input = this.text.substring(0, this.text.length - 4);
            // else if (this.text.substring(this.text.length - 5, this.text.length) == "@126.")
            //     this.input = this.text.substring(0, this.text.length - 5);
            // else if (this.text.substring(this.text.length - 6, this.text.length) == "@126.c")
            //     this.input = this.text.substring(0, this.text.length - 6);
            // else if (this.text.substring(this.text.length - 7, this.text.length) == "@126.co")
            //     this.input = this.text.substring(0, this.text.length - 7);
            // else if (this.text.substring(this.text.length - 8, this.text.length) == "@126.com")
            //     this.input = this.text.substring(0, this.text.length - 8);
            // else
            if (this.text.lastIndexOf("@") === -1)
                this.input = this.text;
            else
                this.input = this.text.substring(0, this.text.lastIndexOf("@"));

        }
    },
    methods: {
        clickqq: function () {
            this.text = this.input + "@qq.com";
        },
        click163: function () {
            this.text = this.input + "@163.com";
        },
        clickgmail: function () {
            this.text = this.input + "@gmail.com";
        },
        click126: function () {
            this.text = this.input + "@126.com";
        }
    }
});
