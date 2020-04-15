var a;
new Vue({
    el: '.main',
    data: {
        text: "",
        input: ""
    },
    watch: {
        text(val) {
            if (this.text.lastIndexOf("@") === -1)
                this.input = this.text;
            else
                this.input = this.text.substring(0, this.text.lastIndexOf("@"));

        }
    },
    methods: {
        clickqq: function () {
            this.text = this.input + "@qq.com";
            $(".mail").fadeOut(100);
        },
        click163: function () {
            this.text = this.input + "@163.com";
            $(".mail").fadeOut(100);
        },
        clickgmail: function () {
            this.text = this.input + "@gmail.com";
            $(".mail").fadeOut(100);
        },
        click126: function () {
            this.text = this.input + "@126.com";
            $(".mail").fadeOut(100);
        },
        enter:function () {
            $(".mail").fadeIn(100);
        },
        leave:function () {
            $(".mail").fadeOut(100);
        }
    }
});
