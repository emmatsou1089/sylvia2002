//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
let windowWidth = $(window).width()

// 進網頁直接執行一次 判斷
if ( windowWidth >= 768 ){
    // 大於等於768執行
    // $('nav>ul>li').hover(function(){}, function(){})
    $('header>.container nav>ul>li').hover(function(){
        // 滑鼠滑入執行
        $(this).find('.submenu').addClass('active')
    }, function(){
        // 滑鼠滑出執行
        $(this).find('.submenu').removeClass('active')

    })
}else{
    // 小於768執行
    $('#btn-nav-switch').on('click', function(){
        $('header>.container nav').toggleClass('active')
    })// btn-nav-switch end
    
    $('header>.container nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('active')
    })// nav>ul>li end
}// windowWidth>=768 end



// 捲軸事件

// 定義捲軸高變數
let offsetTop
let product1Top = $('.bgc-pink').offset().top 
$(window).scroll(function(){
    offsetTop = $(window).scrollTop()
    //console.log( '捲軸高', offsetTop )
    // console.log('product1',product1Top)
//    if( offsetTop >=  product1Top){
//         console.log('test')
//    }


    // 捲軸高度>=900，會出現page-top的按鈕
    if( offsetTop >= 900){
        $('.page-top').addClass('active')
    }else{
        $('.page-top').removeClass('active')
    }
})//scroll end

// 點按page-top回到最上方
$('.page-top').on('click', function(){
    $('html, body').animate({ scrollTop: 0 })
})//.page-top






        // 輪播// ================================================
        console.log('一開始執行',$('img').height())

        $('.child').prepend( $('.child>img').last().clone() ) //第二層裡面最前面 補上 圖片陣列中的最後一個 的複製元素
        $('.child').append( $('.child>img').eq(1).clone()) //第二層裡面最後面 補上 圖片陣列中的第二個 的複製元素
        
        let currentNum      = 1 //當前的數字
        let parentWidth     = $('.parent').width() //父層寬度
        let imgLength       = $('.child>img').length //子層圖片個數
        let childTotalWidth = parentWidth * imgLength //父層寬度*子層圖片個數
  
        $('.child').css({'margin-left': -parentWidth * currentNum}) //調整第二層一開始位移的位置
        $('.child').width( childTotalWidth ) //子層總寬 = 父層寬度*子層圖片個數(進到畫面讀一次)
        $('.child>img').width( parentWidth ) //子層下的圖片寬 = 父層寬度

        $(window).on('load',function(){
            // console.log('window load',$('img').height())

            $('.loading-overlay').addClass('active')

            parentWidth = $('.parent').width()
            childTotalWidth = parentWidth * imgLength
            $('.child').css({'margin-left': -parentWidth * currentNum})
            $('.child').width( childTotalWidth ) 
            $('.child>img').width( parentWidth )
        })// window load end

        // for 迴圈 從0到圖片總數-2 的條件下，i累加1
        for (let i = 0; i < imgLength-3; i++){
            $('.indicator>li.active').after('<li></li>')
        }

        // 縮放時的變化
        $(window).resize(function(){
            parentWidth = $('.parent').width()
            childTotalWidth = parentWidth * imgLength
            $('.child').css({'margin-left': -parentWidth * currentNum})
            $('.child').width( childTotalWidth ) 
            $('.child>img').width( parentWidth )
        })//window resize end




        $('.right-arrow').on('click',function(){
            if( currentNum == imgLength - 1 ){ //假如當前的數字相等於圖片總數

            }else{
                // console.log(currentNum, imgLength)
                currentNum = currentNum + 1 //當前數字累加1
                common()
                // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
            }//if currentNum == imgLength end
        })// .right-arrow end

        $('.left-arrow').on('click',function(){
            if ( currentNum == 0 ){

            }else{
                currentNum = currentNum - 1
                common()
                // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
            }//if currentNum == 1 end

        })// .left-arrow end

        $('.indicator>li').on('click',function(){
            // console.log( '當前的',currentNum )
            // console.log( '跟現在點擊的',$(this).index() ) //序列號
            // index() //序列號
            // eq() //第幾個的元素
            currentNum = $(this).index() + 1 // 當前的數字 = 點擊的序列號 + 1
            common()
            // $('.indicator>li').eq(currentNum - 1).addClass('active')
            // $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active')
        })//.indicator>li end
        
        function common(){
            // $('.child').animate({'margin-left': -parentWidth * currentNum},callback)
            $('.child').animate({'margin-left': -parentWidth * currentNum},400, function(){
                //==== callback 函式執行完之後執行=====
                // 假如當前的數字 相等於 總數 - 1 
                if( currentNum == imgLength - 1 ){
                    currentNum = 1
                }
                if( currentNum == 0 ){
                    currentNum = imgLength - 2
                }
                // 前面動畫跑完時執行
                $('.child').css({'margin-left': -parentWidth * currentNum})
                $('.indicator>li').eq(currentNum - 1).addClass('active')
                $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active')
                
            }) //callback end
            
        } // common() end

        setInterval(function() {
            $('.right-arrow').click()
        }, 5000)



