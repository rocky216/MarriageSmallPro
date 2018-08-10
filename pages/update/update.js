// pages/update/update.js
var utils = require("../../utils/util.js")
import { education, salary} from "../../utils/dataBase.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    base: '',
    detail: '',
    sexArray: [{value:1,label:"男"},{value:0, label:"女"}],
    education: education,
    salary: salary
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail()
  },
  getAddress(event){
    const { detail } = this.data
    detail.address = event.detail.value
    this.setData({ detail })
  },
  salChange(event){
    const { detail } = this.data
    detail.salary = parseInt(event.detail.value) + 1
    this.setData({ detail })
  },
  eduChange(event){
    const { detail } = this.data
    detail.education = parseInt(event.detail.value)+1
    this.setData({ detail })
  },
  getSignature(event){
    const { base } = this.data
    base.signature = event.detail.value
    this.setData({ base })
  },
  getUsername(event){
    const { base } = this.data
    base.username = event.detail.value
    this.setData({ base })
  },
  sexChange(event){
    const {base} = this.data
    base.sex = event.detail.value==0?true:false
    this.setData({base})
  },
  getDetail(){
    const options = {
      url: "/getAllDetail",
      method: "post"
    }
    utils.fetch(options, (res)=>{
      this.setData({ base: res.base, detail: res.detail})
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