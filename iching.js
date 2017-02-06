var trigram = ['☰','☳','☵','☶','☷','☴','☲','☱'];
var trigram_name = ['乾','震','坎','艮','坤','巽','離','兌'];
var trigram_symbol = ['天','雷','水','山','地','风','火','泽'];
var trigram_wuxing = ['金','木','水','土','土','木','火','金'];
var xiantian_bagua = ['☰','☱','☲','☳','☴','☵','☶','☷'];
var houtian_bagua = ['☵','☷','☳','☴','☰','☱','☶','☲'];
var tiangan_table = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
var tiangan_wuxing = ['木','木','火','火','土','土','金','金','水','水'];
var dizhi_table = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
var dizhi_wuxing = ['水','土','木','木','土','火','火','土','金','金','土','水'];
var wuxing = ['土','金','水','木','火'];
var liushou = ['青龍','朱雀','勾陳','騰蛇','白虎','玄武'];
var hexagrams = ['䷀','䷡','䷄','䷙','䷊','䷈','䷍','䷪',
                '䷘','䷲','䷂','䷚','䷗','䷩','䷔','䷐',
                '䷅','䷧','䷜','䷃','䷆','䷺','䷿','䷮',
                '䷠','䷽','䷦','䷳','䷎','䷴','䷷','䷞',
                '䷋','䷏','䷇','䷖','䷁','䷓','䷢','䷬',
                '䷫','䷟','䷯','䷑','䷭','䷸','䷱','䷛',
                '䷌','䷶','䷾','䷕','䷣','䷤','䷝','䷰',
                '䷉','䷵','䷻','䷨','䷒','䷼','䷥','䷹'];
var hexagram_name = ['乾','大壯','需','大畜','泰','小畜','大有','夬',
                '無妄','震','屯','頤','復','益','噬嗑','隨',
                '訟','解','坎','蒙','師','渙','未濟','困',
                '遯','小過','蹇','艮','謙','漸','旅','咸',
                '否','豫','比','剝','坤','觀','晉','萃',
                '姤','恆','井','蠱','升','巽','鼎','大過',
                '同人','豐','既濟','賁','明夷','家人','離','革',
                '履','歸妹','節','損','臨','中孚','睽','兌'];
var bagong_bagua = [{'gua': ['䷀','䷫','䷠','䷋','䷓','䷖','䷢','䷍'], 'gong': '䷀'},
                   {'gua': ['䷹','䷮','䷬','䷞','䷦','䷎','䷽','䷵'], 'gong': '䷹'},
                   {'gua': ['䷝','䷷','䷱','䷿','䷃','䷺','䷅','䷌'], 'gong': '䷝'},
                   {'gua': ['䷲','䷏','䷧','䷟','䷭','䷯','䷛','䷐'], 'gong': '䷲'},
                   {'gua': ['䷸','䷈','䷤','䷩','䷘','䷔','䷚','䷑'], 'gong': '䷸'},
                   {'gua': ['䷜','䷻','䷂','䷾','䷰','䷶','䷣','䷆'], 'gong': '䷜'},
                   {'gua': ['䷳','䷕','䷙','䷨','䷥','䷉','䷼','䷴'], 'gong': '䷳'},
                   {'gua': ['䷁','䷗','䷒','䷊','䷡','䷪','䷄','䷇'], 'gong': '䷁'}];
