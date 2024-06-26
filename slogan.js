document.addEventListener('DOMContentLoaded', function () {
  const sentences = [
    "一个人的价值, 在于他贡献了什么, 而不在于他获得了什么!	@爱因斯坦",
    "你若喜爱你自己的价值, 你就得给世界创造价值!	@歌德",
    "我从来不把安逸和享乐当作生活目的; 	对这种伦理基础, 我称之为[猪栏的理想]	@爱因斯坦",
    "未经反思自省的人生不值得去过	The unexamined life is not worth living.	@苏格拉底 (哲学之父)",
    "大多数人在20到30岁就已经过完自己的一生; 	一过了这个年龄段, 他们就变成自己的影子, 以后的生命只是在不断重复自己...	@<约翰.克里斯朵夫>罗曼.罗兰 (作家 诺贝尔奖得主)",
    "活着, 如同生命最后一天般活着; 	学习, 如同永远活着般学习!	@圣雄甘地 (印度国父)",
    "人所面对的绝境, 在很多情况下都不是生存的绝境, 而是[精神]的绝境!",
    "世上只有一种英雄主义 -- 就是在认清生活的真相之后依然热爱生活	@罗曼.罗兰 (作家 诺贝尔奖得主)",
    "人的一切痛苦都是源于对自己无能的愤怒	@王小波 (作家)",
    "Stay hungry. Stay foolish.	@乔布斯引自<全球概览>",
    "人生中最大的两个财富是: 你的[才华]和你的[时间];	才华越来越多而时间越来越少;我们的一生就是用时间来换取才华;	",
    "拥有追随自己内心与直觉的勇气 -- 你的内心与直觉多少已经知道你真正想要成为什么样的人	Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.	@乔布斯",
    "善良比聪明重要 -- 聪明是一种天赋, 而善良是一种选择	Cleverness is a gift, kindness is a choice.	@贝佐斯 (亚马逊公司创始人)",
    "我每天都自问: '如果今天是我生命的最后一天, 我还会做今天要做的事情吗?'	如果连续很多天得到[否定]的回答, 那我就需要作出一些改变了;	@乔布斯	",
    "预测未来最好的方法就是去创造未来	@林肯 (美国前总统)",
    "没有人可以回到过去, 重新开始; 	但谁都可以从现在开始, 书写一个全然不同的结局!",
    "人生最大的痛苦不是失败	而是没有经历自己想要经历的一切",
    "许多人所谓的成熟, 不过是被习俗磨去了棱角, 变得世故而实际了; 那不是成熟, 而是精神的早衰和个性的夭亡!	真正的成熟, 应当是独特个性的形成, 真实自我的发现, 精神上的结果和丰收;	@<在世纪的转折点上>尼采 (哲学家 思想家)",
    "这辈子没法做太多的事情, 所以每一件都要做到精彩绝伦!	@乔布斯",
    "你的时间有限, 所以不要浪费时间去重复别人的生活!	Your time is limited, so don`t waste it living someone else`s life.	@乔布斯	",
    "每个人出生的时候都是原创	可悲的是很多人渐渐都成了盗版",
    "时间会刺破青春的华丽精致 	会把平行线刻上美人的额角 	会吃掉稀世之珍和天生丽质 	什么都逃不过它横扫的镰刀	@莎士比亚",
    "死亡是生命中最好的发明 -- 它把旧的清除以便给新的让路	@乔布斯",
    "一年之计 莫如树谷	十年之计 莫如树木	终身之计 莫如树人	@<管子>	",
    "非淡泊无以明志	非宁静无以致远	@<淮南子>刘安",
    "你若不想做, 总能找到借口	你若想做, 总会找到方法	@阿拉伯谚语",
    "想得到你从未拥有过的东西	就必须做你从未做过的事情",
    "你若失去了财产, 你只失去了一点儿; 	你若失去了荣誉, 你就失去了许多; 	你若失去了勇气, 你就把一切都失去了!	@歌德",
    "那不能杀死我的, 使我更强!	What does not kill me, makes me stronger.	@尼采 (哲学家 思想家)	",
    "对爱情的渴望, 对知识的追求, 对人类苦难不可遏制的同情心, 这三种纯洁而无比强烈的激情支配着我的一生;	Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.	@<我为什么而活着>罗素 (哲学家 数学家 思想家)",
    "围在城里的人想逃出来, 城外的人想冲进去; 	对婚姻也罢, 职业也罢, 人生的愿望大都如此!	@<围城>钱钟书",
    "授人以鱼不如授人以渔!	授人以鱼只救一时之急, 授人以渔则可解一生之需!	(注: 这也是俺博客的宗旨)",
    "一个人的价值, 在于他贡献了什么, 而不在于他获得了什么!	@爱因斯坦",
    "你若喜爱你自己的价值, 你就得给世界创造价值!	@歌德",
    "我从来不把安逸和享乐当作生活目的; 	对这种伦理基础, 我称之为[猪栏的理想]	@爱因斯坦",
    "未经反思自省的人生不值得去过	The unexamined life is not worth living.	@苏格拉底 (哲学之父)",
    "大多数人在20到30岁就已经过完自己的一生; 	一过了这个年龄段, 他们就变成自己的影子, 以后的生命只是在不断重复自己...	@<约翰.克里斯朵夫>罗曼.罗兰 (作家 诺贝尔奖得主)	",
    "活着, 如同生命最后一天般活着; 	学习, 如同永远活着般学习!	@圣雄甘地 (印度国父)",
    "人所面对的绝境, 在很多情况下都不是生存的绝境, 而是[精神]的绝境!",
    "世上只有一种英雄主义 -- 就是在认清生活的真相之后依然热爱生活	@罗曼.罗兰 (作家 诺贝尔奖得主)",
    "人的一切痛苦都是源于对自己无能的愤怒	@王小波 (作家)",
    "Stay hungry. Stay foolish.	@乔布斯引自<全球概览>	",
    "人生中最大的两个财富是: 你的[才华]和你的[时间];	才华越来越多而时间越来越少;我们的一生就是用时间来换取才华;",
    "拥有追随自己内心与直觉的勇气 -- 你的内心与直觉多少已经知道你真正想要成为什么样的人	Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.	@乔布斯",
    "善良比聪明重要 -- 聪明是一种天赋, 而善良是一种选择	Cleverness is a gift, kindness is a choice.	@贝佐斯 (亚马逊公司创始人)",
    "我每天都自问: '如果今天是我生命的最后一天, 我还会做今天要做的事情吗?'	如果连续很多天得到[否定]的回答, 那我就需要作出一些改变了;	@乔布斯",
    "预测未来最好的方法就是去创造未来	@林肯 (美国前总统)",
    "没有人可以回到过去, 重新开始; 	但谁都可以从现在开始, 书写一个全然不同的结局!",
    "人生最大的痛苦不是失败	而是没有经历自己想要经历的一切",
    "许多人所谓的成熟, 不过是被习俗磨去了棱角, 变得世故而实际了; 那不是成熟, 而是精神的早衰和个性的夭亡!	真正的成熟, 应当是独特个性的形成, 真实自我的发现, 精神上的结果和丰收;	@<在世纪的转折点上>尼采 (哲学家 思想家)",
    "这辈子没法做太多的事情, 所以每一件都要做到精彩绝伦!	@乔布斯",
    "你的时间有限, 所以不要浪费时间去重复别人的生活!	Your time is limited, so don`t waste it living someone else`s life.	@乔布斯",
    "每个人出生的时候都是原创	可悲的是很多人渐渐都成了盗版",
    "时间会刺破青春的华丽精致 	会把平行线刻上美人的额角 	会吃掉稀世之珍和天生丽质 	什么都逃不过它横扫的镰刀	@莎士比亚",
    "死亡是生命中最好的发明 -- 它把旧的清除以便给新的让路	@乔布斯",
    "一年之计 莫如树谷	十年之计 莫如树木	终身之计 莫如树人	@<管子>	",
    "非淡泊无以明志	非宁静无以致远	@<淮南子>刘安",
    "你若不想做, 总能找到借口	你若想做, 总会找到方法	@阿拉伯谚语",
    "想得到你从未拥有过的东西	就必须做你从未做过的事情",
    "你若失去了财产, 你只失去了一点儿; 	你若失去了荣誉, 你就失去了许多; 	你若失去了勇气, 你就把一切都失去了!	@歌德",
    "那不能杀死我的, 使我更强!	What does not kill me, makes me stronger.	@尼采 (哲学家 思想家)",
    "对爱情的渴望, 对知识的追求, 对人类苦难不可遏制的同情心, 这三种纯洁而无比强烈的激情支配着我的一生;	Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.	@<我为什么而活着>罗素 (哲学家 数学家 思想家)",
    "围在城里的人想逃出来, 城外的人想冲进去; 	对婚姻也罢, 职业也罢, 人生的愿望大都如此!	@<围城>钱钟书",
    "授人以鱼不如授人以渔!	授人以鱼只救一时之急, 授人以渔则可解一生之需!	(注: 这也是俺博客的宗旨)",
    "兴趣是最好的老师	@爱因斯坦",
    "知识上的投资总能得到最好的回报	@富兰克林 (美国开国元勋 物理学家 作家)",
    "学习不是填满水桶, 而是点燃火焰!	Education is not the filling of a pail but the lighting of a fire.	@叶芝 (爱尔兰诗人)",
    "我唯一能确定的就是自己的[无知]	I know nothing except the fact of my ignorance.	@苏格拉底 (哲学之父)",
    "真正的无知[不是]知识的贫乏	而是拒绝获取知识	@波普尔 (哲学家 思想家)",
    "读书是在别人思想的帮助下建立自己的思想	@尼古拉.鲁巴金 (作家)",
    "不要盲目地崇拜任何权威 -- 因为你总能找到相反的权威	@罗素 (哲学家 数学家 思想家)",
    "不必为自己的独特看法而害怕	因为我们现在所接受的常识都曾是独特看法	@<自由思想的十诫>罗素 (哲学家 数学家 思想家)",
    "仅仅凭借信仰跟从就等于[盲从]	To follow by faith alone is to follow blindly.	@富兰克林 (美国开国元勋 物理学家 作家)",
    "想象力比知识更重要!	因为知识是有限的, 而想象力概括着世界的一切, 推动着进步, 并且是知识进化的源泉	@爱因斯坦",
    "要打破人的偏见比崩解一个原子还难!	@爱因斯坦",
    "大多数人宁愿相信[美丽的谎言]	而不愿意直面[丑陋的真相]",
    "你要按你所想的去生活	否则你迟早会按你所生活的去想",
    "知人者智 自知者明	胜人者有力 自胜者强	@<道德经>",
    "大多数人宁愿死去也不愿思考	事实上他们也确实到死都没有思考	@罗素 (哲学家 数学家 思想家)",
    "对知识分子而言, 成为思维的精英比成为道德的精英更重要!	@王小波 (作家)",
    "只有两样东西可能是无限的 -- 宇宙的大小和人类的愚蠢	不过, 对于前者我不太确定 :-)	@爱因斯坦",
    "没有银弹(万能药)	NO silver bullet	@<人月神话>Fred Brooks (图灵奖得主)",
    "编程的艺术就是处理复杂性的艺术	@Edsger Dijkstra (图灵奖得主)",

    "简单即是美	Simple is beautiful",
    "简单是可靠的先决条件	Simplicity is prerequisite for reliability.	@Edsger Dijkstra (图灵奖得主)",
    "优秀软件的作用是让复杂的东西看起来简单	@Grady Booch (UML 创始人之一)",
    "设计软件有两种方法: 一种是简单到极致而明显没有缺陷; 另一种是复杂到极致以至于没有明显的缺陷;前者要难得多!	There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.	@C.A.R.Hoare (图灵奖得主 算法大牛)",

    "优秀的设计在不断地演化	糟糕的设计在不断地打补丁",
    "最纯粹&#12289;最抽象的设计难题就是设计桥梁 -- 你面对的问题是: 如何用最少的材料, 跨越给定的距离;	@保罗.格雷汉姆 (顶级黑客 硅谷创业教父)",
    "从不同的层次审视你的设计",
    "在软件[可重用]之前先得[可用]	@Ralph Johnson (设计模式四人帮之一)",
    "软件设计就像做爱, 一次犯错, 你要用余下的一生来维护 :-)	@Michael Sinz",
    "更好的工具未必能做出更好的设计",

    "好的程序员是那种过单行道马路都要往两边看的人	@Doug Linder",
    "好的程序代码本身就是最好的文档	@<代码大全>Steve McConnell",
    "程序必须首先让人类可以理解 然后顺便让机器能执行	@<SICP>",
    "假如程序代码和注释不一致, 那么很可能两者都是错的!	When code and comments disagree, both are probably wrong.	@Norm Schryer (贝尔实验室科学家)",
    "你写下的任何代码, 六个月后再去看, 都像是别人写的 :-)	@Tom Cargill (贝尔实验室科学家)",
    "程序员花90%的时间完成90%的代码量, 	但是剩下的10%代码要再花费90%的开发时间 (90-90法则)	@Tom Cargill (贝尔实验室科学家)",

    "不能影响你编程观点的语言, 不值得你去学!	@Alan Perlis (第一个图灵奖得主)",
    "世界上只有两种编程语言 -- 要么充满了抱怨; 要么没人使用 :-)	@Bjarne Stroustrup (C++ 之父)",
    "没有哪种编程语言能阻止程序员写出糟糕的代码, 不管这种语言的结构有多么好!	@Larry Flon",
    "C 语言诡异离奇, 缺陷重重, 但却获得了巨大的成功 :-)	@Dennis Ritchie (C 语言之父 Unix 之父)",
    "(相对 C 而言)在 C++ 里, 想搬起石头砸自己的脚更为困难了; 	不过一旦你真这么做了, 整条腿都得报销 :-)	@Bjarne Stroustrup (C++之父)",
    "Java 与 JavaScript 的关系, 如同雷锋与雷峰塔的关系 :-)",

    "在理论上, 理论和实践是没有差异的; 但在实践中, 是有差异的!	In theory, there is no difference between theory and practice. But in practice, there is.	@Snepscheut",
    "在进度落后的项目中增加人手只会导致进度更加落后	@<人月神话>Fred Brooks (图灵奖得主)	",
    "用代码行数测算软件开发进度 如同 按重量测算飞机的制造进度	@比尔.盖茨",
    "在水上行走和按需求文档开发软件都很容易 -- 前提是它们都处于冻结状态	@Edward V Berard",
    "乐观主义是软件开发的职业病	用户反馈则是其治疗方法	@Kent Beck (Extreme Programming 之父)",
    "软件开发是一场程序员和上帝的竞赛: 	程序员要开发出更强更好&#12289;连傻瓜都会用的软件; 而上帝在努力创造更傻的傻瓜;	到目前为止, 一直是上帝赢 :-)	@Rick Cook",

    "如果建筑工人像程序员写软件那样盖房子, 那第一只飞来的啄木鸟就能毁掉人类文明 :-)	@Gerald Weinberg (软件工程大牛)",
    "如果说调试(debug)是去除 bug 的过程, 那么编程就是制造 bug 的过程;	@Edsger Dijkstra (图灵奖得主)",
    "要在自己的代码里找 bug 是很难的; 	而当你认为你的代码没有错误时, 找 bug 就更难了!	@<代码大全>Steve McConnel",
    "调试代码比写代码更困难; 	因此, 如果你尽自己所能写出了最复杂的代码, 你将没有更大的智慧去调试它 :-)",

    "过早的优化是万恶之源	Premature optimization is the root of all evil.	@Donald Knuth (图灵奖得主 算法大牛)",
    "Tape is Dead, Disk is Tape, Flash is Disk, RAM Locality is King!	@Jim Gray (图灵奖得主 数据库大牛)",

    "软件就像[性] -- 免费的时候更好 :-)	Software is like sex, it`s better when it`s free.	@Linus Torvalds (Linux 之父)",
    "在民主国家, 最高原则是全民的利益而不是统治者的利益;	服从民主国家的统治权并不会使人变为奴隶, 而是使人变为公民;	@斯宾诺莎 (哲学家 思想家)",
    "国家为人而立, 而非人为国家而活;	国家的最高使命是保护个人, 使其有机会发展成为有创造才能的人;	@爱因斯坦",
    "如果政府不能解决问题, 那它本身就成为问题!	@里根 (美国前总统)",
    "民众不应该害怕他们的政府, 政府才应该害怕它的民众!	People should not be afraid of their governments. Governments should be afraid of their people.	@电影<V怪客&#65295;V字仇杀队>	",
    "制造恐惧是专制政府的终极武器	@电影<V怪客&#65295;V字仇杀队>	",
    "宪法的基本原则是: 个人可以做任何事情, 除非法律禁止; 政府不能做任何事情, 除非法律许可;	@约翰.洛克 (哲学家 思想家)",
    "财产不应公有, 权力不应私有 -- 否则将会坠入地狱!	@约翰.洛克 (哲学家 思想家)",
    "没有财产权就没有正义	@哈耶克 (诺贝尔经济学奖得主 政治思想家)",
    "爱国者的责任就是保护国家不受政府侵犯	@托马斯.潘恩 (政治思想家)",
    "[反抗政府]的精神, 在某些场合是如此珍贵, 我希望它永远保持活跃!	@托马斯.杰斐逊 (美国前总统 <独立宣言>起草人)",
    "没有投票权的征税就是暴政	@詹姆斯.奥蒂斯 (美国独立时期评论家)",
    "当法律失去公正 则反抗成为义务	When injustice becomes law, resistance becomes duty.",

    "自由不是想做什么就做什么; 自由是教会你不想做什么就可以不做什么!	Freedom is not letting you do whatever you wanna but teaching you not to do the things you don`t wanna do.	@<实践理性批判>康德 (哲学家 思想家)",
    "牺牲[基本自由]来换取暂时的安全, 最后既得不到安全也得不到自由!	@富兰克林 (美国开国元勋 物理学家 作家)",
    "民主制度在[自由]中寻求平等	社会主义制度在[奴役]中寻求平等	@哈耶克 (诺贝尔经济学奖得主 政治思想家)",
    "现在有人对你们说: '牺牲你们个人的自由, 去求国家的自由!'	我要对你们说: '争取个人的自由, 就是争取国家的自由; 争取个人的人格, 就是争取国家的国格;自由平等的国家不是一群奴才建造得起来的!'	@胡适 (思想家)	",
    "美国人来了, 有面包有自由; 	苏俄来了, 有面包无自由; 	中共来了, 无面包无自由!	@胡适 (思想家)	",
    "告诉你我的孩子, 在你一生中有许多事值得争取, 但[自由]无疑是最重要的!	永远不要带着脚镣, 过奴隶的生活!	@电影<勇敢的心>",
    "法律本身并不能保证言论自由; 要做到这一点, 必须所有人都有包容精神;	Laws alone can not secure freedom of expression;	in order that every man present his views without penalty there must be spirit of tolerance in the entire population.	@爱因斯坦",
    "亲爱的同胞们, 不要问你们的国家能为你们做些什么, 而要问你们能为国家做些什么?	全世界的公民们, 不要问美国愿意为你们做些什么, 而应该问我们在一起能为人类的自由做些什么?	(注: 这句名言经常被有意省略了第2段)	@肯尼迪 (美国前总统)",
    "自由人不会去问: '他的国家能为他做些什么?'	也不会去问: '他能为他的国家做些什么?'	他们问的是: '我和我的同胞们能通过政府做些什么?'	@米尔顿.弗里德曼 (诺贝尔经济学奖得主)",
    "解放一个习惯于被奴役的民族	比	奴役一个习惯于自由的民族	更难	@孟德斯鸠 (启蒙思想家)	",
    "将愚人从他们所敬拜的锁链下解放出来是非常困难的	@伏尔泰 (启蒙思想家)",

    "专政与民主是对立的统一, 人民民主是基础, 只有充分民主才能有专政; 	脱离了民主就成了[法西斯专政]!	@胡耀邦 谈'人民民主专政'",
    "如果人民不欢迎我们, 我们就该下台了!	@胡耀邦",
    "民主是自下而上争取的	不是自上而下赐予的	@方励之 (科学家 政治异议人士)",
    "民主并非只是选举投票; 	它是生活方式, 是思维方式, 是你每天呼吸的空气, 举手投足的修养, 个人回转的空间...	@龙应台 (台湾作家)",

    "共产主义是一种伪科学, 演变成一种伪宗教, 最终表现为僵化的集权式的邪恶政治集团!	@<共产主义实录>理查德.派普斯	",
    "作为一名预言家, 马克思失败的原因, 完全在于历史主义的贫乏!	@<历史决定论的贫困>波普尔 (哲学家 思想家)	",
    "尝试创建人间天堂, 最终只会创造出地狱!	The attempt to make heaven on earth invariably produces hell.	@波普尔 (哲学家 思想家)	",
    "总是使一个国家变成人间地狱的东西, 恰恰是人们试图将其变成天堂!	What has always made the state a hell on earth has been precisely that man has tried to make it heaven.	@荷尔德林 (哈耶克<通往奴役之路>第2章把此句作为引言)",
    "如何判断什么样的人是共产主义者捏? 共产主义者就是那些[阅读]了马克思和列宁著作的人; 	那么, 什么样的人是反共产主义者捏? 反共产主义者是那些[理解]了马克思和列宁著作的人;	@里根 (美国前总统)	",
    "年青的时候不相信社会主义, 那是缺乏良心; 	年老的时候还相信社会主义, 那是缺乏头脑!	A young man who isn`t a socialist hasn`t got a heart. An old man who is a socialist hasn`t got a head.	@克列蒙梭 (法国政治家)",
    "共产主义最大的优越性体现在 -- 可以克服别的主义下根本不存在的困难 :-)",
    "我们生下来时, 共产党就贪脏枉法/独裁专政/践踏人权/出卖国土 -- 这是我们一代人的无奈; 	等到我们的孩子长大了, 共产党依然故我甚至变本加厉 -- 那就是我们这代人的无能!",

    "高等教育的价值在于培训思维, 而不在于传授事实!	The value of a college education is not the learning of many facts but the training of the mind to think.	@爱因斯坦",
    "成功的教学所需要的不是强制	而是激发学生的欲望	@托尔斯泰 (作家)",
    "花在孩子身上的钱和孩子的修养之间[没有]任何关系, 甚至成反比!	在子女教育方面, 父母应该投入的是[时间], 而不是金钱!	@大前研一 (日本经济评论家)",
    "父母们最根本的缺点, 在于想要自己的孩子为自己争光;	The fundamental defect of fathers is that they want their children to be a credit to them.	@罗素 (哲学家 数学家 思想家)",
    "父母在教育孩子时, 通常只是让他们适应当前的世界 -- 哪怕当前是个堕落的世界;	@康德 (哲学家 思想家)",
    "小时候一个劲地教你做好人, 长大了一个劲地教你做坏人 -- 这就是[中国式教育]",

    "任何专制国家的教育, 其目的都是在极力降低国民的心智;	@孟德斯鸠 (启蒙思想家)",
    "古代愚民政策是不许民众受教育	现代愚民政策是只许民众受洗脑教育",
    "全中国只有一所学校, 就是党校 -- 其它的学校都是分校!	@陈丹青 (艺术家)",
    "洗脑教育要塑造的, 不是铁屋中沉睡的人, 而是[装睡]的人; 	因为沉睡的人你总有办法唤醒, 但是你永远无法唤醒装睡的人!",
    "当你试图了解你的祖国, 你已经走上了犯罪道路!	@艾未未 (艺术家 持不同政见者)",
    "以前学英语是为了更好地了解外国	现在学英语是为了更好地了解中国",

    "我不同意你的观点	但是我誓死捍卫你说话的权利	@伏尔泰 (启蒙思想家)	",
    "若批评不自由	则赞美无意义	@法国<费加罗报>的宗旨",
    "如果你来到一个陌生的国家, 看到报纸上全是好消息; 	我敢打赌, 这个国家的好人都在监狱里!	@帕特.莫尼汉(美国参议员 社会学家)",
    "你可以暂时地蒙骗所有人, 也可以永久地蒙骗部分人; 	但你不可能永久地蒙骗所有人!	You can fool all the people some of the time, some of the people all the time, but you can NOT fool all the people all the time.	@林肯 (美国前总统)",
    "宁鸣而死	不默而生	@范仲淹",
    "在大欺骗的时代, 说出真相就是革命行为!	@乔治.奥威尔 (<1984>作者)",
    "即使有一天, 党宣布'2+2=5', 你也不得不相信它 :-(	@<1984>乔治.奥威尔	",
    "艺术家用谎言揭露真相	政治家用谎言掩盖真相	Artists use lies to tell the truth, while politicians use them to cover the truth up.	@电影<V怪客&#65295;V字仇杀队>	",
    "世上最难的两件事: 把自己的思想装进别人的脑袋, 把别人的钞票装进自己的口袋 -- 共产党都做到了",
    "在我们苏联, 谎言已不仅仅是道德问题, 而是国家的支柱!	@索尔仁尼琴 (诺贝尔奖得主 政治异议人士)",
    "谎言重复千遍就是真理!	@戈培尔 (纳粹德国宣传部长)",
    "报纸的任务就是把统治者的意志传递给被统治者, 使他们视地狱为天堂!	@戈培尔 (纳粹德国宣传部长)",
    "人民大多数比我们想象的要蒙昧得多, 所以宣传的本质就是坚持简单和重复!	@戈培尔 (纳粹德国宣传部长)",
    "要撒谎就撒弥天大谎 -- 因为弥天大谎往往具有某种可信的力量	民众在大谎和小谎之间更容易成为前者的俘虏	@戈培尔 (纳粹德国宣传部长)",
    "即使不封杀媒体, 也要让媒体感到自己随时可能被封杀, 从而让媒体展开[自我审查]	@戈培尔 (纳粹德国宣传部长)	",

    "中共是这样的政党 -- 既千方百计阻止你知道真相, 又千方百计指责你不明真相",
    "如果把中宣部的官员和卫生部的官员对调, 那么中国既有了言论自由, 也有了食品安全 :-)",
    "中国共产党是一心一意为人民服务的政党 -- 你想拒绝它的服务都不行 :-(",
    "如果我说'张三的媳妇要忠于李四', 你一定认为我思维混乱; 	可如果我说'人民的军队要忠于党', 你是不是立刻感觉到满满的正能量?",
    "索马里海盗说: 买面包只能吃一天, 买把枪能吃一辈子!	中国共产党说: 枪杆子里出政权!",
    "中国没有多少'人民内部矛盾', 主要是'党和人民的矛盾'; 	党反复提'人民内部矛盾', 其实是挑拨离间!",

    "欧美的精英们已经不再为生存而担忧, 不用因恐惧而说话; 	而中国的精英们还在为民主自由而耗尽精力甚至生命!",
    "如果鲁迅活在这个年代	他的博客首先会被和谐, 然后被有关部门请去喝茶, 最后以'煽动颠覆国家罪'被捕入狱...",
    "一个国家的监狱里有一个良心犯, 这个国家就不会有良心; 	有两个, 这个国家就让人恶心; 	有三个, 这就不是国家; 	有四个, 亡国就是解放!	@昂山素季 (缅甸民运领袖)",
    "天朝知识分子分三类: 1 沉默的大多数 2 公共知识分子 3 '公公'知识分子",
    "一百年了都没长进 -- 上面还是慈禧, 下面还是义和团!	@资中筠 (中国社科院学者)",
    "要以世界的眼光看中国	不要以中国的眼光看世界	@周有光 (语言学家 经济学家)",
    "'中国模式'的核心竞争力就是[压榨劳动力]	@谢国忠 (经济学家)",
    "中国比小说更离奇	@钟祖康 (作家)",
    "道德在书本里, 榜样在电视里, 国土在肺里, 爱情在房产证里, 幸福感在梦里...	这就是中国特色",
    "拜金不可怕, 可怕的是: 在一个不吃不喝也要几百年才能买房的社会却不许拜金; 	低俗不可怕, 可怕的是: 在一个几千万男生找不到女友, 同龄少女都被老男人包养的国度却不准低俗!",
    "某微信群, 一帮'爱国者'在讨论哪个国家最反华? 于是开始列举: 	限制华人自由出入, 限制华人买房买车, 限制华人子女就学, 对华人收更高的税, 强制华人买更贵的汽油, 给华人吃地沟油毒奶粉, 限制华人生孩子...	最后所有人都不说话了",
    "先帝爷留下一个烂摊子; 	第二代治理者的办法是头疼医头, 脚疼医脚, 虽然去不了病根儿, 但起码减轻症状, 让你以为治好了; 	第三代是头疼医脸, 脚疼也医脸 -- 对他们来说, 能否治好无所谓, 面子最重要; 	这一代更邪乎了, 头疼堵嘴, 脚疼也堵嘴 -- 只要喊不出疼, 就算没病!",
    "在天朝, 可怕的不是逼良为娼; 	而是逼良为娼之后, 再来扫黄!",
    "郭敬明和唐骏的共同点是 -- 他们这类人越成功, 就说明我们这个社会越失败!",
    "不是具有中国特色的社会主义	而是具有中国特色的社会达尔文主义",

    "权力导致腐败, 绝对的权力导致绝对的腐败!	@阿克顿勋爵 (政治思想家)",
    "一切拥有权力的人都有滥用权力为自己谋求私利的倾向	@孟德斯鸠 (启蒙思想家)	",
    "一群[亿万富豪]在人民大会堂里开两会 -- 他们管自己叫[无产阶级先锋队]	",
    "中国人民是伟大的 -- 用全球7%的耕地养活了全球50%的公务员, 并承受全球70%的官员腐败 :-(",
    "取之愚民 用之移民 -- 天朝官员的财富之道",
    "所谓'摸着石头过河'就是 -- 群众们都过河了, 官员们还在那里假装摸石头",

    "罗马之所以是这样的罗马	因为市民就是这样的市民	This City is what it is because our citizens are what they are.	@柏拉图",
    "一个肮脏的国家, 如果人人讲规则而不是空谈道德, 最终会变成一个有人味儿的正常国家, 道德自然会逐渐回归; 	反之, 一个干净的国家, 如果人人都不讲规则却大谈道德&#12289;谈高尚, 天天没事儿就讲道德规范, 人人大公无私, 最终这个国家会堕落成为一个伪君子遍布的肮脏国家!	@胡适 (思想家)	",
    "你要看一个国家的文明, 只需考察三件事: 	第一, 看他们怎样待小孩子	第二, 看他们怎样待女人	第三, 看他们怎样利用闲暇的时间	@胡适 (思想家)	",
    "做奴隶虽然不幸, 但并不可怕, 因为知道挣扎, 毕竟还有挣脱的希望; 	若是从奴隶生活中寻出美来, 赞叹, 陶醉, 就是万劫不复的奴才了!	@鲁迅	",
    "自有历史以来, 中国人是一向被[同族]屠戮&#12289;奴隶&#12289;敲掠&#12289;刑辱&#12289;压迫下来的, 	非人类所能忍受的楚痛, 也都身受过;	每一考查, 真教人觉得不像活在人间;	@鲁迅	",
    "信仰不能当饭吃, 所以不重要; 民主不能当饭吃, 所以不重要; 自由不能当饭吃, 所以不重要...	对中国人来说, 不能当饭吃的, 都不重要!	我们信奉了猪的生活原则, 也就得到了猪的命运 -- 迟早给别人当饭吃",
    "如果民众以猪的方式思考	那么统治者就会以屠夫的方式行事",

    "与恶魔战斗的勇士, 要小心自己也变成恶魔!	当你长久地凝视深渊, 深渊也在凝视着你!	@尼采 (哲学家 思想家)",
    "真的猛士敢于在一个不正常的国家做一个正常的人",
    "一旦你习惯了戴面具的生活	你的脸将变得跟面具一样	@电影<V怪客&#65295;V字仇杀队>	",
    "每当有事情发生, 懦夫会问: '这么做安全吗?'	患得患失者会问: '这么做明智吗?'	虚荣者会问: '这么做受欢迎吗?'	但是良知只会问: '这么做正确吗?'	@马丁.路德.金 (美国人权领袖)",
    "人道主义的含义是 -- 从不以[人]作为牺牲来达到某一目的	@施韦策 (诺贝尔和平奖得主)",
    "无限的宽容必将导致宽容的消失	Unlimited tolerance must lead to the disappearance of tolerance.	@波普尔 (哲学家 思想家)",
    "雪崩时, 没有一片雪花觉得自己有责任	@伏尔泰 (启蒙思想家)",
    "谁控制过去, 谁就控制未来; 	谁控制现在, 谁就控制过去!	Who controls the past controls the future. Who controls the present controls the past.	@<1984>乔治.奥威尔	",
    "以铜为镜 可以正衣冠	以史为镜 可以知兴替	以人为镜 可以明得失	@李世民 (唐太宗)",
    "人类从历史中学到的唯一教训就是 -- 人类没有从历史中学到任何教训!	@汤因比 (历史学家)",
    "每个强国的命运都受两个因素支配 -- 内在的和外来的冲突, 也就是所谓[革命]与[战争]!	一个国家如果不是因为衰弱, 就绝不会主动谋求和平; 	而使它们衰弱得最快的, 正是所谓的[安全感]!	@<西方军事史>约翰.富勒",
    "人们总以为自己生活的时代糟糕透顶, 总是向往过去的黄金时代; 	但在我们如今认为是身处黄金年代的那些人看来, 他们当时所处的世界同样是苍白无力的!	@伍迪.艾伦 (作家 编剧 导演)",
    "中国人最悲哀的就是 -- 刚被历史的车轮碾过, 还没来得及爬起来, 发现历史在倒车 :-(",
    "战争是流血的政治	政治是不流血的战争	@<战争论>克劳塞维茨",
    "百战百胜, 非善之善者也; 不战而屈人之兵, 善之善者也;	故上兵伐谋, 其次伐交, 其次伐兵, 其下攻城;	@<孙子兵法>孙武",
    "知己知彼 百战不殆	不知彼而知己 一胜一负	不知彼不知己 每战必殆	@<孙子兵法>孙武",
    "投之亡地然后存	陷之死地然后生	@<孙子兵法>孙武",
    "兵无常势, 水无常形; 	能因敌变化而取胜者, 谓之神!	@<孙子兵法>孙武",
    "武器的改进大多由于一两个人的功劳, 而战术的更新却必须克服整个保守阶层的惰性!	@<海权论>阿尔弗雷德.马汉",
    "管理是一种实践	其本质不在于[知]而在于[行]	其验证不在于[逻辑]而在于[成果]	@彼得.德鲁克 (管理学之父)",
    "企业无法持续成长壮大, 反而每况愈下濒临破产的最主要原因是 -- 当企业老板不应该做决策的时候, 却仍然紧握着决策权不放; 	企业应该尽可能将决策权放到最低层级, 越接近行动的现场越好!	@彼得.德鲁克 (管理学之父)",
    "管理是一项工作, 但它本身并[不是]全职工作;	在设计一项管理职务时, 要把[管理]与[工作](即一个人的'特殊职能'与'本身职务')结合起来;	一般而言, 管理人员应该既是一个管理人员, 又是一位专业人员;	@彼得.德鲁克 (管理学之父)",
    "用人不在于如何减少人的短处	而在于如何发挥人的长处	@彼得.德鲁克 (管理学之父)",
    "企业最大的资产是人	@松下幸之助 (号称日本经营之神)",
    "你想雇用的人必须具备3种品质: 正直诚实, 聪明能干, 精力充沛; 	如果缺少第一种, 后两种品质会要你命!	@巴菲特	",
    "以用户为中心 其它一切纷至沓来	@Google 信条",
    "只有偏执狂才能生存	@Andy Grove (英特尔公司创始人之一, 前任 CEO)	",
    "我们没有不懂技术的管理人员	因为寻求技术和管理的平衡毫不费力	@比尔.盖茨",
    "伟大的车工值得给他几倍于普通车工的薪水; 	但一个伟大的程序员, 其价值相当于普通程序员的一万倍!	@比尔.盖茨",
    "我的管理风格既不是美国的个人主义, 也不是日本的共识主义, 而是独特的达尔文主义(适者生存)!	@比尔.盖茨",
    "当你用一个手指指着某人时, 请注意其它三个手指在指哪儿?	@Gerald Weinberg (软件工程大牛)	",
    "己所不欲	勿施于人	@<论语>",
    "水至清则无鱼	人至察则无徒	@<汉书 东方朔传>",
    "获得信任的技巧就是 -- 避免使用任何技巧	@Gerald Weinberg (软件工程大牛)",
    "不怕神一样的对手	就怕猪一样的队友",
    "花自己的钱 办自己的事 -- 既讲节约 又讲效果	花自己的钱 办别人的事 -- 只讲节约 不讲效果	花别人的钱 办自己的事 -- 不讲节约 只讲效果	花别人的钱 办别人的事 -- 不讲节约 不讲效果	@米尔顿.弗里德曼 (诺贝尔经济学奖得主)",
    "如果在撒哈拉沙漠实行[计划经济], 连沙子都会短缺!	@路德维希.冯.米塞斯 (经济学家 哲学思想家)",
    "我也会有恐惧和贪婪, 只不过是 -- 在大众贪婪时恐惧, 在大众恐惧时贪婪!	@巴菲特",
    "控制风险的最好办法是深入思考, 而不是投资组合!	@巴菲特",
    "价值投资不能保证一定盈利	但价值投资提供了通向成功的[唯一]机会	@巴菲特",
    "我从事投资时会观察一家公司的[全貌]	而大多数投资人只盯着它的[股价]	@巴菲特",
    "投资成功与否并非取决于你了解的东西, 而在于你能否老老实实地承认你所不知道的东西!	投资人并不需要做对很多事情, 重要的是不要犯重大的错误!	@巴菲特",
    "退潮时便可知道谁在裸泳	@巴菲特",
    "短期而言, 股票市场是个投票机	长期而言, 股票市场是个称重器	@本杰明.格雷厄姆",
    "中国股市比赌场还[不如] -- 因为在中国股市, 某些人可以看别人的底牌	@吴敬琏 (经济学家)",
    "最多人走的路肯定最安全	但别指望会在这样的路上碰到很多猎物	@纪德 (作家 诺贝尔奖得主)",
    "投资是预测资产收益的活动	投机是预测市场心理的活动	@凯恩斯 (经济学家)",
    "自由有许多困难, 民主亦非完美; 	然而, 我们从未建造一堵墙, 把我们的人民关在里面, 不准他们离开	@<在柏林墙下的演说>肯尼迪 (美国前总统)",
    "这些(监狱的)围墙很有趣 -- 起初你痛恨它; 然后你逐渐习惯它; 足够长时间后, 你开始依赖它...	这就是体制化!	@电影<肖申克的救赎>",
    "Google 重新发明了搜索	Facebook 重新发明了社交	Apple 重新发明了手机	Amazon 重新发明了书籍	...	天朝重新发明了局域网",
    "翻墙和 OOXX 的相似之处: 	一旦会做就老想做; 做第一次之后觉得天地豁然开朗; 每次做都有快感; 觉得不会做的都是傻逼!",
    "GFW 把中国人挡在无数优秀网站之外, 仿佛在这些网站入口处设置了一道铁门, 上书八个大字: '华人与狗 不得入内'",
    "几十年来, 朝鲜的领导人只有一个, 叫'金胖子'; 	几十年来, 天朝的领导人也只有一个, 叫'敏感词'",
    "大航海时代禁海	大贸易时代禁商	大数据时代禁网",
    "宁要社会主义的局域网	不要资本主义的互联网",
    "生于忧患	死于安乐	@<孟子 告子下>",
    "合抱之木生于毫末	九层之台起于累土	千里之行始于足下	@<道德经>",
    "海纳百川 有容乃大	壁立千仞 无欲则刚	@林则徐",
    "大胆假设 小心求证	认真做事 严肃做人	@胡适",
    "勿以恶小而为之	勿以善小而不为	@<三国志>陈寿",
    "判断一个人的人品, 不是看他好起来做什么好事, 而是看他坏起来[不做]什么坏事;",
    "君子之交淡若水	小人之交甘若醴	@<庄子>",
    "不要去欺骗别人 -- 因为你能骗到的, 都是相信你的人",
    "唯一不变的是变化本身!"

  ];

  function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }

  function displaySentence(sentence) {
    const sentenceElement = document.getElementById('hitokoto_text');
    sentenceElement.textContent = sentence;
  }

  function fetchSentenceFromAPI() {
    fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        const sentenceElement = document.getElementById('hitokoto_text');
        sentenceElement.textContent = data.hitokoto;
        sentenceElement.href = 'https://hitokoto.cn/?uuid=' + data.uuid;
      })
      .catch(error => {
        console.error('API 请求失败:', error);
        // 显示本地随机句子
        displaySentence(getRandomSentence());
      });
  }

  function randomDisplaySentence() {
    // 生成一个随机数（0或1）
    var random = Math.floor(Math.random() * 2);
    
    // 根据随机数决定调用哪个方法
    if (random === 0) {
        fetchSentenceFromAPI();
    } else {
        displaySentence(getRandomSentence());
    }
  }

  // 页面加载完成后执行随机显示句子的函数
  randomDisplaySentence();
});


