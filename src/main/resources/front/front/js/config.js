
var projectName = '古典舞在线交流平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '服饰',
	url: './pages/fushi/list.html'
}, 
{
	name: '课程',
	url: './pages/kecheng/list.html'
}, 
{
	name: '视频',
	url: './pages/shipin/list.html'
}, 
{
	name: '舞蹈交流',
	url: './pages/wudaojiaoliu/list.html'
}, 

{
	name: '论坛交流',
	url: './pages/forum/list.html'
}, 
{
	name: '舞蹈资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootts2gs/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员用户","menuJump":"列表","tableName":"huiyuanyonghu"}],"menu":"会员用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"服饰","menuJump":"列表","tableName":"fushi"}],"menu":"服饰管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"视频","menuJump":"列表","tableName":"shipin"}],"menu":"视频管理"},{"child":[{"buttons":["查看","修改","删除","查看评论","审核","新增"],"menu":"舞蹈交流","menuJump":"列表","tableName":"wudaojiaoliu"}],"menu":"舞蹈交流管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"服饰类型","menuJump":"列表","tableName":"fushileixing"}],"menu":"服饰类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"视频分类","menuJump":"列表","tableName":"shipinfenlei"}],"menu":"视频分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程类型","menuJump":"列表","tableName":"kechengleixing"}],"menu":"课程类型管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"在线招生","menuJump":"列表","tableName":"zaixianzhaosheng"}],"menu":"在线招生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"舞蹈资讯","tableName":"news"},{"buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","修改","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","修改","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看","修改","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","修改","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","修改","删除"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"服饰列表","menuJump":"列表","tableName":"fushi"}],"menu":"服饰模块"},{"child":[{"buttons":["查看","查看评论","在线招生"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"视频列表","menuJump":"列表","tableName":"shipin"}],"menu":"视频模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"舞蹈交流列表","menuJump":"列表","tableName":"wudaojiaoliu"}],"menu":"舞蹈交流模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"服饰","menuJump":"列表","tableName":"fushi"}],"menu":"服饰管理"},{"child":[{"buttons":["查看","查看评论","在线招生"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看评论","查看","导出"],"menu":"视频","menuJump":"列表","tableName":"shipin"}],"menu":"视频管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"舞蹈交流","menuJump":"列表","tableName":"wudaojiaoliu"}],"menu":"舞蹈交流管理"},{"child":[{"buttons":["查看"],"menu":"在线招生","menuJump":"列表","tableName":"zaixianzhaosheng"}],"menu":"在线招生管理"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"服饰列表","menuJump":"列表","tableName":"fushi"}],"menu":"服饰模块"},{"child":[{"buttons":["查看","查看评论","在线招生"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"视频列表","menuJump":"列表","tableName":"shipin"}],"menu":"视频模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"舞蹈交流列表","menuJump":"列表","tableName":"wudaojiaoliu"}],"menu":"舞蹈交流模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"会员用户","tableName":"huiyuanyonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
