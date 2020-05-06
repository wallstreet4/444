<template>
    <div class="contactus">
        <ul class="contactusBtn">
            <li><a>首页</a></li>
            <li></li>
            <li>联系我们</li>
        </ul>
        <div class="CTT">
            <h1 class="title">联系我们</h1>
            <div class="row">
                            <div class="col3">
                                <div class="clearfix">
                                    <div class="pull_left icon">
                                        <div class="icon-phone-contact"></div>
                                    </div>
                                    <div class="pull_left contact_info">
                                        <div>热线电话</div>
                                        <div class="info hidden-xs">40085 40085</div>
                                        <div class="info hidden_sm hidden-md hidden-lg"><a id="callHotlineMobile" href="tel:40085 40085" title="Call:40085 40085">40085 40085</a></div>
                                    </div>
                                </div>
                                <div class="clearfix">
                                    <div class="pull_left icon">
                                        <div class="icon-email-contact"></div>
                                    </div>
                                    <div class="pull_left contact_info col_content">
                                        <div>咨询邮箱</div>
                                        <div>
                                            <a id="generalemailContact" href="mailto:info@wallstreetenglish.com" title="info@wallstreetenglish.com">
                                                <div>info@wallstreetenglish.com</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col3">
                                <div class="col_content">
                                    <div class="title">其它咨询方式</div>
                                    <div>客户支持</div>
                                    <div><a id="technicalSupportContactUs" href="https://wse.com.cn/techsupportform?device=PC&amp;os=Windows&amp;browser=Chrome">这里</a></div>
                                    <div>合作咨询</div>
                                    <div>
                                        <a id="corporateEmailContact" href="mailto:professional@wallstreetenglish.com" title="Send mail to:professional@wallstreetenglish.com">
                                            <div>professional@wallstreetenglish.com</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col3">
                                <div class="col_content">
                                    <div class="title">我们的学习中心</div>
                                    <div><a id="searchCenterContactUs" href="/zh/our-locations/" title="最近学习中心">最近学习中心</a></div>
                                    <div class="title">工作机会</div>
                                    <div><a href="/zh/careers/" title="访问我们的招聘页面">访问我们的招聘页面</a></div>
                                    <div class="title">常见问题解答</div>
                                    <div><a href="/zh/faq/" title="点击此处，访问常见问题解答">点击此处，访问常见问题解答</a></div>
                                </div>
                            </div>
                        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"contactus",
    data(){
        return{

        }
    }
}
</script>
<style lang="stylus">
    .contactus{
        width: 1182px;
        margin: 0 auto;
        .contactusBtn{
            display flex
            align-items center
            ul,li{
                list-style none
            }
            li:first-child:hover{
                color #0082a9
                cursor pointer
            }
            li:nth-child(2){
                width 1px
                height 28px
                margin 0 8px
                background-color #333
            }
            li:last-child{
                font-weight: bold;
                color #ee2d42
            }
        }
        .CTT{
            padding 0 80px
            .title{
                font-size 55px
                color #ee2d42
                margin 50px 0
            }
        }
    }
</style>