//index.js
//获取应用实例
const app = getApp()
const utils = require("../../utils/util.js")
import areaBase from "../../utils/areaData.js"

Page({
  data: {
    marrList: '',
    bannerList: '',
    seeIds: ''
  },
  //事件处理函数
  
  onLoad: function () {
    this.getBannerList()
  },
  goDetail(event){
    const { seeIds} = this.data
    const { integral, id} = event.target.dataset.item
    
    if ((integral == 0) || (seeIds && seeIds.split(',').indexOf(id.toString()) > -1)){
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}&type=0`
      })
      return 
    }
    if (integral > app.globalData.integral) {
      wx.showToast({
        title: "您的积分不足!",
        icon: "none"
      });
      return 
    }
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&type=1`
    })
  },
  getBannerList(){
    const options = {
      url: "/getBannerList",
      method: "post"
    }
    utils.fetch(options, (res)=>{
      this.setData({ bannerList: res})
    })
  },
  getMarriageList(){
    const options = {
      url: "/getMarrList",
      method: "post"
    }
    utils.fetch(options, (res)=>{
      var arr = []
      this.setData({ seeIds: res.seeIds})
      var res = res.marriageList
      for (var item in res){
        var province = res[item]["province"], city = res[item]["city"], area = res[item]["area"]
        if (parseInt(province)){
          res[item]["place"] = areaBase.provinces[province]["citys"][city]["countys"][area]["name"]
        }else{
          res[item]["place"] = ''
        }
        arr.push(res[item])
      }
      this.setData({ marrList: arr})
    })
  },
  onShow: function(){
    app.getIntegral()
    this.getMarriageList()
    this.getBannerList()
  },
  
})
