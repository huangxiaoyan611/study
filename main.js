/*请求地址：http://wthrcdn.etouch.cn/weather_mini
请求方法：get
请求参数：city(城市名)
响应内容：天气信息
1.回车查询
2.查询数据
3.渲染数据
*/
var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList:[]
    },
    methods: {
        searchWeather: function () {
            // console.log('天气查询');//如果控制台出现天气查询这几个字，则说明此时事件绑定成功
            // console.log(this.city);
            //调用接口
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+
            this.city)
            .then(function(response){
                // console.log(response);调用接口失败
                // console.log(response.data.data,forecast);
                that.weatherList=response.data.data.forecast
            },function(err){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }
    },
})