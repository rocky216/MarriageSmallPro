// pages/detail/detail.js
var utils = require("../../utils/util.js")
import areaBase from "../../utils/areaData.js"
import { education, salary} from "../../utils/dataBase.js"



Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: '',
    area: '',
    education: '',
    salary: '',
    type: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id)
    this.setData({
      type: options.type
    })
  },
  deductIntegral(id){
    const options = {
      url: "/seeBeauty",
      method: "post",
      data: {
        integral: this.data.detail.base.integral ? this.data.detail.base.integral:0,
        see_id: id
      }
    }
    utils.fetch(options, ()=>{

    })
  },
  getDetail(id){
    const options = {
      url: "/getDetail",
      method: "post",
      data: {id}
    }
    utils.fetch(options, (res)=>{
      if (res.detail && res.detail.imgs){
        res.detail.imgs = res.detail.imgs.split(',')
      }else{
        res.detail={}
        res.detail.imgs=[]
      }
      if (res.base.province){
        var province = res.base.province, city = res.base.city, area = res.base.area
        var prov = areaBase.provinces[province]["name"], cityname = areaBase.provinces[province]["citys"][city]["name"], areaname = areaBase.provinces[province]["citys"][city]["countys"][area]["name"]
        this.setData({ area: prov + cityname + areaname})
      }
      if (res.detail && res.detail.education){
        var edlabel = utils.getLable(education, res.detail.education)
        this.setData({ education: edlabel.label})
      }
      if (res.detail && res.detail.salary) {
        var sallabel = utils.getLable(salary, res.detail.salary)
        this.setData({ salary: sallabel.label })
      }
      this.setData({detail: res})
      if(this.data.type==1){
        this.deductIntegral(id)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})