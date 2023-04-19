/*歌曲搜索接口
请求地址：https://autumnfish.cn/search
请求方法：get
请求参数：keywords(查询关键字)
响应内容：歌曲搜索结果
1.回车查询
2.查询数据
3.渲染数据
*/
var app=new Vue({
    el:"#player",
    data:{
        //查询关键字
        query:"",
//歌曲数组
        musicList:[],
        musicUrl:""
    },
    methods:{
        searchMusic:function(){
            var that=this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(response){
                // console.log(response);
                that.musicList=response.data.result.songs;
            },function(err){});
        },
        playMusic:function(musicId){
            // console.log(musicId);
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(response){
                console.log(respnse);
            },function(err){})
        }
    },
})