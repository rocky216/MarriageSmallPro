// pages/man/man.js
var app = getApp()
var utils = require("../../utils/util.js")
import areaBase from "../../utils/areaData.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMarriageList()
  },
  goDetail(event) {
    const { seeIds } = this.data
    const { integral, id } = event.target.dataset.item

    if ((integral == 0) || (seeIds && seeIds.split(',').indexOf(id.toString()) > -1)) {
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
  getMarriageList() {
    const options = {
      url: "/getMarrList",
      method: "post",
      data: {
        sex: 1
      }
    }
    utils.fetch(options, (res) => {
      var arr = []
      this.setData({ seeIds: res.seeIds })
      var res = res.marriageList
      for (var item in res) {
        var province = res[item]["province"], city = res[item]["city"], area = res[item]["area"]
        if (parseInt(province)) {
          res[item]["place"] = areaBase.provinces[province]["citys"][city]["countys"][area]["name"]
        } else {
          res[item]["place"] = ''
        }
        arr.push(res[item])
      }
      this.setData({ marrList: arr })
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
    app.getIntegral()
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