var bagong = [{'gong': [
                          {'gua':'䷀', 'name':'乾为天'},
                          { 'gua':'䷫', 'name':'天风姤'},
                          { 'gua':'䷠', 'name':'天山遁'},
                          { 'gua':'䷋', 'name':'天地否'},
                          { 'gua':'䷓', 'name':'风地观'},
                          { 'gua':'䷖', 'name':'山地剥'},
                          { 'gua':'䷢', 'name':'火地晋'},
                          { 'gua':'䷍', 'name':'火天大有'}]},
                     {'gong': [
                           {'gua':'䷹', 'name':'兑为泽'},
                           {'gua':'䷮', 'name':'泽水困'},
                           {'gua':'䷬', 'name':'泽地萃'},
                           {'gua':'䷞', 'name':'泽山咸'},
                           {'gua':'䷦', 'name':'水山蹇'},
                           {'gua':'䷎', 'name':'地山谦'},
                           {'gua':'䷽', 'name':'雷山小过'},
                           {'gua':'䷵', 'name':'雷泽归妹'}]},
                     {'gong': [
                           {'gua':'䷝', 'name':'离为火'},
                           {'gua':'䷷', 'name':'火山旅'},
                           {'gua':'䷱', 'name':'火风鼎'},
                           {'gua':'䷿', 'name':'火水未济'},
                           {'gua':'䷃', 'name':'山水蒙'},
                           {'gua':'䷺', 'name':'风水涣'},
                           {'gua':'䷅', 'name':'天水讼'},
                           {'gua':'䷌', 'name':'天火同人'}]},
                     {'gong': [
                           {'gua':'䷲', 'name':'震为雷'},
                           {'gua':'䷏', 'name':'雷地豫'},
                           {'gua':'䷧', 'name':'雷水解'},
                           {'gua':'䷟', 'name':'雷风恒'},
                           {'gua':'䷭', 'name':'地风升'},
                           {'gua':'䷯', 'name':'水风井'},
                           {'gua':'䷛', 'name':'泽风大过'},
                           {'gua':'䷐', 'name':'泽雷随'}]},
                     {'gong': [
                           {'gua':'䷸', 'name':'巽为风'},
                           {'gua':'䷈', 'name':'风天小畜'},
                           {'gua':'䷤', 'name':'风火家人'},
                           {'gua':'䷩', 'name':'风雷益'},
                           {'gua':'䷘', 'name':'天雷无妄'},
                           {'gua':'䷔', 'name':'火雷噬嗑'},
                           {'gua':'䷚', 'name':'山雷颐'},
                           {'gua':'䷑', 'name':'山风蛊'}]}, 
                     {'gong': [
                           {'gua':'䷜', 'name':'坎为水'},
                           {'gua':'䷻', 'name':'水泽节'},
                           {'gua':'䷂', 'name':'水雷屯'},
                           {'gua':'䷾', 'name':'水火既济'},
                           {'gua':'䷰', 'name':'泽火革'},
                           {'gua':'䷶', 'name':'雷火丰'},
                           {'gua':'䷣', 'name':'地火明夷'},
                           {'gua':'䷆', 'name':'地水师'}]},
                     {'gong': [
                           {'gua':'䷳', 'name':'艮为山'},
                           {'gua':'䷕', 'name':'山火贲'},
                           {'gua':'䷙', 'name':'山天大畜'},
                           {'gua':'䷨', 'name':'山泽损'},
                           {'gua':'䷥', 'name':'火泽睽'},
                           {'gua':'䷉', 'name':'天泽履'},
                           {'gua':'䷼', 'name':'风泽中孚'},
                           {'gua':'䷴', 'name':'风山渐'}]},
                     {'gong': [
                           {'gua':'䷁', 'name':'坤为地'},
                           {'gua':'䷗', 'name':'地雷复'},
                           {'gua':'䷒', 'name':'地泽临'},
                           {'gua':'䷊', 'name':'地天泰'},
                           {'gua':'䷡', 'name':'雷天大壮'},
                           {'gua':'䷪', 'name':'泽天夬'},
                           {'gua':'䷄', 'name':'水天需'},
                           {'gua':'䷇', 'name':'水地比'}]}];
