// 空心棱形
function shape(line) {
    if (line >= 1 && line % 2 !== 0) {
        var singleLine = "";
        var blank = (line + 1) / 2;
        var space = -3;
        for (var i = 1; i <= line; i++) {

            var second = blank - i;

            if (second >= 0) {
                space += 2;
                // console.log(second);
                for (var j = 0; j < second; j++) {
                    singleLine = singleLine + " ";
                }
                singleLine = singleLine + "*";
                if (space > 0) {
                    for (var k = 0; k < space; k++) {
                        singleLine = singleLine + " ";
                    }
                    singleLine = singleLine + "*";
                }
                console.log(singleLine);
                singleLine = "";

            }
            else {
                space -= 2;
                second = -second;
                // console.log(second);
                for (var j = 0; j < second; j++) {
                    singleLine = singleLine + " ";
                }
                singleLine = singleLine + "*";

                if (space > 0) {
                    for (var k = 0; k < space; k++) {
                        singleLine = singleLine + " ";
                    }
                    singleLine = singleLine + "*";
                }
                console.log(singleLine);
                singleLine = "";
            }
        }
    } else {
        console.log("请输入一个正奇数");
    }
}
// shape(15);
// 兔子生兔子
function rabit() {

}
//猴子吃桃
// 递归体
var mounts;
var day=10;
var left=1;
function eat(day,left) {
    if(day==1){
        console.log(mounts);
        return;
    }
    mounts = (left+1)*2;
    eat(day-1,mounts);
}
eat(10,1)