Vue.component('a-pod', {
    template: '<div> \
                <slot name ="title"><h3>Untitle</h3> \
                <img :src="imgSrc" :title="imgTitle"> \
                <slot name="caption"><p>unknown data</p></slot>\
                </div>', 
    props: ['date'],
    data: function () {
        return {
        imgSrc: '',
        imgTitle: ''
        };
    },
    created: function () {
        this.fetchApod();
    },
    methods: {
        fetchApod: function () {
            var apiKey = 'lkgI9to0hRizfzk4xTAxtNTTFkkA4Mtq7y1yW5me';
            var url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;
            if(this.date){
                url += '&date=' + this.date;
            }
            var self = this;
            axios.get(url)
                .then(function (res) {
                    self.imgSrc = res.data.url;
                    self.imgTitle = res.data.title;
                });
        }
    }     
});


var vm = new Vue({
    el: '#app',
    
});        