module.exports = {
    getTrigrams : function() {
      return trigram;
    },
    getHexagrams : function() {
      return hexagrams;
    },
    getHexagramName: function(hexagram) {
      var index = hexagrams.indexOf(hexagram);
      if(index == -1) {
        return null;
      } else {
        return hexagram_name[index];
      }
    },
    getGongIndex : function(hexagram) {
        for(var i=0;i<bagong_bagua.length; i++) {
            var gong = bagong_bagua[i].gua;
            var gong_index = gong.indexOf(hexagram);
            if(gong_index != -1)    return gong_index;
        }
        return -1;
    },
    getGongName : function(hexagram) {
        for(var i=0;i<bagong_bagua.length; i++) {
            var gong = bagong_bagua[i].gua;
            var gong_index = gong.indexOf(hexagram);
            if(gong_index != -1){
                return hexagram_name[hexagrams.indexOf(gong[0])];
            }
        }
    },
    getXianTianBaGua : function(number) {
      return xiantian_bagua[(number + 7) % 8];
    },
    getHouTianBaGua : function(number) {
      return houtian_bagua[(number + 7) % 8];
    },
    getWuXing : function(gua) {
      if (trigram.indexOf(gua) != -1) {
        var index = trigram.indexOf(gua);
        return trigram_wuxing[index];
      } else if(trigram_name.indexOf(gua) != -1) {
        var index = trigram_name.indexOf(gua);
        return trigram_wuxing[index];
      } else if(tiangan_table.indexOf(gua) != -1) {
        var index = tiangan_table.indexOf(gua);
        return tiangan_wuxing[index];
      } else if(dizhi_table.indexOf(gua) != -1) {
        var index = dizhi_table.indexOf(gua);
        return dizhi_wuxing[index];
      }
      return null;
    },
    trigram2hexagram : function(upper_trigram, lower_trigram) {
        var upper_index = trigram.indexOf(upper_trigram);
        var lower_index = trigram.indexOf(lower_trigram);
        return hexagrams[lower_index * 8 + upper_index];
    },
    yinyang2trigram: function(first_yao, second_yao, third_yao) {
        if(first_yao === 'yang' && second_yao === 'yang' && third_yao === 'yang'){
            return '☰';
        }else if(first_yao === 'yang' && second_yao === 'yang' && third_yao ==='yin'){
            return '☱';
        }else if(first_yao === 'yang' && second_yao === 'yin' && third_yao==='yang'){
            return '☲';
        }else if(first_yao === 'yang' && second_yao === 'yin' && third_yao === 'yin'){
            return '☳';
        }else if(first_yao === 'yin' && second_yao === 'yang' && third_yao ==='yang'){
            return '☴';
        }else if(first_yao === 'yin' && second_yao === 'yang' && third_yao === 'yin'){
            return '☵';
        }else if(first_yao === 'yin' && second_yao === 'yin' && third_yao === 'yang'){
            return '☶';
        }else if(first_yao === 'yin' && second_yao === 'yin' && third_yao === 'yin'){
            return '☷';
        }
    },
    zheng2yinyang: function(zheng){
        switch(zheng){
            case 0:
                return 'yin';
            case 1:
                return 'yang';
            case 2:
                return 'yin';
            case 3:
                return 'yang';
        }
    },
    fan2yinyang: function(fan) {
        switch(fan){
            case 0:
                return 'yang';
            case 1:
                return 'yin';
            case 2:
                return 'yang';
            case 3:
                return 'yin';
        }
    },
    getLiuqin : function(dizhi, hexagram) {
        var dizhi_wuxing = module.exports.getWuXing(dizhi);
        var gongName = module.exports.getGongName(hexagram);
        var hexagram_wuxing = module.exports.getWuXing(gongName);
        var dizhi_wuxing_index = wuxing.indexOf(dizhi_wuxing);
        var hexagram_wuxing_index = wuxing.indexOf(hexagram_wuxing);
        switch(dizhi_wuxing_index - hexagram_wuxing_index){
        case 0:
            return '兄弟';
        case -1:
            return '父母';
        case -2:
            return '官鬼';
        case 1:
            return '子孙';
        case 2:
            return '妻财';
        case -3:
            return '妻财';
        case -4:
            return '子孙';
        case 3:
            return '官鬼';
        case 4:
            return '父母';
        }
    },
    drawYangYao : function(svgContainer, xoffset, yoffset, width, height){
        var yao = svgContainer.append("rect")
                        .attr("x", xoffset)
                        .attr("y", yoffset)
                        .attr("width", width)
                        .attr("height", height);
    },
    drawYinYao : function(svgContainer, xoffset, yoffset, width, height){
        var yao1 = svgContainer.append("rect")
                        .attr("x", xoffset)
                        .attr("y", yoffset)
                        .attr("width", (width-height)/2)
                        .attr("height", height);
        var yao2 = svgContainer.append("rect")
                        .attr("x", xoffset+(width+height)/2)
                        .attr("y", yoffset)
                        .attr("width", (width-height)/2)
                        .attr("height", height);
    },
    drawBagua : function(svgContainer, trigram, x, y, interval, width, height) {
        switch(trigram){
        case '☰':
            module.exports.drawYangYao(svgContainer, x, y, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☱':
            module.exports.drawYinYao(svgContainer, x, y, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☲':
            module.exports.drawYangYao(svgContainer, x, y, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☳':
            module.exports.drawYinYao(svgContainer, x, y, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☴':
            module.exports.drawYangYao(svgContainer, x, y, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☵':
            module.exports.drawYinYao(svgContainer, x, y, width, height);
            module.exports.drawYangYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☶':
            module.exports.drawYangYao(svgContainer, x, y, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval*2, width, height);
            break;
        case '☷':
            module.exports.drawYinYao(svgContainer, x, y, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval, width, height);
            module.exports.drawYinYao(svgContainer, x, y+interval*2, width, height);
            break;
        }
    },
    drawTrigram : function(svgContainer, trigram) {
        module.exports.drawBagua(svgContainer, trigram, 50, 50, 50, 200, 30);
    },
    drawHexagram: function(svgContainer, hexagram, ri_tiangan) {
        var hexagram_index = hexagrams.indexOf(hexagram);
        var lower_index = Math.floor(hexagram_index / 8);
        var upper_index = hexagram_index % 8;
        module.exports.drawBagua(svgContainer, trigram[upper_index], 150, 50, 50, 200, 30);
        module.exports.drawNaJia(svgContainer, trigram[upper_index], 'upper', 100, 65, 50);
        module.exports.drawBagua(svgContainer, trigram[lower_index], 150, 200, 50, 200, 30);
        module.exports.drawNaJia(svgContainer, trigram[lower_index], 'lower', 100, 215, 50);
        module.exports.drawShiYing(svgContainer, hexagram, 375, 65, 50);
        module.exports.drawLiuQin(svgContainer, hexagram, 60, 65, 50);
        module.exports.drawLiuShou(svgContainer, ri_tiangan, 20, 65, 50);
    },
    drawTrigrams : function(svgContainer, upper_trigram, lower_trigram, ri_tiangan) {
        module.exports.drawBagua(svgContainer, upper_trigram, 150, 50, 50, 200, 30);
        module.exports.drawNaJia(svgContainer, upper_trigram, 'upper', 100, 65, 50);
        module.exports.drawBagua(svgContainer, lower_trigram, 150, 200, 50, 200, 30);
        module.exports.drawNaJia(svgContainer, lower_trigram, 'lower', 100, 215, 50);
        var hexagram = module.exports.trigram2hexagram(upper_trigram, lower_trigram);
        module.exports.drawShiYing(svgContainer, hexagram, 375, 65, 50);
        module.exports.drawLiuQin(svgContainer, hexagram, 60, 65, 50);
        module.exports.drawLiuShou(svgContainer, ri_tiangan, 20, 65, 50);
    },
    drawShiYing : function(svgContainer, hexagram, x, y, interval) {
        var gong_index = module.exports.getGongIndex(hexagram);
        var shi = -1;
        var ying = -1;
        switch(gong_index){
        case -1:
            break;
        case 0:
            shi = 0;
            ying = 3;
            break;
        case 1:
            shi =5;
            ying = 2;
            break;
        case 2:
            shi = 4;
            ying = 1;
            break;
        case 3:
            shi = 3;
            ying = 0;
            break;
        case 4:
            shi = 2;
            ying = 5;
            break;
        case 5:
            shi = 1;
            ying = 4;
            break;
        case 6:
            shi = 2;
            ying = 5;
            break;
        case 7:
            shi = 3;
            ying = 0;
            break;
        }
        if( shi >= 0 && ying >= 0){
            var text = svgContainer.append('text')
                        .text('世')
                        .attr('x', x)
                        .attr('y', y + shi * interval)
                        .attr('font-size', 16);
            text = svgContainer.append('text')
                        .text('应')
                        .attr('x', x)
                        .attr('y', y + ying * interval)
                        .attr('font-size', 16);
        }
    },
    getNaJia: function(trigram, gua_pos) {
        var najia = [];
        switch(trigram){
        case '☰':
            if(gua_pos === 'lower'){
                najia = ['辰','寅','子'];
            }else if(gua_pos === 'upper'){
                najia = ['戌','申','午'];
            }
            break;
        case '☱':
            if(gua_pos === 'lower'){
                najia = ['丑','卯','巳'];
            }else if(gua_pos === 'upper'){
                najia = ['未','酉','亥'];
            }
            break;
        case '☲':
            if(gua_pos === 'lower'){
                najia = ['亥','丑','卯'];
            }else if(gua_pos === 'upper'){
                najia = ['巳','未','酉'];
            }
            break;
        case '☳':
            if(gua_pos === 'lower'){
                najia = ['辰','寅','子'];
            }else if(gua_pos === 'upper'){
                najia = ['戌','申','午'];
            }
            break;
        case '☴':
            if(gua_pos === 'lower'){
                najia = ['酉','亥','丑'];
            }else if(gua_pos === 'upper'){
                najia = ['卯','巳','未'];
            }
            break;
        case '☵':
            if(gua_pos === 'lower'){
                najia = ['午','辰','寅'];
            }else if(gua_pos === 'upper'){
                najia = ['子','戌','申'];
            }
            break;
        case '☶':
            if(gua_pos === 'lower'){
                najia = ['申','午','辰'];
            }else if(gua_pos === 'upper'){
                najia = ['寅','子','戌'];
            }
            break;
        case '☷':
            if(gua_pos === 'lower'){
                najia = ['卯','巳','未'];
            }else if(gua_pos === 'upper'){
                najia = ['酉','亥','丑'];
            }
            break;
        }
        return najia;
    },
    drawNaJia : function(svgContainer, trigram, gua_pos, x, y, interval) {
        var najia = module.exports.getNaJia(trigram, gua_pos);
        for(var i =0 ; i <najia.length; i++){
            var text = svgContainer.append('text')
                        .text(najia[i]+ module.exports.getWuXing(najia[i]))
                        .attr('x', x)
                        .attr('y', y + i * interval)
                        .attr('font-size', 16);
        }
    },
    drawLiuQin : function(svgContainer, hexagram, x, y, interval) {
        var hexagram_index = hexagrams.indexOf(hexagram);
        var upper_trigram = trigram[hexagram_index % 8];
        var lower_trigram = trigram[Math.floor(hexagram_index / 8)];
        var upper_gua = module.exports.getNaJia(upper_trigram, 'upper');
        var lower_gua = module.exports.getNaJia(lower_trigram, 'lower');
        var gua = upper_gua.concat(lower_gua);
        
        for( var i=0;i<gua.length; i++) {
            var liuqin = module.exports.getLiuqin(gua[i], hexagram);
            var text = svgContainer.append('text')
                        .text(liuqin)
                        .attr('x', x)
                        .attr('y', y + i * interval)
                        .attr('font-size', 16);
        }
    },
    drawLiuShou : function(svgContainer, tiangan, x, y, interval) {
        var tiangan_index = tiangan_table.indexOf(tiangan);
        var offset = 0;
        if(tiangan_index ===0 || tiangan_index ===1){
            offset =0;
        }else if(tiangan_index === 2 || tiangan_index ===3){
            offset =1;
        }else if(tiangan_index === 4){
            offset =2;
        }else if(tiangan_index === 5){
            offset =3;
        }else if(tiangan_index === 6 || tiangan_index === 7){
            offset =4;
        }else if(tiangan_index === 8 || tiangan_index === 9){
            offset =5;
        }
        
        for( var i=0; i<liushou.length; i++) {
            var pos = (i + offset) % 6;
            var text = svgContainer.append('text')
                        .text(liushou[pos])
                        .attr('x', x)
                        .attr('y', y + (liushou.length -1 - i) *interval)
                        .attr('font-size', 16);
        }
    }
};